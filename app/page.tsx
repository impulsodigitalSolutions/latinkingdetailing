import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { Gallery } from '@/components/Gallery';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Reviews } from '@/components/Reviews';
import { ServiceAreas } from '@/components/ServiceAreas';
import { FaqSection } from '@/components/FaqSection';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { QuoteSection } from '@/components/QuoteSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#14151a] text-[#0f172a] dark:text-[#f3f4f6] relative transition-colors duration-300">
      {/* Soft ambient background crimson glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/[0.04] dark:bg-red-600/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-0 w-[600px] h-[600px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[25%] left-0 w-[700px] h-[700px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
      </div>

      {/* Sticky Floating Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Key Metrics & Trust Bar */}
        <StatsBar />

        {/* Recent Work Gallery */}
        <Gallery />

        {/* Core Services Section */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive Comparison Table */}
        <ComparisonTable />

        {/* Customer Reviews */}
        <Reviews />

        {/* Service Areas & Trusted Network */}
        <ServiceAreas />

        {/* Interactive FAQ Accordion */}
        <FaqSection />

        {/* Workshop Location & Advice Guides */}
        <WorkshopAndGuides />

        {/* Quote Request & CTA Section */}
        <QuoteSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
