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
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      {/* Sticky Floating Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
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
