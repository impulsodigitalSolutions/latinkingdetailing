'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { WhatsAppIcon } from './icons/BrandIcons';
import { useModals } from './ModalContext';

export function FloatingActions() {
  const { openQuoteModal } = useModals();

  const desktopButtonClass =
    'flex h-9 w-28 items-center justify-center gap-1.5 rounded-full border border-zinc-200 dark:border-white/15 bg-white/95 dark:bg-zinc-950/95 text-zinc-800 dark:text-white transition-colors hover:border-zinc-400 dark:hover:border-white/35 shadow-md dark:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:h-10 sm:w-32';

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (Claude mobile redesign specification) */}
      <div className="fixed bottom-0 inset-x-0 z-40 h-14 bg-white/95 dark:bg-[#0e0e0f] backdrop-blur-xs border-t border-zinc-200 dark:border-[#2c2c30] flex items-stretch md:hidden pb-[env(safe-area-inset-bottom)] box-content shadow-2xl">
        <a
          href={SITE_CONFIG.phoneHref}
          data-track="call"
          data-cta-location="mobile_action_bar"
          aria-label={`Call Latin King Detailing now on ${SITE_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-2 text-zinc-800 hover:text-black dark:text-[#f1eee8] dark:hover:text-white font-medium text-sm border-r border-zinc-200 dark:border-[#2c2c30] transition-colors active:bg-zinc-100 dark:active:bg-white/5"
        >
          <Phone className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
          <span>Call</span>
        </a>

        <a
          href={SITE_CONFIG.whatsappHref}
          data-track="whatsapp"
          data-cta-location="mobile_action_bar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex items-center justify-center gap-2 text-zinc-800 hover:text-black dark:text-[#f1eee8] dark:hover:text-white font-medium text-sm border-r border-zinc-200 dark:border-[#2c2c30] transition-colors active:bg-zinc-100 dark:active:bg-white/5"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={() => openQuoteModal()}
          data-track-cta="Quote"
          data-cta-location="mobile_action_bar"
          className="flex-1 flex items-center justify-center bg-[#d3262a] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white font-semibold text-sm transition-colors cursor-pointer"
        >
          Quote
        </button>
      </div>

      {/* Desktop Floating Actions (visible on >= md) */}
      <div className="hidden md:flex fixed bottom-5 right-5 z-40 flex-col items-end gap-2">
        <a
          href={SITE_CONFIG.phoneHref}
          data-track="call"
          data-cta-location="floating_bar"
          aria-label={`Call Latin King Detailing now on ${SITE_CONFIG.phone}`}
          title={`Call now: ${SITE_CONFIG.phone}`}
          className={desktopButtonClass}
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        <a
          href={SITE_CONFIG.whatsappHref}
          data-track="whatsapp"
          data-cta-location="floating_bar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className={desktopButtonClass}
        >
          <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
