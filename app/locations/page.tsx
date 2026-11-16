import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceAreas } from '@/components/ServiceAreas';
import { WorkshopAndGuides } from '@/components/WorkshopAndGuides';
import { QuoteSection } from '@/components/QuoteSection';
import { MapPin, Navigation, Phone, Clock, ChevronRight, ShieldCheck, CheckCircle2, Car, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, SERVICE_AREAS_24 } from '@/lib/site-data';
import { WhatsAppIcon } from '@/components/icons/BrandIcons';

export const metadata: Metadata = {
  title: 'Areas We Serve in Bolton & Greater Manchester | Latin King Detailing',
  description:
    'Latin King Detailing serves drivers across 24 towns in Bolton and Greater Manchester. Workshop located at 115 Albert Rd, Farnworth, Bolton BL4 9EA (M61 Junction 4). Mobile detailing also available.',
  openGraph: {
    title: 'Bolton & Greater Manchester Detailing Service Areas | Latin King Detailing',
    description:
      'Climate-controlled workshop in Farnworth, Bolton. Ceramic Pro 9H coating, paint correction, and valeting for 24 towns across Greater Manchester.',
    url: 'https://ceramicpromanchester.com/locations',
    siteName: 'Latin King Detailing',
    type: 'website',
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#14151a] text-[#0f172a] dark:text-[#f3f4f6] relative transition-colors duration-300">
      {/* Soft ambient background crimson glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-600/[0.04] dark:bg-red-600/[0.06] blur-[140px] rounded-full" />
        <div className="absolute top-[35%] right-0 w-[600px] h-[600px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
        <div className="absolute bottom-[25%] left-0 w-[700px] h-[700px] bg-red-600/[0.02] dark:bg-red-600/[0.04] blur-[150px] rounded-full" />
      </div>

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
              <span className="text-zinc-900 dark:text-white font-semibold">Service Areas &amp; Workshop</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" />
                <span>Bolton Workshop &amp; Regional Coverage</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                Where We Work —{' '}
                <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                  Serving Bolton &amp; Greater Manchester
                </span>
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
                Our main climate-controlled facility is conveniently located at <strong>115 Albert Rd, Farnworth, Bolton BL4 9EA</strong>, just 5 minutes from Junction 4 of the M61. We also serve clients across 24 towns and boroughs with verified mobile detailing services.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Interactive Service Areas Component */}
        <ServiceAreas />

        {/* Workshop Travel Times & Google Maps Deep Dive */}
        <section className="py-16 bg-white dark:bg-[#14151a] border-t border-zinc-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Workshop Details & Travel Guide (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-500 text-xs font-bold uppercase tracking-wider mb-3">
                    <Navigation className="w-3.5 h-3.5" /> Easy Motorway Access
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                    Farnworth Workshop Hub
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                    Conveniently positioned for fast access from the M61, M60, and A666 St Peter&apos;s Way.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-500 shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Workshop Address
                      </div>
                      <div className="text-sm font-extrabold text-zinc-900 dark:text-white mt-0.5">
                        {SITE_CONFIG.primaryWorkshop.street}
                      </div>
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">
                        {SITE_CONFIG.primaryWorkshop.town}, {SITE_CONFIG.primaryWorkshop.postcode}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-500 shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Operating Hours
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white mt-0.5">
                        {SITE_CONFIG.openingHours}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-500 shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Direct Enquiries
                      </div>
                      <a
                        href={SITE_CONFIG.phoneHref}
                        className="text-sm font-bold text-red-600 dark:text-red-400 hover:underline block mt-0.5"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-md"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Open in Maps</span>
                    </a>
                    <a
                      href={SITE_CONFIG.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>

                {/* Approximate Drive Times */}
                <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Approximate Drive Times to Workshop
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Bolton Town</span>
                      <span className="font-bold text-red-600 dark:text-red-400">8 mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Kearsley</span>
                      <span className="font-bold text-red-600 dark:text-red-400">3 mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Manchester</span>
                      <span className="font-bold text-red-600 dark:text-red-400">18 mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Bury / Radcliffe</span>
                      <span className="font-bold text-red-600 dark:text-red-400">14 mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Salford / Eccles</span>
                      <span className="font-bold text-red-600 dark:text-red-400">15 mins</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#252630] border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                      <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Wigan / Chorley</span>
                      <span className="font-bold text-red-600 dark:text-red-400">22 mins</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Google Maps Iframe Embed (7 cols) */}
              <div className="lg:col-span-7 bg-white dark:bg-[#1d1e25] rounded-3xl p-4 sm:p-6 border border-zinc-200 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      Live Workshop Location
                    </span>
                  </div>
                  <a
                    href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Screen Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Embedded Responsive Google Map */}
                <div className="relative w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
                  <iframe
                    title="Latin King Detailing Bolton Workshop Location"
                    src="https://maps.google.com/maps?q=115%20Albert%20Rd,%20Farnworth,%20Bolton%20BL4%209EA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter saturate-[1.1] dark:invert-[0.88] dark:hue-rotate-180 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
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
