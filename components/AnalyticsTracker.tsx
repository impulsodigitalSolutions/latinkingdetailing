'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackEvent,
  trackConversion,
  isInternalTrafficOptedOut,
  getTrafficAttribution,
} from '@/lib/analytics';

const emptySubscribe = () => () => {};

export function AnalyticsTracker() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const pathname = usePathname();
  const trackedFormsRef = useRef<Set<HTMLFormElement>>(new Set());
  const scrolled50Ref = useRef(false);
  const scrolled90Ref = useRef(false);
  const guideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasAttributedRef = useRef(false);

  // Initial Session & Traffic Medium Attribution
  useEffect(() => {
    if (!isClient || hasAttributedRef.current) return;
    hasAttributedRef.current = true;

    if (isInternalTrafficOptedOut()) return;

    const attribution = getTrafficAttribution();
    trackEvent('session_landing', {
      ...attribution,
    });
  }, [isClient, pathname]);

  // Handle Page Views on Route Changes (helps see which page is viewed most)
  useEffect(() => {
    if (!isClient) return;

    scrolled50Ref.current = false;
    scrolled90Ref.current = false;

    if (isInternalTrafficOptedOut()) return;

    const pageType =
      pathname.startsWith('/services/') ? 'service_detail' :
      pathname.startsWith('/locations/') ? 'location_page' :
      pathname.startsWith('/guides/') ? 'guide_article' :
      pathname === '/' ? 'homepage' :
      pathname === '/faq' ? 'faq_hub' :
      pathname === '/our-work' ? 'gallery_portfolio' :
      pathname === '/comparison' ? 'comparison_matrix' :
      pathname === '/reviews' ? 'reviews_page' :
      pathname === '/about' ? 'about_page' :
      'general_page';

    // Push virtual_page_view for SPA routing in GTM
    trackEvent('virtual_page_view', {
      page_path: pathname,
      page_title: document.title,
      page_location: window.location.href,
      page_type: pageType,
    });

    // Also trigger native gtag page_view if gtag script is loaded
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Guide read timer (45 seconds on guide articles)
    if (pathname.startsWith('/guides/')) {
      if (guideTimerRef.current) clearTimeout(guideTimerRef.current);
      guideTimerRef.current = setTimeout(() => {
        if (scrolled50Ref.current) {
          trackConversion.guideRead(document.title, 45);
        }
      }, 45000);
    }

    return () => {
      if (guideTimerRef.current) clearTimeout(guideTimerRef.current);
    };
  }, [pathname, isClient]);

  // Delegated Global Click Listener & Scroll Depth Listener
  useEffect(() => {
    if (!isClient) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const link = target.closest<HTMLAnchorElement>('a');
      const button = target.closest<HTMLButtonElement>('button');
      const element = link || button;

      if (!element) return;

      const href = link?.href || element.getAttribute('href') || '';
      const text = (element.innerText || element.getAttribute('aria-label') || element.getAttribute('title') || '').trim();
      const currentHost = window.location.host;

      const ctaLocation =
        element.closest('header, nav') ? 'header' :
        element.closest('footer') ? 'footer' :
        element.closest('[id*="hero"]') ? 'hero' :
        element.closest('[class*="sticky"], [class*="FloatingActions"]') ? 'sticky_bar' :
        element.closest('[id*="service"], [class*="service"]') ? 'service_section' :
        element.closest('[id*="locations"]') ? 'locations_section' :
        'body';

      // 1. Phone call clicks (attribute & href tracking)
      const isCallTrack = element.getAttribute('data-track') === 'call' || href.startsWith('tel:');
      if (isCallTrack) {
        const phone = href.replace('tel:', '') || '07482 225323';
        trackConversion.call(phone, ctaLocation);
        return;
      }

      // 2. WhatsApp clicks (attribute & href tracking)
      const isWaTrack = element.getAttribute('data-track') === 'whatsapp' || href.includes('wa.me') || href.includes('whatsapp.com');
      if (isWaTrack) {
        trackConversion.whatsapp('447482225323', ctaLocation, text || 'WhatsApp Click');
        return;
      }

      // 3. Email clicks
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        trackConversion.email(email, ctaLocation);
        return;
      }

      // 4. Directions / Google Maps clicks
      if (href.includes('google.com/maps') || href.includes('maps.google.com') || href.includes('goo.gl/maps')) {
        trackConversion.directions(text || 'Google Maps Flixton Base');
        return;
      }

      // 5. Social Media clicks
      if (href.includes('instagram.com')) {
        trackEvent('click_social', {
          platform: 'instagram',
          link_url: href,
          page_path: pathname,
        });
        return;
      }
      if (href.includes('tiktok.com')) {
        trackEvent('click_social', {
          platform: 'tiktok',
          link_url: href,
          page_path: pathname,
        });
        return;
      }
      if (href.includes('facebook.com')) {
        trackEvent('click_social', {
          platform: 'facebook',
          link_url: href,
          page_path: pathname,
        });
        return;
      }

      // 6. Google Review link clicks
      if (href.includes('share.google') || href.includes('g.page') || (href.includes('google.com') && href.includes('review'))) {
        trackEvent('click_google_review', {
          link_text: text || 'Google Reviews',
          link_url: href,
          page_path: pathname,
        });
        return;
      }

      // 7. Call-to-Action (CTA) clicks (Quote buttons, bookings, inquiries)
      const isCtaAttr = element.getAttribute('data-track-cta') || element.getAttribute('data-cta');
      const ctaKeywords = [
        'get quote',
        'request quote',
        'request a quote',
        'request workshop quote',
        'book a detail',
        'book inspection',
        'book now',
        'enquire',
        'ask our team',
        'check availability',
        'instant quote',
      ];
      const lowerText = text.toLowerCase();
      const isCtaText = ctaKeywords.some((keyword) => lowerText.includes(keyword));

      if (isCtaAttr || isCtaText) {
        trackConversion.cta(text || isCtaAttr || 'Call To Action', ctaLocation);
      }

      // 8. FAQ Accordion Click Tracking
      const faqTrigger = target.closest<HTMLElement>('summary, button[aria-expanded], [data-faq-question]');
      if (faqTrigger) {
        const questionText = faqTrigger.innerText.trim();
        if (questionText) {
          trackConversion.faqOpen(questionText.slice(0, 120));
        }
      }

      // 9. Outbound Link Tracking
      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        try {
          const parsed = new URL(href);
          if (parsed.host !== currentHost && !parsed.host.includes('latinkingdetailing.co.uk')) {
            trackEvent('outbound_click', {
              link_domain: parsed.hostname,
              link_url: href,
              page_path: pathname,
            });
          }
        } catch {
          // Ignore invalid URL parse
        }
      }
    };

    // Form Start (Focus) Listener
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const form = target.closest('form');
      if (form && !trackedFormsRef.current.has(form)) {
        trackedFormsRef.current.add(form);
        const formId = form.id || form.getAttribute('name') || form.getAttribute('data-track') || 'quote_form';
        trackConversion.formStart(formId);
      }
    };

    // Scroll Depth Listener (50% and 90% on guides & service pages)
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percentage = Math.round((scrollY / docHeight) * 100);

      if (percentage >= 50 && !scrolled50Ref.current) {
        scrolled50Ref.current = true;
        if (pathname.startsWith('/services/') || pathname.startsWith('/guides/') || pathname === '/') {
          trackConversion.scrollDepth(50, pathname);
        }
      }

      if (percentage >= 90 && !scrolled90Ref.current) {
        scrolled90Ref.current = true;
        if (pathname.startsWith('/services/') || pathname.startsWith('/guides/') || pathname === '/') {
          trackConversion.scrollDepth(90, pathname);
        }
      }
    };

    document.addEventListener('click', handleClick, { passive: true });
    document.addEventListener('focusin', handleFocusIn, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, isClient]);

  return null;
}
