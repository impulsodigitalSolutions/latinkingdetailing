import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SERVICES, SITE_CONFIG, getServiceBySlug, ServiceItem } from '@/lib/site-data';
import { WORKSHOP_GALLERY_IMAGES } from '@/lib/gallery-data';
import {
  ShieldCheck,
  Shield,
  Sparkles,
  Armchair,
  Wrench,
  Car,
  Droplets,
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Phone,
  Clock,
  Layers,
  MapPin,
  Calendar,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Latin King Detailing Manchester',
    };
  }

  const title = `${service.title} | Latin King Detailing Manchester`;
  const description = `${service.shortDesc} Certified Ceramic Pro 9H installer and detailing specialists based in Flixton & Farnworth, Manchester. ${service.startingPrice}. Call 07482 225323.`;

  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.title} Manchester`,
      `${service.title} Bolton`,
      'Latin King Detailing',
      'Car Detailing Manchester',
      'Ceramic Coating Flixton',
    ],
    openGraph: {
      title,
      description,
      url: `https://${SITE_CONFIG.domain}/services/${service.slug}`,
      siteName: SITE_CONFIG.brandName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case 'ShieldCheck':
      return <ShieldCheck className="w-8 h-8 text-red-500" />;
    case 'Shield':
      return <Shield className="w-8 h-8 text-red-500" />;
    case 'Sparkles':
      return <Sparkles className="w-8 h-8 text-red-500" />;
    case 'Armchair':
      return <Armchair className="w-8 h-8 text-red-500" />;
    case 'Wrench':
      return <Wrench className="w-8 h-8 text-red-500" />;
    case 'Car':
      return <Car className="w-8 h-8 text-red-500" />;
    case 'Droplets':
      return <Droplets className="w-8 h-8 text-red-500" />;
    case 'Award':
    default:
      return <Award className="w-8 h-8 text-red-500" />;
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related photos from genuine workshop gallery
  const relatedImages = WORKSHOP_GALLERY_IMAGES.slice(0, 8);
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4);

  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc,
    provider: {
      '@type': 'AutoRepair',
      name: SITE_CONFIG.brandName,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_CONFIG.primaryWorkshop.street,
        addressLocality: SITE_CONFIG.primaryWorkshop.town,
        addressRegion: 'Greater Manchester',
        postalCode: SITE_CONFIG.primaryWorkshop.postcode,
        addressCountry: 'GB',
      },
    },
    areaServed: ['Manchester', 'Flixton', 'Urmston', 'Farnworth', 'Bolton', 'Trafford'],
    offers: {
      '@type': 'Offer',
      priceDescription: service.startingPrice,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <Navbar />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 page-transition">
        {/* Service Hero Banner */}
        <section className="pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/services" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold truncate">
                {service.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7">
                <h1 className="font-heading font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white mb-2">
                  {service.title}
                </h1>
                <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-4">
                  {service.tagline}
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-[1.65] max-w-[60ch] mb-6">
                  {service.fullDesc || service.shortDesc}
                </p>

                {/* Pricing & Warranty Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-xs">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-medium">
                      Service pricing
                    </span>
                    <span className="font-mono text-base sm:text-lg font-semibold text-red-600 dark:text-red-500">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-xs">
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block font-medium">
                      Service guarantee
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{service.warranty}</span>
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5">
                  <a
                    href="#quote-section"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide shadow-md shadow-red-600/20 transition-colors"
                  >
                    <span>Book {service.title.split(' - ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={SITE_CONFIG.phoneHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-red-500 bg-white dark:bg-workshop-card text-zinc-900 dark:text-white font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>07482 225323</span>
                  </a>
                </div>
              </div>

              {/* Service Highlights Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 shadow-lg">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="p-2.5 rounded-2xl bg-red-500/10 shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white">
                      Key Service Highlights
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Executed to certified detailing standards
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-[1.65]">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>Mobile &amp; Workshop Studio</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-red-500" />
                    <span>Available 24/7</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* In-Depth Explanation Section */}
        {service.whatIs && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-4">
                  What Is {service.title.split(' - ')[0]}?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-[1.65] max-w-[60ch]">
                  {service.whatIs}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Section (Machine Polishing) */}
        {service.whyChoose && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-8">
                Why Choose Professional Machine Polishing?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.whyChoose.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-2">
                      <span className="font-mono text-red-500 font-semibold mr-2">0{idx + 1}.</span>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6-Step Precision Process (Ceramic Coating) */}
        {service.steps && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-10">
                <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-2">
                  Our 6-Step Ceramic Coating Process
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                  Applied panel by panel inside our controlled Farnworth workshop under specialized high-CRI inspection lighting.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.steps.map((st) => (
                  <div key={st.step} className="p-6 rounded-2xl bg-white dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-2">
                      <span className="text-red-500 font-medium mr-2">Step {st.step}:</span>
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Package Tiers (Bronze, Silver, Gold for Ceramic Coating) */}
        {service.tiers && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                  Ceramic Pro 9H Coating Packages
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-[1.65]">
                  All packages include VIN-registered factory warranties and full surface decontamination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {service.tiers.map((tier, tIdx) => {
                  const isSilver = tier.name.includes('Silver');
                  return (
                    <div
                      key={tIdx}
                      className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
                        isSilver
                          ? 'border-red-500/60 bg-red-500/[0.02] dark:bg-workshop-card shadow-lg relative'
                          : 'border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card'
                      }`}
                    >
                      {isSilver && (
                        <span className="absolute top-0 right-0 px-3 py-1 bg-red-600 text-white text-[10px] font-semibold rounded-bl-2xl">
                          Most Popular
                        </span>
                      )}

                      <div>
                        <h3 className="font-heading font-semibold text-xl text-zinc-900 dark:text-white mb-1">
                          {tier.name}
                        </h3>
                        <div className="font-mono text-xs text-red-500 font-semibold mb-4">
                          {tier.duration}
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                          {tier.layers}
                        </div>

                        <ul className="space-y-2.5 mb-8">
                          {tier.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="#quote-section"
                        className={`w-full py-2.5 px-4 rounded-xl text-center font-bold text-xs transition-colors ${
                          isSilver
                            ? 'bg-red-600 hover:bg-red-500 text-white shadow-md'
                            : 'bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-white'
                        }`}
                      >
                        Enquire About {tier.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Surfaces Protected (Leather Coating) */}
        {service.surfacesProtected && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-8">
                Cabin Surfaces Protected
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.surfacesProtected.map((surf, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <h3 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      <span>{surf.title}</span>
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                      {surf.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What's Included (King's Detail) */}
        {service.includedItems && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-8">
                What’s Included in The King’s Detail
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.includedItems.map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10">
                    <h3 className="font-heading font-semibold text-base text-zinc-900 dark:text-white mb-2">
                      <span className="text-red-500 font-medium mr-2">Stage {idx + 1}:</span>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sub-Services (Deep Clean & Engine Bay / Full Valet) */}
        {service.subServices && (
          <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white mb-8">
                Package Service Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.subServices.map((sub, idx) => (
                  <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-heading font-semibold text-lg text-zinc-900 dark:text-white">
                          {sub.title}
                        </h3>
                        <span className="font-mono text-xs font-semibold text-red-600 dark:text-red-400">
                          {sub.price}
                        </span>
                      </div>
                      <div className="text-xs text-red-500 font-medium mb-3">
                        {sub.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-[1.65]">
                        {sub.desc}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                      <a
                        href={SITE_CONFIG.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-500 transition-colors"
                      >
                        <span>Inquire About {sub.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Genuine Workshop Gallery Preview for this Service */}
        <section className="py-16 border-b border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-workshop-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                  Real Customer Results
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-[1.65]">
                  Authentic transformations completed inside our Farnworth studio and across Manchester mobile jobs.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:underline shrink-0"
              >
                <span>View All 71 Workshop Photos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {relatedImages.map((img) => (
                <div
                  key={img.id}
                  className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-zinc-900 aspect-[4/3] relative group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                    <span className="text-[11px] text-white font-medium truncate">
                      {img.serviceTag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="py-16 border-b border-zinc-200/80 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-zinc-900 dark:text-white">
                Explore Other Services
              </h2>
              <Link
                href="/services"
                className="text-xs font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.slug}`}
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-workshop-card border border-zinc-200/80 dark:border-white/10 hover:border-red-500/50 transition-colors group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h3 className="font-heading font-semibold text-sm text-zinc-900 dark:text-white group-hover:text-red-500 transition-colors line-clamp-1">
                        {other.title}
                      </h3>
                      <span className="font-mono text-xs text-red-500 font-semibold shrink-0">
                        {other.startingPrice ? `${other.startingPrice.split(' ')[0]} ${other.startingPrice.split(' ')[1] || ''}` : 'From £55'}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-[1.65]">
                      {other.shortDesc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-zinc-800 text-[11px] font-bold text-red-600 dark:text-red-400 flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
