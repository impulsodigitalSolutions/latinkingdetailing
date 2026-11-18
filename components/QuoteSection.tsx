'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/site-data';
import { QuoteForm } from './QuoteForm';
import { Sparkles, ShieldCheck, MapPin, Phone, Clock, Award } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

interface QuoteSectionProps {
  initialService?: string;
}

export function QuoteSection({ initialService }: QuoteSectionProps = {}) {
  return (
    <section id="quote" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer CTA Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-workshop-card text-white border border-red-500/30 shadow-2xl relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-red-500/40 p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-zinc-300 text-xs font-semibold">
                Latin King Detailing · Manchester Workshop
              </div>
            </div>
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-white">
              Ready to Protect Your Car?
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mt-3 max-w-[60ch] leading-[1.65]">
              Get a free, no-obligation quote from Manchester&apos;s Ceramic Pro certified specialists. We&apos;ll recommend the right protection for your vehicle and budget.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-sm transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us Directly</span>
              </a>

              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] text-white font-bold text-sm transition-colors border border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <Phone className="w-4 h-4 text-red-400" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Quote Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-white dark:bg-workshop-card-subtle rounded-3xl p-6 sm:p-10 border border-zinc-200 dark:border-white/10 shadow-xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">
                  Request a Custom Quote
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Enter your vehicle details below for an upfront quote tailored to your car size and condition.
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-red-500/30 p-1 hidden sm:flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <QuoteForm isModal={false} initialService={initialService} />
          </div>

          {/* Right: Why Quote With Us Trust Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-workshop-card-subtle rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 shadow-md space-y-5">
              <h4 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                What Happens Next?
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">
                      Instant Review & Assessment
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Our certified technicians review your car&apos;s clear coat requirements and vehicle size.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">
                      Fixed Price Recommendation
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                      You receive a clear breakdown covering paint preparation, Ceramic Pro 9H layers, and curing times.
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </div>
                  <div>
                    <div className="font-bold text-zinc-900 dark:text-white">
                      Flexible Workshop Slot
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400 mt-0.5">
                      Choose a convenient drop-off day at our Farnworth facility (5 mins from M61 J4).
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2.5 text-xs text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Ceramic Pro 9H Certified Installer warranty registered to VIN</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Workshop: 115 Albert Rd, Farnworth, Manchester BL4 9EA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Operating 24/7 with secure indoor detailing bays</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
