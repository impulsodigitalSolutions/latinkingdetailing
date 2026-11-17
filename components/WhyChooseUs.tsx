'use client';

import React from 'react';
import { WHY_CHOOSE_US } from '@/lib/site-data';
import { Award, ShieldAlert, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export function WhyChooseUs() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-8 h-8 text-red-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 text-red-500" />;
      case 'MapPin':
      default:
        return <MapPin className="w-8 h-8 text-red-500" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
            Why Latin King Detailing: Manchester&apos;s Certified Studio
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-[60ch] mx-auto leading-[1.65]">
            We operate to strict manufacturer protocols so your vehicle receives uncompromising, traceable protection with real VIN warranties.
          </p>
        </div>

        {/* 3 Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((pillar) => (
            <div
              key={pillar.id}
              className="relative rounded-3xl p-8 bg-white dark:bg-workshop-card border border-zinc-200 dark:border-white/10 shadow-sm hover:border-red-500/50 dark:hover:border-red-500/50 transition-colors duration-200 flex flex-col justify-between group"
            >
              {/* Top Accent Pill */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/20">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-workshop-elevated text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-white/10">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-4 leading-[1.65] font-normal max-w-[60ch]">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-500">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Verified Workshop Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
