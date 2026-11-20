import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Canonical host enforcement: apex to www (fallback if not handled upstream at DNS/CDN)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'latinkingdetailing.co.uk',
          },
        ],
        destination: 'https://www.latinkingdetailing.co.uk/:path*',
        permanent: true,
      },
      // Gallery legacy path redirect
      {
        source: '/gallery',
        destination: '/our-work',
        permanent: true,
      },
      // Paint correction legacy / alias redirects
      {
        source: '/services/paint-correction',
        destination: '/services/machine-polishing',
        permanent: true,
      },
      {
        source: '/paint-correction',
        destination: '/services/machine-polishing',
        permanent: true,
      },
      // Shorthand service redirects
      {
        source: '/ceramic-coating',
        destination: '/services/ceramic-coating',
        permanent: true,
      },
      {
        source: '/machine-polishing',
        destination: '/services/machine-polishing',
        permanent: true,
      },
      {
        source: '/leather-coating',
        destination: '/services/leather-coating',
        permanent: true,
      },
      // Google Indexed Legacy URL Redirects (from Google Analytics / Search Console data)
      {
        source: '/car-detailing-manchester',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/engine-bay-cleaning',
        destination: '/services/deep-clean-engine-bay',
        permanent: true,
      },
      {
        source: '/engine-bay-cleaning',
        destination: '/services/deep-clean-engine-bay',
        permanent: true,
      },
      {
        source: '/services/deep-cleaning',
        destination: '/services/the-kings-detail',
        permanent: true,
      },
      {
        source: '/deep-cleaning',
        destination: '/services/the-kings-detail',
        permanent: true,
      },
      {
        source: '/services/valeting',
        destination: '/services/full-valet',
        permanent: true,
      },
      {
        source: '/valeting',
        destination: '/services/full-valet',
        permanent: true,
      },
      // Legacy area routes: /areas/:area -> /locations/:area
      {
        source: '/areas/:area',
        destination: '/locations/:area',
        permanent: true,
      },
      {
        source: '/areas',
        destination: '/locations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
