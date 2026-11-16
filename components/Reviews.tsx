'use client';

import React from 'react';
import Link from 'next/link';
import { REVIEWS, SITE_CONFIG } from '@/lib/site-data';
import { GoogleIcon, FacebookIcon, StarRating } from './icons/BrandIcons';
import { CheckCircle2, Quote, ExternalLink, Sparkles } from 'lucide-react';

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>{SITE_CONFIG.googleRating} ★ · {SITE_CONFIG.googleReviewCount} Google reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              What Bolton & Manchester{' '}
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                Drivers Say
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-3">
              Real feedback from prestige car owners across Bolton, Farnworth, and Greater Manchester who trust Latin King Detailing.
            </p>
          </div>

          {/* Social Proof Stats Badges */}
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm flex items-center gap-3">
              <GoogleIcon className="w-6 h-6" />
              <div>
                <div className="font-extrabold text-sm text-zinc-900 dark:text-white">
                  4.7 Stars
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  15 Google Reviews
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm flex items-center gap-3">
              <FacebookIcon className="w-6 h-6 text-[#1877F2]" />
              <div>
                <div className="font-extrabold text-sm text-zinc-900 dark:text-white">
                  5.0 Stars
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  760+ Followers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Authentic Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-3xl p-8 bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-red-500/40 dark:hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top reviewer meta & platform */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-rose-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {rev.vehicle} · {rev.date}
                      </div>
                    </div>
                  </div>

                  {rev.platform === 'Google' ? (
                    <span className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800" title="Google Verified Review">
                      <GoogleIcon className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800" title="Facebook Recommendation">
                      <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                    </span>
                  )}
                </div>

                {/* Star rating */}
                <div className="mb-4">
                  <StarRating rating={rev.rating} size="w-4 h-4" />
                </div>

                {/* Review Content */}
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              {/* Bottom Card Verification with Official Logo Emblem */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-zinc-950 border border-red-500/40 p-0.5 shrink-0">
                    <img
                      src="/images/logo-dark.png"
                      alt="Crown"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>Verified Customer</span>
                </div>
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-500 font-medium"
                >
                  <span>Read on {rev.platform}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Reviews Page Link */}
        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 bg-white dark:bg-[#1d1e25] text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Read All Verified Customer Reviews &amp; Testimonials →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
