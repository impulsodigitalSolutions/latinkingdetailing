import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonTable } from '@/components/ComparisonTable';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { QuoteSection } from '@/components/QuoteSection';
import { Sparkles, Shield, ShieldCheck, ChevronRight, CheckCircle2, XCircle, ArrowRight, Layers } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Ceramic Coating vs PPF vs Wax | Protection Comparison Matrix | Latin King Detailing Bolton',
  description:
    'Compare Ceramic Pro 9H nanoceramic coating, KAVACA self-healing Paint Protection Film (PPF), and traditional carnauba waxes. Learn which protection suits your driving habits in Greater Manchester.',
  openGraph: {
    title: 'Ceramic Coating vs PPF vs Wax Comparison | Latin King Detailing',
    description:
      'Detailed automotive paint protection matrix. Scratch resistance, stone chip defense, self-healing surfaces, and lifespan comparisons.',
    url: 'https://ceramicpromanchester.com/comparison',
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function ComparisonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      {/* Sticky Floating Capsule Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Dedicated Page Hero Banner */}
        <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 border-b border-zinc-200/60 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold">Protection Comparison</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                Ceramic Coating vs PPF vs Traditional Wax
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                Not all automotive protections are created equal. Understand the differences between nanoceramic quartz bonding, self-healing polyurethane film, and dealership waxes so you make an informed investment for your vehicle.
              </p>
            </div>
          </div>
        </section>

        {/* The Direct Protection Matrix Table Component */}
        <ComparisonTable />

        {/* Protection Packages Detailed Breakdown */}
        <section className="py-16 bg-white dark:bg-workshop-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                Which Protection Strategy Fits Your Driving Habits?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                Every vehicle and driving routine is unique. Here is how our Bolton detailing specialists recommend choosing:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ceramic Pro 9H Card */}
              <div className="rounded-3xl border border-red-500/30 bg-red-500/[0.02] dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white font-extrabold text-[10px] rounded-bl-2xl">
                  Most Popular
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white">
                    Ceramic Pro 9H
                  </h3>
                  <div className="text-xs font-bold text-red-600 dark:text-red-400 mb-3">
                    Molecular Nanoceramic Shield
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    Permanently fuses into clear coat pores to create a 9H diamond-hard glass barrier. Eliminates oxidation, blocks UV radiation, sheds road dirt continuously, and prevents wash swirls.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>2 to 5+ years traceable VIN warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Extreme &gt;110° hydrophobic water beading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Ideal for daily commuters &amp; family cars</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services#ceramic-coating"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs text-center transition-colors shadow-md"
                >
                  Explore 9H Ceramic Coating
                </Link>
              </div>

              {/* KAVACA PPF Card */}
              <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white">
                    KAVACA PPF
                  </h3>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                    Self-Healing Stone Chip Armor
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    An 8-mil optically clear polyurethane shield engineered to physically deflect high-speed gravel, road debris, and stone chips on motorways (M61, M60, M62).
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Instant solar/engine heat scratch healing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Up to 10-year factory warranty against yellowing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Essential for high-mileage &amp; performance cars</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services#paint-protection-film"
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 text-white font-bold text-xs text-center transition-colors"
                >
                  Explore KAVACA PPF
                </Link>
              </div>

              {/* Hybrid King Setup Card */}
              <div className="rounded-3xl border border-purple-500/30 bg-purple-500/[0.02] dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white">
                    The King’s Hybrid Setup
                  </h3>
                  <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-3">
                    PPF Front End + Full 9H Body
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    The gold standard for prestige vehicles and supercars. Front bumper, bonnet, and mirrors receive KAVACA PPF stone chip immunity, while the rest of the car is locked in Ceramic Pro 9H gloss.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>Total physical &amp; chemical defense</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>Direct optical match across all panels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>Maximum resale value preservation</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services"
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs text-center transition-colors shadow-md"
                >
                  View All Detailing Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Directions & Location */}
        <WorkshopAndGuides />

        {/* Quote Request Form */}
        <QuoteSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
