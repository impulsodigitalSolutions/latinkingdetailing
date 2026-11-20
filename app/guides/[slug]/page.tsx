import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BLOG_POSTS, BlogPost } from '@/lib/site-data';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getBreadcrumbSchema, ORGANIZATION_ID } from '@/lib/schema';
import { Clock, Calendar, ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, User } from 'lucide-react';

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = BLOG_POSTS.find((p) => p.slug === slug);

  if (!guide) {
    return {
      title: 'Guide Not Found',
    };
  }

  const title = guide.title;
  const description = guide.excerpt.slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${title} | Latin King Detailing`,
      description,
      url: `${SITE_CONFIG.baseUrl}/guides/${guide.slug}`,
      siteName: SITE_CONFIG.brandName,
      type: 'article',
      publishedTime: '2025-01-15T09:00:00.000Z',
      modifiedTime: '2026-11-20T10:00:00.000Z',
      authors: [guide.author],
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = BLOG_POSTS.find((p) => p.slug === slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.baseUrl },
    { name: 'Guides', url: `${SITE_CONFIG.baseUrl}/guides` },
    { name: guide.title, url: `${SITE_CONFIG.baseUrl}/guides/${guide.slug}` },
  ];

  // Article JSON-LD Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    url: `${SITE_CONFIG.baseUrl}/guides/${guide.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.baseUrl}/guides/${guide.slug}`,
    },
    datePublished: '2025-01-15T09:00:00.000Z',
    dateModified: '2026-11-20T10:00:00.000Z',
    author: {
      '@type': 'Organization',
      name: guide.author,
      url: SITE_CONFIG.baseUrl,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    image: `${SITE_CONFIG.baseUrl}/hero-image.png`,
    inLanguage: 'en-GB',
  };

  // Direct 40-60 word answer-first definition blocks per guide for AEO
  let answerFirstText = '';
  let relatedServices: { title: string; href: string }[] = [];

  if (guide.slug.includes('ceramic-coating-vs-wax')) {
    answerFirstText =
      'Ceramic coating provides permanent molecular quartz protection with 9H hardness, lasting 2 to 5 years against UK rain, road salt, and UV radiation. In contrast, traditional carnauba wax sits on top of clear coat as an organic layer that washes away after 4 to 8 weeks, making ceramic coating far more cost-effective for Manchester motorists.';
    relatedServices = [
      { title: 'Ceramic Pro 9H Coating', href: '/services/ceramic-coating' },
      { title: 'Protection Comparison Matrix', href: '/comparison' },
      { title: 'Machine Polishing Prep', href: '/services/machine-polishing' },
    ];
  } else if (guide.slug.includes('how-to-maintain')) {
    answerFirstText =
      'To maintain a ceramic coating in UK weather, wash every 2 to 3 weeks using the two-bucket method and pH-neutral car shampoo. Never use abrasive nylon car wash brushes, rinse lower sills promptly after winter salting, and book an annual professional decontamination wash to preserve maximum hydrophobic water beading.';
    relatedServices = [
      { title: 'Maintenance Wash Package', href: '/services/maintenance-wash' },
      { title: 'Full Valet Services', href: '/services/full-valet' },
      { title: 'Ceramic Coating Warranties', href: '/services/ceramic-coating' },
    ];
  } else {
    answerFirstText =
      'Paint correction is essential before ceramic coating because nanocoatings form an optically clear glass layer that permanently seals and magnifies any swirl marks or scratches beneath. Multi-stage machine polishing eliminates clear coat imperfections first, ensuring flawless optical clarity and maximum molecular bonding.';
    relatedServices = [
      { title: 'Machine Polishing Services', href: '/services/machine-polishing' },
      { title: 'Ceramic Pro 9H Protection', href: '/services/ceramic-coating' },
      { title: 'The King’s Detail', href: '/services/the-kings-detail' },
    ];
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 relative transition-colors duration-300">
      <JsonLd id={`schema-article-${guide.slug}`} data={articleSchema} />
      <JsonLd id={`schema-breadcrumb-${guide.slug}`} data={getBreadcrumbSchema(breadcrumbs)} />
      <Navbar />

      <main className="flex-1 page-transition">
        <article className="pt-10 pb-16 sm:pt-14 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <Link href="/guides" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">
                Guides
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-zinc-900 dark:text-white font-semibold truncate">
                {guide.title}
              </span>
            </nav>

            {/* Header info */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-semibold">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  {guide.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  Published {guide.date}
                </span>
                <span>•</span>
                <span className="text-zinc-600 dark:text-zinc-300 font-medium">
                  Last updated: 20 November 2026
                </span>
              </div>

              <h1 className="font-heading font-semibold text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] tracking-[-0.03em] text-zinc-900 dark:text-white mb-6">
                {guide.title}
              </h1>

              {/* 40-60 Word Direct Answer-First Block (AEO / Snippet Optimized) */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-workshop-muted/80 border-l-4 border-red-600 dark:border-red-500 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Key Summary &amp; Direct Answer</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                  {answerFirstText}
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-[1.75]">
              {guide.content.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Services Links */}
            <section className="mt-14 pt-10 border-t border-zinc-200 dark:border-white/10">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl text-zinc-900 dark:text-white mb-4">
                Recommended Services for This Guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((srv, idx) => (
                  <Link
                    key={idx}
                    href={srv.href}
                    className="p-4 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-workshop-card-subtle hover:border-red-500/50 transition-colors flex items-center justify-between group shadow-xs"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {srv.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
