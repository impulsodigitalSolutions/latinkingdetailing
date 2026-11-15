'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SITE_CONFIG,
  HERO_TRUST_BADGES,
} from '@/lib/site-data';
import { GoogleIcon, StarRating } from './icons/BrandIcons';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Shield, Award } from 'lucide-react';
import { useModals } from './ModalContext';

export function Hero() {
  const { openQuoteModal } = useModals();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background radial gold glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 dark:bg-amber-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Trust Pill with Logo Crown & Google rating */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/30 text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm font-medium shadow-sm">
              <div className="w-5 h-4 relative shrink-0">
                <Image
                  src="/images/logo-crown.png"
                  alt="Latin King Crown"
                  fill
                  className="object-contain"
                />
              </div>
              <GoogleIcon className="w-4 h-4 shrink-0" />
              <StarRating rating={SITE_CONFIG.googleRating} size="w-3.5 h-3.5" />
              <span className="font-bold text-amber-600 dark:text-amber-400">
                {SITE_CONFIG.googleRating} Google Rating
              </span>
              <span className="text-zinc-400 dark:text-zinc-500">·</span>
              <span className="text-zinc-600 dark:text-zinc-300">
                {SITE_CONFIG.googleReviewCount} Reviews
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-zinc-900 dark:text-white leading-[1.12]">
              Bolton's Premier{' '}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Ceramic Coating
              </span>{' '}
              & Car Detailing Specialists
            </h1>

            {/* Subheadline (Verbatim from prompt) */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We&apos;re Bolton&apos;s car ceramic coating specialists — based in Farnworth, five minutes from junction 4 of the M61. We apply Ceramic Pro 9H, install KAVACA PPF, and detail cars to a standard you won&apos;t get from a drive-through wash. If you want it done properly, you&apos;ve found the right place.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>

              <Link
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-400 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-800 dark:text-zinc-200 hover:text-amber-600 dark:hover:text-amber-400 font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* 4 Trust Badges Row */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                {HERO_TRUST_BADGES.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-zinc-100/70 dark:bg-[#1c1d24] border border-zinc-200/80 dark:border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
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
              {/* Gold glow framing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-amber-400/20 to-amber-600/30 rounded-3xl blur-xl opacity-75 dark:opacity-50" />

              <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#1d1e25] shadow-2xl">
                {/* Visual Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
                    alt="Lamborghini Aventador with Ceramic Pro 9H coating — Latin King Detailing Bolton"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Top badge with Official Logo mark */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs font-bold shadow-lg">
                    <div className="w-5 h-4 relative shrink-0">
                      <Image
                        src="/images/logo-crown.png"
                        alt="Latin King Crown"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Ceramic Pro 9H Certified</span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
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
                    <div className="text-lg font-bold">Lamborghini Aventador LP700</div>
                    <div className="text-xs text-zinc-300">
                      Multi-Stage Correction + Ceramic Pro 9H Gold Package
                    </div>
                  </div>
                </div>

                {/* Showcase Stats & Badges underneath */}
                <div className="p-5 bg-zinc-50 dark:bg-[#17181f] border-t border-zinc-200 dark:border-white/10">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#202129] border border-zinc-200 dark:border-white/10">
                      <div className="text-amber-500 font-black text-sm sm:text-base">9H</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase">
                        Hardness
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#202129] border border-zinc-200 dark:border-white/10">
                      <div className="text-amber-500 font-black text-sm sm:text-base">&gt;110°</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase">
                        Hydrophobic
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#202129] border border-zinc-200 dark:border-white/10">
                      <div className="text-amber-500 font-black text-sm sm:text-base">VIN</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-semibold uppercase">
                        Registered
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      KAVACA Approved
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Shield className="w-3.5 h-3.5 text-amber-500" />
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
