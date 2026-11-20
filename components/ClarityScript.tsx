'use client';

import React, { useEffect, useSyncExternalStore } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { hasAnalyticsConsent, isInternalTrafficOptedOut } from '@/lib/analytics';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

function subscribeConsent(callback: () => void) {
  window.addEventListener('lk_consent_updated', callback);
  return () => window.removeEventListener('lk_consent_updated', callback);
}

function getCanLoadSnapshot() {
  return !isInternalTrafficOptedOut() && hasAnalyticsConsent();
}

function getServerSnapshot() {
  return false;
}

export function ClarityScript() {
  const canLoadClarity = useSyncExternalStore(subscribeConsent, getCanLoadSnapshot, getServerSnapshot);
  const pathname = usePathname();

  // Set Clarity Custom Tags on route changes
  useEffect(() => {
    if (!canLoadClarity || typeof window === 'undefined' || typeof window.clarity !== 'function') {
      return;
    }

    try {
      if (pathname.startsWith('/services/')) {
        const serviceSlug = pathname.replace('/services/', '');
        window.clarity('set', 'service_viewed', serviceSlug);
      } else if (pathname.startsWith('/locations/')) {
        const areaSlug = pathname.replace('/locations/', '');
        window.clarity('set', 'area_viewed', areaSlug);
      } else if (pathname.startsWith('/guides/')) {
        const guideSlug = pathname.replace('/guides/', '');
        window.clarity('set', 'guide_viewed', guideSlug);
      }
      window.clarity('set', 'page_path', pathname);
    } catch {
      // Ignore tag errors
    }
  }, [pathname, canLoadClarity]);

  if (!CLARITY_PROJECT_ID || !canLoadClarity) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `,
      }}
    />
  );
}
