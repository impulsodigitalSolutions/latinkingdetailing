'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal, openServiceModal } = useModals();

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
      <div className="sticky top-3 sm:top-5 z-40 w-full px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <header
          className={`pointer-events-auto max-w-6xl mx-auto rounded-full border transition-all duration-300 px-4 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? 'bg-white/92 dark:bg-[#1c1d24]/92 backdrop-blur-xl border-zinc-300/80 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/30'
              : 'bg-white/80 dark:bg-[#1a1b22]/85 backdrop-blur-lg border-zinc-200/80 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20'
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
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
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
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Center: Streamlined Nav Links with Services Dropdown */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {/* Clubbed Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    servicesDropdownOpen
                      ? 'text-red-600 dark:text-red-500 bg-red-500/10'
                      : 'text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-red-500' : 'text-zinc-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu Popover */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-3 w-88 rounded-3xl bg-white dark:bg-[#1d1e25] border border-zinc-200 dark:border-white/10 shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800/80 mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                        7 Certified Detailing Services
                      </span>
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-[10px] font-bold text-red-600 dark:text-red-400 hover:underline inline-flex items-center gap-0.5"
                      >
                        <span>Full Menu</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>

                    <div className="space-y-0.5 max-h-[380px] overflow-y-auto pr-1">
                      {SERVICES.map((srv) => (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            openServiceModal(srv.id);
                          }}
                          className="w-full text-left p-2 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-800/70 transition-colors flex items-start gap-2.5 group/item cursor-pointer"
                        >
                          <div className="p-2 rounded-xl bg-red-500/10 group-hover/item:bg-red-500/20 text-red-600 dark:text-red-500 shrink-0 mt-0.5 transition-colors">
                            {getServiceIcon(srv.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-zinc-900 dark:text-white group-hover/item:text-red-600 dark:group-hover/item:text-red-500 transition-colors truncate">
                              {srv.title}
                            </div>
                            <div className="text-[10px] text-zinc-500 dark:text-zinc-400 line-clamp-1">
                              {srv.tagline || srv.shortDesc}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Prominent link to dedicated services page */}
                    <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-1.5">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="w-full py-2 px-3 rounded-xl bg-red-600/10 hover:bg-red-600 text-red-600 dark:text-red-400 hover:text-white font-bold text-xs flex items-center justify-between transition-colors"
                      >
                        <span>View Dedicated Services Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center justify-between px-2 text-[11px]">
                        <Link
                          href="/#comparison"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          Ceramic vs PPF Matrix
                        </Link>
                        <Link
                          href="/#locations"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                          24 Bolton Towns
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Dedicated Services Page Link */}
              <Link
                href="/services"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
              >
                All Services
              </Link>

              {/* Other streamlined nav links */}
              <Link
                href="/#gallery"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
              >
                Gallery
              </Link>

              <Link
                href="/#comparison"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
              >
                Comparison
              </Link>

              <Link
                href="/#locations"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
              >
                Locations
              </Link>

              <Link
                href="/#reviews"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
              >
                Reviews
              </Link>

              <Link
                href="/#faq"
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-200 hover:text-red-600 dark:hover:text-red-500 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-all"
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
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-red-600 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-red-600/25 hover:shadow-red-600/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white dark:bg-[#181920] shadow-2xl border-l border-zinc-200 dark:border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
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

                <div className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-500 mb-2">
                  Our Detailing Services
                </div>
                <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openServiceModal(srv.id);
                      }}
                      className="w-full text-left py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 truncate">
                        {getServiceIcon(srv.iconName)}
                        <span className="truncate">{srv.title}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* General Navigation Links */}
              <nav className="py-4 space-y-1.5" aria-label="Mobile Navigation">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>All Services Page</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>Recent Work Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/#comparison"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>Ceramic vs PPF Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/#locations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>24 Greater Manchester Locations</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>Customer Reviews (4.7★)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </Link>
                <Link
                  href="/#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                >
                  <span>FAQs & Pricing</span>
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
                      <div className="font-bold">Workshop Directions</div>
                      <div className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        115 Albert Rd, Farnworth (BL4 9EA)
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
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-600/30"
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
