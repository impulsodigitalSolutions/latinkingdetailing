'use client';

import React, { useEffect } from 'react';
import { useModals } from './ModalContext';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Clock,
  Check,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';
import { SITE_CONFIG } from '@/lib/site-data';

export function ServiceDetailModal() {
  const { selectedServiceDetail, closeServiceModal, openQuoteModal } = useModals();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedServiceDetail) {
        closeServiceModal();
      }
    };
    if (selectedServiceDetail) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedServiceDetail, closeServiceModal]);

  if (!selectedServiceDetail) return null;

  const service = selectedServiceDetail;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 transition-opacity"
        onClick={closeServiceModal}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-workshop-card border border-zinc-200 dark:border-workshop-border rounded-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
      >
        {/* Header banner with Official Logo */}
        <div className="p-6 sm:p-8 bg-workshop-surface text-white relative border-b border-workshop-border">
          <button
            type="button"
            onClick={closeServiceModal}
            className="absolute top-6 right-6 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors cursor-pointer"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-red-500/30 p-1 flex items-center justify-center shrink-0">
              <img
                src="/images/logo-dark.png"
                alt="Latin King Detailing"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Manchester Workshop Service
            </div>
          </div>

          <h2 id="service-modal-title" className="font-heading font-semibold text-2xl sm:text-3xl text-white">
            {service.title}
          </h2>
          {service.tagline && (
            <p className="font-heading font-medium text-red-400 text-xs sm:text-sm mt-1">
              {service.tagline}
            </p>
          )}
          {service.startingPrice && (
            <div className="inline-block mt-2.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-medium text-zinc-200 border border-white/10">
              Service Cost: <span className="font-mono tabular-nums">{service.startingPrice}</span>
            </div>
          )}
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-800 dark:text-zinc-200">
          {/* Main Description */}
          <div>
            <h3 className="text-xs font-semibold text-red-600 dark:text-red-500 mb-2">
              Overview &amp; Protection Scope
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
              {service.fullDesc}
            </p>
          </div>

          {/* Section: What Is / Extended Explanation */}
          {service.whatIs && (
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-surface border border-zinc-200 dark:border-workshop-border space-y-2">
              <h4 className="text-xs font-bold text-red-600 dark:text-red-400">
                Detailed Technical Overview
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {service.whatIs}
              </p>
            </div>
          )}

          {/* Why Choose Machine Polishing / Feature Pillars */}
          {service.whyChoose && service.whyChoose.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                Why Choose This Service?
              </h4>
              <div className="space-y-3">
                {service.whyChoose.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-surface"
                  >
                    <div className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                      <Check className="w-4 h-4 text-red-500" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interior Surfaces We Protect */}
          {service.surfacesProtected && service.surfacesProtected.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                Interior Surfaces We Protect
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.surfacesProtected.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-surface"
                  >
                    <div className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Included Items (The King's Detail, etc.) */}
          {service.includedItems && service.includedItems.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                What’s Included in This Package
              </h4>
              <div className="space-y-3">
                {service.includedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-surface"
                  >
                    <div className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sub Services (Deep Clean + Engine Bay / Full Valet Options) */}
          {service.subServices && service.subServices.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
                Service Options & Breakdown
              </h4>
              <div className="space-y-3">
                {service.subServices.map((sub, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-surface"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <div className="font-bold text-sm text-zinc-900 dark:text-white">
                        {sub.title}
                        {sub.subtitle && (
                          <span className="text-xs font-normal text-red-500 ml-2">
                            : {sub.subtitle}
                          </span>
                        )}
                      </div>
                      {sub.price && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-500/10 text-red-600 dark:text-red-400 self-start sm:self-auto">
                          {sub.price}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendation */}
          {service.recommendation && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs font-medium flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0 text-amber-500" />
              <span>{service.recommendation}</span>
            </div>
          )}

          {/* Highlights */}
          <div className="bg-zinc-50 dark:bg-workshop-surface border border-zinc-200 dark:border-workshop-border rounded-2xl p-5">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white mb-3">
              Key Features & Certified Guarantee
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-zinc-700 dark:text-zinc-300">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* If Service has 6-step breakdown */}
          {service.steps && service.steps.length > 0 && (
            <div>
              <h4 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                Our 6-Step Precision Process Breakdown
              </h4>
              <div className="space-y-3">
                {service.steps.map((st) => (
                  <div
                    key={st.step}
                    className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-surface"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-mono font-medium flex items-center justify-center shrink-0 text-xs">
                      0{st.step}
                    </div>
                    <div>
                      <h5 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white">
                        {st.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-[1.65]">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* If Service has Bronze / Silver / Gold tiers */}
          {service.tiers && service.tiers.length > 0 && (
            <div>
              <h4 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-4">
                Available Ceramic Pro 9H Package Tiers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-4 border flex flex-col justify-between ${
                      tier.name.includes('Silver')
                        ? 'border-red-500/50 bg-red-500/[0.03] dark:bg-red-500/[0.05] ring-1 ring-red-500/30'
                        : 'border-zinc-200 dark:border-workshop-border bg-zinc-50/50 dark:bg-workshop-surface'
                    }`}
                  >
                    <div>
                      {tier.name.includes('Silver') && (
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                          Most Popular
                        </span>
                      )}
                      <h5 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white">
                        {tier.name}
                      </h5>
                      <div className="font-mono text-xs text-red-600 dark:text-red-400 font-semibold mt-1">
                        {tier.duration}
                      </div>
                      <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 mb-3">
                        {tier.layers}
                      </div>
                      <ul className="space-y-1.5 text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-300">
                        {tier.features.map((feat, fi) => (
                          <li key={fi} className="flex items-start gap-1.5">
                            <span className="text-red-500">✓</span>
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

          {/* Hook text */}
          {service.hookText && (
            <div className="text-center py-2 text-sm font-bold text-red-600 dark:text-red-400">
              &ldquo;{service.hookText}&rdquo;
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-workshop-row border-t border-zinc-200 dark:border-workshop-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            <span className="font-semibold text-zinc-900 dark:text-white">
              426 Flixton Road, Urmston
            </span>{' '}
            · Manchester (M41 6QT)
          </div>
          <div className="flex w-full sm:w-auto gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                `Hello Latin King Detailing, I am interested in ${service.title} for my vehicle.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs sm:text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              type="button"
              onClick={() => {
                closeServiceModal();
                openQuoteModal(service.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>{service.ctaText || 'Get a Free Quote'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
