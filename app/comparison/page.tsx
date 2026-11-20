import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Sparkles, Shield, ShieldCheck, ChevronRight, CheckCircle2, XCircle, ArrowRight, Layers } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Ceramic Coating vs Dealership Sealant vs Wax',
  description:
    'Compare Ceramic Pro 9H nanoceramic coating, dealership paint protection sealants, and traditional carnauba waxes. Learn why true molecular bonding outperforms dealership add-ons.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/comparison`,
  },
  openGraph: {
    title: 'Ceramic Coating vs Dealership Sealant vs Wax | Latin King Detailing',
    description:
      'Detailed automotive paint protection matrix. Scratch resistance, chemical immunity, water beading, and lifespan comparisons.',
    url: `${SITE_CONFIG.baseUrl}/comparison`,
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
              <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
                Ceramic Coating vs Dealership Sealant vs Wax
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[60ch] leading-[1.65]">
                Not all automotive paint protections are created equal. Understand the differences between nanoceramic molecular bonding, quick-wipe dealership sealants, and traditional waxes so you make an informed investment for your vehicle.
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
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                Which Detailing Service Fits Your Car?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-[60ch] mx-auto leading-[1.65]">
                Every vehicle and driving routine is unique. Here is how our detailing specialists recommend choosing:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ceramic Pro 9H Card */}
              <div className="rounded-3xl border border-red-500/30 bg-red-500/[0.02] dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-bl-2xl">
                  Most Popular
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white">
                    Ceramic Pro 9H
                  </h3>
                  <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-3">
                    Molecular Nanoceramic Shield · From <span className="font-mono font-medium">£200</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65] mb-6 max-w-[60ch]">
                    Permanently fuses into clear coat pores to create a 9H diamond-hard glass barrier. Eliminates oxidation, blocks UV radiation, sheds road dirt continuously, and prevents wash swirls.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>2 to 5+ years verifiable protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Extreme &gt;110° hydrophobic water beading</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Ideal for daily commuters &amp; prized cars</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/ceramic-coating"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs text-center transition-colors shadow-md"
                >
                  Explore 9H Ceramic Coating
                </Link>
              </div>

              {/* Machine Polishing Card */}
              <div className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-500 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white">
                    Paint Correction
                  </h3>
                  <div className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-3">
                    Machine Polishing · From <span className="font-mono font-medium">£250</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65] mb-6 max-w-[60ch]">
                    Safely refines your clear coat using single or multi-stage rotary polishing to eliminate swirl marks, light scratches, buffer trails, and dull road oxidation.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>True permanent defect elimination</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Essential defect-free foundation for coating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Restores deep factory mirror reflections</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/machine-polishing"
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20 text-white font-bold text-xs text-center transition-colors"
                >
                  Explore Paint Correction
                </Link>
              </div>

              {/* The King's Detail Card */}
              <div className="rounded-3xl border border-red-500/30 bg-red-500/[0.02] dark:bg-workshop-card p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-[1.25rem] leading-[1.3] tracking-[-0.01em] text-zinc-900 dark:text-white">
                    The King’s Detail
                  </h3>
                  <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-3">
                    Full Restoration · From <span className="font-mono font-medium">£180</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65] mb-6 max-w-[60ch]">
                    Our signature multi-stage interior and exterior restoration. Safe two-bucket wash, iron fallout decontam, machine polish, and wet upholstery extraction down to every stitch.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Full exterior decontam &amp; gloss polish</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Deep wet carpet &amp; upholstery extraction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Source-level interior odour elimination</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/services/the-kings-detail"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs text-center transition-colors shadow-md"
                >
                  Explore The King’s Detail
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
