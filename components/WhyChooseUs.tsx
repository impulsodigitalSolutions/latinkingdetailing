'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles, Wrench, CheckCircle2 } from 'lucide-react';

const WHY_US_BENEFITS = [
  'Experienced professionals',
  'High-quality products',
  'Customized services',
  'Customer satisfaction guaranteed',
];

const SPECIALISMS = [
  {
    id: 'interior',
    title: 'Interior Detailing',
    slug: 'leather-coating',
    image: '/images/about/interior-detailing.jpg',
    alt: 'Latin King Detailing - Lotus luxury interior detailing in Manchester',
    desc: 'Thorough cleaning and protection of all interior surfaces for a fresh and hygienic environment.',
  },
  {
    id: 'exterior',
    title: 'Exterior Detailing',
    slug: 'the-kings-detail',
    image: '/images/about/exterior-detailing.jpg',
    alt: 'Latin King Detailing - Porsche Taycan exterior detailing with mobile detailing van',
    desc: "Expert polishing and protection to enhance your vehicle's appearance and longevity.",
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    slug: 'machine-polishing',
    image: '/images/about/paint-correction.jpg',
    alt: 'Latin King Detailing - Precision machine polishing and scratch restoration',
    desc: 'Restoration of your vehicle’s original finish, eliminating scratches and imperfections.',
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    slug: 'ceramic-coating',
    image: '/images/about/ceramic-coating.jpg',
    alt: 'Latin King Detailing - High gloss nanoceramic coating on BMW M-Sport',
    desc: 'Advanced protection that offers durability and a glossy finish.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 relative scroll-mt-20 border-t border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-[1.65] max-w-[60ch]">
            Discover the numerous benefits of choosing Latin King Detailing for your car detailing needs:
          </p>

          {/* 4 Benefits Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {WHY_US_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 shadow-sm"
              >
                <div className="w-6 h-6 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Specialisms Grid matching reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SPECIALISMS.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-sm hover:border-red-500/40 transition-colors flex flex-col"
            >
              {/* Photo Container */}
              <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-xl sm:text-2xl text-red-600 dark:text-red-500 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 transition-colors"
                  >
                    <span>View {item.title} Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
