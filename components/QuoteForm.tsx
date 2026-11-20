'use client';

import React, { useId, useRef, useState } from 'react';
import { SERVICE_OPTIONS, SITE_CONFIG } from '@/lib/site-data';
import { trackConversion } from '@/lib/analytics';
import {
  CONTACT_LIMITS,
  resolveService,
  validateContactInput,
  type ContactErrors,
  type ContactInput,
} from '@/lib/contact-validation';
import { WhatsAppIcon } from './icons/BrandIcons';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

type A11yProps = {
  id: string;
  name: string;
  'aria-invalid': boolean;
  'aria-describedby'?: string;
  onBlur: () => void;
};

function triggerValues(raw: string) {
  const known = SERVICE_OPTIONS.includes(raw);
  return {
    service: known ? raw : resolveService(raw),
    source: known ? '' : raw.slice(0, CONTACT_LIMITS.source),
  };
}

function blankValues(raw: string): ContactInput {
  return {
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    notes: '',
    website: '',
    ...triggerValues(raw),
  };
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-[12px] text-zinc-500 dark:text-zinc-400">
      <span className="h-px w-4 bg-red-600 dark:bg-red-500" aria-hidden="true" />
      {children}
    </div>
  );
}

function Field({
  idPrefix,
  name,
  label,
  error,
  hint,
  onBlur,
  children,
}: {
  idPrefix: string;
  name: string;
  label: string;
  error?: string;
  hint?: string;
  onBlur: () => void;
  children: (props: A11yProps) => React.ReactNode;
}) {
  const id = `${idPrefix}-${name}`;
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-0.5 block font-mono text-[11px] text-zinc-500 sm:mb-1 sm:text-[12px] dark:text-zinc-400"
      >
        {label}
      </label>
      {children({
        id,
        name,
        'aria-invalid': Boolean(error),
        'aria-describedby': describedBy,
        onBlur,
      })}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-[11px] text-red-600 sm:mt-1.5 sm:text-[12px] dark:text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-1 text-[11px] text-zinc-400 sm:mt-1.5 sm:text-[12px] dark:text-zinc-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

const fieldClass = (invalid: boolean) =>
  `w-full border-0 border-b bg-transparent px-0 py-1.5 text-[14px] text-zinc-900 placeholder:text-zinc-400 transition-colors duration-150 focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 sm:py-2.5 sm:text-[15px] dark:text-zinc-100 dark:placeholder:text-zinc-600 ${
    invalid
      ? 'border-red-600 outline-red-600/50 dark:border-red-500 dark:outline-red-500/60'
      : 'border-zinc-300 outline-red-600/40 hover:border-zinc-400 focus:border-red-600 dark:border-white/15 dark:outline-red-500/50 dark:hover:border-white/30 dark:focus:border-red-500'
  }`;

export function QuoteForm({ initialService = '', onSuccess, isModal = false }: QuoteFormProps) {
  const idPrefix = useId();
  const [values, setValues] = useState<ContactInput>(() => blankValues(initialService));
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const update =
    (field: keyof ContactInput) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
      if (status === 'error') setStatus('idle');
    };

  const validateOnBlur = (field: keyof ContactInput) => {
    setErrors((prev) => ({ ...prev, [field]: validateContactInput(values)[field] }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clientErrors = validateContactInput(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      const first = Object.keys(clientErrors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: ContactErrors;
      };

      if (!response.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerError(
          data.error || 'We could not send your message. Please try again or call the workshop.'
        );
        setStatus('error');
        return;
      }

      setStatus('success');
      trackConversion.generateLead(values.service, values.vehicle, values.source || 'quote_form');
      onSuccess?.();
    } catch {
      setServerError('We could not reach the server. Check your connection and try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(blankValues(initialService));
    setErrors({});
    setServerError('');
    setStatus('idle');
  };

  if (status === 'success') {
    const firstName = values.fullName.split(' ')[0];
    const replyTo = values.email || values.phone;
    const whatsappMessage = `Hello Latin King Detailing, I've just sent an enquiry about ${values.service}. My vehicle is a ${values.vehicle}.`;

    return (
      <div className="border-t-2 border-red-600 pt-7">
        <div className="font-mono text-[11px] text-red-600 dark:text-red-500">Enquiry sent</div>
        <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Thanks, {firstName}.
        </h3>
        <p className="mt-2 max-w-[52ch] text-sm leading-[1.7] text-zinc-600 dark:text-zinc-400">
          Your request about <span className="text-zinc-900 dark:text-zinc-100">{values.service}</span>{' '}
          is with the workshop. We&rsquo;ll reply to <span className="text-zinc-900 dark:text-zinc-100">{replyTo}</span> shortly.
        </p>

        <dl className="mt-7 divide-y divide-zinc-200 dark:divide-white/10">
          {[
            ['Vehicle', values.vehicle],
            ['Service', values.service],
            ['Phone', values.phone],
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[6rem_1fr] gap-4 py-3">
              <dt className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{label}</dt>
              <dd className="text-sm text-zinc-800 dark:text-zinc-200">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors duration-150 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-red-400"
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            onClick={reset}
            className="min-h-11 rounded-sm text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors duration-150 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-red-400"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate data-clarity-mask="true" className="space-y-5 sm:space-y-9">
      {status === 'error' && serverError && (
        <div role="alert" className="border-l-2 border-red-600 bg-red-50/60 px-4 py-3 dark:bg-red-500/5">
          <p className="text-sm leading-[1.6] text-red-800 dark:text-red-300">{serverError}</p>
        </div>
      )}

      <fieldset className="space-y-3 sm:space-y-6">
        <legend className="sr-only">Your details</legend>
        <GroupLabel>Your details</GroupLabel>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-y-6">
          <Field
            idPrefix={idPrefix}
            name="fullName"
            label="Full name"
            error={errors.fullName}
            onBlur={() => validateOnBlur('fullName')}
          >
            {(a11y) => (
              <input
                {...a11y}
                type="text"
                required
                autoComplete="name"
                maxLength={CONTACT_LIMITS.fullName}
                value={values.fullName}
                onChange={update('fullName')}
                placeholder="James Taylor"
                className={fieldClass(Boolean(errors.fullName))}
              />
            )}
          </Field>

          <Field
            idPrefix={idPrefix}
            name="phone"
            label="Contact number"
            error={errors.phone}
            onBlur={() => validateOnBlur('phone')}
          >
            {(a11y) => (
              <input
                {...a11y}
                type="tel"
                inputMode="tel"
                required
                autoComplete="tel"
                maxLength={CONTACT_LIMITS.phone}
                value={values.phone}
                onChange={update('phone')}
                placeholder="07482 225323"
                className={fieldClass(Boolean(errors.phone))}
              />
            )}
          </Field>

          <Field
            idPrefix={idPrefix}
            name="email"
            label="Email address"
            error={errors.email}
            hint="We'll send the reply here."
            onBlur={() => validateOnBlur('email')}
          >
            {(a11y) => (
              <input
                {...a11y}
                type="email"
                inputMode="email"
                required
                autoComplete="email"
                maxLength={CONTACT_LIMITS.email}
                value={values.email}
                onChange={update('email')}
                placeholder="you@example.com"
                className={fieldClass(Boolean(errors.email))}
              />
            )}
          </Field>

          <Field
            idPrefix={idPrefix}
            name="vehicle"
            label="Vehicle make & model"
            error={errors.vehicle}
            onBlur={() => validateOnBlur('vehicle')}
          >
            {(a11y) => (
              <input
                {...a11y}
                type="text"
                required
                maxLength={CONTACT_LIMITS.vehicle}
                value={values.vehicle}
                onChange={update('vehicle')}
                placeholder="BMW M4, Porsche 911…"
                className={fieldClass(Boolean(errors.vehicle))}
              />
            )}
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-3 border-t border-zinc-200 pt-4 sm:space-y-6 sm:pt-8 dark:border-white/10">
        <legend className="sr-only">Your enquiry</legend>
        <GroupLabel>Your enquiry</GroupLabel>

        <Field
          idPrefix={idPrefix}
          name="service"
          label="Service you're interested in"
          error={errors.service}
          onBlur={() => validateOnBlur('service')}
        >
          {(a11y) => (
            <div className="relative">
              <select
                {...a11y}
                value={values.service}
                onChange={update('service')}
                className={`${fieldClass(Boolean(errors.service))} cursor-pointer appearance-none pr-8`}
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option} className="bg-white text-zinc-900 dark:bg-workshop-card dark:text-zinc-100">
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
                aria-hidden="true"
              />
            </div>
          )}
        </Field>

        <Field
          idPrefix={idPrefix}
          name="notes"
          label="Anything we should know? (optional)"
          error={errors.notes}
          hint={`Paint condition, stone chips, timing — anything useful. ${values.notes.length}/${CONTACT_LIMITS.notes}`}
          onBlur={() => validateOnBlur('notes')}
        >
          {(a11y) => (
            <textarea
              {...a11y}
              rows={isModal ? 2 : 3}
              maxLength={CONTACT_LIMITS.notes}
              value={values.notes}
              onChange={update('notes')}
              placeholder="Swirl marks on the bonnet, two stone chips, looking at the 5-year package…"
              className={`${fieldClass(Boolean(errors.notes))} resize-y`}
            />
          )}
        </Field>
      </fieldset>

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:pt-6 dark:border-white/10">
        <p className="hidden max-w-[38ch] text-xs leading-[1.6] text-zinc-500 sm:block dark:text-zinc-400">
          We only use these details to reply to your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand-red-hover active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-11 sm:px-6 sm:py-3 dark:focus-visible:ring-offset-workshop-dark"
        >
          {status === 'submitting' ? (
            <>
              <span
                className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white motion-safe:animate-spin"
                aria-hidden="true"
              />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input
          id={`${idPrefix}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update('website')}
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {status === 'submitting' ? 'Sending your enquiry' : ''}
      </p>
    </form>
  );
}
