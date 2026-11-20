import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AREA_DETAILS, AreaDetail } from '@/lib/location-data';
import { SITE_CONFIG } from '@/lib/site-config';
import { SERVICES, getServiceBySlug } from '@/lib/site-data';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema, getFaqSchema } from '@/lib/schema';
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Car,
  Compass,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  return Object.keys(AREA_DETAILS).map((slug) => ({
    area: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = AREA_DETAILS[areaSlug.toLowerCase()];

  if (!area) {
    return {
      title: 'Location Not Found',
    };
  }

  const title = `Mobile Car Detailing in ${area.name}`;
  const description = `${area.headline}. Ceramic Pro 9H certified nanocoating and machine paint correction in ${area.name}, ${area.county}. Call 07482 225323.`.slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/locations/${area.slug}`,
    },
    openGraph: {
      title: `${title} | Latin King Detailing`,
      description,
      url: `${SITE_CONFIG.baseUrl}/locations/${area.slug}`,
      siteName: SITE_CONFIG.brandName,
      type: 'website',
    },
  };
}

export default async function AreaDetailPage({ params }: PageProps) {
  const { area: areaSlug } = await params;
  const area = AREA_DETAILS[areaSlug.toLowerCase()];

  if (!area) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Locations', url: `${SITE_CONFIG.baseUrl}/locations` },
    { name: `Mobile Detailing in ${area.name}`, url: `${SITE_CONFIG.baseUrl}/locations/${area.slug}` },
  ];

  const neighboringAreas = Object.values(AREA_DETAILS).filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id={`schema-faq-${area.slug}`} data={getFaqSchema(area.faqs)} />
      <JsonLd id={`schema-breadcrumb-${area.slug}`} data={getBreadcrumbSchema(breadcrumbs)} />
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Hero Section */}
        <section className="pt-10 pb-8 sm:pt-14 sm:pb-12 border-b border-zinc-200/60 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/locations" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Locations
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold truncate">
                {area.name}
              </span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>{area.county} · {area.travelTime}</span>
              </div>

              <h1 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white">
                Mobile Car Detailing in {area.name}
              </h1>

              {/* 40-60 Word Direct Answer-First Block (AEO / SERP Snippet) */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white dark:bg-workshop-card border-l-4 border-red-600 dark:border-red-500 shadow-xs">
                <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                  Latin King Detailing provides certified mobile car detailing and Ceramic Pro 9H nanocoatings directly to driveways and workplaces across {area.name}. Operating from our nearby Flixton workshop, we bring pure onboard water, silent power, and multi-stage machine polishing to restore your vehicle to showroom standards.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-6">
                <a
                  href={SITE_CONFIG.whatsappHref}
                  data-track="whatsapp"
                  data-cta-location="location_hero"
                  data-area={area.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book {area.name} Mobile Visit</span>
                </a>
                <a
                  href={SITE_CONFIG.phoneHref}
                  data-track="call"
                  data-cta-location="location_hero"
                  data-area={area.slug}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-red-500 bg-white dark:bg-workshop-card text-zinc-900 dark:text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call 07482 225323</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Local Service Content (300+ words of distinct copy) */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-8">
                <div>
                  <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-zinc-900 dark:text-white mb-4">
                    Expert Vehicle Detailing Tailored for {area.name} Drivers
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
                    {area.leadParagraph}
                  </p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200 dark:border-white/10 space-y-4">
                  <h3 className="font-heading font-semibold text-xl text-zinc-900 dark:text-white flex items-center gap-2">
                    <Compass className="w-5 h-5 text-red-500" />
                    <span>Local Road &amp; Weather Conditions in {area.name}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {area.localContext}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1">
                      Frequently Serviced Vehicles in this District:
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">
                      {area.commonVehicles}
                    </div>
                  </div>

                  {/* Client Feedback Placeholder */}
                  <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-400 italic">
                    {/* TODO: Add verified customer testimonial specifically from {area.name} (Client to provide quote) */}
                    Note: Customer driveway detailing appointments across {area.name} are carried out by our factory-certified master detailers with zero impact on household water or electricity supply.
                  </div>
                </div>

                {/* Services Recommended for this Area */}
                <div>
                  <h2 className="font-heading font-semibold text-2xl text-zinc-900 dark:text-white mb-4">
                    Recommended Detailing Packages for {area.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {area.servicesRecommended.map((slug) => {
                      const s = getServiceBySlug(slug);
                      if (!s) return null;
                      return (
                        <div
                          key={s.id}
                          className="p-5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card flex flex-col justify-between shadow-xs hover:border-red-500/40 transition-colors"
                        >
                          <div>
                            <div className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                              {s.startingPrice}
                            </div>
                            <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mt-1">
                              {s.title}
                            </h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-3">
                              {s.shortDesc}
                            </p>
                          </div>
                          <Link
                            href={`/services/${s.slug}`}
                            className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white hover:text-red-500 transition-colors"
                          >
                            <span>View Package</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Area Specific FAQs */}
                <div className="pt-6">
                  <h2 className="font-heading font-semibold text-2xl text-zinc-900 dark:text-white mb-4">
                    Frequently Asked Questions in {area.name}
                  </h2>
                  <div className="space-y-4">
                    {area.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card"
                      >
                        <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Workshop Details & Neighboring Hubs */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-workshop-card-subtle border border-zinc-200 dark:border-white/10 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Workshop &amp; Base Details</span>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500">Service Base</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-white">
                      {SITE_CONFIG.address.street}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {SITE_CONFIG.address.town}, {SITE_CONFIG.address.postcode}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500">Travel Distance to {area.name}</div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {area.travelTime}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500">Key Landmarks Serviced</div>
                    <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 mt-1">
                      {area.landmarks.map((l, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-red-500 shrink-0" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <a
                      href={SITE_CONFIG.whatsappHref}
                      data-track="whatsapp"
                      data-cta-location="location_sidebar"
                      data-area={area.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wide transition-colors"
                    >
                      <span>Check {area.name} Availability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Neighboring Areas Links */}
                <div className="p-6 rounded-3xl bg-white dark:bg-workshop-card border border-zinc-200 dark:border-white/10 shadow-xs">
                  <h3 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white mb-3">
                    Other Service Areas Near {area.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {neighboringAreas.map((neighbor) => (
                      <Link
                        key={neighbor.slug}
                        href={`/locations/${neighbor.slug}`}
                        className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 bg-zinc-50 dark:bg-workshop-card-subtle text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-red-500 transition-colors"
                      >
                        {neighbor.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
