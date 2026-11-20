/**
 * Single source of truth for business facts, canonical URLs, and brand configuration.
 * All metadata, schema, footers, headers, robots, sitemap, and LLMs txt must consume this.
 */

export const SITE_CONFIG = {
  brandName: 'Latin King Detailing',
  shortName: 'Latin King',
  monogram: 'LK',
  tagline: "Manchester's Mobile & Studio Detailing Specialists",
  legalName: 'Latin King Detailing Ltd',

  // Canonical Host
  baseUrl: 'https://www.latinkingdetailing.co.uk',
  apexDomain: 'latinkingdetailing.co.uk',
  domain: 'www.latinkingdetailing.co.uk',

  // Contact
  phone: '07482 225323',
  phoneDisplay: '07482 225323',
  phoneFormatted: '+44 7482 225323',
  phoneHref: 'tel:07482225323',
  whatsappNumber: '447482225323',
  whatsappHref: 'https://wa.me/447482225323',
  email: 'latinkingdetailing@outlook.com',
  emailHref: 'mailto:latinkingdetailing@outlook.com',

  // Physical Location & Geo Coordinates
  address: {
    title: 'Latin King Detailing Workshop & Mobile Base',
    street: '426 Flixton Road',
    town: 'Flixton',
    district: 'Urmston',
    city: 'Manchester',
    county: 'Greater Manchester',
    postcode: 'M41 6QT',
    country: 'GB',
    countryName: 'United Kingdom',
    fullAddress: '426 Flixton Road, Flixton, Urmston, Manchester, M41 6QT, United Kingdom',
    landmark: 'Flixton, Urmston, Trafford & Greater Manchester',
    geo: {
      latitude: 53.4447194,
      longitude: -2.3843237,
    },
    // Clean Google Place / Maps link (clean place link without tracking coordinates)
    googleMapsUrl: 'https://maps.google.com/?q=Latin+King+Detailing+426+Flixton+Rd+Urmston+Manchester+M41+6QT',
    googleMapsPlaceId: 'ChIJHdw8PS7Fb0gRk1LJiay8X_g', // Place reference
  },

  primaryWorkshop: {
    title: 'Latin King Detailing',
    street: '426 Flixton Road',
    town: 'Flixton, Urmston',
    city: 'Manchester',
    postcode: 'M41 6QT',
    fullAddress: '426 Flixton Road, Flixton, Urmston, Manchester, M41 6QT, United Kingdom',
    landmark: 'Flixton, Urmston, Trafford & Greater Manchester',
    googleMapsUrl: 'https://maps.google.com/?q=Latin+King+Detailing+426+Flixton+Rd+Urmston+Manchester+M41+6QT',
  },

  // Verified Google Business & Review Direct Links
  googleReviewLink: 'https://share.google/QwZ9Qocnk8HTxxcdJ',
  googleRating: 5.0,
  googleReviewCount: 60,

  // Social Entity Profiles (Used in JSON-LD sameAs & Footer)
  socials: {
    instagram: 'https://www.instagram.com/latin_king_detailing',
    tiktok: 'https://www.tiktok.com/@latinkingdetailing',
    facebook: 'https://www.facebook.com/latinkingdetailing',
    googleMaps: 'https://maps.google.com/?q=Latin+King+Detailing+426+Flixton+Rd+Urmston+Manchester+M41+6QT',
  },

  sameAs: [
    'https://www.instagram.com/latin_king_detailing',
    'https://www.tiktok.com/@latinkingdetailing',
    'https://www.facebook.com/latinkingdetailing',
    'https://maps.google.com/?q=Latin+King+Detailing+426+Flixton+Rd+Urmston+Manchester+M41+6QT',
  ],

  // 10 Core Service Towns in Manchester & Cheshire
  coreAreas: [
    { name: 'Urmston', slug: 'urmston', county: 'Greater Manchester', travelTime: '5 mins' },
    { name: 'Flixton', slug: 'flixton', county: 'Greater Manchester', travelTime: 'Home Base' },
    { name: 'Stretford', slug: 'stretford', county: 'Greater Manchester', travelTime: '8 mins' },
    { name: 'Sale', slug: 'sale', county: 'Greater Manchester', travelTime: '10 mins' },
    { name: 'Irlam', slug: 'irlam', county: 'Greater Manchester', travelTime: '7 mins' },
    { name: 'Eccles', slug: 'eccles', county: 'Greater Manchester', travelTime: '10 mins' },
    { name: 'Altrincham', slug: 'altrincham', county: 'Greater Manchester / Cheshire', travelTime: '15 mins' },
    { name: 'Hale', slug: 'hale', county: 'Cheshire', travelTime: '18 mins' },
    { name: 'Bowdon', slug: 'bowdon', county: 'Cheshire', travelTime: '18 mins' },
    { name: 'Partington', slug: 'partington', county: 'Greater Manchester', travelTime: '6 mins' },
  ],

  areaNames: [
    'Urmston',
    'Flixton',
    'Stretford',
    'Sale',
    'Irlam',
    'Eccles',
    'Altrincham',
    'Hale',
    'Bowdon',
    'Partington',
    'Greater Manchester',
    'Cheshire',
  ],

  // Official Service Slugs
  services: [
    'ceramic-coating',
    'machine-polishing',
    'leather-coating',
    'the-kings-detail',
    'deep-clean-engine-bay',
    'full-valet',
    'maintenance-wash',
  ],

  // Accreditations & Guarantees
  certifications: [
    { title: 'Ceramic Pro 9H Certified Installer', subtitle: 'Official Factory Accredited' },
    { title: 'Paint Correction Specialist', subtitle: 'Multi-Stage Defect Removal' },
    { title: 'Fully Insured', subtitle: '£5M Public & Vehicle Liability' },
    { title: 'Professional Grade Products', subtitle: 'Zero Consumer-Grade Dilution' },
  ],

  // Business Hours
  // TODO: Confirm exact operating hours with client before exposing in formal Schema.org openingHoursSpecification.
  // The website currently states 24/7 on-demand booking for mobile and workshop.
  openingHours: 'Available 24/7 (Monday – Sunday: 24 Hours)',
  openingHoursRaw: 'Available 24/7 (Monday – Sunday: 24 Hours)',
  openingHoursSpecificationTODO: true,

  // Founder Information
  // TODO: Confirm founder full name and biographical quote with client for Google E-E-A-T and Person schema.
  founder: {
    role: 'Founder & Master Detailer',
    name: 'TODO: Founder Name', // Placeholders as instructed: never invent facts
    credentials: ['Ceramic Pro 9H Certified Installer', 'Paint Correction Specialist'],
  },
} as const;

/**
 * Builds an absolute canonical URL with the www host.
 * Always ensures https://www.latinkingdetailing.co.uk prefix without trailing slash (unless root).
 */
export function canonicalUrl(pathname: string = '/'): string {
  const cleanPath = pathname === '/' ? '' : pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_CONFIG.baseUrl}${cleanPath}`;
}
