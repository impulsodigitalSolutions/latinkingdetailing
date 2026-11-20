'use client';

import React, { useEffect, useRef, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent, trackConversion, isInternalTrafficOptedOut } from '@/lib/analytics';

const emptySubscribe = () => () => {};

export function AnalyticsTracker() {
  const isClient = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const pathname = usePathname();
  const trackedFormsRef = useRef<Set<HTMLFormElement>>(new Set());
  const scrolled50Ref = useRef(false);
  const scrolled90Ref = useRef(false);
  const guideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle Page Views on Route Changes
  useEffect(() => {
    if (!isClient) return;

    // Reset scroll tracking per page navigation
    scrolled50Ref.current = false;
    scrolled90Ref.current = false;

    // Internal traffic opt-out check
    if (isInternalTrafficOptedOut()) {
      return;
    }

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

      // 1. Phone clicks
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '');
        trackEvent('click_call', {
          link_text: text || phone,
          link_url: href,
          page_path: pathname,
        });
        return;
      }

      // 2. WhatsApp clicks
      if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackEvent('click_whatsapp', {
          link_text: text || 'WhatsApp',
          link_url: href,
          page_path: pathname,
        });
        return;
      }

      // 3. Email clicks
      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        trackEvent('click_email', {
          link_text: text || email,
          link_url: href,
          page_path: pathname,
        });
        return;
      }

      // 4. Directions / Google Maps clicks
      if (href.includes('google.com/maps') || href.includes('maps.google.com') || href.includes('goo.gl/maps')) {
        trackEvent('click_directions', {
          link_text: text || 'Google Maps',
          link_url: href,
          page_path: pathname,
        });
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

      // 7. General Call-to-Action (CTA) clicks
      const isCtaAttr = element.getAttribute('data-track-cta') || element.getAttribute('data-cta');
      const ctaKeywords = [
        'get quote',
        'request quote',
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
        const ctaLocation =
          element.closest('header, nav') ? 'header' :
          element.closest('footer') ? 'footer' :
          element.closest('[id*="hero"]') ? 'hero' :
          element.closest('[class*="sticky"], [class*="FloatingActions"]') ? 'sticky_bar' :
          element.closest('[id*="service"], [class*="service"]') ? 'service_section' :
          'body';

        trackEvent('click_cta', {
          cta_text: text || isCtaAttr || 'Call To Action',
          cta_location: ctaLocation,
          page_path: pathname,
        });
      }

      // 8. FAQ Accordion Click Tracking
      const faqTrigger = target.closest<HTMLElement>('summary, button[aria-expanded], [data-faq-question]');
      if (faqTrigger) {
        const questionText = faqTrigger.innerText.trim();
        if (questionText) {
          trackEvent('faq_open', {
            question: questionText.slice(0, 120),
            page_path: pathname,
          });
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
        const formId = form.id || form.getAttribute('name') || 'quote_form';
        trackEvent('form_start', {
          form_id: formId,
          page_path: pathname,
        });
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
          trackEvent('scroll_depth', { depth: 50, page_path: pathname });
        }
      }

      if (percentage >= 90 && !scrolled90Ref.current) {
        scrolled90Ref.current = true;
        if (pathname.startsWith('/services/') || pathname.startsWith('/guides/') || pathname === '/') {
          trackEvent('scroll_depth', { depth: 90, page_path: pathname });
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
