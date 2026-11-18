import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-data';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Truck,
  MapPin,
  Phone,
  ArrowRight,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Latin King Detailing - Manchester Detailing Specialists',
  description:
    'Founded out of a true passion for cars and perfection. Professional mobile detailing across Urmston, Flixton, and Greater Manchester, plus our dedicated Farnworth studio.',
  alternates: {
    canonical: 'https://latinkingdetailing.co.uk/about',
  },
  openGraph: {
    title: 'About Latin King Detailing | Passion for Car Detailing',
    description:
      'Professional mobile detailing in Urmston, Manchester. High-quality results, attention to detail, and complete customer satisfaction.',
    url: 'https://latinkingdetailing.co.uk/about',
  },
};

const BENEFITS = [
  {
    title: 'Experienced professionals',
    desc: 'Years of hands-on expertise with high-end sports cars, prestige saloons, and family vehicles.',
  },
  {
    title: 'High-quality products',
    desc: 'Premium compounds, pH-neutral foams, and genuine Ceramic Pro nanocoatings.',
  },
  {
    title: 'Customized services',
    desc: 'Bespoke packages tailored to your car’s clear coat condition and your exact expectations.',
  },
  {
    title: 'Customer satisfaction guaranteed',
    desc: 'Every vehicle is treated like our own with thorough inspections before hand-back.',
  },
];

const SPECIALISMS = [
  {
    id: 'interior',
    title: 'Interior Detailing',
    slug: 'leather-coating',
    image: '/images/about/interior-detailing.jpg',
    alt: 'Latin King Detailing - Lotus luxury interior detailing in Manchester',
    desc: 'Thorough cleaning and protection of all interior surfaces for a fresh and hygienic environment.',
  },
  {
    id: 'exterior',
    title: 'Exterior Detailing',
    slug: 'the-kings-detail',
    image: '/images/about/exterior-detailing.jpg',
    alt: 'Latin King Detailing - Porsche Taycan exterior detailing with mobile detailing van',
    desc: "Expert polishing and protection to enhance your vehicle's appearance and longevity.",
  },
  {
    id: 'paint-correction',
    title: 'Paint Correction',
    slug: 'machine-polishing',
    image: '/images/about/paint-correction.jpg',
    alt: 'Latin King Detailing - Precision machine polishing and scratch restoration',
    desc: 'Restoration of your vehicle’s original finish, eliminating scratches and imperfections.',
  },
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    slug: 'ceramic-coating',
    image: '/images/about/ceramic-coating.jpg',
    alt: 'Latin King Detailing - High gloss nanoceramic coating on BMW M-Sport',
    desc: 'Advanced protection that offers durability and a glossy finish.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/70 dark:bg-workshop-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-medium">About Us</span>
            </nav>
          </div>
        </div>

        {/* Hero / Founder Story Section */}
        <section className="py-14 sm:py-20 border-b border-zinc-200/80 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading and Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white mb-3">
                    Passion for Car Detailing
                  </h1>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Urmston &amp; Greater Manchester · Mobile &amp; Studio</span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-[1.65] max-w-[60ch]">
                  With years of experience in professional car detailing, I founded Latin King Detailing out of a true passion for cars and perfection. Based in Urmston, Manchester, I specialise in interior and exterior detailing, paint correction, ceramic coating, and full vehicle protection.
                </p>

                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
                  I take pride in every vehicle I work on, treating it as if it were my own. Offering a fully mobile service, I bring expert car detailing directly to your home, workplace, or any location convenient for you, making it easy to keep your car looking its absolute best. My goal is simple: high-quality results, attention to detail, and complete customer satisfaction.
                </p>

                {/* Key Attributes Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <div className="font-mono text-base font-bold text-red-600 dark:text-red-400">
                      Mobile &amp; Studio
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Home, office or workshop
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <div className="font-mono text-base font-bold text-red-600 dark:text-red-400">
                      Urmston Base
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      Covering 24 towns
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 col-span-2 sm:col-span-1">
                    <div className="font-mono text-base font-bold text-red-600 dark:text-red-400">
                      Satisfaction
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      100% Guaranteed
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-workshop-card hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-xs border border-zinc-200 dark:border-white/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Photography Showcase */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-900 shadow-lg">
                  <Image
                    src="/images/about/about-hero.jpg"
                    alt="Latin King Detailing founder at work on automotive detailing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-900 shadow-md">
                  <Image
                    src="/images/about/about-van.jpg"
                    alt="Latin King Detailing fully equipped mobile van in Manchester"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-semibold">
                      Fully Equipped Mobile Detailing Van
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                Why Choose Us?
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-[1.65] max-w-[60ch]">
                Discover the numerous benefits of choosing Latin King Detailing for your car detailing needs:
              </p>
            </div>

            {/* 4 Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {BENEFITS.map((b, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 4 Core Specialisms with Original Photos (Matching reference screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {SPECIALISMS.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-3xl overflow-hidden bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-sm hover:border-red-500/40 transition-colors flex flex-col"
                >
                  <div className="relative aspect-square sm:aspect-[4/3] md:aspect-square w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-xl sm:text-2xl text-red-600 dark:text-red-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65] max-w-[60ch]">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <Link
                        href={`/services/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 transition-colors"
                      >
                        <span>View {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience the Difference CTA Banner */}
        <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-workshop-card text-white border border-red-500/30 shadow-xl relative overflow-hidden">
              <div className="max-w-3xl">
                <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-white mb-4">
                  Experience the Difference
                </h2>
                <h3 className="font-heading font-medium text-lg text-red-400 mb-3">
                  Join Our Satisfied Customers
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-[1.65] max-w-[60ch] mb-6">
                  Allow us to take your vehicle to the next level with our specialised detailing services. We pride ourselves on transparent communication, flexible mobile bookings, and unmatched finish quality.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                  >
                    <span>Explore Our 71 Transformations</span>
                  </Link>
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
