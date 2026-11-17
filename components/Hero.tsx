'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SITE_CONFIG,
  HERO_TRUST_BADGES,
} from '@/lib/site-data';
import { GoogleIcon, StarRating } from './icons/BrandIcons';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Award } from 'lucide-react';
import { useModals } from './ModalContext';

export function Hero() {
  const { openQuoteModal } = useModals();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Studio Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm font-medium">
              <div className="w-4 h-3.5 relative shrink-0">
                <Image
                  src="/images/logo-crown.png"
                  alt="Latin King Crown"
                  fill
                  className="object-contain"
                />
              </div>
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <StarRating rating={SITE_CONFIG.googleRating} size="w-3.5 h-3.5" />
              <span className="font-semibold text-zinc-900 dark:text-white">
                <span className="font-mono tabular-nums">{SITE_CONFIG.googleRating}</span> Google Rating
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                Farnworth, Manchester
              </span>
            </div>

            {/* Main Headline - Strict Scale & Tighter Display Tracking */}
            <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
              Manchester&apos;s Premier Ceramic Coating &amp;, Paint Correction  Detailing Workshop
            </h1>

            {/* Subheadline - Constrained line length & muted secondary contrast */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-[60ch] mx-auto lg:mx-0 leading-[1.65] font-normal">
              Get expert interior and exterior car detailing, paint correction and ceramic coating in Manchester. Based in Urmston, Latin King Detailing brings professional vehicle detailing and protection directly to you..
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-bold text-sm tracking-wide shadow-md shadow-red-600/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>Request Workshop Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <Link
                href="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 active:scale-[0.98] bg-white dark:bg-workshop-card text-zinc-800 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-400 font-semibold text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <span>View Real Portfolio</span>
              </Link>
            </div>

            {/* 4 Trust Badges Row */}
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {HERO_TRUST_BADGES.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/[0.08]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-contrast luxury exotic car showroom showcase card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card shadow-xl">
                {/* Visual Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
                    alt="Lamborghini Aventador with Ceramic Pro 9H coating, Latin King Detailing Manchester"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Top badge with Official Logo mark */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/85 border border-red-500/40 text-red-400 text-xs font-semibold shadow-lg">
                    <div className="w-4 h-3.5 relative shrink-0">
                      <Image
                        src="/images/logo-crown.png"
                        alt="Latin King Crown"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Ceramic Pro 9H Certified</span>
                  </div>
                </div>

                {/* Bottom Image Overlay Info */}
                <div className="p-5 bg-zinc-50 dark:bg-workshop-muted border-t border-zinc-200 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-500 mb-1">
                    <div className="relative w-4 h-3.5 shrink-0">
                      <Image
                        src="/images/logo-crown.png"
                        alt="Crown"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Latin King Detailing Showcase</span>
                  </div>
                  <div className="font-heading font-semibold text-lg text-zinc-900 dark:text-white">
                    Lamborghini Aventador LP700
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    Multi-Stage Correction + Ceramic Pro 9H Gold Package
                  </div>

                  {/* Showcase Stats & Badges underneath */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-workshop-surface border border-zinc-200 dark:border-white/10">
                      <div className="font-mono text-red-500 font-semibold text-sm sm:text-base tabular-nums">9H</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                        Hardness
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-workshop-surface border border-zinc-200 dark:border-white/10">
                      <div className="font-mono text-red-500 font-semibold text-sm sm:text-base tabular-nums">&gt;110°</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                        Hydrophobic
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-workshop-surface border border-zinc-200 dark:border-white/10">
                      <div className="text-red-500 font-semibold text-sm sm:text-base">VIN</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium">
                        Registered
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Award className="w-3.5 h-3.5 text-red-500" />
                      9H Certified Installer
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Shield className="w-3.5 h-3.5 text-red-500" />
                      5 Min from M61 J4
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
