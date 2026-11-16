'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost, SITE_CONFIG } from '@/lib/site-data';
import { MapView } from './MapView';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Calendar,
  X,
} from 'lucide-react';
import { WhatsAppIcon } from './icons/BrandIcons';

export function WorkshopAndGuides() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-[#181920]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part: Visit Us in Farnworth, Bolton & Manchester Base */}
        <div className="mb-20">
          <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#1d1e25] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Info (6 cols) */}
            <div className="p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-4">
                  <MapPin className="w-3.5 h-3.5" /> Workshop Facilities
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Visit Us in Farnworth, Bolton & Manchester
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
                  {SITE_CONFIG.primaryWorkshop.landmark}. Secure indoor bay with temperature-controlled infrared curing lights and cleanroom detailing conditions.
                </p>

                <div className="mt-6 space-y-3 text-xs sm:text-sm">
                  {/* Bolton Workshop Primary */}
                  <a
                    href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10 hover:border-red-500/50 hover:bg-red-500/5 transition-all group"
                  >
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>{SITE_CONFIG.brandName} — Bolton Workshop (HQ)</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500" />
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        {SITE_CONFIG.primaryWorkshop.fullAddress}
                      </div>
                      <div className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-0.5">
                        5 minutes from junction 4 of the M61 · Click to open Google Maps
                      </div>
                    </div>
                  </a>

                  {/* Manchester Base Secondary (Flixton) */}
                  <a
                    href={SITE_CONFIG.secondaryWorkshop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10 hover:border-red-500/50 hover:bg-red-500/5 transition-all group"
                  >
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>Manchester Base — Flixton</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-red-500" />
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        {SITE_CONFIG.secondaryWorkshop.fullAddress}
                      </div>
                      <div className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-0.5">
                        Flixton, Urmston & Trafford Base · Click to open Google Maps
                      </div>
                    </div>
                  </a>

                  {/* Opening Hours */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10">
                    <Clock className="w-5 h-5 text-red-500 shrink-0" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white">Opening Hours</div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        {SITE_CONFIG.openingHours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30 transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 text-zinc-800 dark:text-zinc-200 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Map View matching user screenshot (6 cols) */}
            <div className="lg:col-span-6 p-4 sm:p-6 bg-zinc-100/50 dark:bg-black/20 flex flex-col justify-center">
              <MapView />
            </div>
          </div>
        </div>

        {/* Bottom Part: Advice & Guides */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" /> Detailing Knowledge
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
              Advice & Guides —{' '}
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                Bolton Detailing Insights
              </span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
              Expert articles and paint protection guides written by certified Ceramic Pro technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 font-bold uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-modal-title"
            className="relative w-full max-w-2xl my-8 bg-white dark:bg-[#1a1b22] border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
          >
            <div className="p-6 sm:p-8 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider">
                  {selectedPost.category} · {selectedPost.readTime}
                </span>
                <h3 id="guide-modal-title" className="text-2xl font-black text-zinc-900 dark:text-white mt-3">
                  {selectedPost.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                aria-label="Close guide modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-[#16171d] border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500">
                Latin King Detailing · Ceramic Pro 9H Certified
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold cursor-pointer shadow-md shadow-red-600/30"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
