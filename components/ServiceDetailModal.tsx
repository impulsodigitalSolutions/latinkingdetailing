'use client';

import React, { useEffect } from 'react';
import { useModals } from './ModalContext';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeServiceModal}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#1a1b22] border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col transition-all"
      >
        {/* Header gradient banner with Official Logo */}
        <div className="p-6 sm:p-8 bg-gradient-to-br from-[#1e1f26] to-[#181920] text-white relative border-b border-white/10">
          <button
            type="button"
            onClick={closeServiceModal}
            className="absolute top-6 right-6 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-red-500/30 p-1 flex items-center justify-center shrink-0 shadow-md">
              <img
                src="/images/logo-dark.png"
                alt="Latin King Detailing"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Bolton Workshop Service Breakdown
            </div>
          </div>

          <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-xl">
            {service.shortDesc}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-800 dark:text-zinc-200">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2">
              Overview & Protection Scope
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-3">
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
              <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                Our 6-Step Precision Process Breakdown
              </h4>
              <div className="space-y-3">
                {service.steps.map((st) => (
                  <div
                    key={st.step}
                    className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-bold flex items-center justify-center shrink-0 text-sm">
                      0{st.step}
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm text-zinc-900 dark:text-white">
                        {st.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
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
              <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-4">
                Available Ceramic Pro 9H Package Tiers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl p-4 border flex flex-col justify-between ${
                      tier.name.includes('Silver')
                        ? 'border-red-500/50 bg-red-500/[0.03] dark:bg-red-500/[0.05] shadow-md ring-1 ring-red-500/30'
                        : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30'
                    }`}
                  >
                    <div>
                      {tier.name.includes('Silver') && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full inline-block mb-2">
                          Most Popular
                        </span>
                      )}
                      <h5 className="font-bold text-sm text-zinc-900 dark:text-white">
                        {tier.name}
                      </h5>
                      <div className="text-xs text-red-600 dark:text-red-400 font-semibold mt-1">
                        {tier.duration}
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 mb-3">
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
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-zinc-100 dark:bg-[#16171d] border-t border-zinc-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            <span className="font-semibold text-zinc-900 dark:text-white">
              Based in Farnworth, Bolton
            </span>{' '}
            · Five mins from M61 Jct 4
          </div>
          <div className="flex w-full sm:w-auto gap-3">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                `Hello Latin King Detailing, I am interested in ${service.title} for my vehicle.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all"
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
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-red-600/30 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
