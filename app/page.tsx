import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { GalleryCarousel } from '@/components/GalleryCarousel';
import { Services } from '@/components/Services';
import { AboutStorySection } from '@/components/AboutStorySection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Reviews } from '@/components/Reviews';
import { ServiceAreas } from '@/components/ServiceAreas';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getLocalBusinessSchema, getFaqSchema } from '@/lib/schema';
import { FAQ_ITEMS } from '@/lib/site-data';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-localbusiness" data={getLocalBusinessSchema()} />
      <JsonLd id="schema-faq" data={getFaqSchema(FAQ_ITEMS)} />
      {/* Sticky Floating Glassmorphic Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Hero Section */}
        <Hero />

        {/* Recent Work Gallery Infinite Carousel */}
        <GalleryCarousel />

        {/* Top 4 Flagship Services Section */}
        <Services limit={4} />

        {/* Founder Story & Passion for Car Detailing */}
        <AboutStorySection />

        {/* Why Choose Us & 4 Core Specialisms */}
        <WhyChooseUs />

        {/* Customer Reviews */}
        <Reviews />

        {/* Service Areas & Trusted Network */}
        <ServiceAreas />

        {/* Interactive FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}
