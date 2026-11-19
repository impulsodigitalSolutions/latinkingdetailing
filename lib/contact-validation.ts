import { SERVICE_OPTIONS } from './site-data';

/**
 * Shared between the browser form and the /api/contact route so the same
 * rules apply on both sides. Never trust the client copy alone.
 */
export interface ContactInput {
  fullName: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  notes: string;
  source: string;
  /** Honeypot — real users never fill this in. */
  website: string;
}

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

export const CONTACT_LIMITS = {
  fullName: 80,
  phone: 40,
  email: 120,
  vehicle: 120,
  service: 120,
  notes: 1000,
  source: 160,
  website: 0,
} as const;

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s'’.-]*$/u;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
const PHONE_CHARS = /^[+\d()\s-]+$/;

/** Strip control characters so nothing can inject into headers or the email body. */
function clean(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]/g, '').trim();
}

function capped(value: unknown, limit: number): string {
  return clean(value).slice(0, limit + 1);
}

export function parseContactInput(body: unknown): ContactInput {
  const raw = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>;

  return {
    fullName: capped(raw.fullName, CONTACT_LIMITS.fullName),
    phone: capped(raw.phone, CONTACT_LIMITS.phone),
    email: capped(raw.email, CONTACT_LIMITS.email),
    vehicle: capped(raw.vehicle, CONTACT_LIMITS.vehicle),
    service: capped(raw.service, CONTACT_LIMITS.service),
    notes: capped(raw.notes, CONTACT_LIMITS.notes),
    source: capped(raw.source, CONTACT_LIMITS.source),
    website: clean(raw.website),
  };
}

export function validateContactInput(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  if (input.fullName.length < 2) {
    errors.fullName = 'Enter your full name.';
  } else if (input.fullName.length > CONTACT_LIMITS.fullName) {
    errors.fullName = `Keep your name under ${CONTACT_LIMITS.fullName} characters.`;
  } else if (!NAME_PATTERN.test(input.fullName)) {
    errors.fullName = 'Use letters, spaces, hyphens or apostrophes only.';
  }

  if (!input.phone) {
    errors.phone = 'Enter a contact number.';
  } else if (input.phone.length > CONTACT_LIMITS.phone) {
    errors.phone = 'That number is too long.';
  } else if (!PHONE_CHARS.test(input.phone)) {
    errors.phone = 'Use digits, spaces, +, ( ) or - only.';
  } else {
    const digits = input.phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) {
      errors.phone = 'Enter a valid number (7–15 digits).';
    }
  }

  if (!input.email) {
    errors.email = 'Enter your email address.';
  } else if (input.email.length > CONTACT_LIMITS.email) {
    errors.email = 'That email address is too long.';
  } else if (!EMAIL_PATTERN.test(input.email)) {
    errors.email = 'Enter a valid email address, e.g. name@example.com.';
  }

  if (input.vehicle.length < 2) {
    errors.vehicle = 'Enter the make and model of your vehicle.';
  } else if (input.vehicle.length > CONTACT_LIMITS.vehicle) {
    errors.vehicle = `Keep this under ${CONTACT_LIMITS.vehicle} characters.`;
  }

  if (!SERVICE_OPTIONS.includes(input.service)) {
    errors.service = 'Choose a service from the list.';
  }

  if (input.notes.length > CONTACT_LIMITS.notes) {
    errors.notes = `Keep your message under ${CONTACT_LIMITS.notes} characters.`;
  }

  if (input.source.length > CONTACT_LIMITS.source) {
    errors.source = 'Enquiry context is too long.';
  }

  return errors;
}

export function isHoneypotFilled(input: ContactInput): boolean {
  return input.website.length > 0;
}

/** Pick a known service from a free-text modal trigger, keeping the original as context. */
export function resolveService(raw: string): string {
  if (SERVICE_OPTIONS.includes(raw)) return raw;

  const lower = raw.toLowerCase();
  const match = SERVICE_OPTIONS.find((option) => {
    const words = option.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3);
    return words.some((word) => lower.includes(word));
  });

  return match ?? SERVICE_OPTIONS[0];
}
