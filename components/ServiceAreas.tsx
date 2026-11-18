'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
    <section id="locations" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-workshop-muted/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
            Serving Manchester &amp; 24 Regional Towns
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-[60ch] mx-auto leading-[1.65]">
            Latin King Detailing provides mobile detailing across 24 Greater Manchester boroughs alongside our base at 426 Flixton Road.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 24 Service Areas Pill Cloud */}
          <div className="lg:col-span-7 bg-white dark:bg-workshop-card-subtle rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white">
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
                  className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-workshop-panel text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />
              </div>
            </div>

            {/* Pill Cloud */}
            <div className="flex flex-wrap gap-2.5">
              {filteredAreas.map((town) => {
                const isSelected = selectedTown === town;
                const isManchesterOrUrmston = town === 'Manchester' || town === 'Urmston' || town === 'Flixton';

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
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-md'
                        : isManchesterOrUrmston
                        ? 'bg-red-500/15 border border-red-500/40 text-red-700 dark:text-red-300 hover:bg-red-500/25'
                        : 'bg-zinc-100 dark:bg-workshop-elevated text-zinc-700 dark:text-zinc-200 border border-zinc-200/80 dark:border-white/10 hover:border-red-400/50 hover:text-red-500'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 opacity-70 shrink-0" />
                    <span>{town}</span>
                    {isManchesterOrUrmston && (
                      <span className="text-[10px] font-bold px-1 rounded bg-red-500/20 text-red-800 dark:text-red-200">
                        HQ Base
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                Workshop is 5 minutes from junction 4 of the M61
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/locations"
                  className="font-bold text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  Map &amp; Workshop Directions
                </Link>
                <button
                  type="button"
                  onClick={() => openQuoteModal('Greater Manchester Service')}
                  className="font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  Book Inspection
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Trusted Network Partner Card */}
          <div className="lg:col-span-5 bg-white dark:bg-workshop-card-subtle rounded-3xl p-6 sm:p-8 border-2 border-red-500/40 dark:border-red-500/30 shadow-xl shadow-red-500/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500">
                Network &amp; Partner Workshop
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
                Manchester South
              </span>
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                LK
              </div>
              <div>
                <h4 className="text-xl font-black text-zinc-900 dark:text-white">
                  {TRUSTED_PARTNER.name}
                </h4>
                <div className="flex items-center gap-1 text-xs text-red-600 dark:text-red-400 font-bold mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{TRUSTED_PARTNER.rating} ({TRUSTED_PARTNER.reviews} Reviews)</span>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{SITE_CONFIG.secondaryWorkshop.fullAddress}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
              {TRUSTED_PARTNER.description}
            </p>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-muted border border-zinc-200 dark:border-white/10 space-y-2 mb-6">
              <div className="text-xs font-bold text-zinc-900 dark:text-white">
                Specialisms & Standards:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {TRUSTED_PARTNER.tags.map((spec: string, i: number) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-red-500/30 text-red-600 dark:text-red-400"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.secondaryWorkshop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Manchester Directions</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                title="WhatsApp Manchester Partner"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
