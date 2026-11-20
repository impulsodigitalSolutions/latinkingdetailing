import { SITE_CONFIG } from './site-config';
import { SERVICES, ServiceItem, ReviewItem } from './site-data';

export const BUSINESS_ID = `${SITE_CONFIG.baseUrl}/#localbusiness`;
export const ORGANIZATION_ID = `${SITE_CONFIG.baseUrl}/#organization`;
export const WEBSITE_ID = `${SITE_CONFIG.baseUrl}/#website`;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/images/logo-crown.png`,
    image: `${SITE_CONFIG.baseUrl}/hero-image.png`,
    description: SITE_CONFIG.tagline,
    telephone: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    sameAs: SITE_CONFIG.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phoneFormatted,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: ['en'],
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_CONFIG.baseUrl,
    name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.tagline,
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    inLanguage: 'en-GB',
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.baseUrl,
    logo: `${SITE_CONFIG.baseUrl}/images/logo-crown.png`,
    image: `${SITE_CONFIG.baseUrl}/hero-image.png`,
    telephone: SITE_CONFIG.phoneFormatted,
    email: SITE_CONFIG.email,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.town,
      addressRegion: SITE_CONFIG.address.county,
      postalCode: SITE_CONFIG.address.postcode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.address.geo.latitude,
      longitude: SITE_CONFIG.address.geo.longitude,
    },
    hasMap: SITE_CONFIG.address.googleMapsUrl,
    areaServed: SITE_CONFIG.coreAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area.name}, ${area.county}`,
    })),
    sameAs: SITE_CONFIG.sameAs,
    // TODO: Confirm exact operating hours with client before defining openingHoursSpecification.
    // openingHours: 'Mo-Su 00:00-24:00',
    founder: {
      '@type': 'Person',
      name: SITE_CONFIG.founder.name, // TODO: Replace placeholder with verified founder name from client
      jobTitle: SITE_CONFIG.founder.role,
      worksFor: {
        '@id': ORGANIZATION_ID,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Car Detailing & Ceramic Coating Services',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'OfferCatalog',
        name: service.title,
        position: index + 1,
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_CONFIG.baseUrl}/services/${service.slug}#service`,
              name: service.title,
              description: service.shortDesc,
              url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
            },
          },
        ],
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(SITE_CONFIG.googleRating),
      reviewCount: String(SITE_CONFIG.googleReviewCount),
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getServiceSchema(service: ServiceItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_CONFIG.baseUrl}/services/${service.slug}#service`,
    name: service.title,
    description: service.shortDesc,
    url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
    provider: {
      '@id': BUSINESS_ID,
    },
    areaServed: SITE_CONFIG.coreAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area.name,
    })),
    offers: {
      '@type': 'Offer',
      priceDescription: service.startingPrice,
      priceCurrency: 'GBP',
      url: `${SITE_CONFIG.baseUrl}/services/${service.slug}`,
    },
  };
}

export function getReviewsSchema(reviews: ReviewItem[], rating: number, count: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': BUSINESS_ID,
    name: SITE_CONFIG.brandName,
    url: SITE_CONFIG.baseUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(rating),
      reviewCount: String(count),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 10).map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.content,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(review.rating),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };
}
