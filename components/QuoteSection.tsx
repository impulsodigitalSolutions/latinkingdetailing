'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-data';
import { QuoteForm } from './QuoteForm';
import { WhatsAppIcon } from './icons/BrandIcons';
import { ArrowUpRight, Phone } from 'lucide-react';

interface QuoteSectionProps {
  initialService?: string;
}

const NEXT_STEPS = [
  {
    title: 'We review the details',
    desc: 'A certified technician looks at the vehicle, condition and finish you are after.',
  },
  {
    title: 'You get a clear price',
    desc: 'A straight answer on prep, products and timing — no vague estimates.',
  },
  {
    title: 'We book the work',
    desc: 'Drop off at Flixton Road or arrange the mobile van for your area.',
  },
];

export function QuoteSection({ initialService }: QuoteSectionProps = {}) {
  return (
    <section
      id="quote"
      className="scroll-mt-20 border-t border-zinc-200 py-16 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 font-mono text-[12px] text-red-600 dark:text-red-500">
              <span className="h-px w-6 bg-red-600 dark:bg-red-500" aria-hidden="true" />
              <span>Enquiries / Urmston, Manchester</span>
            </div>

            <h2 className="mt-6 max-w-[18ch] font-heading text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-zinc-900 dark:text-white">
              Tell us about the car. We&rsquo;ll tell you what it needs.
            </h2>

            <p className="mt-5 max-w-[52ch] text-sm leading-[1.75] text-zinc-600 dark:text-zinc-400 sm:text-base">
              Free, no-obligation advice from a Ceramic Pro certified workshop. Give us the basics
              below and we&rsquo;ll come back with the right level of protection for your vehicle and
              budget.
            </p>

            <div className="mt-10 border-t-2 border-red-600 pt-5 dark:border-red-500">
              <div className="font-mono text-[12px] text-zinc-500 dark:text-zinc-400">
                Prefer to talk now?
              </div>
              <div className="mt-2 divide-y divide-zinc-200 dark:divide-white/10">
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:text-red-400"
                >
                  <span className="flex items-center gap-3 text-sm text-zinc-800 dark:text-zinc-200">
                    <WhatsAppIcon className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    WhatsApp the workshop
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:hover:text-red-400"
                >
                  <span className="flex items-center gap-3 text-sm text-zinc-800 dark:text-zinc-200">
                    <Phone className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                    Call {SITE_CONFIG.phone}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-6 dark:border-white/10">
              <div className="font-mono text-[12px] text-zinc-500 dark:text-zinc-400">
                What happens next
              </div>
              <ol className="mt-3 space-y-4">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-mono text-[12px] tabular-nums text-red-600 dark:text-red-500">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {step.title}
                      </div>
                      <p className="mt-1 text-xs leading-[1.65] text-zinc-500 dark:text-zinc-400">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 border-t border-zinc-200 pt-5 text-xs leading-[1.7] text-zinc-500 dark:border-white/10 dark:text-zinc-400">
              <p>{SITE_CONFIG.address.fullAddress}</p>
              <p className="mt-1">{SITE_CONFIG.openingHours}</p>
              <Link
                href="/locations"
                className="mt-2 inline-block rounded-sm text-zinc-700 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:text-zinc-300 dark:decoration-zinc-600 dark:hover:text-red-400"
              >
                Service areas
              </Link>
            </div>
          </div>

          <div className="border-t-2 border-red-600 bg-white p-6 dark:border-red-500 dark:bg-workshop-card sm:p-9">
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="font-mono text-[12px] text-zinc-500 dark:text-zinc-400">
                Enquiry form
              </span>
              <span className="font-mono text-[12px] text-zinc-400 dark:text-zinc-500">
                No obligation
              </span>
            </div>
            <QuoteForm isModal={false} initialService={initialService} />
          </div>
        </div>
      </div>
    </section>
  );
}
