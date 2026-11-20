import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FaqSection } from '@/components/FaqSection';
import { HelpCircle, ChevronRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import { FAQ_ITEMS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Car Detailing FAQs & Pricing Guide',
  description:
    'Clear answers on Ceramic Pro 9H nanocoating durability, paint correction stages, valeting frequency, and pricing for all Greater Manchester car owners.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/faq`,
  },
  openGraph: {
    title: 'Car Detailing FAQs & Pricing Guide | Latin King Detailing',
    description:
      'Clear answers on Ceramic Pro 9H nanocoating durability, paint correction stages, valeting frequency, and pricing for all Greater Manchester car owners.',
    url: `${SITE_CONFIG.baseUrl}/faq`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function FaqPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'FAQs', url: `${SITE_CONFIG.baseUrl}/faq` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-faq" data={getFaqSchema(FAQ_ITEMS)} />
      <JsonLd id="schema-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
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
              <span className="text-zinc-900 dark:text-white font-semibold">FAQs</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
                Frequently Asked Detailing Questions
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[60ch] leading-[1.65]">
                Clear, honest answers about Ceramic Pro 9H coating, paint correction stages, valeting frequency, pricing estimates, and our Manchester mobile and base booking process.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Interactive FAQ Accordion Component */}
        <FaqSection />

        {/* Instant WhatsApp Guidance Banner */}
        <section className="py-12 bg-zinc-50 dark:bg-workshop-muted/60 border-y border-zinc-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-2">
              Have a Specific Question About Your Car?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-[60ch] mx-auto mb-6 leading-[1.65]">
              Send us a photo of your vehicle&apos;s paintwork or interior on WhatsApp. We&apos;ll give you an honest recommendation and transparent price estimate with zero sales pressure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-lg shadow-emerald-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp (07482 225323)</span>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white/10 hover:bg-zinc-800 dark:hover:bg-white/20 text-white font-bold text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Direct</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
