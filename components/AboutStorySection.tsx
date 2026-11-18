'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Truck, Award, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function AboutStorySection() {
  return (
    <section id="about" className="py-16 md:py-24 relative scroll-mt-20 border-t border-zinc-200/80 dark:border-white/5 bg-white dark:bg-workshop-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 shadow-lg aspect-[4/3] sm:aspect-[1/1] bg-zinc-900">
              <Image
                src="/images/about/about-hero.jpg"
                alt="Latin King Detailing founder working on vehicle paint correction in Manchester"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 p-4 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200 dark:border-white/15 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">
                    Fully Mobile Detailing
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Direct to your home or workplace across Manchester
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder's Story & Mission */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            <div>
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-3">
                Passion for Car Detailing
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Based in Urmston &amp; Flixton, Greater Manchester</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
              With years of experience in professional car detailing, I founded Latin King Detailing out of a true passion for cars and perfection. Based in Urmston, Manchester, I specialise in interior and exterior detailing, paint correction, ceramic coating, and full vehicle protection.
            </p>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
              I take pride in every vehicle I work on, treating it as if it were my own. Offering a fully mobile service, I bring expert car detailing directly to your home, workplace, or any location convenient for you, making it easy to keep your car looking its absolute best. My goal is simple: high-quality results, attention to detail, and complete customer satisfaction.
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                <div className="font-mono text-lg font-bold text-red-600 dark:text-red-400">
                  100%
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Mobile Service
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  At home or work
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                <div className="font-mono text-lg font-bold text-red-600 dark:text-red-400">
                  Urmston
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Manchester HQ
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  + Fully Mobile
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 col-span-2 sm:col-span-1">
                <div className="font-mono text-lg font-bold text-red-600 dark:text-red-400">
                  4.7 / 5.0
                </div>
                <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Google &amp; Facebook
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Customer satisfaction
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-workshop-card hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold text-xs border border-zinc-200 dark:border-white/10 transition-colors"
              >
                <span>Chat with the Founder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
