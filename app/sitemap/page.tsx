import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/site-config';
import { SERVICES, BLOG_POSTS } from '@/lib/site-data';
import { AREA_DETAILS } from '@/lib/location-data';
import { ChevronRight, ArrowRight, ShieldCheck, MapPin, BookOpen, Layers, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'HTML Sitemap | Latin King Detailing',
  description:
    'Overview of all pages, automotive detailing services, expert guides, and service locations across Greater Manchester and Cheshire.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/sitemap`,
  },
  openGraph: {
    title: 'HTML Sitemap | Latin King Detailing',
    description:
      'Complete site index of pages, ceramic coating services, machine polishing guides, and Greater Manchester locations.',
    url: `${SITE_CONFIG.baseUrl}/sitemap`,
    siteName: SITE_CONFIG.brandName,
    type: 'website',
  },
};

export default function HtmlSitemapPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Sitemap', url: `${SITE_CONFIG.baseUrl}/sitemap` },
  ];

  const mainPages = [
    { name: 'Homepage', url: '/', desc: 'Ceramic Pro 9H certified detailing and paint protection studio.' },
    { name: 'Services Overview', url: '/services', desc: 'Full range of mobile valeting and workshop detailing packages.' },
    { name: 'Our Work & Gallery', url: '/our-work', desc: 'Verified portfolio of paint corrections, coatings, and transformations.' },
    { name: 'Locations & Coverage', url: '/locations', desc: 'Workshop hub and mobile service radius in Manchester & Cheshire.' },
    { name: 'Coating Comparison Matrix', url: '/comparison', desc: 'Ceramic Pro 9H vs Traditional Wax vs Sealants side-by-side.' },
    { name: 'Customer Reviews', url: '/reviews', desc: '5.0-star verified reviews from Google Maps and local owners.' },
    { name: 'Frequently Asked Questions', url: '/faq', desc: 'Answers on pricing, process, curing times, and mobile requirements.' },
    { name: 'About Latin King Detailing', url: '/about', desc: 'Studio credentials, certifications, ethos, and standards.' },
    { name: 'Expert Guides & Articles', url: '/guides', desc: 'Automotive paint science, seasonal maintenance, and coating comparisons.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-breadcrumb-sitemap" data={getBreadcrumbSchema(breadcrumbs)} />
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Hero */}
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold">Sitemap</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
                Website Directory &amp; Sitemap
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[65ch] leading-[1.65]">
                Complete navigation directory for Latin King Detailing. Access all automotive detailing services, technical guides, service locations, and legal policies.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
            {/* Core Pages */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-200 dark:border-white/10">
                <Layers className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                  Core Pages
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((page) => (
                  <Link
                    key={page.url}
                    href={page.url}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group block"
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      <span>{page.name}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                      {page.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Detailing Services */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-200 dark:border-white/10">
                <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                  Professional Detailing Services
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group block"
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      <span>{service.title}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="mt-2 text-xs font-semibold text-red-600 dark:text-red-400">
                      {service.startingPrice || 'From £50'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Expert Guides */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-200 dark:border-white/10">
                <BookOpen className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                  Expert Car Care Guides
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {BLOG_POSTS.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group block"
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      <span>{guide.title}</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {guide.excerpt}
                    </p>
                    <div className="mt-2 text-[11px] text-zinc-400">
                      {guide.readTime} · Updated {guide.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Locations */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-200 dark:border-white/10">
                <MapPin className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                  Local Service Areas (Manchester &amp; Cheshire)
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {Object.values(AREA_DETAILS).map((area) => (
                  <Link
                    key={area.slug}
                    href={`/locations/${area.slug}`}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors group block"
                  >
                    <div className="text-xs font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {area.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {area.travelTime}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal & Compliance */}
            <div>
              <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-zinc-200 dark:border-white/10">
                <FileText className="w-5 h-5 text-red-600 dark:text-red-500" />
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-900 dark:text-white">
                  Legal &amp; Machine Readable
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  href="/privacy-policy"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors block"
                >
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">Privacy Policy</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">UK GDPR &amp; DPA 2018 compliance</div>
                </Link>
                <Link
                  href="/cookie-policy"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors block"
                >
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">Cookie Policy</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">PECR &amp; Google Consent Mode v2 details</div>
                </Link>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors block"
                >
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">XML Sitemap ↗</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Machine-readable search engine index</div>
                </a>
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200/80 dark:border-white/10 hover:border-red-500/40 transition-colors block"
                >
                  <div className="text-sm font-bold text-zinc-900 dark:text-white">llms.txt ↗</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">AI search &amp; LLM crawler briefing</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
