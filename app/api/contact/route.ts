import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { SITE_CONFIG } from '@/lib/site-data';
import { buildContactEmail } from '@/lib/contact-email';
import {
  isHoneypotFilled,
  parseContactInput,
  validateContactInput,
} from '@/lib/contact-validation';

const NO_STORE = { 'Cache-Control': 'no-store' } as const;
const MAX_BODY_BYTES = 10_000;

/* Best-effort in-memory limiter. On a serverless platform each instance keeps
   its own counters; pair with a hosted rate limiter for hard enforcement. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();

  if (attempts.size > 500) {
    for (const [id, record] of attempts) {
      if (record.resetAt <= now) attempts.delete(id);
    }
  }

  const record = attempts.get(key);
  if (!record || record.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  record.count += 1;
  return record.count > MAX_PER_WINDOW;
}

function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || 'unknown';
}

function fail(error: string, status: number, extra?: Record<string, unknown>) {
  return NextResponse.json({ ok: false, error, ...extra }, { status, headers: NO_STORE });
}

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return fail('Unsupported content type.', 415);
    }

    const raw = await request.text();
    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
      return fail('That request is too large.', 413);
    }

    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return fail('Invalid request.', 400);
    }

    const input = parseContactInput(body);

    // Bots get a quiet success so they learn nothing about the endpoint.
    if (isHoneypotFilled(input)) {
      return NextResponse.json({ ok: true }, { headers: NO_STORE });
    }

    if (isRateLimited(clientKey(request))) {
      return fail('Too many enquiries from this connection. Please try again in a few minutes.', 429);
    }

    const errors = validateContactInput(input);
    if (Object.keys(errors).length > 0) {
      return fail('Please check the highlighted fields.', 422, { errors });
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const recipient = process.env.CONTACT_EMAIL_TO || SITE_CONFIG.email;

    if (!user || !pass) {
      console.error('[contact] SMTP credentials are not configured');
      return fail(
        'Email delivery is not configured yet. Please call or WhatsApp the workshop instead.',
        503
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const { subject, text, html } = buildContactEmail(input);

    await transporter.sendMail({
      from: `"Latin King Detailing · Website" <${user}>`,
      to: recipient,
      // Quotes and brackets are rejected by the validator, but strip again here.
      replyTo: `"${input.fullName.replace(/["<>]/g, '')}" <${input.email}>`,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true }, { headers: NO_STORE });
  } catch (error) {
    // Log the reason server-side only; never leak it or credentials to the client.
    console.error('[contact] send failed:', error instanceof Error ? error.message : 'unknown error');
    return fail(
      'We could not send your message right now. Please call or WhatsApp the workshop instead.',
      500
    );
  }
}
