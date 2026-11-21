'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { WORKSHOP_GALLERY_IMAGES, WorkshopGalleryImage } from '@/lib/gallery-data';
import { ChevronLeft, ChevronRight, ArrowRight, Eye, Sparkles, X, ShieldCheck } from 'lucide-react';
import { useModals } from './ModalContext';

export function GalleryCarousel() {
  const { openQuoteModal } = useModals();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // We use a curated subset of 24 real workshop images for optimal carousel performance
  const carouselImages = WORKSHOP_GALLERY_IMAGES.slice(0, 24);
  const total = carouselImages.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Short interval auto-advance (2.5 seconds) as requested
  useEffect(() => {
    if (isPaused || activeLightboxIndex !== null) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, activeLightboxIndex, nextSlide]);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % total : 0));
      if (e.key === 'ArrowLeft') setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + total) % total : 0));
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, total]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const activeImage = activeLightboxIndex !== null ? carouselImages[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-workshop-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
              Recent Transformations: <span className="text-red-600 dark:text-red-500">Manchester Studio</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-[60ch] leading-[1.65]">
              Real customer vehicles detailed, machine corrected, and ceramic protected inside our dedicated workshop and mobile units.
            </p>
          </div>
        </div>

        {/* Carousel Container with Chevrons */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600 shadow-lg border border-zinc-200 dark:border-white/15 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-white hover:bg-red-600 hover:text-white dark:hover:bg-red-600 shadow-lg border border-zinc-200 dark:border-white/15 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 4)}%)`,
              }}
            >
              {carouselImages.map((img: WorkshopGalleryImage, idx: number) => {
                const realIndex = idx;
                return (
                  <div
                    key={`${img.id}-${idx}`}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shrink-0 px-2 sm:px-2.5"
                  >
                    <div
                      onClick={() => setActiveLightboxIndex(realIndex)}
                      className="group/card relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-200/80 dark:border-white/10 hover:border-red-500/60 transition-colors cursor-pointer"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        loading={idx < 6 ? 'eager' : 'lazy'}
                        className="w-full h-full object-cover"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity p-3 sm:p-4 flex flex-col justify-between text-white">
                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-md bg-zinc-950/90 border border-white/20 text-[10px] font-semibold text-red-400">
                            {img.serviceTag}
                          </span>
                          <span className="p-1 rounded-full bg-red-600 text-white">
                            <Eye className="w-3 h-3" />
                          </span>
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-white truncate">
                            Latin King Transformation
                          </div>
                          <div className="text-[10px] text-zinc-400 font-mono">
                            {img.width} × {img.height}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Indicator & Center Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: Math.min(10, total) }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-colors cursor-pointer ${
                  currentIndex % Math.min(10, total) === dotIdx
                    ? 'w-6 bg-red-600'
                    : 'w-1.5 bg-zinc-300 dark:bg-zinc-700'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Explore Our Work Button */}
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wide shadow-md shadow-red-600/20 transition-colors"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 transition-opacity"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-full bg-zinc-900 border border-white/20 text-zinc-200">
              {activeLightboxIndex + 1} / {total}
            </span>

            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white transition-colors border border-white/20 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex - 1 + total) % total);
            }}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors border border-white/15 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-2xl border border-white/20"
            />

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-xl px-2">
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Latin King Detailing Transformation
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {activeImage.filename} · {activeImage.serviceTag}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveLightboxIndex(null);
                  openQuoteModal('Finish from Workshop Gallery: ' + activeImage.filename);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md shadow-red-600/30 cursor-pointer"
              >
                <span>Request This Finish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex + 1) % total);
            }}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors border border-white/15 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
