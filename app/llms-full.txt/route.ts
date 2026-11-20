import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/lib/site-config';
import { SERVICES, BLOG_POSTS, FAQ_ITEMS, COMPARISON_TABLE } from '@/lib/site-data';

export async function GET() {
  const content = `# Latin King Detailing - Complete Technical Knowledge File (llms-full.txt)
> Comprehensive reference for AI answer engines, generative search assistants, and customers.

## 1. Business Profile
- **Entity**: Latin King Detailing (${SITE_CONFIG.legalName})
- **Specialization**: Ceramic Pro 9H Nanoceramic Coating, Paint Correction, Interior Leather Protection, and Mobile Car Detailing.
- **Workshop Address**: ${SITE_CONFIG.address.fullAddress}
- **Operating Base**: Flixton, Urmston, Manchester, M41 6QT, United Kingdom
- **Geo Coordinates**: Latitude ${SITE_CONFIG.address.geo.latitude}, Longitude ${SITE_CONFIG.address.geo.longitude}
- **Direct Phone**: ${SITE_CONFIG.phone} (${SITE_CONFIG.phoneFormatted})
- **WhatsApp**: ${SITE_CONFIG.whatsappHref}
- **Email**: ${SITE_CONFIG.email}
- **Google Maps**: ${SITE_CONFIG.address.googleMapsUrl}
- **Google Business Rating**: ${SITE_CONFIG.googleRating} / 5.0 (60+ verified 5-star reviews)
- **Insurance**: £5M Public Liability & Motor Trade Policy

## 2. Accreditations & Certifications
- **Ceramic Pro 9H Certified Installer**: Factory accredited to apply Ceramic Pro 9H and Top Coat with VIN-registered manufacturer warranties.
- **Paint Correction Specialist**: Multi-stage dual-action and rotary machine polishing defect removal specialist.
- **High-End Product Guarantee**: Zero dilution, commercial-grade compounds and pH-neutral decontamination chemicals.

## 3. Services Deep Dive & Pricing Matrix
${SERVICES.map(
  (s) => `### ${s.title}
- **Slug**: /services/${s.slug}
- **Starting Price**: ${s.startingPrice}
- **Summary**: ${s.shortDesc}
- **Full Scope**: ${s.fullDesc}
- **Warranty / Protection**: ${s.warranty || 'Certified Workshop Guarantee'}
- **Highlights**:
${s.highlights.map((h) => `  - ${h}`).join('\n')}
`
).join('\n')}

## 4. Protection Technology Comparison
Ceramic Pro 9H nanoceramic coating versus quick dealership polymer sealants and traditional waxes:
${COMPARISON_TABLE.map(
  (row) => `- **${row.feature}**: Ceramic Pro 9H = "${row.ceramic}" | Dealership Sealant = "${row.dealership}" | Carnauba Wax = "${row.wax}"`
).join('\n')}

## 5. Frequently Asked Questions & Verified Answers
${FAQ_ITEMS.map(
  (f) => `### ${f.question}
${f.answer}
`
).join('\n')}

## 6. Informational Detailing Guides
${BLOG_POSTS.map(
  (g) => `### ${g.title}
- **URL**: ${SITE_CONFIG.baseUrl}/guides/${g.slug}
- **Category**: ${g.category}
- **Author**: ${g.author}
- **Read Time**: ${g.readTime}
- **Excerpt**: ${g.excerpt}
- **Content Outline**:
${g.content.map((p) => `  > ${p}`).join('\n')}
`
).join('\n')}

## 7. Geographic Territory
Latin King Detailing operates both a dedicated studio workshop in Flixton/Urmston and fully equipped mobile detailing units across:
${SITE_CONFIG.coreAreas.map((a) => `- ${a.name} (${a.county}) - Travel time from workshop: ${a.travelTime}`).join('\n')}
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
    },
  });
}
