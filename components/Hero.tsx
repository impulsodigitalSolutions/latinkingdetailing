'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SITE_CONFIG,
  HERO_TRUST_BADGES,
} from '@/lib/site-data';
import { GoogleIcon, StarRating } from './icons/BrandIcons';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useModals } from './ModalContext';

export function Hero() {
  const { openQuoteModal } = useModals();

  return (
    <section className="relative min-h-[700px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[680px] flex items-end sm:items-center justify-center overflow-hidden bg-zinc-950 text-white border-b border-zinc-200/60 dark:border-white/10 -mt-20 pt-28 sm:pt-32 pb-10 sm:pb-20">
      {/* Background Car & Mobile Van Showcase Image */}
      <div className="absolute inset-x-0 top-0 z-0 h-[46%] sm:inset-0 sm:h-auto">
        <Image
          src="/hero-image.png"
          alt="Latin King Detailing mobile detailing van and ceramic coated supercar, Manchester"
          fill
          preload
          className="object-cover object-[center_40%] sm:object-center"
          sizes="100vw"
        />

        {/* Balanced Cinematic Scrim: subtle top & bottom shading so van and car remain crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-zinc-950/45 to-zinc-950 pointer-events-none sm:from-zinc-950/75 sm:via-black/20 sm:to-zinc-950/90" />
      </div>

      {/* Foreground Content Centered Between Van & Car */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="max-w-2xl lg:max-w-3xl mx-auto space-y-4 sm:space-y-6 text-center">
          {/* Studio Identity Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/65 border border-white/15 text-white text-xs sm:text-sm font-medium shadow-md">
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
            <span className="font-semibold text-white">
              <span className="font-mono tabular-nums">{SITE_CONFIG.googleRating}</span> Google Rating
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-300">
              Urmston &amp; Manchester
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-white drop-shadow-md">
            Manchester&apos;s Premier Ceramic Coating &amp; Detailing 
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-200 max-w-[54ch] mx-auto leading-[1.65] font-normal drop-shadow-sm">
            Expert mobile and workshop vehicle detailing, precision machine polishing, and certified Ceramic Pro 9H nanoprotection across Manchester and Cheshire.
          </p>

          {/* Dual CTAs & Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-red-600/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Request Workshop Quote</span>
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </button>

            <Link
              href="/our-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/25 hover:border-red-500 active:scale-[0.98] bg-black/50 hover:bg-black/70 text-white hover:text-red-400 font-semibold text-sm sm:text-base transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>

          {/* 4 Trust Badges Row */}
          <div className="pt-6 border-t border-white/15 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {HERO_TRUST_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/55 border border-white/10 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs font-semibold text-zinc-200">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
