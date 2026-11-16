'use client';

import React from 'react';
import { STATS } from '@/lib/site-data';
import { Star, Users, ShieldCheck, Shield } from 'lucide-react';

export function StatsBar() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Star className="w-6 h-6 text-red-500 fill-red-500/20" />;
      case 1:
        return <Users className="w-6 h-6 text-red-500" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-red-500" />;
      case 3:
      default:
        return <Shield className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section className="relative py-8 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-workshop-muted/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-5 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-sm hover:border-red-500/40 dark:hover:border-red-500/40 transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/20">
                  {getIcon(idx)}
                </div>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-medium">
                  Verified
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-red-600 dark:text-red-500 mt-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
