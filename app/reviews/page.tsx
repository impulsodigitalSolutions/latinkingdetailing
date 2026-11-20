import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Reviews } from '@/components/Reviews';
import { GoogleIcon, FacebookIcon, StarRating } from '@/components/icons/BrandIcons';
import { CheckCircle2, ChevronRight, Star, ExternalLink, Sparkles, PenSquare, MapPin } from 'lucide-react';
import { REVIEWS } from '@/lib/site-data';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema, getReviewsSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: '5-Star Customer Reviews & Ratings',
  description:
    'Read 60+ verified 5.0-star Google reviews for Latin King Detailing in Manchester. Genuine customer feedback on Ceramic Pro 9H coating and paint correction.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/reviews`,
  },
  openGraph: {
    title: '5-Star Customer Reviews & Ratings | Latin King Detailing',
    description:
      'Read 60+ verified 5.0-star Google reviews for Latin King Detailing in Manchester. Genuine customer feedback on Ceramic Pro 9H coating and paint correction.',
    url: `${SITE_CONFIG.baseUrl}/reviews`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Customer Reviews', url: `${SITE_CONFIG.baseUrl}/reviews` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-reviews" data={getReviewsSchema(REVIEWS, SITE_CONFIG.googleRating, SITE_CONFIG.googleReviewCount)} />
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
              <span className="text-zinc-900 dark:text-white font-semibold">Customer Reviews</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
                  What Manchester Drivers Say
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[60ch] leading-[1.65]">
                  Real feedback from prestige car owners, daily commuters, and commercial clients across Urmston, Flixton, and Greater Manchester who trust Latin King Detailing.
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
                    <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white">
                      <span><span className="font-mono tabular-nums">5.0</span> Stars</span>
                      <StarRating rating={5.0} size="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="font-mono tabular-nums">60+</span> Verified Google Reviews
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
                    <div className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-white">
                      <span><span className="font-mono tabular-nums">5.0</span> Stars</span>
                      <StarRating rating={5.0} size="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="font-mono tabular-nums">760+</span> Followers
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Interactive Reviews Component */}
        <Reviews limit={100} showHeading={false} showViewAll={false} />

        {/* Call to Action: Leave a Review */}
        <section className="py-14 bg-zinc-50 dark:bg-workshop-muted/60 border-y border-zinc-200 dark:border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-3">
              Had Your Car Detailed by Latin King Detailing?
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 leading-[1.65]">
              Your feedback helps other Manchester drivers make informed choices about protecting their vehicles. Share your direct experience on Google.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <PenSquare className="w-4 h-4" />
                <span>Leave a Review on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-300 dark:border-white/10 hover:border-red-500 dark:hover:border-red-500 bg-white dark:bg-workshop-card-subtle text-zinc-900 dark:text-white font-bold text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>View Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
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
