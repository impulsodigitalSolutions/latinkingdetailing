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
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#14151a] text-[#0f172a] dark:text-[#f3f4f6] relative transition-colors duration-300">
      {/* Soft ambient background crimson glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/[0.04] dark:bg-red-600/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-[40%] right-0 w-[600px] h-[600px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] left-0 w-[700px] h-[700px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
      </div>

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

