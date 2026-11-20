import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { Shield, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Latin King Detailing in accordance with UK GDPR and the Data Protection Act 2018. Learn how we handle your personal data.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy | Latin King Detailing',
    description:
      'Privacy Policy for Latin King Detailing in accordance with UK GDPR and the Data Protection Act 2018.',
    url: `${SITE_CONFIG.baseUrl}/privacy-policy`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Privacy Policy', url: `${SITE_CONFIG.baseUrl}/privacy-policy` },
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
              <span className="text-zinc-900 dark:text-white font-semibold">Privacy Policy</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5" />
              <span>UK GDPR Compliance</span>
            </div>
            <h1 className="font-heading font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Last updated: 20 November 2026 · Compliant with UK Data Protection Act 2018 &amp; UK GDPR
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                1. Data Controller
              </h2>
              <p>
                Latin King Detailing (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operating at 426 Flixton Road, Flixton, Urmston, Manchester, M41 6QT is the data controller responsible for your personal information. If you have any inquiries regarding data protection, you can reach us at <a href={SITE_CONFIG.emailHref} className="text-red-500 underline">{SITE_CONFIG.email}</a> or call <a href={SITE_CONFIG.phoneHref} className="text-red-500 underline">{SITE_CONFIG.phone}</a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                2. Information We Collect
              </h2>
              <p>
                When you contact us for a quote, make an appointment, or use our mobile detailing services, we may collect:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Your full name and contact details (email address, telephone number).</li>
                <li>Your residential address or workplace location for mobile service attendance.</li>
                <li>Vehicle registration number, make, model, and paint condition notes.</li>
                <li>Service records and warranty registration details for Ceramic Pro 9H applications.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                3. How We Use Your Data
              </h2>
              <p>
                We only process your information under lawful bases recognized by UK GDPR:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Contractual fulfillment:</strong> To book appointments, provide detailing services, and issue invoices.</li>
                <li><strong>Warranty tracking:</strong> To register factory Ceramic Pro 9H warranties against your vehicle VIN.</li>
                <li><strong>Consent:</strong> To respond to your direct queries on WhatsApp, email, or telephone.</li>
                <li>We never sell, rent, or trade your personal information to third-party marketing companies.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white mb-2">
                4. Your Rights Under UK GDPR
              </h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections, ask for data erasure, or lodge a complaint with the UK Information Commissioner&apos;s Office (ICO).
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
