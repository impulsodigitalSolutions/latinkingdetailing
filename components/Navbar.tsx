'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  SITE_CONFIG,
  SERVICES,
} from '@/lib/site-data';
import { ThemeToggle } from './ThemeToggle';
import { WhatsAppIcon } from './icons/BrandIcons';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Shield,
  Armchair,
  MapPin,
  ExternalLink,
  Layers,
  ArrowRight,
  Wrench,
  Car,
  Droplets,
  Award,
} from 'lucide-react';
import { useModals } from './ModalContext';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal, openServiceModal } = useModals();

  const isCurrent = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-red-500" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-red-500" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-red-500" />;
      case 'Armchair':
        return <Armchair className="w-4 h-4 text-red-500" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-red-500" />;
      case 'Car':
        return <Car className="w-4 h-4 text-red-500" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4 text-red-500" />;
      case 'Award':
      default:
        return <Award className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <>
      {/* Floating Capsule/Pill Navbar Wrapper */}
      <div className="sticky top-3 sm:top-5 z-40 w-full px-3 sm:px-6 pointer-events-none transition-colors duration-150">
        <header
          className={`pointer-events-auto max-w-6xl mx-auto rounded-full border transition-colors duration-150 px-4 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? 'bg-white/95 dark:bg-workshop-card border-zinc-300 dark:border-workshop-border shadow-md'
              : 'bg-white/90 dark:bg-workshop-card/95 border-zinc-200 dark:border-workshop-border shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Full Official Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-full py-0.5"
              aria-label="Latin King Detailing"
            >
              {/* Dark mode full logo */}
              <div className="hidden dark:block">
                <Image
                  src="/images/logo-dark.png"
                  alt="Latin King Detailing"
                  width={140}
                  height={108}
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                  priority
                />
              </div>
              {/* Light mode full logo */}
              <div className="block dark:hidden">
                <Image
                  src="/images/logo-light.png"
                  alt="Latin King Detailing"
                  width={140}
                  height={108}
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Center: Streamlined Nav Links with Dedicated Route Navigation & Smooth Active Pill */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {/* Services Item with Quick Popover */}
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                      isCurrent('/services')
                        ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                        : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                    }`}
                  >
                    <span>Services</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    className="p-1 rounded-full text-zinc-400 hover:text-red-500 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition-colors -ml-1 cursor-pointer"
                    aria-label="Toggle Services Dropdown"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 motion-safe:transition-transform duration-200 ${
                        servicesDropdownOpen ? 'rotate-180 text-red-500' : 'text-zinc-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Dropdown Menu Popover */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-3 w-88 rounded-3xl bg-white dark:bg-workshop-card-subtle border border-zinc-200 dark:border-white/10 shadow-2xl p-3 z-50"
                  >
                    <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/80 mb-1 flex items-center justify-between">
               
                     
                    </div>

                    <div className="space-y-0.5 max-h-[380px] overflow-y-auto pr-1">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="w-full text-left p-2 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                        >
                          <div className="p-2 rounded-xl bg-red-500/10 group-hover/item:bg-red-500/20 text-red-600 dark:text-red-500 shrink-0 mt-0.5 transition-colors">
                            {getServiceIcon(srv.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-heading font-semibold text-xs text-zinc-900 dark:text-white group-hover/item:text-red-600 dark:group-hover/item:text-red-500 transition-colors truncate">
                              {srv.title}
                            </div>
                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1 leading-[1.65]">
                              {srv.tagline || srv.shortDesc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Prominent link to dedicated services page */}
                    <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-1.5">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="w-full py-2 px-3 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-600 dark:text-red-400 hover:text-white font-bold text-xs flex items-center justify-between transition-colors"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center justify-between px-2 text-[11px]">
                        <Link
                          href="/about"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          About Latin King
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Our Work Page Link */}
              <Link
                href="/our-work"
                className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                  isCurrent('/our-work')
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                }`}
              >
                Our Work
              </Link>

              {/* Dedicated About Us Page Link */}
              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                  isCurrent('/about')
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                }`}
              >
                About Us
              </Link>

              {/* Dedicated Locations Page Link */}
              <Link
                href="/locations"
                className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                  isCurrent('/locations')
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                }`}
              >
                Locations
              </Link>

              {/* Dedicated Reviews Page Link */}
              <Link
                href="/reviews"
                className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                  isCurrent('/reviews')
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                }`}
              >
                Reviews
              </Link>

              {/* Dedicated FAQ Page Link */}
              <Link
                href="/faq"
                className={`px-3 py-1.5 rounded-full text-xs transition-colors duration-150 ${
                  isCurrent('/faq')
                    ? 'text-red-600 dark:text-red-400 bg-red-500/10 dark:bg-red-500/15 font-semibold ring-1 ring-red-500/20'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 font-medium'
                }`}
              >
                FAQ
              </Link>
            </nav>

            {/* Right Controls: Red Pill CTA Button & Theme Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Subtle Map Pin Icon Shortcut */}
              <a
                href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center justify-center w-8 h-8 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-red-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Workshop Directions on Google Maps"
                aria-label="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>

              {/* Primary Red Pill Button (Matching Latin King crown) */}
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="whitespace-nowrap">Get Quote</span>
              </button>

              {/* Theme Toggle (Circular / rounded-full right next to CTA) */}
              <ThemeToggle className="rounded-full shrink-0" />

              {/* Mobile Drawer Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors lg:hidden focus:outline-none"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Slide-Over Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-workshop-muted shadow-2xl border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header with Full Logo */}
              <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <div className="hidden dark:block">
                    <Image
                      src="/images/logo-dark.png"
                      alt="Latin King Detailing"
                      width={140}
                      height={108}
                      className="h-11 w-auto object-contain"
                      priority
                    />
                  </div>
                  <div className="block dark:hidden">
                    <Image
                      src="/images/logo-light.png"
                      alt="Latin King Detailing"
                      width={140}
                      height={108}
                      className="h-11 w-auto object-contain"
                      priority
                    />
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dedicated Services Page Link in Drawer */}
              <div className="py-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-600 dark:text-red-400 hover:text-white font-bold text-xs flex items-center justify-between transition-colors mb-3"
                >
                  <span>Dedicated Services Page (7 Packages)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-[10px] font-bold text-red-600 dark:text-red-500 mb-2">
                  Our Detailing Services
                </div>
                <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                  {SERVICES.map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-left py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 truncate">
                        {getServiceIcon(srv.iconName)}
                        <span className="truncate">{srv.title}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* General Navigation Links to Dedicated Pages */}
              <nav className="py-4 space-y-1.5" aria-label="Mobile Navigation">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/services')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>All 6 Services Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/our-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/our-work')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/about')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>About Us (Our Story)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/locations')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>24 Greater Manchester Locations</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/reviews')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>Customer Reviews (5★)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent('/faq')
                      ? 'bg-red-500/10 text-red-600 dark:text-red-400 font-bold'
                      : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80'
                  }`}
                >
                  <span>FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
              </nav>

              {/* Direct Google Maps Link Card */}
              <div className="pt-2 pb-4">
                <a
                  href={SITE_CONFIG.primaryWorkshop.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-between text-xs text-red-700 dark:text-red-300 hover:bg-red-500/15 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <div>
                      <div className="font-bold">Directions &amp; Location</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        426 Flixton Rd, Urmston (M41 6QT)
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-red-500 shrink-0" />
                </a>
              </div>
            </div>

            {/* Footer Quick Actions */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Free Quote</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
