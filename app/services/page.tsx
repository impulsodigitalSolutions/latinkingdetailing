import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServicesDetailView } from '@/components/ServicesDetailView';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Detailing & Ceramic Coating Services',
  description:
    'Certified Ceramic Pro 9H coating, multi-stage machine polishing, and deep interior detailing in Manchester. Transparent pricing and guaranteed showroom finish.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/services`,
  },
  openGraph: {
    title: 'Detailing & Ceramic Coating Services | Latin King Detailing',
    description:
      'Certified Ceramic Pro 9H coating, multi-stage machine polishing, and deep interior detailing in Manchester. Transparent pricing and guaranteed showroom finish.',
    url: `${SITE_CONFIG.baseUrl}/services`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Services', url: `${SITE_CONFIG.baseUrl}/services` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
      {/* Sticky Floating Capsule Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Dedicated Services Deep Dive Component */}
        <ServicesDetailView />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

