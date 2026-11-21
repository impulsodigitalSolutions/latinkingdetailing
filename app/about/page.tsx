import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import {
  ChevronRight,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Our Workshop & Detailing Team',
  description:
    'Founded on genuine passion for automotive perfection. Ceramic Pro 9H certified detailing specialists based at 426 Flixton Road, Urmston, Manchester.',
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/about`,
  },
  openGraph: {
    title: 'About Our Workshop & Detailing Team | Latin King Detailing',
    description:
      'Founded on genuine passion for automotive perfection. Ceramic Pro 9H certified detailing specialists based at 426 Flixton Road, Urmston, Manchester.',
    url: `${SITE_CONFIG.baseUrl}/about`,
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
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'About', url: `${SITE_CONFIG.baseUrl}/about` },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id="schema-breadcrumb" data={getBreadcrumbSchema(breadcrumbs)} />
      {/* Sticky Floating Capsule Navbar */}
      <Navbar />

      <main className="flex-1 page-transition">
        {/* Dedicated Page Hero Banner - Consistent with Our Work, Locations, FAQs */}
        <section className="pt-10 pb-6 sm:pt-14 sm:pb-8 border-b border-zinc-200/60 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link
                href="/"
                className="hover:text-red-600 dark:hover:text-red-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
              <span className="text-zinc-900 dark:text-white font-semibold">About Us</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-heading font-semibold text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-zinc-900 dark:text-white">
                About Latin King Detailing
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg mt-4 max-w-[60ch] leading-[1.65]">
                Founded out of a true passion for cars and perfection. Specialist mobile and workshop vehicle detailing, paint correction, and certified Ceramic Pro 9H nanoprotection across Manchester and Cheshire.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Ceramic Pro 9H Certified
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  Mobile &amp; Workshop Studio
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                  Manchester &amp; Cheshire Coverage
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero / Founder Story Section */}
        <section className="py-14 sm:py-20 border-b border-zinc-200/80 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Heading and Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="font-heading font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white mb-3">
                    Passion for Car Detailing
                  </h2>
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
                      10 Service Areas
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-bold text-xs transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-100 dark:bg-workshop-card hover:bg-zinc-200 dark:hover:bg-zinc-800 active:scale-[0.98] text-zinc-900 dark:text-white font-semibold text-xs border border-zinc-200 dark:border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" aria-hidden="true" />
                    <span>Call {SITE_CONFIG.phone}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Photography & Mobile Studio Showcase */}
              <div className="lg:col-span-5 grid grid-cols-[1.08fr_0.92fr] gap-3 sm:gap-4 items-end">
                <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-zinc-900">
                  <Image
                    src="/images/about/about-car.jpg"
                    alt="Finished vehicle after professional detailing in Manchester"
                    fill
                    sizes="(max-width: 640px) 50vw, 24vw"
                    className="object-cover"
                    preload
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-zinc-950/85 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    Mobile Van
                  </figcaption>
                </figure>

                <figure className="relative aspect-[9/16] overflow-hidden rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-zinc-900">
                  <video
                    width={576}
                    height={1024}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Latin King Detailing mobile van providing on-site car detailing"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source
                      src="/images/about/about-mobile-van-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-zinc-950/85 px-3 py-3 text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-white">
                    Mobile studio
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Founder & Lead Detailer Profile (E-E-A-T Signal) */}
        <section className="py-12 sm:py-16 bg-zinc-50/60 dark:bg-workshop-muted/30 border-b border-zinc-200/80 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-red-500/20 shadow-md bg-zinc-900">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="Latin King Detailing Founder and Master Detailer applying Ceramic Pro 9H nanocoating in Manchester workshop"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Master Detailer &amp; Founder</span>
                </div>

                {/* <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-zinc-900 dark:text-white">
                  TODO: [Founder Name]
                </h3> */}

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Ceramic Pro 9H Factory-Certified Installer and Paint Correction Specialist with years of dedicated craft experience restoring sports cars, prestige saloons, and family vehicles across Greater Manchester and Cheshire.
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-zinc-500 font-semibold">
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">Ceramic Pro 9H Certified</span>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">Multi-Stage Machine Polishing</span>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">£5M Public &amp; Vehicle Insured</span>
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
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 active:scale-[0.98] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                      >
                        <span>View {item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
            <div className="rounded-3xl p-8 sm:p-12 bg-workshop-card text-white border border-red-500/30 shadow-md relative overflow-hidden">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-bold text-xs transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                  <Link
                    href="/our-work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-semibold text-xs border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                  >
                    <span>Explore Our Transformations</span>
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
