import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModalProvider } from '@/components/ModalContext';
import { QuoteModal } from '@/components/QuoteModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { GalleryModal } from '@/components/GalleryModal';
import { FloatingActions } from '@/components/FloatingActions';
import { SITE_CONFIG } from '@/lib/site-config';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
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
    default: `${SITE_CONFIG.brandName} · ${SITE_CONFIG.tagline} | Ceramic Pro 9H Certified`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Manchester's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & Paint Correction Specialist based at 426 Flixton Road, Urmston, Manchester. Call 07482 225323.",
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans h-full antialiased overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip bg-white dark:bg-workshop-dark text-zinc-900 dark:text-zinc-100 selection:bg-red-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ModalProvider>
            {children}
            <QuoteModal />
            <ServiceDetailModal />
            <GalleryModal />
            <FloatingActions />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
