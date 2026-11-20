import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/site-data';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { BookOpen, Clock, Calendar, ArrowRight, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Detailing Guides & Protection Advice',
  description:
    'Expert automotive detailing guides: ceramic coating vs wax, winter maintenance tips for UK weather, and why machine paint correction is essential.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/guides`,
  },
  openGraph: {
    title: 'Car Detailing Guides & Protection Advice | Latin King Detailing',
    description:
      'Expert automotive detailing guides: ceramic coating vs wax, winter maintenance tips for UK weather, and why machine paint correction is essential.',
    url: `${SITE_CONFIG.baseUrl}/guides`,
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function GuidesIndexPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Guides', url: `${SITE_CONFIG.baseUrl}/guides` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Hero Section */}
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-zinc-200/60 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold">Guides &amp; Articles</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge &amp; Detailing Advice</span>
              </div>
              <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
                Car Detailing &amp; Ceramic Coating Guides
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[60ch] leading-[1.65]">
                Independent, honest guidance on automotive paint protection, ceramic nanocoatings, paint correction stages, and UK winter vehicle care from Manchester specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((guide) => (
                <article
                  key={guide.id}
                  className="rounded-3xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card-subtle p-6 sm:p-8 flex flex-col justify-between hover:border-red-500/40 transition-colors group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 font-semibold text-zinc-700 dark:text-zinc-300">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        {guide.readTime}
                      </span>
                    </div>

                    <h2 className="font-heading font-semibold text-xl sm:text-2xl text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors leading-snug">
                      <Link href={`/guides/${guide.slug}`}>
                        {guide.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
                      {guide.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-medium">
                      {guide.date}
                    </span>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
