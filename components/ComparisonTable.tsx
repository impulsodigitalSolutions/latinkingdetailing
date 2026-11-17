'use client';

import React from 'react';
import Link from 'next/link';
import { COMPARISON_TABLE, SITE_CONFIG } from '@/lib/site-data';
import { useModals } from './ModalContext';
import { ArrowRight, MessageSquare, Check, ShieldAlert } from 'lucide-react';

export function ComparisonTable() {
  const { openQuoteModal } = useModals();

  const renderCellContent = (val: string | boolean, isHighlighted = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold text-xs">
          <Check className="w-4 h-4 text-emerald-500 shrink-0" /> Included
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-zinc-400 text-xs">
          <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0" /> Optional
        </span>
      );
    }
    const strVal = String(val);
    const lower = strVal.toLowerCase();
    const isNegative = lower.startsWith('none') || lower.startsWith('zero') || lower.startsWith('no self-healing') || lower.startsWith('minimal');
    const isPositive = strVal.includes('9H') || strVal.includes('Heavy Physical') || strVal.includes('Permanent') || strVal.includes('100%') || strVal.includes('Instant Heat') || strVal.includes('Maximum');
    
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs tabular-nums">
        {isPositive && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
        {isNegative && <ShieldAlert className="w-4 h-4 text-zinc-400 shrink-0" />}
        <span className={isHighlighted && !isNegative ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
          {strVal}
        </span>
      </span>
    );
  };

  return (
    <section id="comparison" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-workshop-muted/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
            Ceramic Coating vs Dealership Sealant vs Wax
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-[60ch] mx-auto leading-[1.65]">
            Not all automotive protections are created equal. Compare how certified Ceramic Pro 9H nanoceramics stack up against dealership polymer sealants and traditional waxes.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="rounded-3xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-card-subtle overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-workshop-row">
                  <th className="py-5 px-4 sm:px-6 font-heading font-semibold text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 w-1/4">
                    Protection Criteria
                  </th>
                  <th className="py-5 px-4 sm:px-6 font-heading font-semibold text-xs sm:text-sm text-red-600 dark:text-red-500 w-1/4 bg-red-500/[0.04]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>Ceramic Pro 9H</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 font-heading font-semibold text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 w-1/4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>Dealership Sealant</span>
                    </div>
                  </th>
                  <th className="py-5 px-4 sm:px-6 font-heading font-semibold text-xs sm:text-sm text-zinc-400 w-1/4">
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
                    <td className="py-4 px-4 sm:px-6 font-heading font-medium text-zinc-900 dark:text-white">
                      {row.feature}
                    </td>

                    {/* Ceramic Pro column */}
                    <td className="py-4 px-4 sm:px-6 font-semibold bg-red-500/[0.03] text-zinc-800 dark:text-zinc-200">
                      {renderCellContent(row.ceramic, true)}
                    </td>

                    {/* Dealership Sealant column */}
                    <td className="py-4 px-4 sm:px-6 font-semibold text-zinc-800 dark:text-zinc-200">
                      {renderCellContent(row.dealership, false)}
                    </td>

                    {/* Wax column */}
                    <td className="py-4 px-4 sm:px-6 font-medium text-zinc-500 dark:text-zinc-400">
                      {renderCellContent(row.wax, false)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Longevity Banner Highlight */}
          <div className="p-6 bg-workshop-row text-white border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs">
                Key Verdict
              </span>
              <p className="text-xs sm:text-sm text-zinc-300">
                Traditional wax wears off in weeks. Ceramic Pro creates a permanent ceramic glass bond that lasts up to a lifetime.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                href="/comparison"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600/10 hover:bg-red-600 active:scale-[0.98] border border-red-500/30 text-red-400 hover:text-white text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>Full Protection Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-700 hover:border-red-500 active:scale-[0.98] text-zinc-200 hover:text-red-400 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Need Advice?</span>
              </a>
              <button
                type="button"
                onClick={() => openQuoteModal('Matrix Selection')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 active:scale-[0.98] disabled:opacity-50"
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
