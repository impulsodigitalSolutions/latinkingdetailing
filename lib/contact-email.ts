import type { ContactInput } from './contact-validation';

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Every submitted value is escaped before it reaches an HTML email. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

function rows(input: ContactInput): [string, string][] {
  const list: [string, string][] = [
    ['Name', input.fullName],
    ['Phone', input.phone],
    ['Email', input.email],
    ['Vehicle', input.vehicle],
    ['Service', input.service],
  ];

  if (input.source) list.push(['Enquiry context', input.source]);
  list.push(['Notes', input.notes || '—']);

  return list;
}

export function buildContactEmail(input: ContactInput) {
  const submittedAt = new Date().toISOString();
  const fields = rows(input);

  const subject = `New enquiry · ${input.service} · ${input.fullName}`;

  const text = [
    'New enquiry from the Latin King Detailing website.',
    '',
    ...fields.map(([label, value]) => `${label}: ${value}`),
    '',
    `Submitted (UTC): ${submittedAt}`,
    'Reply to this email to reach the customer directly.',
  ].join('\n');

  const fieldMarkup = fields
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0 10px 16px;border-bottom:1px solid #e4e4e7;color:#71717a;font:13px Arial,sans-serif;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px 10px 12px;border-bottom:1px solid #e4e4e7;color:#18181b;font:13px/1.6 Arial,sans-serif;vertical-align:top;word-break:break-word;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f8fafc;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;">
      <tr>
        <td style="padding:22px 16px;border-top:3px solid #c21c20;">
          <div style="color:#18181b;font:600 20px 'Space Grotesk',Arial,sans-serif;">Latin King Detailing</div>
          <div style="color:#71717a;font:12px Arial,sans-serif;margin-top:4px;">Website enquiry · Urmston, Manchester</div>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 20px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${fieldMarkup}</table>
        </td>
      </tr>
      <tr>
        <td style="padding:14px 16px;background:#f8fafc;color:#71717a;font:11px/1.6 Arial,sans-serif;">
          Submitted (UTC): ${escapeHtml(submittedAt)}. Reply directly to this email to reach the customer.
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, text, html };
}
