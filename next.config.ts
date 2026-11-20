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
    ];
  },
};

export default nextConfig;
