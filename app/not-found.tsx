import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-config';
import { ShieldAlert, ArrowRight, Home, Phone, Wrench, MapPin, Compass } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | Latin King Detailing',
  description:
    'The requested car detailing page could not be found. Explore our ceramic coating packages, machine polishing services, and Greater Manchester locations.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 mx-auto shadow-xl">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400">
              Error 404 · Page Not Found
            </span>
            <h1 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
              We Couldn&apos;t Find That Page
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed">
              The page or detailing package you requested may have moved or been updated. Choose from our key services and local resources below:
            </p>
          </div>

          {/* Quick Helpful Route Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            <Link
              href="/"
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <Home className="w-4 h-4 text-red-500 shrink-0" />
                <span>Return to Homepage</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Ceramic Pro 9H studio &amp; mobile detailing overview.
              </p>
            </Link>

            <Link
              href="/services"
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <Wrench className="w-4 h-4 text-red-500 shrink-0" />
                <span>All Detailing Services</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Paint correction, leather coatings &amp; maintenance.
              </p>
            </Link>

            <Link
              href="/locations"
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Service Locations</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Urmston, Flixton, Altrincham, Sale, and Cheshire.
              </p>
            </Link>

            <Link
              href="/our-work"
              className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group"
            >
              <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                <Compass className="w-4 h-4 text-red-500 shrink-0" />
                <span>Before &amp; After Portfolio</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Verified gallery of real workshop transformations.
              </p>
            </Link>
          </div>

          {/* Direct Contact CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 font-semibold text-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Call Workshop: {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-red-600/20"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
