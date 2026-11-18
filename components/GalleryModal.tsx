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
        className="fixed inset-0 bg-black/90 transition-opacity"
        onClick={closeGalleryModal}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        className="relative w-full max-w-4xl my-8 bg-workshop-muted border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col text-white transition-colors"
      >
        <button
          type="button"
          onClick={closeGalleryModal}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors border border-white/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold shadow-md">
              {item.finish}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 text-xs text-zinc-300 border border-white/10 font-medium">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {item.location}
            </span>
          </div>
        </div>

        {/* Details & CTA with Official Logo */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-red-500/40 p-1 flex items-center justify-center shrink-0 shadow-md">
                <img
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 id="gallery-modal-title" className="font-heading font-semibold text-2xl sm:text-3xl text-white">
                  {item.title}
                </h2>
                <p className="text-zinc-400 text-sm mt-1 max-w-[60ch] leading-[1.65]">{item.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                closeGalleryModal();
                openQuoteModal(`Finish like ${item.title}`);
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Get Similar Finish</span>
            </button>
          </div>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
            {item.imageAlt}
          </p>

          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 font-semibold text-zinc-300">
                Package: {item.package}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 font-semibold text-zinc-300">
                Service: {item.service}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-red-500/30 text-red-400 font-semibold">
                Ceramic Pro 9H Certified
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500" />
              <span>Latin King Detailing: 426 Flixton Rd, Urmston (M41 6QT)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
