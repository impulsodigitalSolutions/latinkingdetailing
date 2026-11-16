'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, ServiceItem, SITE_CONFIG } from '@/lib/site-data';
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
  Clock,
  Car,
  Droplets,
  Check,
  MapPin,
  Phone,
  Tag,
  Calendar,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

export function ServicesDetailView() {
  const { openQuoteModal } = useModals();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 7 Services' },
    { id: 'coating', label: 'Coating & Protection' },
    { id: 'polishing', label: 'Machine Polishing' },
    { id: 'valet', label: 'Restoration & Valet' },
    { id: 'maintenance', label: 'Maintenance Wash' },
  ];

  const getCategoryForService = (id: string) => {
    switch (id) {
      case 'ceramic-coating':
      case 'leather-coating':
      case 'paint-protection-film':
        return 'coating';
      case 'machine-polishing':
        return 'polishing';
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
    if (activeCategory === 'all') return true;
    return getCategoryForService(s.id) === activeCategory;
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
    <div className="pt-8 pb-16 md:pt-12 md:pb-24">
      {/* Services Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
          Professional Automotive Detailing &amp; Ceramic Coating
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-[60ch] mx-auto mt-5 leading-[1.65] font-normal">
          From our dedicated Farnworth workshop (five minutes from Junction 4 of the M61), Latin King Detailing provides certified Ceramic Pro 9H coatings, multi-stage machine polishing, leather protection, and showroom valets using only professional-grade products.
        </p>

        {/* Workshop Quick Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 font-medium">
            <ShieldCheck className="w-4 h-4 text-red-500" /> Ceramic Pro 9H Certified
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 font-medium">
            <MapPin className="w-4 h-4 text-red-500" /> Farnworth, Bolton (BL4 9EA)
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/10 font-medium">
            <Clock className="w-4 h-4 text-red-500" /> 24/7 Available
          </span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-workshop-card-subtle text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Anchor Jump Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 font-mono text-xs">
          <span className="text-zinc-400 font-semibold mr-1">Jump to:</span>
          {SERVICES.map((s, idx) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2.5 py-1 rounded-md bg-zinc-100/70 dark:bg-zinc-800/50 hover:bg-red-500/10 hover:text-red-500 text-zinc-600 dark:text-zinc-400 transition-colors"
            >
              0{idx + 1}. {s.title.split(' - ')[0].split(' (')[0]}
            </a>
          ))}
        </div>
      </section>

      {/* Services Detailed List */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredServices.map((service: ServiceItem, index: number) => {
          const isCeramic = service.id === 'ceramic-coating';
          const serviceNumber = String(index + 1).padStart(2, '0');

          return (
            <article
              id={service.id}
              key={service.id}
              className={`scroll-mt-28 rounded-3xl p-6 sm:p-10 md:p-12 border transition-colors ${
                isCeramic
                  ? 'bg-gradient-to-br from-white via-red-500/[0.02] to-red-500/[0.04] dark:from-workshop-card-subtle dark:via-workshop-card dark:to-red-500/[0.05] border-red-500/50 shadow-2xl ring-1 ring-red-500/20'
                  : 'bg-white dark:bg-workshop-card border-zinc-200 dark:border-white/10 shadow-xl'
              }`}
            >
              {/* Header Row: Number + Icon + Title + Pricing Pill */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-semibold text-2xl sm:text-3xl text-red-600 dark:text-red-500 tabular-nums">
                      {serviceNumber}
                    </span>
                    <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent my-1" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 shrink-0">
                        {getServiceIcon(service.iconName)}
                      </div>
                      {isCeramic && (
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-semibold text-[10px] shadow-xs">
                          Signature 9H Bolton
                        </span>
                      )}
                      <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                        Latin King Detailing
                      </span>
                    </div>

                    <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                      {service.title}
                    </h2>

                    {service.tagline && (
                      <p className="font-heading font-medium text-sm sm:text-base text-red-600 dark:text-red-400 mt-1">
                        {service.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Cost Badge */}
                {service.startingPrice && (
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10 shrink-0 md:max-w-xs text-left">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-red-600 dark:text-red-400 mb-1">
                      <Tag className="w-3.5 h-3.5" />
                      <span>Service Cost</span>
                    </div>
                    <div className="font-mono font-semibold text-sm sm:text-base text-zinc-900 dark:text-white tabular-nums">
                      {service.startingPrice}
                    </div>

                    {/* Pricing Breakdown if multi-tier */}
                    {Array.isArray(service.pricingDetails) && (
                      <div className="mt-2.5 pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-1 font-mono text-xs tabular-nums">
                        {service.pricingDetails.map((pd, pdi) => (
                          <div key={pdi} className="flex justify-between text-zinc-600 dark:text-zinc-400">
                            <span>{pd.label}:</span>
                            <span className="font-medium text-zinc-900 dark:text-zinc-200">{pd.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Body: Full Verbatim Description */}
              <div className="py-6 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-2">
                    Service Description
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-[1.65] font-normal max-w-[60ch]">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Section: What Is / Extended Explanation */}
                {service.whatIs && (
                  <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10 space-y-2">
                    <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-500" />
                      {service.id === 'ceramic-coating' ? 'What Is Ceramic Coating?' : 'What Interior Coating Does'}
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
                      {service.whatIs}
                    </p>
                  </div>
                )}

                {/* Machine Polishing: Why Choose Machine Polishing? */}
                {service.whyChoose && service.whyChoose.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white mb-4">
                      Why Choose Machine Polishing?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.whyChoose.map((item, wci) => (
                        <div
                          key={wci}
                          className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10"
                        >
                          <div className="font-heading font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2 mb-1.5">
                            <Check className="w-4 h-4 text-red-500 shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interior Surfaces We Protect (Leather Service) */}
                {service.surfacesProtected && service.surfacesProtected.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white mb-4">
                      Interior Surfaces We Protect
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {service.surfacesProtected.map((item, spi) => (
                        <div
                          key={spi}
                          className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10"
                        >
                          <div className="font-heading font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-[1.65]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* The King's Detail: What's Included */}
                {service.includedItems && service.includedItems.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white mb-4">
                      What’s Included in The King’s Detail
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.includedItems.map((item, incIdx) => (
                        <div
                          key={incIdx}
                          className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10"
                        >
                          <div className="font-heading font-semibold text-sm text-zinc-900 dark:text-white flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub Services Breakdown (Deep Clean & Engine Bay / Full Valet Options) */}
                {service.subServices && service.subServices.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white">
                      Detailed Service Options
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.subServices.map((sub, ssi) => (
                        <div
                          key={ssi}
                          className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                              <h5 className="font-heading font-semibold text-base text-zinc-900 dark:text-white">
                                {sub.title}
                              </h5>
                              {sub.price && (
                                <span className="font-mono text-xs font-medium tabular-nums px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 self-start sm:self-auto">
                                  {sub.price}
                                </span>
                              )}
                            </div>
                            {sub.subtitle && (
                              <div className="font-mono text-xs font-medium text-red-500 mb-2">
                                {sub.subtitle}
                              </div>
                            )}
                            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                              {sub.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6-Step Process Breakdown (Ceramic Coating) */}
                {service.steps && service.steps.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-red-500" />
                      Our 6-Step Ceramic Coating Process
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.steps.map((st) => (
                        <div
                          key={st.step}
                          className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-white/10 flex gap-3"
                        >
                          <div className="w-8 h-8 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-mono font-medium flex items-center justify-center shrink-0 text-xs">
                            0{st.step}
                          </div>
                          <div>
                            <h5 className="font-heading font-semibold text-xs sm:text-sm text-zinc-900 dark:text-white">
                              {st.title}
                            </h5>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-[1.65]">
                              {st.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ceramic Pro Bronze / Silver / Gold Tiers */}
                {service.tiers && service.tiers.length > 0 && (
                  <div>
                    <h4 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-4">
                      Ceramic Pro 9H Package Tiers (Bolton Workshop)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.tiers.map((tier) => (
                        <div
                          key={tier.name}
                          className={`rounded-2xl p-5 border flex flex-col justify-between ${
                            tier.name.includes('Silver')
                              ? 'border-red-500/50 bg-red-500/[0.03] dark:bg-red-500/[0.05] shadow-md ring-1 ring-red-500/30'
                              : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40'
                          }`}
                        >
                          <div>
                            {tier.name.includes('Silver') && (
                              <span className="text-[10px] font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full inline-block mb-2">
                                Most Popular Package
                              </span>
                            )}
                            <h5 className="font-heading font-semibold text-base text-zinc-900 dark:text-white">
                              {tier.name}
                            </h5>
                            <div className="font-mono text-xs text-red-600 dark:text-red-400 font-semibold mt-1">
                              {tier.duration}
                            </div>
                            <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 mb-3">
                              {tier.layers}
                            </div>
                            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                              {tier.features.map((feat, fi) => (
                                <li key={fi} className="flex items-start gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommendation Notice */}
                {service.recommendation && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs sm:text-sm font-medium flex items-center gap-2.5">
                    <Clock className="w-5 h-5 shrink-0 text-amber-500" />
                    <span>{service.recommendation}</span>
                  </div>
                )}

                {/* Highlights Checklist Row */}
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/50 dark:bg-workshop-row/80 border border-zinc-200/80 dark:border-white/5">
                  <div className="text-xs font-bold text-zinc-400 mb-3">
                    Certified Highlights & Standards:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                    {service.highlights.map((hl, hli) => (
                      <div key={hli} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer: Verbatim Hook + Call to Action Buttons */}
              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  {service.hookText && (
                    <div className="text-sm sm:text-base font-extrabold text-zinc-900 dark:text-white">
                      &ldquo;{service.hookText}&rdquo;
                    </div>
                  )}
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    115 Albert Rd, Farnworth, Bolton · Available 24/7
                  </div>
                </div>

                <div className="flex w-full sm:w-auto items-center gap-3">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Latin King Detailing, I would like to book or ask about: ${service.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    title="WhatsApp Latin King Detailing"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.title)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  >
                    <span>{service.ctaText || 'Get a Free Quote'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

