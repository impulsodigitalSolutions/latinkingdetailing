'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SERVICES, ServiceItem } from '@/lib/site-data';
import { useModals } from './ModalContext';
import {
  ShieldCheck,
  Shield,
  Sparkles,
  Armchair,
  CheckCircle2,
  ArrowRight,
  Award,
  Layers,
  Wrench,
  Car,
  Droplets,
  Tag,
  ExternalLink,
} from 'lucide-react';

export function Services() {
  const { openServiceModal, openQuoteModal } = useModals();
  const [filter, setFilter] = useState<'all' | 'coating' | 'correction' | 'valet' | 'maintenance'>('all');

  const getServiceCategory = (id: string) => {
    switch (id) {
      case 'ceramic-coating':
      case 'paint-protection-film':
      case 'leather-coating':
        return 'coating';
      case 'machine-polishing':
        return 'correction';
      case 'the-kings-detail':
      case 'deep-clean-engine-bay':
      case 'full-valet':
      case 'full-valet-mini-valet':
        return 'valet';
      case 'maintenance-wash':
        return 'maintenance';
      default:
        return 'all';
    }
  };

  const filteredServices = SERVICES.filter((s) => {
    if (filter === 'all') return true;
    return getServiceCategory(s.id) === filter;
  });

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-red-500" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-red-500" />;
      case 'Armchair':
        return <Armchair className="w-6 h-6 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-red-500" />;
      case 'Car':
        return <Car className="w-6 h-6 text-red-500" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-red-500" />;
      case 'Award':
      default:
        return <Award className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-workshop-muted/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Professional Detailing &amp; Paint Protection
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Latin King Detailing provides complete paint protection, defect correction, and cabin restoration from our Farnworth studio, using only certified, professional-grade products.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setFilter('coating')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'coating'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              Ceramic & PPF
            </button>
            <button
              type="button"
              onClick={() => setFilter('correction')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'correction'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              Machine Polishing
            </button>
            <button
              type="button"
              onClick={() => setFilter('valet')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'valet'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              Valeting & Deep Clean
            </button>
            <button
              type="button"
              onClick={() => setFilter('maintenance')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'maintenance'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              Maintenance Wash
            </button>
          </div>
        </div>

        {/* Detailed Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service: ServiceItem, sIdx: number) => {
            const isCeramic = service.id === 'ceramic-coating';

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-6 sm:p-8 border transition-colors duration-200 flex flex-col justify-between ${
                  isCeramic
                    ? 'bg-gradient-to-br from-white via-red-500/[0.02] to-red-500/[0.05] dark:from-workshop-card-subtle dark:via-workshop-card dark:to-red-500/[0.05] border-red-500/50 shadow-lg ring-1 ring-red-500/20'
                    : 'bg-white dark:bg-workshop-card-subtle border-zinc-200 dark:border-white/10 shadow-sm hover:border-red-500/40'
                }`}
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/25">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <span className="text-xs font-bold text-zinc-400 font-mono">
                        0{sIdx + 1}
                      </span>
                    </div>

                    {isCeramic ? (
                      <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs shadow-sm">
                        Signature Specialism
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                        Professional Grade
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>

                  {service.tagline && (
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 mt-1">
                      {service.tagline}
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 font-normal leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Cost Pill */}
                  {service.startingPrice && (
                    <div className="mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60 font-semibold">
                      <Tag className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{service.startingPrice}</span>
                    </div>
                  )}

                  {/* Highlights list */}
                  <div className="mt-5 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2">
                    {service.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* If Ceramic Coating, highlight the 6-step breakdown & Tiers preview */}
                  {isCeramic && (
                    <div className="mt-5 p-4 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20">
                      <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400 mb-2">
                        <Layers className="w-4 h-4" /> 6-step precision process and packages
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-red-500/20">
                          <span className="block font-bold text-zinc-900 dark:text-white">Bronze</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">2-Year Cover</span>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-red-500/40 font-semibold shadow-xs">
                          <span className="block font-bold text-red-500">Silver</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">5-Year 9H</span>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-red-500/20">
                          <span className="block font-bold text-zinc-900 dark:text-white">Gold</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Lifetime 9H</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card CTA & Trigger */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => openServiceModal(service.id)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-500 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      <span>Quick Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                    >
                      <span>Dedicated Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-red-600 dark:hover:bg-red-600 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <span>{service.ctaText || 'Book Service'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Page Hero Banner CTA */}
        <div className="mt-14 p-6 sm:p-10 rounded-3xl bg-workshop-muted text-white border border-red-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              Explore Our Dedicated Services Page
            </h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              View in-depth breakdowns, process steps, vehicle surfaces protected, and complete transparent pricing for all 7 Latin King Detailing packages.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>View All 7 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => openQuoteModal('Tailored Detailing Package')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Ask a Specialist</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
