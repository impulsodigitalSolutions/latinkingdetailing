'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { WORKSHOP_GALLERY_IMAGES, WorkshopGalleryImage } from '@/lib/gallery-data';
import { useModals } from './ModalContext';
import { 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ArrowRight, 
  Maximize2,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface GalleryProps {
  initialLimit?: number;
  showExploreAllButton?: boolean;
}

export function Gallery({ initialLimit, showExploreAllButton = false }: GalleryProps) {
  const { openQuoteModal } = useModals();
  const [filter, setFilter] = useState<'all' | 'portrait' | 'square' | 'landscape'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(!initialLimit);

  // Filter items based on aspect ratio / orientation
  const filteredImages = WORKSHOP_GALLERY_IMAGES.filter((item) => {
    if (filter === 'all') return true;
    return item.orientation === filter;
  });

  // Display subset if limit specified and not expanded
  const displayImages = initialLimit && !isExpanded 
    ? filteredImages.slice(0, initialLimit) 
    : filteredImages;

  // Lightbox keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => 
          prev !== null ? (prev + 1) % filteredImages.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => 
          prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0
        );
      }
    },
    [activeLightboxIndex, filteredImages.length]
  );

  useEffect(() => {
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
  }, [activeLightboxIndex, handleKeyDown]);

  const activeImage = activeLightboxIndex !== null ? filteredImages[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
              Recent Transformations: <span className="text-red-600 dark:text-red-500">Manchester Studio</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-[60ch] leading-[1.65]">
              Explore genuine Ceramic Pro 9H applications, paint correction stages, and cabin restorations completed at our Farnworth facility.
            </p>
          </div>

          {/* Filter Pills based on Dimensions & Orientations */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => { setFilter('all'); setActiveLightboxIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'all'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Photos ({WORKSHOP_GALLERY_IMAGES.length})
            </button>
            <button
              type="button"
              onClick={() => { setFilter('portrait'); setActiveLightboxIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'portrait'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Portrait Angles (52)
            </button>
            <button
              type="button"
              onClick={() => { setFilter('square'); setActiveLightboxIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'square'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Square &amp; Detail (11)
            </button>
            <button
              type="button"
              onClick={() => { setFilter('landscape'); setActiveLightboxIndex(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                filter === 'landscape'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-workshop-surface text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Wide Profiles (8)
            </button>
          </div>
        </div>

        {/* Dimension-Based Masonry Collage Grid */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2.5 sm:gap-3.5">
          {displayImages.map((img: WorkshopGalleryImage, idx: number) => (
            <div
              key={img.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="break-inside-avoid mb-2.5 sm:mb-3.5 group relative rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 hover:border-red-500/60 transition-colors duration-200 cursor-pointer"
            >
              {/* Natural Proportion Image (Zero layout distortion) */}
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading={idx < 10 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-auto block object-cover"
              />

              {/* Sleek Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 text-white pointer-events-none">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-950/90 border border-white/20 text-[10px] font-semibold text-red-400">
                    <Sparkles className="w-2.5 h-2.5 text-red-500" />
                    <span>{img.serviceTag}</span>
                  </span>
                  <span className="p-1.5 rounded-full bg-red-600 text-white shadow-xs">
                    <Eye className="w-3 h-3" />
                  </span>
                </div>

                {/* Bottom Details */}
                <div>
                  <div className="text-[11px] font-medium text-zinc-200 line-clamp-1">
                    Farnworth Workshop
                  </div>
                  <div className="text-[10px] text-zinc-400 font-mono">
                    {img.width} × {img.height}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Expand Controls */}
        {initialLimit && !isExpanded && filteredImages.length > initialLimit && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md shadow-red-600/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Load All {filteredImages.length} Workshop Photos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {showExploreAllButton && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md shadow-red-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Explore Dedicated Gallery Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => openQuoteModal('Finish from Manchester Gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 bg-white dark:bg-workshop-card-subtle text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 font-bold text-xs transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <span>Book Your Transformation</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </button>
          </div>
        )}
      </div>

      {/* High-Resolution Workshop Lightbox Modal */}
      {activeImage && activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 transition-opacity"
          onClick={() => setActiveLightboxIndex(null)}
          aria-modal="true"
          role="dialog"
        >
          {/* Controls Bar */}
          <div 
            className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs sm:text-sm px-3 py-1 rounded-full bg-zinc-900 border border-white/20 text-zinc-200">
                {activeLightboxIndex + 1} / {filteredImages.length}
              </span>
              <span className="hidden sm:inline-block text-xs text-zinc-300">
                {activeImage.serviceTag} · Farnworth Studio
              </span>
            </div>

            <button
              type="button"
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white transition-colors border border-white/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex - 1 + filteredImages.length) % filteredImages.length);
            }}
            className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors border border-white/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
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

            {/* Bottom Actions Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-xl px-2">
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Latin King Detailing Workshop Transformation
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  {activeImage.filename} · {activeImage.width} × {activeImage.height} ({activeImage.orientation})
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveLightboxIndex(null);
                  openQuoteModal('Finish from Workshop Gallery: ' + activeImage.filename);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md shadow-red-600/30 cursor-pointer shrink-0"
              >
                <span>Request This Finish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex + 1) % filteredImages.length);
            }}
            className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors border border-white/15 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
