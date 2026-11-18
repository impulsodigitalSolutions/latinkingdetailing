'use client';

import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost, SITE_CONFIG } from '@/lib/site-data';
import { MapView } from './MapView';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  ArrowRight,
  ExternalLink,
  X,
} from 'lucide-react';

export function WorkshopAndGuides() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 md:py-24 relative bg-zinc-50/50 dark:bg-workshop-muted/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Part: Visit Latin King Detailing Base */}
        <div className="mb-20">
          <div className="rounded-3xl border border-zinc-200 dark:border-workshop-border bg-white dark:bg-workshop-card-subtle overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Location Info (6 cols) */}
            <div className="p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                  Visit Latin King Detailing in Manchester
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2 max-w-[60ch] leading-[1.65]">
                  {SITE_CONFIG.primaryWorkshop.landmark}. Secure indoor bay with temperature-controlled infrared curing lights and cleanroom detailing conditions.
                </p>

                <div className="mt-6 space-y-3 text-xs sm:text-sm">
                  {/* Manchester Workshop Primary */}
                  <a
                    href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-workshop-border hover:border-red-500/50 hover:bg-red-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>{SITE_CONFIG.brandName}: Manchester Workshop (HQ)</span>
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
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-workshop-border hover:border-red-500/50 hover:bg-red-500/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition-colors group"
                  >
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>Manchester Base: Flixton</span>
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
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-50 dark:bg-workshop-row border border-zinc-200 dark:border-workshop-border">
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
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-workshop-border flex flex-wrap items-center gap-3">
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 active:bg-zinc-100 dark:active:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
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
            <h3 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
              Manchester Detailing Guides &amp; Protection Advice
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-[60ch] mx-auto leading-[1.65]">
              Expert articles and paint protection guides written by certified Ceramic Pro technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-workshop-card-subtle border border-zinc-200 dark:border-workshop-border hover:border-red-500/40 dark:hover:border-red-500/40 transition-colors duration-200 flex flex-col justify-between cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedPost(post);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-600 dark:text-red-400 font-semibold text-xs">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs">{post.readTime}</span>
                  </div>

                  <h4 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 line-clamp-3 leading-[1.65]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-workshop-border flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
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
            className="fixed inset-0 bg-black/85"
            onClick={() => setSelectedPost(null)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="guide-modal-title"
            className="relative w-full max-w-2xl my-8 bg-white dark:bg-workshop-card border border-zinc-200 dark:border-workshop-border rounded-3xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
          >
            <div className="p-6 sm:p-8 border-b border-zinc-200 dark:border-workshop-border flex items-start justify-between">
              <div>
                <h2 id="guide-modal-title" className="text-2xl font-black text-zinc-900 dark:text-white">
                  {selectedPost.title}
                </h2>
                <p className="text-xs text-red-600 dark:text-red-400 font-semibold mt-1">
                  {selectedPost.category} · {selectedPost.readTime}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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

            <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-workshop-row border-t border-zinc-200 dark:border-workshop-border flex items-center justify-between text-xs">
              <span className="text-zinc-500">
                Latin King Detailing · Ceramic Pro 9H Certified
              </span>
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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
