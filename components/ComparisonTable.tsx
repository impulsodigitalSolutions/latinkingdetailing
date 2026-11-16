'use client';

import React from 'react';
import Link from 'next/link';
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
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
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold text-red-600 dark:text-red-500 uppercase tracking-wider w-1/4 bg-red-500/[0.04]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>Ceramic Pro 9H</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 text-xs sm:text-sm font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
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

                    {/* Ceramic Pro column - highlighted with crimson */}
                    <td className="py-4 px-4 sm:px-6 font-semibold bg-red-500/[0.03] text-zinc-800 dark:text-zinc-200">
                      {typeof row.ceramic === 'string' && row.ceramic.startsWith('✔') ? (
                        <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400 font-bold">
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
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs uppercase tracking-wider">
                Key Verdict
              </span>
              <p className="text-xs sm:text-sm text-zinc-300">
                Traditional wax wears off in weeks. Ceramic Pro creates a permanent ceramic glass bond that lasts up to a lifetime.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                href="/comparison"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600/10 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white text-xs font-bold transition-colors"
              >
                <span>Full Protection Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-700 hover:border-red-500 text-zinc-200 hover:text-red-400 text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Need Advice?</span>
              </a>
              <button
                type="button"
                onClick={() => openQuoteModal('Matrix Selection')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 cursor-pointer"
              >
                <span>Compare Pricing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
