'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useModals } from './ModalContext';
import { QuoteForm } from './QuoteForm';
import { X, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function QuoteModal() {
  const { isQuoteOpen, closeQuoteModal, selectedServiceForQuote } = useModals();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isQuoteOpen) {
        closeQuoteModal();
        return;
      }

      if (event.key !== 'Tab' || !isQuoteOpen) return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    if (isQuoteOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      dialogRef.current
        ?.querySelector<HTMLElement>('input:not([tabindex="-1"])')
        ?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isQuoteOpen, closeQuoteModal]);

  if (!isQuoteOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-2 sm:items-center sm:p-6">
      <div
        className="fixed inset-0 bg-black/80"
        onClick={closeQuoteModal}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative z-10 my-2 w-full max-w-xl border-t-2 border-red-600 bg-white sm:my-8 dark:border-red-500 dark:bg-workshop-card"
      >
        <div className="p-4 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo-dark.png"
                  alt=""
                  width={64}
                  height={32}
                  className="h-7 w-auto object-contain sm:h-8 dark:hidden"
                />
                <Image
                  src="/images/logo-light.png"
                  alt=""
                  width={64}
                  height={32}
                  className="hidden h-7 w-auto object-contain sm:h-8 dark:block"
                />
              </div>
              <h2
                id="quote-modal-title"
                className="mt-3 font-heading text-xl font-semibold tracking-tight text-zinc-900 sm:mt-4 sm:text-2xl dark:text-white lg:text-3xl"
              >
                Request a quote
              </h2>
              <p className="mt-1 hidden text-[12px] text-zinc-500 sm:block dark:text-zinc-400">
                Urmston workshop · Ceramic Pro 9H certified
              </p>
            </div>

            <button
              type="button"
              onClick={closeQuoteModal}
              className="-mr-1 -mt-1 rounded-sm p-2 text-zinc-500 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:text-zinc-400 dark:hover:text-red-400"
              aria-label="Close quote form"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 sm:mt-8">
            <QuoteForm initialService={selectedServiceForQuote} isModal />
          </div>

          <div className="mt-5 hidden flex-col gap-3 border-t border-zinc-200 pt-4 text-xs text-zinc-500 sm:flex sm:flex-row sm:items-center sm:justify-between sm:mt-8 dark:border-white/10 dark:text-zinc-400">
            <a
              href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 rounded-sm transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:text-red-400"
            >
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-500" aria-hidden="true" />
              <span>426 Flixton Road, Urmston, Manchester M41 6QT</span>
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm font-semibold transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:text-red-400"
            >
              <Phone className="h-3.5 w-3.5 text-red-600 dark:text-red-500" aria-hidden="true" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
