import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Cookie, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'Cookie Policy for Latin King Detailing in accordance with UK PECR and GDPR. Details on strictly necessary and analytical cookies.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/cookie-policy`,
  },
  openGraph: {
    title: 'Cookie Policy | Latin King Detailing',
    description:
      'Cookie Policy for Latin King Detailing in accordance with UK PECR and GDPR.',
    url: `${SITE_CONFIG.baseUrl}/cookie-policy`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function CookiePolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Cookie Policy', url: `${SITE_CONFIG.baseUrl}/cookie-policy` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold">Cookie Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Cookie className="w-3.5 h-3.5" />
              <span>UK PECR &amp; GDPR Compliance</span>
            </div>
            <h1 className="font-heading font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
              Cookie Policy
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Last updated: 20 November 2026 · Compliant with Privacy and Electronic Communications Regulations (PECR)
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device by websites you visit. Under UK PECR regulations, websites must obtain informed, freely given consent before storing non-essential cookies on your computer or mobile device.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                2. Categories of Cookies We Use
              </h2>
              <div className="space-y-4 mt-3">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200 dark:border-white/10">
                  <h3 className="font-bold text-zinc-900 dark:text-white">Strictly Necessary Cookies (Always Active)</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    Required for the operation of the website, including storing your theme preference (dark/light mode) and recording your cookie consent preferences (`lk_consent`). These do not track personal identifying information and do not require prior consent under UK law.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200 dark:border-white/10">
                  <h3 className="font-bold text-zinc-900 dark:text-white">Analytics Cookies (Optional - Requires Consent)</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                    We use Google Analytics 4 (GA4) and Microsoft Clarity to understand how visitors find and interact with our pages (e.g. tracking aggregate conversion clicks on telephone or WhatsApp buttons). These cookies are completely blocked by default until you grant explicit consent in our cookie banner.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                3. Managing Your Cookie Preferences
              </h2>
              <p>
                You can change or withdraw your consent at any time by clicking the &quot;Cookie Settings&quot; link in our website footer or by clearing your browser cookies.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
