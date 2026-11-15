export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  warranty?: string;
  startingPrice?: string;
  steps?: { step: number; title: string; desc: string }[];
  tiers?: { name: string; duration: string; layers: string; features: string[] }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  platform: 'Google' | 'Facebook';
  rating: number;
  date: string;
  vehicle: string;
  content: string;
  verified: boolean;
}

export interface ComparisonRow {
  feature: string;
  ceramic: string | boolean;
  ppf: string | boolean;
  wax: string | boolean;
  notes?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  vehicle: string;
  location: string;
  service: string;
  imageUrl: string;
  imageAlt: string;
  package: string;
  finish: string;
  tags: string[];
}

export const SITE_CONFIG = {
  brandName: 'Latin King Detailing',
  shortName: 'Latin King',
  monogram: 'CP',
  tagline: "Bolton's Detailing Specialists",
  domain: 'ceramicpromanchester.com',
  phone: '07482 225323',
  phoneHref: 'tel:07482225323',
  whatsappNumber: '447482225323',
  whatsappHref: 'https://wa.me/447482225323',
  email: 'info@ceramicpromanchester.com',
  emailHref: 'mailto:info@ceramicpromanchester.com',
  
  // Addresses
  primaryWorkshop: {
    title: 'Bolton Workshop (Headquarters)',
    street: '115 Albert Road',
    town: 'Farnworth',
    city: 'Bolton',
    postcode: 'BL4 9EA',
    fullAddress: '115 Albert Road, Farnworth, Bolton, BL4 9EA',
    landmark: 'Based in Farnworth, five minutes from junction 4 of the M61',
    googleMapsUrl: 'https://maps.app.goo.gl/RSrD8Gekfi83PCmx9',
  },
  secondaryWorkshop: {
    title: 'Manchester Base',
    street: '426 Flixton Road',
    town: 'Flixton',
    city: 'Manchester',
    postcode: 'M41 6QT',
    fullAddress: '426 Flixton Road, Flixton, M41 6QT, Manchester, UK',
    landmark: 'Flixton Rd, serving Urmston, Trafford & Greater Manchester',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=426+Flixton+Road,+Flixton,+M41+6QT,+Manchester,+UK',
  },
  
  openingHours: 'Available 24/7 (Monday – Sunday: 24 Hours)',
  
  // Social Proof & Verified Social Media IDs (Extracted from https://www.latinkingdetailing.co.uk/)
  googleRating: 4.7,
  googleReviewCount: 15,
  facebookRating: 5.0,
  facebookFollowers: '760+',

  socials: [
    {
      name: 'Instagram',
      handle: '@latin_king_detailing',
      url: 'https://www.instagram.com/latin_king_detailing',
      icon: 'Instagram',
    },
    {
      name: 'TikTok',
      handle: '@latinkingdetailing',
      url: 'https://www.tiktok.com/@latinkingdetailing',
      icon: 'TikTok',
    },
    {
      name: 'Facebook',
      handle: '@latinkingdetailing',
      url: 'https://www.facebook.com/latinkingdetailing',
      icon: 'Facebook',
      badge: '760+ Followers',
    },
    {
      name: 'WhatsApp',
      handle: '07482 225323',
      url: 'https://wa.me/447482225323',
      icon: 'WhatsApp',
    },
    {
      name: 'Google Maps',
      handle: '4.7★ (15 Reviews)',
      url: 'https://maps.app.goo.gl/RSrD8Gekfi83PCmx9',
      icon: 'Google',
    },
  ],
  
  certifications: [
    { title: 'Ceramic Pro 9H Certified Installer', subtitle: 'Official Factory Accredited' },
    { title: 'KAVACA PPF Approved', subtitle: 'Self-Healing Shield Specialist' },
    { title: 'Fully Insured', subtitle: '£5M Public & Vehicle Liability' },
    { title: 'Professional Grade Products', subtitle: 'Zero Consumer-Grade Dilution' },
  ],
};

export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Locations', href: '#locations' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Comparison', href: '#comparison' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blog' },
];

export const HERO_TRUST_BADGES = [
  'Ceramic Pro Certified',
  'Fully Insured',
  "Bolton's Local Specialists",
  'KAVACA PPF Approved',
];

export const STATS = [
  { value: '4.7★', label: 'Google Rating', detail: '15 Verified 5-Star Reviews' },
  { value: '15+', label: 'Happy Customers', detail: 'Across Bolton & Greater Manchester' },
  { value: 'Ceramic Pro', label: 'Certified Installer', detail: 'Factory-backed VIN Warranty' },
  { value: 'KAVACA', label: 'PPF Approved', detail: 'Self-Healing Stone Chip Defense' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'lambo-aventador',
    title: 'Lamborghini Aventador',
    subtitle: 'Ceramic Pro 9H Gold Package — Bolton Workshop',
    vehicle: 'Lamborghini Aventador LP700-4',
    location: 'Bolton, Greater Manchester',
    service: 'Ceramic Coating 9H',
    package: 'Ceramic Pro 9H Multi-Layer Gold Package',
    finish: 'Mirror Reflection Glass Finish',
    imageUrl: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Lamborghini Aventador ceramic coating — Latin King Detailing, Bolton, Greater Manchester',
    tags: ['Ceramic Pro 9H', 'Paint Correction', 'Supercar'],
  },
  {
    id: 'ferrari-360',
    title: 'Ferrari 360 Modena',
    subtitle: 'Multi-stage Paint Correction & Detailing — Farnworth Workshop',
    vehicle: 'Ferrari 360 Modena Rosso Corsa',
    location: 'Farnworth, Bolton',
    service: 'Detailing & 9H Coating',
    package: 'Stage 2 Paint Correction + Ceramic Pro Top Coat',
    finish: 'Rosso Corsa Mirror Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Ferrari 360 Modena detailing — Latin King Detailing, Farnworth, Bolton',
    tags: ['Paint Correction', 'Exotic Detailing', 'Rosso Corsa'],
  },
  {
    id: 'bentley-gtc',
    title: 'Bentley Continental GTC',
    subtitle: 'Ceramic Pro 9H Coating & Leather Protection — Bolton Workshop',
    vehicle: 'Bentley Continental GT Convertible',
    location: 'Bolton Workshop',
    service: 'Ceramic Pro 9H & Leather',
    package: 'Full Exterior 9H + Interior Hydrophobic Shield',
    finish: 'Deep Diamond Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bentley Continental GTC Ceramic Pro 9H coating — Bolton workshop',
    tags: ['Ceramic Pro 9H', 'Leather Protection', 'Luxury Grand Tourer'],
  },
  {
    id: 'bmw-m5',
    title: 'BMW M5 F10',
    subtitle: 'Mirror-Gloss Ceramic Coating — Latin King Detailing, Bolton',
    vehicle: 'BMW M5 F10 V8 Twin-Turbo',
    location: 'Bolton Workshop',
    service: 'Ceramic Coating 9H',
    package: 'Stage 1 Machine Polish + Ceramic Pro 9H Silver Package',
    finish: 'Deep Obsidian Mirror Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'BMW M5 F10 mirror-gloss ceramic coating — Latin King Detailing, Bolton',
    tags: ['Ceramic Pro 9H', 'Stage 1 Polish', 'Performance Sedan'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ceramic-coating',
    slug: 'ceramic-coating',
    title: 'Ceramic Coating',
    shortDesc: 'Professional-grade Ceramic Pro 9H coatings for lasting protection and showroom shine.',
    fullDesc:
      'Ceramic Pro 9H forms a permanent nanoceramic bond to your factory clear coat. Unlike consumer sealants that wash away after a few rainstorms, Ceramic Pro 9H creates a 9H diamond-hard barrier against Bolton road salt, UV rays, bird lime, swirl marks, and acid rain. Your car retains a continuous mirror-like reflection and intense hydrophobic water beading.',
    iconName: 'ShieldCheck',
    warranty: 'Up to Lifetime VIN-Registered Ceramic Pro Warranty',
    startingPrice: 'Tailored by vehicle size',
    highlights: [
      'Genuine 9H pencil hardness certified laboratory protection',
      'Extreme hydrophobic contact angle (>110°) for self-cleaning effect',
      'VIN-registered warranty direct with Ceramic Pro global database',
      'Preserves resale value with verifiable digital warranty record',
      'Eliminates the need for waxing or polishing forever',
    ],
    steps: [
      {
        step: 1,
        title: 'Vehicle Inspection',
        desc: 'Comprehensive paint depth measurement (PTG gauge) across every panel, identifying factory defects, clear coat thickness, and prior repairs.',
      },
      {
        step: 2,
        title: 'Paint Decontamination & Clay Bar',
        desc: 'Chemical fallout remover dissolves embedded ferrous brake dust and industrial grime, followed by an ultra-fine clay bar treatment for silky smooth paint.',
      },
      {
        step: 3,
        title: 'Paint Correction',
        desc: 'Multi-stage machine polishing eliminates swirl marks, scratches, holograms, and oxidation to achieve 90–98%+ optical clarity before coating.',
      },
      {
        step: 4,
        title: 'Surface Preparation',
        desc: 'Sterilizing isopropyl panel wipe removes all polishing oils and residues, ensuring direct molecular bonding between the clear coat and Ceramic Pro nanostructures.',
      },
      {
        step: 5,
        title: 'Ceramic Pro 9H Application',
        desc: 'Precision hand-application of Ceramic Pro 9H base layers under calibrated detailing LED inspection lamps, followed by Ceramic Pro Top Coat.',
      },
      {
        step: 6,
        title: 'Curing & Final Inspection',
        desc: 'Short-wave infrared thermal curing permanently cross-links the nanoceramic lattice. Final 360° digital inspection ensures flawless optical finish.',
      },
    ],
    tiers: [
      {
        name: 'Bronze Package',
        duration: '2 Years Protection',
        layers: '1 Layer Ceramic Pro Top Coat / Light',
        features: [
          'Full exterior decontamination wash',
          'Single-stage gloss enhancement polish',
          '1 layer of Ceramic Pro Light on painted surfaces',
          '1 layer of Ceramic Pro Rain on windshield and front glass',
          '2-year warranty registered to vehicle VIN',
        ],
      },
      {
        name: 'Silver Package',
        duration: '5 Years Protection',
        layers: '1 Layer 9H + 1 Layer Top Coat',
        features: [
          'Full exterior multi-stage decontamination',
          'Stage 1 or 2 paint correction for high clarity',
          '1 layer of Ceramic Pro 9H base coat',
          '1 layer of Ceramic Pro Top Coat for slick gloss',
          '1 layer of Ceramic Pro Rain on all exterior glass',
          'Ceramic Pro Wheel Face protection against brake dust',
          '5-year transferable warranty registered with Ceramic Pro',
        ],
      },
      {
        name: 'Gold Package',
        duration: 'Lifetime / Prestige Protection',
        layers: 'Multi-Layer 9H + Top Coat',
        features: [
          'Full surgical paint decontamination & clay bar',
          'Multi-stage paint correction to near perfection (95%+)',
          '4 layers of Ceramic Pro 9H permanent heavy-duty base coat',
          '1 layer of Ceramic Pro Top Coat extra slickness',
          '1 layer of Ceramic Pro Wheel & Caliper coating',
          'Ceramic Pro Rain on all windows & glass',
          'Lifetime warranty with annual inspection',
        ],
      },
    ],
  },
  {
    id: 'paint-protection-film',
    slug: 'paint-protection-film',
    title: 'Paint Protection Film',
    shortDesc: 'KAVACA PPF — the ultimate self-healing barrier against stone chips and road damage.',
    fullDesc:
      'KAVACA Paint Protection Film (PPF) by Ceramic Pro is an optically clear, self-healing aliphatic polyurethane film designed specifically to absorb high-velocity impacts from road debris, gravel, and stone chips. Coated with Ceramic Pro topcoat at the factory, it combines stone-chip physical protection with hydrophobic self-cleaning performance.',
    iconName: 'Shield',
    warranty: 'Up to 10-Year Factory Warranty',
    startingPrice: 'Front End & Full Body Available',
    highlights: [
      'Instant self-healing technology — minor scratches vanish with heat',
      'Heavy physical barrier against stone chips, road rash, and key scratches',
      'Computer pre-cut template software for seamless edge wrapping',
      'Factory infused with Ceramic Pro nanoceramic topcoat for extreme gloss',
      'Non-yellowing, UV-stable optical polyurethane formulation',
    ],
  },
  {
    id: 'car-detailing-valet',
    slug: 'car-detailing-valet',
    title: 'Car Detailing & Valet',
    shortDesc: 'Full interior and exterior detailing packages to restore and maintain your vehicle.',
    fullDesc:
      'Our detailing service goes miles beyond conventional valets or drive-through washes. We spend anywhere from 6 to 25+ hours on a single vehicle, systematically treating every crevice, badge, wheel barrel, door shut, and exhaust tip with pH-balanced formulas, soft boar hair brushes, and dual-action rotary polishers.',
    iconName: 'Sparkles',
    warranty: 'Workmanship Satisfaction Guarantee',
    startingPrice: 'Single-Day & Multi-Day Packages',
    highlights: [
      'Two-bucket safe wash method with grit guards & warm purified water',
      'Intensive iron fallout and tar decontamination',
      'Engine bay detail, degreasing, and satin dressing',
      'Multi-stage machine polishing removing swirl marks and wash marring',
      'Wheel arches deep-cleaned and protected',
    ],
  },
  {
    id: 'leather-interior-protection',
    slug: 'leather-interior-protection',
    title: 'Leather & Interior Protection',
    shortDesc: 'Specialist leather coating and interior protection keeping cabins fresh and conditioned.',
    fullDesc:
      'Modern automotive interiors demand specialized ceramic and hydrophobic protection. We clean, disinfect, and condition leather hide, alcantara, and carpets before applying Ceramic Pro Leather and Ceramic Pro Textile coatings. Spilled coffee, muddy water, dye transfer from denim jeans, and UV fading are effortlessly repelled.',
    iconName: 'Armchair',
    warranty: 'Multi-Season Cabins Protection',
    startingPrice: 'Add-on or standalone cabin treatment',
    highlights: [
      'Ceramic Pro Leather coating prevents denim dye transfer and crack lines',
      'Ceramic Pro Textile provides extreme hydrophobic liquid beading on carpets',
      'Full cabin HEPA anti-bacterial steam cleaning & odour neutralisation',
      'Preserves original matte OEM leather finish without greasy fake shine',
      'Deep UV-shield prevents dashboard and upholstery cracking',
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'certified-installer',
    title: 'Ceramic Pro Certified Installer',
    description:
      "Certification means your coating is registered directly to your car's VIN with Ceramic Pro — so the warranty is real and traceable. Anyone can claim to 'use Ceramic Pro.' Being a certified installer means we're held accountable to the brand's standards on every single job.",
    badge: 'VIN-Registered Warranty',
    iconName: 'Award',
  },
  {
    id: 'professional-products',
    title: 'Professional Products Only',
    description:
      "Ceramic Pro 9H and KAVACA PPF are the products used on Lamborghinis, Bentleys, and McLarens. We don't stock consumer-grade alternatives — what goes on your car is exactly the same as what goes on the cars in our gallery.",
    badge: 'Zero Dilution Guarantee',
    iconName: 'ShieldAlert',
  },
  {
    id: 'local-bolton-specialists',
    title: 'Local Bolton Specialists',
    description:
      "Our workshop is in Farnworth, five minutes from the M61 at junction 4. Our customers drive from across Greater Manchester because they know what they're getting. We understand what Bolton roads and winters do to paintwork — and we know how to protect against it.",
    badge: 'M61 Junction 4 · Farnworth',
    iconName: 'MapPin',
  },
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: 'Paint hardness protection',
    ceramic: '✔ 9H Diamond Hardness',
    ppf: '✔ Heavy Physical Shield',
    wax: '✖ None (Soft Organic Film)',
    notes: 'Ceramic Pro 9H permanently bonds and hardens clear coat.',
  },
  {
    feature: 'Self-healing surface',
    ceramic: '✖ Rigid Nano Coating',
    ppf: '✔ Instant Heat Self-Healing',
    wax: '✖ No Self-Healing',
    notes: 'KAVACA PPF heals swirl marks automatically under engine or solar heat.',
  },
  {
    feature: 'Scratch resistance',
    ceramic: '✔ High Micro-Scratch & Swirl Resistance',
    ppf: '✔ Maximum Impact & Gouge Defense',
    wax: '✖ Minimal / Negligible',
    notes: 'Significantly prevents wash marring and fine scratches.',
  },
  {
    feature: 'UV & oxidation protection',
    ceramic: '✔ Permanent Chemical UV Blocker',
    ppf: '✔ 100% Optical UV Rejection',
    wax: 'Partial (Fades in 2–4 Weeks)',
    notes: 'Stops clear coat peeling, chalking, and paint fading under sun exposure.',
  },
  {
    feature: 'Hydrophobic effect',
    ceramic: '✔ Permanent Self-Cleaning Beading',
    ppf: '✔ Hydrophobic Ceramic Infused Topcoat',
    wax: 'Temporary (Washes away rapidly)',
    notes: 'Water beads at >110° contact angle, carrying dirt away with it.',
  },
  {
    feature: 'Stone chip protection',
    ceramic: '✖ Chemical & Micro-scratch Only',
    ppf: '✔ Physical High-Velocity Barrier',
    wax: '✖ Zero Protection',
    notes: 'PPF absorbs direct motorway stone chips and gravel blast.',
  },
  {
    feature: 'Deep gloss enhancement',
    ceramic: '✔ Mirror Glass Optical Reflection',
    ppf: '✔ Ultra-Clear Deep Finish',
    wax: '✔ Short-term Warm Glow',
    notes: 'Ceramic Pro 9H yields the highest recorded optical reflection index.',
  },
  {
    feature: 'Longevity & Durability',
    ceramic: '2–5+ Years (VIN Registered)',
    ppf: '7–10 Years (Factory Warranty)',
    wax: '1–3 Months (Frequent Reapplication)',
    notes: 'Wax wears off in weeks; Ceramic Pro stays bonded for years.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'James T.',
    platform: 'Google',
    rating: 5,
    date: 'March 2025',
    vehicle: 'BMW 5 Series',
    content:
      'Had my BMW 5 Series coated with Ceramic Pro 9H. The finish is incredible — water just rolls straight off. Brilliant service from start to finish and the team really knows their stuff. Worth every penny.',
    verified: true,
  },
  {
    id: 'review-2',
    author: 'Sarah M.',
    platform: 'Google',
    rating: 5,
    date: 'January 2025',
    vehicle: 'Audi Q5',
    content:
      'Brought my Audi Q5 in for a full detail and paint protection film on the front end. Absolutely delighted with the results. The car looks better than when it came out of the showroom. Will definitely be back.',
    verified: true,
  },
  {
    id: 'review-3',
    author: 'Dave R.',
    platform: 'Facebook',
    rating: 5,
    date: 'November 2024',
    vehicle: 'Range Rover Sport',
    content:
      'Third time using Latin King Detailing for my cars. Consistent quality every time. The ceramic coating on my Range Rover has held up perfectly through two winters now. Highly recommend to anyone in Bolton or Manchester.',
    verified: true,
  },
];

export const SERVICE_AREAS_24 = [
  'Bolton',
  'Farnworth',
  'Horwich',
  'Westhoughton',
  'Kearsley',
  'Little Lever',
  'Harwood',
  'Walkden',
  'Worsley',
  'Leigh',
  'Atherton',
  'Tyldesley',
  'Radcliffe',
  'Whitefield',
  'Swinton',
  'Eccles',
  'Manchester',
  'Salford',
  'Bury',
  'Wigan',
  'Chorley',
  'Altrincham',
  'Stockport',
  'Wilmslow',
];

export const TRUSTED_PARTNER = {
  badge: 'LK',
  name: 'Latin King Detailing — Manchester Partner',
  status: 'Verified Partner',
  rating: '5.0 ★',
  reviews: '47+ reviews',
  description:
    'Mobile car detailing, paint correction, ceramic coating, and PPF — delivered to your door across Manchester, Salford, Stretford, Sale, Altrincham, and 15+ Greater Manchester locations.',
  tags: ['Mobile Valeting', 'Paint Correction', 'Ceramic Coating', 'PPF'],
  phone: '07482 225323',
};

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How much does ceramic coating cost in Bolton?',
    answer:
      "Prices depend on your car's size and the package you want — entry-level starts from competitive rates on a compact car, and a full Ceramic Pro 9H application on an SUV or prestige vehicle will be more. The best thing to do is drop us a message with your make and model. We'll come straight back with an honest quote, no pressure.",
  },
  {
    id: 'faq-2',
    question: 'Is ceramic coating worth it for a daily driver?',
    answer:
      'Genuinely, yes — and most people notice the difference straight away. After coating, water beads off, dirt doesn\'t cling the same way, and you spend far less time washing. For a Greater Manchester daily driver dealing with road salt, rain, and bird lime all year, the protection is real. Most of our customers say it paid for itself within 12–18 months in reduced cleaning costs alone.',
  },
  {
    id: 'faq-3',
    question: 'How long does a Ceramic Pro coating last?',
    answer:
      'A properly applied Ceramic Pro 9H coating lasts 2–5 years, depending on the package and how you look after it. The care routine is simple: pH-neutral shampoo, no automatic car washes, and an annual check with us. Do that, and you\'ll get every year out of it.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer paint protection film (PPF) in Bolton?',
    answer:
      "Yes — we install KAVACA PPF, the self-healing paint protection film from the Ceramic Pro brand. It goes on clear, stays clear, physically protects against stone chips, and it's removable if you ever sell the car. We can cover just the high-impact zones or the full vehicle — give us a call and we'll explain what makes sense for your car.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ceramic-vs-wax',
    slug: 'ceramic-coating-vs-wax-bolton-drivers',
    category: 'Ceramic Coating',
    title: 'Ceramic Coating vs Wax: What Bolton Drivers Should Know',
    excerpt:
      'Is ceramic coating really worth the investment over traditional wax? We break down the differences every Greater Manchester driver should understand.',
    readTime: '4 min read',
    date: 'February 2025',
    author: 'Latin King Detailing Team',
    content: [
      'For decades, traditional carnauba wax was the gold standard for protecting automotive paint. While wax produces an admirable warm glow, it sits solely on top of your clear coat as a soft organic residue that dissolves within 4 to 8 weeks — especially under persistent UK rain and winter road salt.',
      'Ceramic Pro 9H functions through an entirely different scientific mechanism: nanoceramic chemical bonding. It integrates into the microscopic pores of your clear coat, transforming into a diamond-hard, glass-like quartz matrix.',
      'For drivers commuting across Bolton, the M61, and Greater Manchester, the practical benefits are massive: road grime rinses away effortlessly, brake dust fails to bake into alloy rims, and bird droppings cannot etch the paint before you have a chance to wash the car.',
    ],
  },
  {
    id: 'how-to-maintain',
    slug: 'how-to-maintain-ceramic-coating-uk-weather',
    category: 'Maintenance',
    title: 'How to Maintain Your Ceramic Coating in UK Weather',
    excerpt:
      "British weather is tough on car paint. Here's how to keep your coating performing through rain, frost, and road salt season.",
    readTime: '5 min read',
    date: 'January 2025',
    author: 'Latin King Detailing Team',
    content: [
      'Ceramic Pro 9H delivers extraordinary hydrophobicity, but maximizing its 2 to 5-year warranty requires simple, consistent aftercare.',
      '1. Safe Wash Routine: Always adhere to the two-bucket wash technique with grit guards. Use high-lubricity pH-neutral car shampoo, and never take your vehicle through automated nylon brush car washes.',
      '2. Road Salt Neutralization: In winter months, rinse underbodies and lower sills frequently with warm purified water or touchless pre-wash foam to remove corrosive magnesium chloride grit.',
      '3. Annual Decontamination Check: Bring your vehicle into our Farnworth workshop once a year for an inspection wash and Ceramic Pro booster spray to unclog the nano pores and maintain maximum contact angles.',
    ],
  },
  {
    id: 'ppf-vs-ceramic',
    slug: 'ppf-vs-ceramic-coating-which-protection',
    category: 'PPF',
    title: 'PPF vs Ceramic Coating: Which Protection Does Your Car Need?',
    excerpt:
      'Both protect your car — but they work very differently. We explain which is right for your vehicle and budget.',
    readTime: '6 min read',
    date: 'December 2024',
    author: 'Latin King Detailing Team',
    content: [
      'One of the most frequent questions we receive at our Bolton workshop is: "Should I get Ceramic Pro 9H or KAVACA PPF?" The answer depends on your driving habits and budget.',
      'Ceramic Coating is a chemical shield: it creates a permanent liquid glass layer that prevents chemical etching, UV fading, oxidation, and micro-swirls while offering extreme gloss and easy maintenance.',
      'PPF (Paint Protection Film) is a physical armor: an 8-mil thick polyurethane membrane specifically built to absorb gravel, highway debris, and stone chips that would otherwise chip bare paint.',
      'The Ultimate Hybrid Package: For optimum protection, we install KAVACA PPF on high-impact zones (front bumper, bonnet, front wings, wing mirrors) and coat the entire vehicle with Ceramic Pro 9H. You get stone chip immunity upfront and showroom gloss everywhere.',
    ],
  },
];

export const VEHICLE_SIZES = [
  { id: 'compact', name: 'Compact / Hatchback', examples: 'VW Golf, Audi A3, BMW 1 Series, Ford Fiesta' },
  { id: 'saloon', name: 'Saloon / Coupe / Estate', examples: 'BMW 3/5 Series, Mercedes C/E-Class, Audi A4/A6' },
  { id: 'suv', name: 'SUV / 4x4 / Large Crossover', examples: 'Range Rover, Porsche Cayenne, Audi Q7/Q8, BMW X5' },
  { id: 'prestige', name: 'Prestige / Supercar / Exotic', examples: 'Bentley, Lamborghini, Ferrari, Aston Martin, McLaren' },
];

export const SERVICE_OPTIONS = [
  'Ceramic Pro 9H Coating (Bronze / Silver / Gold)',
  'KAVACA Paint Protection Film (PPF)',
  'Car Detailing & Full Machine Polish',
  'Leather & Full Interior Protection',
  'Multi-Service Complete Protection Package',
];

