'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useModals } from './ModalContext';
import { X, MapPin, Sparkles, Shield, ArrowRight } from 'lucide-react';

export function GalleryModal() {
  const { selectedGalleryItem, closeGalleryModal, openQuoteModal } = useModals();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedGalleryItem) {
        closeGalleryModal();
      }
    };
    if (selectedGalleryItem) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGalleryItem, closeGalleryModal]);

  if (!selectedGalleryItem) return null;

  const item = selectedGalleryItem;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={closeGalleryModal}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="relative w-full max-w-4xl my-8 bg-[#181920] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white transition-all"
      >
        <button
          type="button"
          onClick={closeGalleryModal}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10"
          aria-label="Close image viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Big Image Viewport */}
        <div className="relative w-full h-72 sm:h-96 md:h-[460px] bg-zinc-900">
          <Image
            src={item.imageUrl}
            alt={item.imageAlt}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

          {/* Bottom badge overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/90 text-zinc-950 font-bold text-xs uppercase tracking-wider backdrop-blur-sm shadow-md">
              {item.finish}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-zinc-300 border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Details & CTA with Official Logo */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-amber-500/40 p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 id="gallery-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="text-zinc-400 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                closeGalleryModal();
                openQuoteModal(`Finish like ${item.title}`);
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get This Finish</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800 text-sm">
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
              <span className="text-xs uppercase font-bold text-zinc-500 block mb-1">
                Applied Package
              </span>
              <span className="text-white font-medium flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                {item.package}
              </span>
            </div>
            <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
              <span className="text-xs uppercase font-bold text-zinc-500 block mb-1">
                Workshop Location
              </span>
              <span className="text-white font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                Latin King Detailing, Farnworth, Bolton
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-300 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

