'use client';

import React from 'react';
import { COMPARISON_TABLE, SITE_CONFIG } from '@/lib/site-data';
import { useModals } from './ModalContext';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

export function ComparisonTable() {
  const { openQuoteModal } = useModals();

  return (
    <section id="comparison" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-[#181920]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Direct Protection Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Ceramic Coating vs PPF vs Traditional Wax
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Not all automotive protections are created equal. Compare how professional Ceramic Pro 9H and KAVACA PPF stack up against traditional dealership waxes.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#1d1e25] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-[#16171d]">
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 w-1/4">
                    Protection Criteria
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider w-1/4 bg-amber-500/[0.04]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Ceramic Pro 9H</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold text-amber-500 dark:text-amber-400 uppercase tracking-wider w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>KAVACA PPF</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold text-zinc-400 uppercase tracking-wider w-1/4">
                    Traditional Wax
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80 text-xs sm:text-sm">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-zinc-900 dark:text-white">
                      {row.feature}
                    </td>

                    {/* Ceramic Pro column - highlighted */}
                    <td className="py-4 px-4 sm:px-6 font-semibold bg-amber-500/[0.03] text-zinc-800 dark:text-zinc-200">
                      {typeof row.ceramic === 'string' && row.ceramic.startsWith('✔') ? (
                        <span className="inline-flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-bold">
                          {row.ceramic}
                        </span>
                      ) : (
                        <span className="text-zinc-400">{row.ceramic}</span>
                      )}
                    </td>

                    {/* PPF column */}
                    <td className="py-4 px-4 sm:px-6 font-semibold text-zinc-800 dark:text-zinc-200">
                      {typeof row.ppf === 'string' && row.ppf.startsWith('✔') ? (
                        <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                          {row.ppf}
                        </span>
                      ) : (
                        <span className="text-zinc-400">{row.ppf}</span>
                      )}
                    </td>

                    {/* Wax column */}
                    <td className="py-4 px-4 sm:px-6 font-medium text-zinc-500 dark:text-zinc-400">
                      {row.wax}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Longevity Banner Highlight */}
          <div className="p-6 bg-[#16171d] text-white border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-zinc-950 font-black text-xs uppercase tracking-wider">
                Key Verdict
              </span>
              <p className="text-xs sm:text-sm text-zinc-300">
                Wax degrades in weeks under UK road salt. Ceramic Pro & PPF bond for years with verifiable VIN registration.
              </p>
            </div>
            <div className="text-xs font-semibold text-amber-400">
              Ceramic Pro 9H: 2–5+ Years · PPF: 7–10 Years
            </div>
          </div>
        </div>

        {/* Below Table CTA */}
        <div className="mt-10 p-6 rounded-3xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                Need advice on which protection suits your daily mileage?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Talk to our team about the best option for your vehicle and budget.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hello Latin King Detailing, I would like advice on Ceramic Coating vs PPF for my car.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Advice</span>
            </a>
            <button
              type="button"
              onClick={() => openQuoteModal('Ceramic vs PPF Advice')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

