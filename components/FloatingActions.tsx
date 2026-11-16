'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/site-data';
import { WhatsAppIcon } from './icons/BrandIcons';
import { Phone, Sparkles } from 'lucide-react';
import { useModals } from './ModalContext';

export function FloatingActions() {
  const { openQuoteModal } = useModals();

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none">
      <div className="max-w-xl mx-auto pointer-events-auto">
        <div className="p-2 sm:p-2.5 rounded-2xl bg-zinc-950/92 dark:bg-[#181920]/95 backdrop-blur-lg border border-red-500/30 shadow-2xl flex items-center justify-between gap-2 text-white">
          {/* Quick Call */}
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 font-bold text-xs transition-colors shrink-0"
            title="Call Bolton Workshop"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span className="hidden xs:inline">Call Us</span>
            <span className="xs:hidden">Call</span>
          </a>

          {/* Quick WhatsApp */}
          <a
            href={SITE_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md shrink-0"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Book Now / Get a Quote */}
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-red-600/30 transition-all shrink-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
