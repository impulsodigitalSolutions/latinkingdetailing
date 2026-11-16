import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonTable } from '@/components/ComparisonTable';
import { QuoteSection } from '@/components/QuoteSection';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { ServicesDetailView } from '@/components/ServicesDetailView';
import { SITE_CONFIG } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Our Detailing & Ceramic Coating Services | Latin King Detailing Bolton',
  description:
    'Explore our 7 professional car detailing and paint protection services in Bolton: Ceramic Pro 9H Coating, Machine Polishing, Leather Protection, The King’s Detail, Deep Clean & Engine Bay, Full & Mini Valets, and Maintenance Washes.',
  openGraph: {
    title: 'Professional Automotive Detailing Services | Latin King Detailing',
    description:
      'Certified Ceramic Pro 9H installer and KAVACA PPF specialist based in Farnworth, Bolton. Transparent pricing, multi-stage machine polishing, and showroom restorations.',
    url: 'https://ceramicpromanchester.com/services',
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      {/* Sticky Floating Capsule Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Dedicated Services Deep Dive Component */}
        <ServicesDetailView />

        {/* Protection Matrix Component */}
        <ComparisonTable />

        {/* Bolton Workshop Facilities & Directions */}
        <WorkshopAndGuides />

        {/* Quote Request Section */}
        <QuoteSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

