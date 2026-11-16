import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reviews } from '@/components/Reviews';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { QuoteSection } from '@/components/QuoteSection';
import { GoogleIcon, FacebookIcon, StarRating } from '@/components/icons/BrandIcons';
import { CheckCircle2, ChevronRight, Star, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import { SITE_CONFIG, REVIEWS } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Customer Reviews & Ratings | Latin King Detailing Bolton',
  description:
    'Read verified customer reviews for Latin King Detailing in Farnworth, Bolton. 4.7★ Google rating and 5.0★ Facebook rating from prestige and daily car owners across Greater Manchester.',
  openGraph: {
    title: 'Customer Reviews & Testimonials | Latin King Detailing',
    description:
      'Verified customer ratings and testimonials for Ceramic Pro 9H coating, paint correction, and valeting services in Bolton.',
    url: 'https://ceramicpromanchester.com/reviews',
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
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
              <span className="text-zinc-900 dark:text-white font-semibold">Customer Reviews</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                  What Bolton &amp; Manchester <span className="text-red-600 dark:text-red-500">Drivers Say</span>
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                  Real feedback from prestige car owners, daily commuters, and commercial clients across Bolton, Farnworth, and Greater Manchester who trust Latin King Detailing.
                </p>
              </div>

              {/* Verified Platforms Summary Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-3xl bg-white dark:bg-workshop-card-subtle border border-zinc-200 dark:border-white/10 shadow-md hover:border-red-500/40 transition-colors flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <GoogleIcon className="w-7 h-7" />
                  <div>
                    <div className="flex items-center gap-1.5 font-black text-zinc-900 dark:text-white">
                      <span>4.7 Stars</span>
                      <StarRating rating={4.7} size="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      15 Verified Google Reviews
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/latinkingdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-3xl bg-white dark:bg-workshop-card-subtle border border-zinc-200 dark:border-white/10 shadow-md hover:border-blue-500/40 transition-colors flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <FacebookIcon className="w-7 h-7 text-brand-fb" />
                  <div>
                    <div className="flex items-center gap-1.5 font-black text-zinc-900 dark:text-white">
                      <span>5.0 Stars</span>
                      <StarRating rating={5.0} size="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      47+ Community Reviews
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Interactive Reviews Component */}
        <Reviews />

        {/* Call to Action: Leave a Review */}
        <section className="py-12 bg-zinc-50 dark:bg-workshop-muted/60 border-y border-zinc-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-2">
              Had Your Car Detailed by Latin King Detailing?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-6">
              Your feedback helps other Bolton drivers make informed choices about protecting their vehicles. Share your experience on Google.
            </p>
            <a
              href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Leave a Review on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Workshop Facilities & Guides */}
        <WorkshopAndGuides />

        {/* Quote Request Form */}
        <QuoteSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
