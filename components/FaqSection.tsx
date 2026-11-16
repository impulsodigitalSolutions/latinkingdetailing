'use client';

import React, { useState } from 'react';
import { FAQ_ITEMS, SITE_CONFIG } from '@/lib/site-data';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { useModals } from './ModalContext';

export function FaqSection() {
  // Item 1 open by default as requested in prompt:
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openQuoteModal } = useModals();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-3">
            Everything you need to know about Ceramic Pro 9H, KAVACA PPF, warranty terms, and booking into our Bolton workshop.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-red-500/50 bg-white dark:bg-[#1d1e25] shadow-md ring-1 ring-red-500/20'
                    : 'border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-[#1a1b22]/70 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-500 bg-red-500/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal border-t border-zinc-100 dark:border-zinc-800/60 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-100 dark:bg-[#1c1d24] border border-zinc-200 dark:border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center text-red-500 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900 dark:text-white">
                Have a question about your specific vehicle or paint defect?
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Call our technicians directly at {SITE_CONFIG.phone} or send photos on WhatsApp.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openQuoteModal('FAQ Question')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm shadow-red-600/30 cursor-pointer shrink-0"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
