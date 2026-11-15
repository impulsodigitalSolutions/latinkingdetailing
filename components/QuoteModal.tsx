'use client';

import React, { useEffect } from 'react';
import { useModals } from './ModalContext';
import { QuoteForm } from './QuoteForm';
import { X, Sparkles, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function QuoteModal() {
  const { isQuoteOpen, closeQuoteModal, selectedServiceForQuote } = useModals();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isQuoteOpen) {
        closeQuoteModal();
      }
    };
    if (isQuoteOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={closeQuoteModal}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        className="relative w-full max-w-xl my-8 bg-white dark:bg-[#1a1b22] border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 transition-all transform animate-in zoom-in-95 duration-200"
      >
        {/* Top gold accent line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600" />

        <div className="p-6 sm:p-8">
          {/* Header with Official Logo */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-amber-500/30 p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Free Detailing & Coating Quote
                </div>
                <h2 id="quote-modal-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  Get Your Vehicle Quote
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1">
                  Bolton Workshop · Ceramic Pro 9H Certified · Instant honest pricing
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeQuoteModal}
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <QuoteForm
            initialService={selectedServiceForQuote}
            isModal={true}
            onSuccess={() => {}}
          />

          {/* Footer note */}
          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-2">
            <a
              href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-500 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>115 Albert Rd, Farnworth, Bolton BL4 9EA (Google Maps)</span>
            </a>
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300 hover:text-amber-500"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

