'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useModals } from './ModalContext';

export function Hero() {
  const { openQuoteModal } = useModals();
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(Math.round(percentage));
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="relative bg-slate-50 dark:bg-[#0e0e0f] text-zinc-950 dark:text-[#f1eee8] border-b border-zinc-200 dark:border-[#26262a] overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center py-0 sm:py-8 lg:py-16">
          
          {/* Top on Mobile / Right Column on Desktop: Before / After Split Panel */}
          <div className="order-1 lg:order-2 lg:col-span-6 w-full">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              role="slider"
              aria-label="Before and after paint correction comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={sliderPos}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') setSliderPos((p) => Math.max(0, p - 5));
                if (e.key === 'ArrowRight') setSliderPos((p) => Math.min(100, p + 5));
              }}
              className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[460px] bg-zinc-900 overflow-hidden cursor-ew-resize select-none touch-none lg:rounded-xl lg:border lg:border-zinc-300 dark:lg:border-[#2c2c30] shadow-xl dark:shadow-2xl"
            >
              {/* Top gradient overlay (about 100px, pointer-events-none) for floating navbar contrast */}
              <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-black/50 to-transparent pointer-events-none z-10" />

              {/* AFTER layer (underneath, full width) */}
              <div className="absolute inset-0">
                <Image
                  src="/hero-new.png"
                  alt="Latin King Detailing Ceramic Pro 9H finish on paintwork"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Ceramic Pro 9H high-gloss reflection sheen */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(100deg, transparent 15%, rgba(255,255,255,0.24) 40%, transparent 60%)',
                  }}
                />
              </div>

              {/* BEFORE layer (clipped seamlessly with CSS clipPath) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/hero-new.png"
                  alt="Uncorrected paintwork before machine polishing"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Clean shadow localized only over the car body (no lines, no grid patterns) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 75% 55% at 50% 68%, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.30) 55%, rgba(0, 0, 0, 0.08) 80%, transparent 100%)',
                  }}
                />
              </div>

              {/* Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] -ml-[1px] bg-[#f1eee8] z-20 pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                style={{ left: `${sliderPos}%` }}
              />

              {/* Center Draggable Circular Handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#f1eee8] text-[#0e0e0f] shadow-2xl flex items-center justify-center z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </div>

              {/* Badges - Bottom Corners & Bottom Center */}
              <div className="absolute left-3.5 bottom-3 z-20 font-heading font-semibold text-[11px] tracking-[0.12em] bg-[#0e0e0f] text-[#f1eee8] px-2 py-1 select-none shadow-md">
                BEFORE
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-900 dark:text-[#f1eee8] bg-white/95 dark:bg-[#0e0e0f]/85 backdrop-blur-xs px-2.5 py-1 rounded-[2px] border border-zinc-300 dark:border-white/10 select-none shadow-sm whitespace-nowrap">
                50/50 PAINT CORRECTION &amp; CERAMIC PRO 9H
              </div>
              <div className="absolute right-3.5 bottom-3 z-20 font-heading font-semibold text-[11px] tracking-[0.12em] bg-[#d3262a] text-white px-2 py-1 select-none shadow-md">
                AFTER
              </div>
            </div>
          </div>

          {/* Content Block: Order 2 on Mobile (below panel), Order 1 on Desktop (left column) */}
          <div className="order-2 lg:order-1 lg:col-span-6 px-5 py-6 sm:px-6 sm:py-8 lg:px-0 flex flex-col gap-4 sm:gap-5">
            
            {/* Number-Plate Style Location Badge */}
            <div className="flex items-stretch self-start rounded-[3px] overflow-hidden h-[26px] shadow-sm">
              <div className="w-3.5 bg-[#1b3a8a]" aria-hidden="true" />
              <div className="bg-[#f2c500] text-[#111111] font-heading font-extrabold text-[14px] sm:text-[15px] tracking-[0.1em] flex items-center px-2.5 select-none">
                MANCHESTER &amp; CHESHIRE
              </div>
            </div>

            {/* Hero Main Headline */}
            <h1 className="font-heading font-extrabold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] leading-[0.96] tracking-[-0.01em] uppercase text-zinc-950 dark:text-[#f1eee8] m-0">
              Manchester&apos;s Premier Ceramic Coating &amp; Detailing
            </h1>

            {/* Subhead */}
            <p className="font-sans text-[15px] sm:text-[16px] text-zinc-600 dark:text-[#b4b1ab] max-w-[44ch] leading-[1.55] m-0">
              Expert mobile and workshop vehicle detailing, precision machine polishing, and certified Ceramic Pro 9H nanoprotection across Manchester and Cheshire.
            </p>

            {/* Dual CTAs */}
            <div className="flex items-center gap-5 pt-1">
              <button
                type="button"
                data-track-cta="Get a quote"
                data-cta-location="hero"
                onClick={() => openQuoteModal()}
                className="h-12 px-6 bg-[#d3262a] hover:bg-[#b91c1c] active:scale-[0.98] text-white font-semibold text-[15px] sm:text-[16px] rounded-[4px] flex items-center justify-center transition-all cursor-pointer shadow-md shadow-red-950/40"
              >
                Get a quote
              </button>

              <Link
                href="/our-work"
                className="font-medium text-[15px] sm:text-[16px] text-zinc-900 hover:text-black dark:text-[#f1eee8] dark:hover:text-white border-b border-zinc-900/70 hover:border-black dark:border-[#f1eee8] dark:hover:border-white pb-0.5 transition-colors"
              >
                See our work &rarr;
              </Link>
            </div>

            {/* 3-Column Credential Strip */}
            <div className="grid grid-cols-3 border-t border-b border-zinc-200 dark:border-[#2c2c30] mt-1.5 divide-x divide-zinc-200 dark:divide-[#2c2c30]">
              <div className="flex items-center justify-center text-center py-3 px-2 text-[11px] sm:text-xs font-heading font-semibold tracking-[0.08em] uppercase text-zinc-700 dark:text-[#b4b1ab] leading-snug">
                Ceramic Pro accredited
              </div>
              <div className="flex items-center justify-center text-center py-3 px-2 text-[11px] sm:text-xs font-heading font-semibold tracking-[0.08em] uppercase text-zinc-700 dark:text-[#b4b1ab] leading-snug">
                Fully insured
              </div>
              <div className="flex items-center justify-center text-center py-3 px-2 text-[11px] sm:text-xs font-heading font-semibold tracking-[0.08em] uppercase text-zinc-700 dark:text-[#b4b1ab] leading-snug">
                Mobile + workshop
              </div>
            </div>

            {/* Social Proof & Verified Review */}
            <div className="flex flex-col gap-1.5 pt-1">
              <div
                className="text-[#f2c500] text-[15px] tracking-[2px] select-none"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.45] text-zinc-800 dark:text-[#f1eee8] font-normal m-0 italic">
                &ldquo;The transformation came out incredible, inside and out! Fantastic service from start to finish.&rdquo;
              </p>
              <div className="text-[12px] text-zinc-500 dark:text-[#a9a6a0]">
                Abbie Camotta, Verified Client &middot; Google 5.0★ Review
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
