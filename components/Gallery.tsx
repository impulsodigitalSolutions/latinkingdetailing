'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/site-data';
import { useModals } from './ModalContext';
import { Sparkles, MapPin, Eye, ArrowRight, ShieldCheck } from 'lucide-react';

export function Gallery() {
  const { openGalleryModal, openQuoteModal } = useModals();
  const [filter, setFilter] = useState<'all' | 'ceramic' | 'correction'>('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'ceramic') return item.tags.some((t) => t.toLowerCase().includes('ceramic'));
    if (filter === 'correction') return item.tags.some((t) => t.toLowerCase().includes('correction') || t.toLowerCase().includes('polish'));
    return true;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Showroom Precision
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Recent Work —{' '}
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                Bolton Workshop
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
              Explore our recent Ceramic Pro 9H applications and multi-stage paint restorations carried out at our Farnworth facility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'bg-zinc-100 dark:bg-[#202129] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Vehicles
            </button>
            <button
              type="button"
              onClick={() => setFilter('ceramic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'ceramic'
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'bg-zinc-100 dark:bg-[#202129] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Ceramic Pro 9H
            </button>
            <button
              type="button"
              onClick={() => setFilter('correction')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'correction'
                  ? 'bg-amber-500 text-zinc-950 shadow-md'
                  : 'bg-zinc-100 dark:bg-[#202129] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Paint Correction
            </button>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => openGalleryModal(item)}
              className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#1d1e25] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Viewport */}
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-[#15161c]">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15161c]/90 via-[#15161c]/20 to-black/30 group-hover:opacity-85 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {item.service}
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-zinc-950 text-xs font-black shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Finish
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1 mt-0.5">
                    {item.imageAlt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-[#181920] border-t border-zinc-200 dark:border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-800 dark:text-zinc-200">
                    {item.package}
                  </div>
                  <div className="text-amber-600 dark:text-amber-400 font-medium">
                    {item.finish}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openQuoteModal('Finish from Bolton Gallery')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-zinc-300 dark:border-white/10 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-[#1d1e25] text-zinc-900 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 font-bold text-sm shadow-sm transition-all"
          >
            <span>Book Your Vehicle Into Our Bolton Workshop</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

