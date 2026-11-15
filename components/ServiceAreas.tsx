'use client';

import React, { useState } from 'react';
import { SERVICE_AREAS_24, TRUSTED_PARTNER, SITE_CONFIG } from '@/lib/site-data';
import { MapPin, Search, Star, ShieldCheck, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';
import { useModals } from './ModalContext';

export function ServiceAreas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTown, setSelectedTown] = useState<string | null>(null);
  const { openQuoteModal } = useModals();

  const filteredAreas = SERVICE_AREAS_24.filter((town) =>
    town.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="locations" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-[#181920]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" /> Regional Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Where We Work —{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Serving Bolton & Greater Manchester
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Customers bring their vehicles to our dedicated Farnworth workshop from across 24 towns and boroughs for certified Ceramic Pro 9H applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 24 Service Areas Pill Cloud */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1d1e25] rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
                  24 Greater Manchester Locations
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Click any location to check workshop access or book
                </p>
              </div>

              {/* Search filter input */}
              <div className="relative w-full sm:w-56">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter your town..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#252630] text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
            </div>

            {/* Pill Cloud */}
            <div className="flex flex-wrap gap-2.5">
              {filteredAreas.map((town) => {
                const isSelected = selectedTown === town;
                const isBoltonOrFarnworth = town === 'Bolton' || town === 'Farnworth';

                return (
                  <button
                    key={town}
                    type="button"
                    onClick={() => {
                      setSelectedTown(isSelected ? null : town);
                      if (!isSelected) {
                        openQuoteModal(`Service in / near ${town}`);
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-zinc-950 shadow-md scale-105'
                        : isBoltonOrFarnworth
                        ? 'bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25'
                        : 'bg-zinc-100 dark:bg-[#22232c] text-zinc-700 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/10 hover:border-amber-400/50 hover:text-amber-500'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 opacity-70 shrink-0" />
                    <span>{town}</span>
                    {isBoltonOrFarnworth && (
                      <span className="text-[10px] font-bold px-1 rounded bg-amber-500/20 text-amber-800 dark:text-amber-200">
                        Workshop
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500" />
                Workshop located 5 mins from M61 Junction 4
              </span>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                115 Albert Rd, Farnworth
              </span>
            </div>
          </div>

          {/* Right Column: Trusted Network Partner Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1d1e26] via-[#1a1b22] to-[#16171d] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {TRUSTED_PARTNER.status}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {TRUSTED_PARTNER.rating} ({TRUSTED_PARTNER.reviews})
                </span>
              </div>

              {/* Title with Official Logo badge */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-amber-500/40 p-1.5 flex items-center justify-center shadow-md shrink-0 overflow-hidden relative">
                  <div className="w-full h-full relative">
                    <img
                      src="/images/logo-dark.png"
                      alt="Latin King Detailing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {TRUSTED_PARTNER.name}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-medium">
                    Mobile Valeting & Partner Network
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                {TRUSTED_PARTNER.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {TRUSTED_PARTNER.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Partner Actions */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Latin King Detailing, I am inquiring about Mobile Detailing / Manchester Partner coverage.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Partner</span>
                </a>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm transition-colors border border-zinc-700"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

