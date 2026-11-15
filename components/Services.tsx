'use client';

import React from 'react';
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
} from 'lucide-react';

export function Services() {
  const { openServiceModal, openQuoteModal } = useModals();

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-amber-500" />;
      case 'Shield':
        return <Shield className="w-7 h-7 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-500" />;
      case 'Armchair':
      default:
        return <Armchair className="w-7 h-7 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-[#181920]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> Certified Automotive Care
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            What We Offer —{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Professional Car Protection & Detailing Services
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Latin King Detailing offers a complete range of paint protection and car care services from our Bolton workshop, using only professional-grade products.
          </p>
        </div>

        {/* 4 Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const isCeramic = service.id === 'ceramic-coating';

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isCeramic
                    ? 'bg-gradient-to-br from-white via-amber-500/[0.02] to-amber-500/[0.05] dark:from-[#1d1e25] dark:via-[#1f2028] dark:to-amber-500/[0.05] border-amber-500/50 shadow-lg ring-1 ring-amber-500/20'
                    : 'bg-white dark:bg-[#1d1e25] border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-amber-500/40'
                }`}
              >
                <div>
                  {/* Top Badges & Icon */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-3.5 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {isCeramic ? (
                      <span className="px-3 py-1 rounded-full bg-amber-500 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-sm">
                        Signature Specialism
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Professional Grade
                      </span>
                    )}
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-2xl font-black text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 font-normal leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2.5">
                    {service.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* If Ceramic Coating, highlight the 6-step breakdown & Tiers preview */}
                  {isCeramic && (
                    <div className="mt-5 p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
                        <Layers className="w-4 h-4" /> 6-Step Precision Process & Packages
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-amber-500/20">
                          <span className="block font-bold text-zinc-900 dark:text-white">Bronze</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">2-Year Cover</span>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-amber-500/40 font-semibold shadow-xs">
                          <span className="block font-bold text-amber-500">Silver</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">5-Year 9H</span>
                        </div>
                        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg border border-amber-500/20">
                          <span className="block font-bold text-zinc-900 dark:text-white">Gold</span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Lifetime 9H</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card CTA & Trigger */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openServiceModal(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-amber-500 dark:hover:bg-amber-500 text-white hover:text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#181921] text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Unsure which protection package your vehicle requires?
            </h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              We inspect paint depth, clear coat health, and daily mileage to recommend the exact package for your vehicle.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openQuoteModal('Tailored Detailing Package')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm uppercase tracking-wider shadow-lg shrink-0 cursor-pointer"
          >
            <span>Request Specialist Advice</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

