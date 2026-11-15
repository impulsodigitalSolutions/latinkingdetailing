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
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
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
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                  >
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>{SITE_CONFIG.brandName} — Bolton Workshop (HQ)</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500" />
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        {SITE_CONFIG.primaryWorkshop.fullAddress}
                      </div>
                      <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">
                        5 minutes from junction 4 of the M61 · Click to open Google Maps
                      </div>
                    </div>
                  </a>

                  {/* Manchester Base Secondary (Flixton) */}
                  <a
                    href={SITE_CONFIG.secondaryWorkshop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all group"
                  >
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>Manchester Base — Flixton</span>
                        <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-500" />
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        {SITE_CONFIG.secondaryWorkshop.fullAddress}
                      </div>
                      <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">
                        Flixton, Urmston & Trafford Base · Click to open Google Maps
                      </div>
                    </div>
                  </a>

                  {/* Opening Hours */}
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-[#16171d] border border-zinc-200 dark:border-white/10">
                    <Clock className="w-5 h-5 text-amber-500 shrink-0" />
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
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-white/10 flex flex-wrap gap-3">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-white/15 text-zinc-800 dark:text-zinc-200 hover:text-amber-500 hover:border-amber-500 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-4 h-4 text-amber-500" />
                  <span>Directions (Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Google Maps Viewport with Overlay (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center p-3 sm:p-6 bg-zinc-50/50 dark:bg-[#14151a]/60">
              <MapView />
            </div>
          </div>
        </div>

        {/* Bottom Part: Advice & Guides */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" /> Expert Guidance
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                Advice & Guides
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
                Knowledgeable articles from our certified technicians on maintaining paintwork in UK driving conditions.
              </p>
            </div>
          </div>

          {/* 3 Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group relative rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed font-normal">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-white/10 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>Read Full Guide ({post.readTime})</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-2xl bg-white dark:bg-[#1a1b22] border border-zinc-200 dark:border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto z-10 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
              {selectedPost.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 my-4 pb-4 border-b border-zinc-200 dark:border-white/10">
              <span>By {selectedPost.author}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Latin King Detailing — Farnworth, Bolton
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase cursor-pointer"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
