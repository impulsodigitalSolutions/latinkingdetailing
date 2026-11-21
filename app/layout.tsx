import type { Metadata } from 'next';
import Script from 'next/script';
import { Barlow, Barlow_Condensed, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModalProvider } from '@/components/ModalContext';
import { QuoteModal } from '@/components/QuoteModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { GalleryModal } from '@/components/GalleryModal';
import { FloatingActions } from '@/components/FloatingActions';
import { SITE_CONFIG } from '@/lib/site-config';
import { JsonLd } from '@/components/JsonLd';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/schema';
import { CookieConsent } from '@/components/CookieConsent';
import { ClarityScript } from '@/components/ClarityScript';
import { AnalyticsTracker } from '@/components/AnalyticsTracker';

const barlowCondensed = Barlow_Condensed({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
});

const barlow = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: `${SITE_CONFIG.brandName} · Ceramic Pro 9H Certified Detailing`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Manchester's certified Ceramic Pro 9H installer and paint correction specialist in Urmston. Premium car detailing and mobile valeting. Call 07482 225323.",
  keywords: [
    'Ceramic Coating Manchester',
    'Car Detailing Manchester',
    'Ceramic Pro Manchester',
    'Paint Correction Manchester',
    'Latin King Detailing',
    'Car Detailing Urmston',
    'Car Detailing Flixton',
    'Mobile Detailing Manchester',
    'Machine Polishing Manchester',
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  alternates: {
    canonical: SITE_CONFIG.baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.baseUrl,
    title: `${SITE_CONFIG.brandName} · ${SITE_CONFIG.tagline}`,
    description:
      "Manchester's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & Paint Correction Specialist. Based at 426 Flixton Road, Urmston, Manchester.",
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: '/images/hero-showcase.jpg',
        width: 1500,
        height: 1500,
        alt: `${SITE_CONFIG.brandName} · Ceramic Pro 9H Certified Detailing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} · ${SITE_CONFIG.tagline}`,
    description:
      "Manchester's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & Paint Correction Specialist.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo-crown.png',
    shortcut: '/images/logo-crown.png',
    apple: '/images/logo-crown.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId =
    process.env.NEXT_PUBLIC_GTM_ID ||
    (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.startsWith('GTM-')
      ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      : undefined);

  const gaId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
    !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID.startsWith('GTM-')
      ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      : undefined;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} font-sans h-full antialiased overflow-x-clip`}
    >
      <head>
        {/* Google Consent Mode v2 Default Configuration (UK GDPR / PECR compliance) */}
        <script
          id="google-consent-mode-default"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />

        {/* Google Tag Manager Container Script */}
        {gtmId && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-full flex flex-col overflow-x-clip bg-slate-50 dark:bg-[#0e0e0f] text-zinc-900 dark:text-zinc-100 selection:bg-red-600 selection:text-white transition-colors duration-150">
        {/* Google Tag Manager (noscript fallback) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Optional direct GA4 Script if separate GA4 ID provided */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', {
                    send_page_view: false
                  });
                `,
              }}
            />
          </>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <JsonLd id="schema-organization" data={getOrganizationSchema()} />
          <JsonLd id="schema-website" data={getWebSiteSchema()} />
          <ModalProvider>
            {children}
            <QuoteModal />
            <ServiceDetailModal />
            <GalleryModal />
            <FloatingActions />
            <CookieConsent />
            <ClarityScript />
            <AnalyticsTracker />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
