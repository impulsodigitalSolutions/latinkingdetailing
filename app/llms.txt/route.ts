import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { SERVICES, BLOG_POSTS } from '@/lib/site-data';

export async function GET() {
  const content = `# Latin King Detailing - LLM Information File
> Manchester's Certified Ceramic Pro 9H & Automotive Detailing Specialists

## Business Overview
- **Name**: ${SITE_CONFIG.brandName}
- **Tagline**: ${SITE_CONFIG.tagline}
- **Website**: ${SITE_CONFIG.baseUrl}
- **Physical Workshop**: ${SITE_CONFIG.address.fullAddress}
- **Geo-Coordinates**: ${SITE_CONFIG.address.geo.latitude}, ${SITE_CONFIG.address.geo.longitude}
- **Telephone**: ${SITE_CONFIG.phone} (${SITE_CONFIG.phoneFormatted})
- **WhatsApp**: ${SITE_CONFIG.whatsappHref}
- **Email**: ${SITE_CONFIG.email}
- **Google Rating**: ${SITE_CONFIG.googleRating}★ (${SITE_CONFIG.googleReviewCount}+ Verified Reviews)
- **Accreditation**: Ceramic Pro 9H Certified Installer & Paint Correction Specialist
- **Insurance**: £5,000,000 Public Liability & Vehicle Damage Protection

## Core Service Catalog
${SERVICES.map(
  (s) => `### ${s.title}
- **Starting Price**: ${s.startingPrice}
- **URL**: ${SITE_CONFIG.baseUrl}/services/${s.slug}
- **Description**: ${s.shortDesc}
- **Key Guarantee**: ${s.warranty || 'Certified Ceramic Pro 9H Standard'}
`
).join('\n')}

## Service Coverage Areas
Serving mobile and workshop customers across Greater Manchester and Cheshire:
${SITE_CONFIG.coreAreas.map((a) => `- **${a.name}** (${a.county}) - ${a.travelTime}`).join('\n')}

## Expert Detailing Guides
${BLOG_POSTS.map(
  (g) => `- [${g.title}](${SITE_CONFIG.baseUrl}/guides/${g.slug}): ${g.excerpt}`
).join('\n')}

## Key URLs
- Homepage: ${SITE_CONFIG.baseUrl}/
- Services: ${SITE_CONFIG.baseUrl}/services
- Work Gallery: ${SITE_CONFIG.baseUrl}/our-work
- Paint Protection Comparison: ${SITE_CONFIG.baseUrl}/comparison
- Customer Reviews: ${SITE_CONFIG.baseUrl}/reviews
- Service Areas: ${SITE_CONFIG.baseUrl}/locations
- Detailing Guides: ${SITE_CONFIG.baseUrl}/guides
- FAQs: ${SITE_CONFIG.baseUrl}/faq
- About: ${SITE_CONFIG.baseUrl}/about
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
