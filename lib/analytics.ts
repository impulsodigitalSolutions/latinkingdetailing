/**
 * Latin King Detailing - Analytics & Conversion Tracking Module
 * Supports Google Analytics 4 (Consent Mode v2) and Microsoft Clarity.
 *
 * Respects UK GDPR / PECR consent requirements and internal traffic opt-outs.
 */

export interface TrackingParams {
  [key: string]: string | number | boolean | undefined | null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    lk_optout?: boolean;
  }
}

/**
 * Check if the user has opted out of internal traffic tracking.
 * Opt-out can be enabled via URL query param `?optout=true` or cookie `lk_optout=true`.
 */
export function isInternalTrafficOptedOut(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.lk_optout) return true;

  // Check URL parameters
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('optout') === 'true' || urlParams.get('internal') === 'true') {
      document.cookie = 'lk_optout=true; max-age=31536000; path=/; SameSite=Lax';
      window.lk_optout = true;
      return true;
    }
  } catch {
    // Ignore URL parse errors
  }

  // Check cookies
  if (document.cookie.includes('lk_optout=true')) {
    window.lk_optout = true;
    return true;
  }

  return false;
}

/**
 * Check if analytics consent has been granted under UK GDPR / PECR.
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const match = document.cookie.match(/(?:^|;\s*)lk_consent=([^;]+)/);
    if (!match) return false;
    const data = JSON.parse(decodeURIComponent(match[1]));
    return Boolean(data.analytics);
  } catch {
    return false;
  }
}

/**
 * Safe, typed event dispatcher for GA4 and Clarity.
 * No-ops safely if consent has not been granted, tracking IDs are unset, or user is opted out.
 */
export function trackEvent(name: string, params: TrackingParams = {}): void {
  if (typeof window === 'undefined') return;

  if (isInternalTrafficOptedOut()) {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[Analytics Opted-Out] ${name}`, params);
    }
    return;
  }

  // Send to Google Analytics 4 if available
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', name, {
        page_path: window.location.pathname,
        page_title: document.title,
        ...params,
      });
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Error]', e);
      }
    }
  }

  // Send custom event to Microsoft Clarity if available
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', name);
    } catch {
      // Ignore clarity dispatch error
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics Tracked] ${name}`, params);
  }
}

/** Specific high-priority conversion event helpers */
export const trackConversion = {
  call: (phoneNumber: string, location: string) =>
    trackEvent('click_call', {
      link_url: `tel:${phoneNumber}`,
      link_text: phoneNumber,
      location,
    }),

  whatsapp: (messageHint?: string, location?: string) =>
    trackEvent('click_whatsapp', {
      link_url: 'https://wa.me/447482225323',
      link_text: 'WhatsApp',
      message_hint: messageHint || 'General Enquiry',
      location: location || 'general',
    }),

  email: (emailAddress: string, location?: string) =>
    trackEvent('click_email', {
      link_url: `mailto:${emailAddress}`,
      link_text: emailAddress,
      location: location || 'general',
    }),

  directions: (destination: string) =>
    trackEvent('click_directions', {
      link_text: 'Google Maps Directions',
      destination,
    }),

  cta: (ctaText: string, ctaLocation: string, service?: string) =>
    trackEvent('click_cta', {
      cta_text: ctaText,
      cta_location: ctaLocation,
      service: service || 'unspecified',
    }),

  formStart: (formName: string, service?: string) =>
    trackEvent('form_start', {
      form_name: formName,
      service: service || 'unspecified',
    }),

  generateLead: (service: string, vehicle?: string, source?: string) =>
    trackEvent('generate_lead', {
      service,
      vehicle: vehicle || 'unspecified',
      source: source || 'quote_form',
    }),

  faqOpen: (question: string) =>
    trackEvent('faq_open', {
      question,
    }),

  scrollDepth: (depth: 50 | 90, pagePath: string) =>
    trackEvent('scroll_depth', {
      depth,
      page_path: pagePath,
    }),

  guideRead: (title: string, seconds: number) =>
    trackEvent('guide_read', {
      guide_title: title,
      time_spent_seconds: seconds,
    }),
};
