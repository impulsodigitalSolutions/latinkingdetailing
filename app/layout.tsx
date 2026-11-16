import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModalProvider } from '@/components/ModalContext';
import { QuoteModal } from '@/components/QuoteModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { GalleryModal } from '@/components/GalleryModal';
import { FloatingActions } from '@/components/FloatingActions';
import { SITE_CONFIG } from '@/lib/site-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline} | Ceramic Pro 9H Certified`,
  description:
    "Bolton's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & KAVACA PPF Approved based in Farnworth, Bolton. 5 minutes from M61 junction 4. Call 07482 225323.",
  keywords: [
    'Ceramic Coating Bolton',
    'Car Detailing Bolton',
    'Ceramic Pro Manchester',
    'KAVACA PPF Bolton',
    'Latin King Detailing',
    'Paint Protection Film Greater Manchester',
    'Car Detailing Farnworth',
    'Paint Correction Bolton',
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://ceramicpromanchester.com',
    title: `${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}`,
    description:
      "Bolton's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & KAVACA PPF Approved. Based in Farnworth, 5 minutes from M61 Jct 4.",
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brandName} — Ceramic Pro 9H Supercar Detailing`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.brandName} — ${SITE_CONFIG.tagline}`,
    description:
      "Bolton's premier car ceramic coating and detailing specialists. Ceramic Pro 9H Certified Installer & KAVACA PPF Approved.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#14151a] text-[#0f172a] dark:text-[#f3f4f6] selection:bg-red-600 selection:text-white">
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
