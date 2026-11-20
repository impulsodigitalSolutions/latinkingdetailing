/**
 * Latin King Detailing - Analytics & Conversion Tracking Module
 * Integrated with Google Tag Manager (GTM), Google Analytics 4 (GA4), and Microsoft Clarity.
 *
 * Tracks:
 * - Direct Call Clicks (tel:07482225323)
 * - WhatsApp Conversation Clicks (wa.me/447482225323)
 * - Quote Form Submissions & Starts
 * - Traffic Attribution (Source, Medium, Campaign, Referrer, Landing Page)
 * - Page Views & Popular Content Metrics
 * - UK GDPR / PECR Consent Mode v2 & Internal Traffic Opt-Out
 */

export interface TrackingParams {
  [key: string]: string | number | boolean | undefined | null;
}

export interface TrafficAttribution {
  traffic_source: string;
  traffic_medium: string;
  traffic_campaign: string;
  traffic_term?: string;
  traffic_content?: string;
  landing_page: string;
  referrer: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    lk_optout?: boolean;
    __lk_attribution?: TrafficAttribution;
  }
}

/**
 * Check if the user has opted out of internal traffic tracking.
 * Opt-out can be enabled via URL query param `?optout=true` or cookie `lk_optout=true`.
 */
export function isInternalTrafficOptedOut(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.lk_optout) return true;

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
 * Get or determine the visitor's traffic attribution (Source, Medium, Campaign, Referrer).
 * Persists in sessionStorage for the duration of the visit so conversion events always know
 * where the user originally came from (e.g. Google Ads, Organic Search, Instagram, Direct).
 */
export function getTrafficAttribution(): TrafficAttribution {
  if (typeof window === 'undefined') {
    return {
      traffic_source: 'direct',
      traffic_medium: 'none',
      traffic_campaign: 'none',
      landing_page: '/',
      referrer: '',
    };
  }

  if (window.__lk_attribution) {
    return window.__lk_attribution;
  }

  // Check sessionStorage for existing session attribution
  try {
    const cached = sessionStorage.getItem('lk_attribution');
    if (cached) {
      const parsed = JSON.parse(cached) as TrafficAttribution;
      window.__lk_attribution = parsed;
      return parsed;
    }
  } catch {
    // Ignore sessionStorage errors
  }

  // Compute attribution on initial landing
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign') || urlParams.get('campaign') || 'none';
  const utmTerm = urlParams.get('utm_term') || undefined;
  const utmContent = urlParams.get('utm_content') || undefined;

  const gclid = urlParams.get('gclid');
  const fbclid = urlParams.get('fbclid');
  const msclkid = urlParams.get('msclkid');
  const ttclid = urlParams.get('ttclid');

  const ref = document.referrer || '';
  let source = 'direct';
  let medium = 'none';

  if (utmSource || utmMedium) {
    source = utmSource || 'unknown';
    medium = utmMedium || 'unknown';
  } else if (gclid) {
    source = 'google';
    medium = 'cpc';
  } else if (msclkid) {
    source = 'bing';
    medium = 'cpc';
  } else if (fbclid) {
    source = 'facebook';
    medium = 'paid_social';
  } else if (ttclid) {
    source = 'tiktok';
    medium = 'paid_social';
  } else if (ref) {
    try {
      const refUrl = new URL(ref);
      const host = refUrl.hostname.toLowerCase();

      if (host.includes('google.')) {
        source = 'google';
        medium = 'organic';
      } else if (host.includes('bing.')) {
        source = 'bing';
        medium = 'organic';
      } else if (host.includes('yahoo.')) {
        source = 'yahoo';
        medium = 'organic';
      } else if (host.includes('duckduckgo.')) {
        source = 'duckduckgo';
        medium = 'organic';
      } else if (host.includes('instagram.com')) {
        source = 'instagram';
        medium = 'social';
      } else if (host.includes('facebook.com')) {
        source = 'facebook';
        medium = 'social';
      } else if (host.includes('tiktok.com')) {
        source = 'tiktok';
        medium = 'social';
      } else if (host.includes('youtube.com')) {
        source = 'youtube';
        medium = 'social';
      } else if (host.includes(window.location.hostname)) {
        source = 'internal';
        medium = 'navigation';
      } else {
        source = host;
        medium = 'referral';
      }
    } catch {
      source = 'referral';
      medium = 'referral';
    }
  }

  const attribution: TrafficAttribution = {
    traffic_source: source,
    traffic_medium: medium,
    traffic_campaign: utmCampaign,
    traffic_term: utmTerm,
    traffic_content: utmContent,
    landing_page: window.location.pathname,
    referrer: ref,
  };

  try {
    sessionStorage.setItem('lk_attribution', JSON.stringify(attribution));
  } catch {
    // Ignore storage quota
  }

  window.__lk_attribution = attribution;
  return attribution;
}

/**
 * Universal Event Dispatcher for Google Tag Manager (dataLayer), GA4 (gtag), and Clarity.
 * Automatically injects traffic attribution, page context, and timestamp.
 */
export function trackEvent(name: string, params: TrackingParams = {}): void {
  if (typeof window === 'undefined') return;

  if (isInternalTrafficOptedOut()) {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[Analytics Opted-Out] ${name}`, params);
    }
    return;
  }

  const attribution = getTrafficAttribution();

  const payload: Record<string, unknown> = {
    event: name,
    page_path: window.location.pathname,
    page_title: document.title,
    page_location: window.location.href,
    ...attribution,
    ...params,
    timestamp: new Date().toISOString(),
  };

  // 1. Push to Google Tag Manager dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // 2. Send directly to Google Analytics 4 (if gtag is active)
  if (typeof window.gtag === 'function') {
    try {
      window.gtag('event', name, payload);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Analytics Error]', e);
      }
    }
  }

  // 3. Send custom event to Microsoft Clarity if active
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', name);
    } catch {
      // Ignore clarity dispatch error
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[GTM/GA4 Event] ${name}:`, payload);
  }
}

/** Specific high-priority conversion event helpers */
export const trackConversion = {
  call: (phoneNumber: string, location: string) =>
    trackEvent('click_call', {
      phone_number: phoneNumber,
      link_url: `tel:${phoneNumber}`,
      link_text: phoneNumber,
      cta_location: location,
    }),

  whatsapp: (destination?: string, location?: string, messageHint?: string) =>
    trackEvent('click_whatsapp', {
      whatsapp_number: destination || '447482225323',
      link_url: 'https://wa.me/447482225323',
      link_text: 'WhatsApp Chat',
      cta_location: location || 'general',
      message_hint: messageHint || 'General Enquiry',
    }),

  email: (emailAddress: string, location?: string) =>
    trackEvent('click_email', {
      email_address: emailAddress,
      link_url: `mailto:${emailAddress}`,
      link_text: emailAddress,
      cta_location: location || 'general',
    }),

  directions: (destination: string) =>
    trackEvent('click_directions', {
      destination,
      link_text: 'Google Maps Directions',
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

  generateLead: (service: string, vehicle?: string, source?: string) => {
    trackEvent('generate_lead', {
      service,
      vehicle: vehicle || 'unspecified',
      source: source || 'quote_form',
    });
    // Also push dedicated quote_submission event for GTM triggers
    trackEvent('quote_submission', {
      service,
      vehicle: vehicle || 'unspecified',
      source: source || 'quote_form',
    });
  },

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
