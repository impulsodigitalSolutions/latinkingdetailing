'use client';

import React from 'react';
import { SITE_CONFIG } from '@/lib/site-data';
import { QuoteForm } from './QuoteForm';
import { Sparkles, ShieldCheck, MapPin, Phone, Clock, Award } from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

export function QuoteSection() {
  return (
    <section id="quote" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-Footer CTA Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1d1e26] via-[#16171d] to-[#1d1e26] text-white border border-red-500/30 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle crimson glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-red-500/40 p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Fast Response & Free Estimates
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Ready to Protect Your Car?
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg mt-3 leading-relaxed">
              Get a free, no-obligation quote from Bolton&apos;s Ceramic Pro certified specialists. We&apos;ll recommend the right protection for your vehicle and budget.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us Directly</span>
              </a>

              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm uppercase tracking-wider transition-colors border border-zinc-700"
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
          <div className="lg:col-span-7 bg-white dark:bg-[#1d1e25] rounded-3xl p-6 sm:p-10 border border-zinc-200 dark:border-white/10 shadow-xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  Direct Price Calculator
                </span>
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

            <QuoteForm isModal={false} />
          </div>

          {/* Right: Why Quote With Us Trust Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-[#1d1e25] rounded-3xl p-6 sm:p-8 border border-zinc-200 dark:border-white/10 shadow-md space-y-5">
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
                  <span>Workshop: 115 Albert Rd, Farnworth, Bolton BL4 9EA</span>
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
