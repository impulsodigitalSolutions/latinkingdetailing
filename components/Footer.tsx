'use client';

import React from 'react';
import Link from 'next/link';
import {
  SITE_CONFIG,
  SERVICE_AREAS_24,
  SERVICES,
} from '@/lib/site-data';
import {
  GoogleIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  StarRating,
} from './icons/BrandIcons';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-workshop-sunken text-white border-t border-zinc-800/80 pt-16 pb-28 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand Info & Verified Social Media (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl">
              <BrandLogo
                size="lg"
                subtitle="Manchester's Detailing Specialists · Ceramic Pro 9H Certified"
                titleClassName="text-white group-hover:text-red-400"
                subtitleClassName="text-zinc-400"
              />
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Manchester&apos;s certified Ceramic Pro 9H installer and paint correction specialist. Professional automotive detailing, multi-stage machine polishing, and permanent nanoceramic paint protection.
            </p>

            {/* Social Proof Badges */}
            <div className="space-y-2.5 pt-1">
              <a
                href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-red-500/40 w-full max-w-xs transition-colors group"
              >
                <GoogleIcon className="w-5 h-5 shrink-0" />
                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-white group-hover:text-red-400 transition-colors">
                    <span>{SITE_CONFIG.googleRating} Google Rating</span>
                    <StarRating rating={SITE_CONFIG.googleRating} size="w-3 h-3" />
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {SITE_CONFIG.googleReviewCount} Verified Local Reviews
                  </div>
                </div>
              </a>

              <a
                href="https://www.facebook.com/latinkingdetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-blue-500/40 w-full max-w-xs transition-colors group"
              >
                <FacebookIcon className="w-5 h-5 text-brand-fb shrink-0" />
                <div className="text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-white group-hover:text-blue-400 transition-colors">
                    <span>5.0 Facebook Rating</span>
                    <StarRating rating={SITE_CONFIG.facebookRating} size="w-3 h-3" />
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {SITE_CONFIG.facebookFollowers} Active Community Followers
                  </div>
                </div>
              </a>
            </div>

            {/* Verified Social Media Accounts */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-zinc-400 block mb-2.5">
                Official Channels
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/latin_king_detailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors text-xs font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  title="Follow Latin King Detailing on Instagram (@latin_king_detailing)"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>@latin_king_detailing</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@latinkingdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors text-xs font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  title="Watch Latin King Detailing on TikTok (@latinkingdetailing)"
                >
                  <TikTokIcon className="w-4 h-4 text-cyan-400" />
                  <span>@latinkingdetailing</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/latinkingdetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white transition-colors text-xs font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  title="Like Latin King Detailing on Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-brand-fb" />
                  <span>Facebook</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-workshop-muted border border-white/10 hover:border-emerald-500/60 text-zinc-300 hover:text-white transition-colors text-xs font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  title="Chat on WhatsApp (07482 225323)"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-red-500">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="truncate">{s.title.split(' - ')[0].split(' (')[0]}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-red-500 font-bold hover:underline inline-flex items-center gap-1 text-xs">
                  <span>All 6 Services Menu</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-zinc-800">
                <Link href="/gallery" className="hover:text-red-400 transition-colors">
                  Showroom Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About Latin King Detailing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-red-400 transition-colors">
                  24 Regional Locations
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-red-400 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.googleReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 transition-colors inline-flex items-center gap-1 text-red-400 font-medium"
                >
                  <span>Write a Google Review ↗</span>
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-400 transition-colors">
                  FAQs &amp; Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-red-500">
              Service Areas (24 Towns)
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-400">
              {SERVICE_AREAS_24.map((town) => (
                <Link
                  key={town}
                  href="/locations"
                  className="px-2 py-0.5 rounded bg-workshop-muted border border-white/10 hover:border-red-500/50 hover:text-red-400 transition-colors"
                >
                  {town}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-red-500">
              Contact & Locations
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-2 text-white font-bold hover:text-red-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </div>

              <div>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div>
                <a
                  href={SITE_CONFIG.emailHref}
                  className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 space-y-2 text-xs">
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-zinc-300 hover:text-red-400 transition-colors group block"
                >
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white group-hover:text-red-400 block">
                      Latin King Detailing:
                    </span>
                    <span className="text-zinc-400 group-hover:text-zinc-300 block">
                      {SITE_CONFIG.primaryWorkshop.fullAddress}
                    </span>
                    <span className="text-[11px] text-red-400 block mt-0.5">
                      Flixton &amp; Urmston, Manchester · Open in Google Maps ↗
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2 text-zinc-300 pt-1">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{SITE_CONFIG.openingHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright & Social Quick Icons */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            &copy; 2026 {SITE_CONFIG.brandName}. All rights reserved. Ceramic Pro 9H Certified Installer.
          </div>

          {/* Social Quick Round Icons in bottom bar */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/latin_king_detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-workshop-muted border border-white/10 hover:border-pink-500/60 hover:text-pink-400 flex items-center justify-center text-zinc-400 transition-colors"
              title="Instagram: @latin_king_detailing"
              aria-label="Instagram @latin_king_detailing"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.tiktok.com/@latinkingdetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-workshop-muted border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 flex items-center justify-center text-zinc-400 transition-colors"
              title="TikTok: @latinkingdetailing"
              aria-label="TikTok @latinkingdetailing"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/latinkingdetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-workshop-muted border border-white/10 hover:border-blue-500/60 hover:text-blue-400 flex items-center justify-center text-zinc-400 transition-colors"
              title="Facebook: @latinkingdetailing"
              aria-label="Facebook @latinkingdetailing"
            >
              <FacebookIcon className="w-4 h-4 text-brand-fb" />
            </a>

            <a
              href={SITE_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-workshop-muted border border-white/10 hover:border-emerald-500/60 hover:text-emerald-400 flex items-center justify-center text-zinc-400 transition-colors"
              title="WhatsApp: 07482 225323"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            </a>

            <a
              href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-workshop-muted border border-white/10 hover:border-red-500/60 hover:text-red-400 flex items-center justify-center text-zinc-400 transition-colors"
              title="Google Maps Profile"
              aria-label="Google Maps"
            >
              <GoogleIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#sitemap" className="hover:text-zinc-300 transition-colors">
              Sitemap
            </Link>
            <span className="flex items-center gap-1 text-zinc-400">
              Manchester & Manchester, UK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
