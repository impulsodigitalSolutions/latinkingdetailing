'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, ServiceItem, SITE_CONFIG } from '@/lib/site-data';
import { useModals } from './ModalContext';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Armchair,
  Award,
  Car,
  Check,
  Droplets,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Tokens & data helpers                                              */
/* ------------------------------------------------------------------ */

const CATEGORIES = [
  { id: 'all', label: 'All services' },
  { id: 'coating', label: 'Coating & protection' },
  { id: 'polishing', label: 'Paint correction' },
  { id: 'valet', label: 'Restoration & valet' },
  { id: 'maintenance', label: 'Maintenance' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];
type DetailCategory = Exclude<CategoryId, 'all'>;

const SERVICE_CATEGORY: Record<string, DetailCategory> = {
  'ceramic-coating': 'coating',
  'leather-coating': 'coating',
  'machine-polishing': 'polishing',
  'the-kings-detail': 'valet',
  'deep-clean-engine-bay': 'valet',
  'full-valet': 'valet',
  'maintenance-wash': 'maintenance',
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Sparkles,
  Armchair,
  Award,
  Wrench,
  Car,
  Droplets,
};

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-brand-red-hover active:scale-[0.97] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-workshop-dark';

const quietLink =
  'group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-zinc-600 dark:text-zinc-300 transition-colors duration-150 hover:text-red-600 dark:hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500';

const pad = (n: number) => String(n).padStart(2, '0');

function categoryLabel(id: string) {
  return CATEGORIES.find((c) => c.id === SERVICE_CATEGORY[id])?.label ?? 'Detailing';
}

function priceRows(service: ServiceItem): { label: string; value: string }[] {
  if (Array.isArray(service.pricingDetails)) {
    return service.pricingDetails.map((p) => ({ label: p.label, value: p.price }));
  }
  const head = (service.startingPrice ?? '').split('(')[0].trim();
  return head ? [{ label: 'Starting at', value: head }] : [];
}

function priceNote(service: ServiceItem): string | undefined {
  if (Array.isArray(service.pricingDetails)) return undefined;
  return (service.startingPrice ?? '').match(/\(([^)]*)\)/)?.[1];
}

/* ------------------------------------------------------------------ */
/* Small editorial primitives                                         */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
      <span className="h-px w-4 bg-red-600 dark:bg-red-500" aria-hidden="true" />
      {children}
    </div>
  );
}

type DetailItem = { title: string; desc: string };

function NumberedRows({ label, items }: { label: string; items: DetailItem[] }) {
  if (!items.length) return null;
  return (
    <section>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={item.title} className="border-t border-zinc-200 pt-4 dark:border-white/10">
            <h3 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-baseline gap-2.5">
              <span className="font-mono text-[11px] tabular-nums text-red-600 dark:text-red-500">
                {pad(i + 1)}
              </span>
              <span>{item.title}</span>
            </h3>
            <p className="mt-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function StepRows({ steps }: { steps: NonNullable<ServiceItem['steps']> }) {
  return (
    <section>
      <SectionLabel>How we work · six stages</SectionLabel>
      <ol className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <li key={step.step} className="border-t border-zinc-200 pt-4 dark:border-white/10">
            <h3 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-baseline gap-2.5">
              <span className="font-mono text-[11px] tabular-nums text-red-600 dark:text-red-500">
                {pad(step.step)}
              </span>
              <span>{step.title}</span>
            </h3>
            <p className="mt-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function DotRows({ label, items }: { label: string; items: DetailItem[] }) {
  if (!items.length) return null;
  return (
    <section>
      <SectionLabel>{label}</SectionLabel>
      <div className="mt-3 grid gap-x-10 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-3 border-b border-zinc-200 py-3.5 dark:border-white/10"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 bg-red-600 dark:bg-red-500"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-heading text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OptionRows({ items }: { items: NonNullable<ServiceItem['subServices']> }) {
  return (
    <section>
      <SectionLabel>Available options</SectionLabel>
      <div className="mt-3 grid gap-x-10 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="border-b border-zinc-200 py-4 dark:border-white/10">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              {item.price && (
                <span className="font-mono text-xs tabular-nums text-red-600 dark:text-red-500">
                  {item.price}
                </span>
              )}
            </div>
            {item.subtitle && (
              <div className="mt-1 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                {item.subtitle}
              </div>
            )}
            <p className="mt-2 text-xs leading-[1.7] text-zinc-600 dark:text-zinc-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TierGrid({ tiers }: { tiers: NonNullable<ServiceItem['tiers']> }) {
  return (
    <section>
      <SectionLabel>Package options</SectionLabel>
      <div className="mt-4 grid gap-px bg-zinc-200 md:grid-cols-3 dark:bg-white/10">
        {tiers.map((tier) => {
          const recommended = tier.name.includes('Silver');
          return (
            <div
              key={tier.name}
              className={`bg-white p-5 sm:p-6 dark:bg-workshop-dark ${
                recommended ? 'border-t-2 border-red-600 dark:border-red-500' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-heading text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {tier.name}
                </h3>
                {recommended && (
                  <span className="px-2 py-0.5 rounded-full bg-red-600/10 text-[10px] font-semibold text-red-600 dark:text-red-500">
                    Most chosen
                  </span>
                )}
              </div>
              <div className="mt-1 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                {tier.duration}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                {tier.layers}
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-zinc-200 pt-4 dark:border-white/10">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-xs leading-[1.6] text-zinc-600 dark:text-zinc-400"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-500"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export function ServicesDetailView() {
  const { openQuoteModal } = useModals();
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const visibleServices = useMemo(
    () =>
      activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter((s) => SERVICE_CATEGORY[s.id] === activeCategory),
    [activeCategory]
  );

  const facts = [
    { label: 'Based', value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.town}` },
    { label: 'Accreditation', value: 'Ceramic Pro 9H certified installer' },
    { label: 'Coverage', value: 'Studio & mobile across Greater Manchester' },
    { label: 'Hours', value: '24/7, seven days a week' },
  ];

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(key)) return;
    event.preventDefault();

    const current = CATEGORIES.findIndex((cat) => cat.id === activeCategory);
    let next = current;
    if (key === 'ArrowRight') next = (current + 1) % CATEGORIES.length;
    if (key === 'ArrowLeft') next = (current - 1 + CATEGORIES.length) % CATEGORIES.length;
    if (key === 'Home') next = 0;
    if (key === 'End') next = CATEGORIES.length - 1;

    setActiveCategory(CATEGORIES[next].id);
    const tabs = event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs[next]?.focus();
  };

  return (
    <div className="pb-24">
      {/* Hero — asymmetric editorial split */}
      <section className="border-b border-zinc-200 dark:border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20 lg:px-8 lg:py-24">
          <div>
            <h1 className="h1-hero max-w-[20ch]">
              Detailing &amp; protection, without the shortcuts.
            </h1>

            <p className="mt-4 flex items-center gap-3 font-mono text-[11px] text-red-600 dark:text-red-500">
              <span className="h-px w-6 bg-red-600 dark:bg-red-500" aria-hidden="true" />
              <span>Services / Urmston, Manchester</span>
            </p>

            <p className="mt-4 max-w-[62ch] text-base leading-[1.7] text-zinc-600 dark:text-zinc-400 sm:text-lg">
              From our workshop on Flixton Road and our fully mobile setup, we handle certified
              Ceramic Pro 9H coatings, machine paint correction, interior protection and showroom
              valets, using professional-grade products and no production-line shortcuts.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className={primaryButton}
              >
                Request a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a href="#service-index" className={quietLink}>
                Browse all {pad(SERVICES.length)} services
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="lg:pt-3">
            <div className="border-t-2 border-red-600 pt-5 dark:border-red-500">
              <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                The workshop, at a glance
              </div>
              <dl className="mt-3 divide-y divide-zinc-200 dark:divide-white/10">
                {facts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3.5">
                    <dt className="text-xs text-zinc-500 dark:text-zinc-400">{fact.label}</dt>
                    <dd className="text-sm text-zinc-800 dark:text-zinc-200">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* Single page-level index: filter + service list */}
      <section id="service-index" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2-section">The services</h2>
       
          </div>

          <div
            role="tablist"
            aria-label="Filter services by category"
            onKeyDown={onTabKeyDown}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-1 border-b border-zinc-200 dark:border-white/10"
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="services-panel"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative rounded-sm pb-3 pt-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                    active
                      ? 'text-zinc-900 dark:text-white'
                      : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-2 font-mono text-[10px] tabular-nums ${
                      active ? 'text-red-600 dark:text-red-500' : 'text-zinc-400 dark:text-zinc-600'
                    }`}
                  >
                    {/* {pad(counts[cat.id])} */}
                  </span>
                  {active && (
                    <span
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-red-600 dark:bg-red-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-2 border-b border-zinc-200 dark:border-white/10">
            {visibleServices.map((service, i) => {
              const Icon = ICONS[service.iconName] ?? Award;
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-[2.25rem_1fr] items-center gap-3 border-t border-zinc-200 py-4 transition-colors duration-150 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500 dark:border-white/10 dark:hover:bg-white/[0.02] sm:grid-cols-[3rem_1fr_12rem_8rem]"
                >
                  <span className="font-mono text-xs tabular-nums text-red-600 dark:text-red-500">
                    {pad(i + 1)}
                  </span>
                  <span className="flex items-center gap-3 font-heading text-base font-medium text-zinc-900 transition-colors duration-150 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 sm:text-lg">
                    <Icon className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
                    {service.title}
                  </span>
                  <span className="hidden font-mono text-[11px] text-zinc-500 dark:text-zinc-400 sm:block">
                    {categoryLabel(service.id)}
                  </span>
                  <span className="hidden text-right font-mono text-xs tabular-nums text-zinc-700 dark:text-zinc-300 sm:block">
                    {service.startingPrice?.split('(')[0].trim()}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service detail — editorial spec sheets, no nested cards */}
      <div
        id="services-panel"
        role="tabpanel"
        aria-label={CATEGORIES.find((c) => c.id === activeCategory)?.label ?? 'All services'}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {visibleServices.map((service, index) => {
          const Icon = ICONS[service.iconName] ?? Award;
          const rows = priceRows(service);
          const note = priceNote(service);

          return (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 border-t border-zinc-200 py-12 sm:py-16 dark:border-white/10"
            >
              {/* Header */}
              <header className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">
                <div className="flex items-center gap-4 lg:gap-6">
                  <span className="font-mono text-3xl tabular-nums text-red-600 dark:text-red-500">
                    {pad(index + 1)}
                  </span>
                  <span
                    className="hidden h-10 w-px bg-zinc-200 sm:block dark:bg-white/10"
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Icon className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                      {categoryLabel(service.id)}
                    </span>
                    {service.id === 'ceramic-coating' && (
                      <span className="font-mono text-[10px] text-red-600 dark:text-red-500">
                        · Signature service
                      </span>
                    )}
                  </div>
                  <h2 className="mt-2 font-heading text-[clamp(1.6rem,3vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-zinc-900 dark:text-white">
                    {service.title}
                  </h2>
                  {service.tagline && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      {service.tagline}
                    </p>
                  )}
                </div>

                <div className="border-l-2 border-zinc-200 pl-4 lg:min-w-[15rem] dark:border-white/10">
                  <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                    Pricing
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {rows.map((row) => (
                      <div key={row.label}>
                        <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                          {row.label}
                        </div>
                        <div className="font-mono text-sm font-medium tabular-nums text-zinc-900 dark:text-zinc-100">
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  {note && (
                    <p className="mt-2 max-w-[26ch] text-[11px] leading-[1.6] text-zinc-500 dark:text-zinc-400">
                      {note}
                    </p>
                  )}
                </div>
              </header>

              {/* Narrative + standing spec */}
              <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                <div className="space-y-8">
                  <section>
                    <SectionLabel>The work</SectionLabel>
                    <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.8] text-zinc-700 dark:text-zinc-300">
                      {service.fullDesc}
                    </p>
                  </section>

                  {service.whatIs && (
                    <section className="border-l-2 border-red-600 pl-5 dark:border-red-500">
                      <SectionLabel>
                        {service.id === 'ceramic-coating'
                          ? 'What ceramic coating actually is'
                          : 'How the protection works'}
                      </SectionLabel>
                      <p className="mt-3 max-w-[62ch] text-sm leading-[1.8] text-zinc-600 dark:text-zinc-400">
                        {service.whatIs}
                      </p>
                    </section>
                  )}
                </div>

                <aside>
                  <SectionLabel>What you get</SectionLabel>
                  <ul className="mt-3 divide-y divide-zinc-200 dark:divide-white/10">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 py-3">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-500"
                          aria-hidden="true"
                        />
                        <span className="text-[13px] leading-[1.6] text-zinc-600 dark:text-zinc-400">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {service.warranty && (
                    <div className="mt-6 border-t border-zinc-200 pt-4 dark:border-white/10">
                      <SectionLabel>Standard / warranty</SectionLabel>
                      <p className="mt-2 text-[13px] leading-[1.6] text-zinc-700 dark:text-zinc-300">
                        {service.warranty}
                      </p>
                    </div>
                  )}
                </aside>
              </div>

              {/* Structured detail */}
              {(service.steps ||
                service.tiers ||
                service.whyChoose ||
                service.surfacesProtected ||
                service.includedItems ||
                service.subServices ||
                service.recommendation) && (
                <div className="mt-12 space-y-10 border-t border-zinc-200 pt-10 dark:border-white/10">
                  {service.steps && <StepRows steps={service.steps} />}
                  {service.tiers && <TierGrid tiers={service.tiers} />}
                  {service.whyChoose && (
                    <NumberedRows label="Why it matters" items={service.whyChoose} />
                  )}
                  {service.surfacesProtected && (
                    <DotRows label="Surfaces we treat" items={service.surfacesProtected} />
                  )}
                  {service.includedItems && (
                    <NumberedRows label="What's included" items={service.includedItems} />
                  )}
                  {service.subServices && <OptionRows items={service.subServices} />}
                  {service.recommendation && (
                    <div className="border-l-2 border-amber-500 pl-4">
                      <div className="font-mono text-[11px] text-amber-700 dark:text-amber-400">
                        Good to know
                      </div>
                      <p className="mt-1.5 max-w-[62ch] text-sm leading-[1.7] text-zinc-600 dark:text-zinc-400">
                        {service.recommendation}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Real Workshop Results: kept after "What's included" and the structured detail */}
              {service.images && service.images.length > 0 && (
                <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-white/10">
                  <SectionLabel>Workshop transformations</SectionLabel>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.images.map((imgSrc, imgI) => (
                      <div
                        key={imgI}
                        className="group relative h-56 sm:h-64 overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-200/80 dark:border-white/10"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${service.title} transformation ${imgI + 1}`}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                        {service.id === 'deep-clean-engine-bay' && imgI === 0 && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/85 border border-red-500/40 text-[11px] font-semibold text-red-400">
                            Before &amp; After Transformation
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Optional Video demonstration for interior deep clean */}
                  {service.video && (
                    <div className="mt-5 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-black">
                      <div className="p-3 bg-zinc-900 border-b border-white/10 text-xs font-semibold text-zinc-200 flex items-center justify-between">
                        <span>Interior Deep Clean &amp; Extraction Demo</span>
                        <span className="text-[11px] font-mono text-red-400">Workshop Video</span>
                      </div>
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full max-h-[420px] object-cover"
                        src={service.video}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* One primary action per service */}
              <footer className="mt-10 flex flex-col gap-5 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
                <p className="font-heading text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {service.hookText && <span>&ldquo;{service.hookText}&rdquo;</span>}
                </p>
                <div className="flex items-center gap-6">
                  <Link href={`/services/${service.slug}`} className={quietLink}>
                    Full guide
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(service.title)}
                    className={primaryButton}
                  >
                    {service.ctaText || 'Get a free quote'}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </footer>
            </article>
          );
        })}
      </div>

      {/* Closing */}
      <section className="mt-16 border-y border-zinc-200 bg-zinc-50/60 py-14 dark:border-white/10 dark:bg-workshop-sunken/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Not sure which one fits?
            </h2>
            <p className="mt-2 max-w-[55ch] text-sm leading-[1.7] text-zinc-600 dark:text-zinc-400">
              Tell us the car and what you&rsquo;re after. We&rsquo;ll recommend the right level
              without the hard sell — or compare the coating packages side by side.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/comparison" className={quietLink}>
              Compare coatings
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
            <button type="button" onClick={() => openQuoteModal()} className={primaryButton}>
              Ask us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
