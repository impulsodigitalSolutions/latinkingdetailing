'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { Shield, Cookie, X } from 'lucide-react';

export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const COOKIE_NAME = 'lk_consent';

function subscribeConsent(callback: () => void) {
  window.addEventListener('lk_consent_updated', callback);
  return () => window.removeEventListener('lk_consent_updated', callback);
}

function getStoredConsentSnapshot(): string {
  if (typeof document === 'undefined') return '';
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : '';
}

function getServerSnapshot(): string {
  return '__SSR__';
}

function parseConsent(raw: string): ConsentState | null {
  if (!raw || raw === '__SSR__') return null;
  try {
    return JSON.parse(decodeURIComponent(raw));
  } catch {
    return null;
  }
}

function saveConsent(state: { analytics: boolean; marketing: boolean }) {
  const payload: ConsentState = {
    analytics: state.analytics,
    marketing: state.marketing,
    timestamp: new Date().toISOString(),
  };

  const oneYearInSeconds = 365 * 24 * 60 * 60;
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(payload)
  )}; max-age=${oneYearInSeconds}; path=/; SameSite=Lax`;

  // Update Google Consent Mode v2
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: payload.analytics ? 'granted' : 'denied',
      ad_storage: payload.marketing ? 'granted' : 'denied',
      ad_user_data: payload.marketing ? 'granted' : 'denied',
      ad_personalization: payload.marketing ? 'granted' : 'denied',
    });
  }

  // Dispatch custom event for Clarity & other listeners
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('lk_consent_updated', {
        detail: payload,
      })
    );
  }

  return payload;
}

export function CookieConsent() {
  const consentRaw = useSyncExternalStore(
    subscribeConsent,
    getStoredConsentSnapshot,
    getServerSnapshot
  );

  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  // Sync Google Consent Mode whenever stored consent changes
  useEffect(() => {
    const parsed = parseConsent(consentRaw);
    if (parsed && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: parsed.analytics ? 'granted' : 'denied',
        ad_storage: parsed.marketing ? 'granted' : 'denied',
        ad_user_data: parsed.marketing ? 'granted' : 'denied',
        ad_personalization: parsed.marketing ? 'granted' : 'denied',
      });
    }
  }, [consentRaw]);

  // Listener for "Cookie Settings" in footer or elsewhere
  useEffect(() => {
    const handleOpenModal = () => {
      const parsed = parseConsent(getStoredConsentSnapshot());
      if (parsed) {
        setAnalyticsEnabled(parsed.analytics);
        setMarketingEnabled(parsed.marketing);
      }
      setShowModal(true);
    };

    window.addEventListener('lk_open_cookie_modal', handleOpenModal);
    return () => window.removeEventListener('lk_open_cookie_modal', handleOpenModal);
  }, []);

  const isClient = consentRaw !== '__SSR__';
  const hasConsented = Boolean(consentRaw && consentRaw !== '__SSR__');

  if (!isClient) return null;

  const handleAcceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    setShowModal(false);
  };

  const handleRejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    saveConsent({ analytics: analyticsEnabled, marketing: marketingEnabled });
    setShowModal(false);
  };

  return (
    <>
      {/* Non-intrusive Cookie Banner (UK GDPR & PECR Compliant) */}
      {!hasConsented && !showModal && (
        <aside
          role="region"
          aria-label="Cookie Preferences"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-workshop-card/95 backdrop-blur-md border-t border-zinc-800 text-white shadow-2xl animate-fade-in"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-500 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-xs sm:text-sm text-zinc-300">
                <p className="font-semibold text-white">Your Privacy &amp; Cookie Choices</p>
                <p className="leading-relaxed text-zinc-400 text-xs">
                  We use essential cookies to maintain secure site operation. With your explicit consent, we also utilise Google Analytics 4 and Microsoft Clarity to understand visitor behaviour and evaluate booking inquiries. See our{' '}
                  <Link href="/cookie-policy" className="text-red-400 hover:underline">
                    Cookie Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-red-400 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-3.5 py-2 rounded-xl border border-white/10 hover:border-zinc-500 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex-1 md:flex-none text-center cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="px-3.5 py-2 rounded-xl border border-white/10 hover:border-zinc-500 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex-1 md:flex-none text-center cursor-pointer"
              >
                Manage
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold text-white transition-colors shadow-lg shadow-red-600/20 flex-1 md:flex-none text-center cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Management Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-workshop-card border border-zinc-800 text-white p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-red-500" />
                <h2 id="cookie-modal-title" className="text-lg font-bold">
                  Cookie &amp; Tracking Preferences
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close preferences"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              In accordance with UK GDPR and the Privacy and Electronic Communications Regulations (PECR), you have total control over optional tracking technologies.
            </p>

            <div className="mt-6 space-y-4">
              {/* Category 1: Strictly Necessary */}
              <div className="p-4 rounded-2xl bg-workshop-muted/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Strictly Necessary</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-mono">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Essential cookies required for site security, theme preference, and storing your consent choices. Cannot be turned off.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4 rounded accent-red-600 cursor-not-allowed opacity-60"
                  aria-label="Strictly Necessary Cookies (Always Active)"
                />
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="p-4 rounded-2xl bg-workshop-muted/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Performance &amp; Analytics</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 font-mono">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Google Analytics 4 &amp; Microsoft Clarity. Helps us measure vehicle enquiry conversions, diagnostic traffic, and page navigation without storing personal names.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="consent-analytics"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-red-600 cursor-pointer"
                />
              </div>

              {/* Category 3: Marketing & Ads */}
              <div className="p-4 rounded-2xl bg-workshop-muted/40 border border-white/5 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Targeting &amp; Signals</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 font-mono">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Enables Google Consent Mode ad signals for local detailing campaigns. Denied by default.
                  </p>
                </div>
                <input
                  type="checkbox"
                  id="consent-marketing"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-red-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-2 rounded-xl border border-white/10 hover:border-zinc-500 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold text-white transition-colors shadow-lg shadow-red-600/20 cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
