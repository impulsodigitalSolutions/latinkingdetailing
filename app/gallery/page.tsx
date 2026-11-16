import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { QuoteSection } from '@/components/QuoteSection';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Showroom Detailing & Ceramic Coating Gallery | Latin King Detailing Bolton',
  description:
    'Explore our portfolio of Ceramic Pro 9H ceramic coatings, multi-stage paint corrections, and deep interior valets completed at our Farnworth, Bolton workshop.',
  openGraph: {
    title: 'Showroom Detailing & Ceramic Coating Gallery | Latin King Detailing',
    description:
      'Genuine customer vehicle transformations from Bolton and Greater Manchester. Supercars, daily drivers, and prestige restorations.',
    url: 'https://ceramicpromanchester.com/gallery',
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#14151a] text-[#0f172a] dark:text-[#f3f4f6] relative transition-colors duration-300">
      {/* Soft ambient background crimson glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/[0.04] dark:bg-red-600/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-0 w-[600px] h-[600px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[25%] left-0 w-[700px] h-[700px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
      </div>

      {/* Sticky Floating Capsule Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Dedicated Page Hero Banner */}
        <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 border-b border-zinc-200/60 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold">Gallery</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bolton Workshop Showcase</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                Showroom Detailing &amp;{' '}
                <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                  Transformation Gallery
                </span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                Every vehicle featured here was detailed and protected inside our dedicated Farnworth workshop. From high-gloss 9H nanoceramic shielding to defect-free machine paint correction, browse real results from Greater Manchester owners.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  100% Genuine Customer Work
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  VIN-Registered Ceramic Pro Warranties
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Controlled Lighting Inspections
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Gallery Component */}
        <Gallery />

        {/* Workshop Quality Standards Callout */}
        <section className="py-12 bg-zinc-50 dark:bg-[#181920]/60 border-y border-zinc-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center font-bold text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-2">
                  Specialist Hexagon Studio Lighting
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Every curve is examined under balanced 6500K color-corrected lighting to expose micro-swirls, buffer trails, and sanding marks invisible to the naked eye.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center font-bold text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-2">
                  Digital Paint Depth Gauge Audits
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Before any machine polisher touches your vehicle, we measure clear coat thickness across all metal and plastic panels to ensure safe, precision refinement.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center font-bold text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-extrabold text-zinc-900 dark:text-white mb-2">
                  Dust-Controlled Ceramic Bays
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Our Ceramic Pro coatings cure under controlled temperature and humidity conditions in Farnworth, preventing airborne contamination from bonding into the quartz layer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Directions & Location Info */}
        <WorkshopAndGuides />

        {/* Quote Request & Booking Form */}
        <QuoteSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
