import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { WhatsAppIcon } from './icons/BrandIcons';

export function FloatingActions() {
  const buttonClass =
    'flex h-9 w-28 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-zinc-950/95 text-white transition-colors hover:border-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:h-10 sm:w-32';

  return (
    <div className="fixed bottom-3 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-5">
      <a
        href={SITE_CONFIG.phoneHref}
        aria-label={`Call Latin King Detailing now on ${SITE_CONFIG.phone}`}
        title={`Call now: ${SITE_CONFIG.phone}`}
        className={buttonClass}
      >
        <Phone className="h-3.5 w-3.5 shrink-0 text-red-400" aria-hidden="true" />
        <span className="text-[10px] font-bold tracking-tight sm:text-[11px]">
          Call Now
        </span>
      </a>

      <a
        href={SITE_CONFIG.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className={buttonClass}
      >
        <WhatsAppIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
        <span className="text-[10px] font-bold tracking-tight sm:text-[11px]">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
