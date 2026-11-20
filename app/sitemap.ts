import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import { SERVICES } from '@/lib/site-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static core routes with priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_CONFIG.baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/comparison`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_CONFIG.baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic service detail routes
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: service.slug === 'ceramic-coating' ? 0.9 : 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
