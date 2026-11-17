export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  warranty?: string;
  startingPrice?: string;
  pricingDetails?: { label: string; price: string }[] | string;
  ctaText?: string;
  hookText?: string;
  whatIs?: string;
  whyChoose?: { title: string; desc: string }[];
  surfacesProtected?: { title: string; desc: string }[];
  includedItems?: { title: string; desc: string }[];
  subServices?: { title: string; subtitle?: string; desc: string; price?: string }[];
  recommendation?: string;
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
  dealership: string | boolean;
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
  tagline: "Manchester's Detailing Specialists",
  domain: 'ceramicpromanchester.com',
  phone: '07482 225323',
  phoneHref: 'tel:07482225323',
  whatsappNumber: '447482225323',
  whatsappHref: 'https://wa.me/447482225323',
  email: 'info@ceramicpromanchester.com',
  emailHref: 'mailto:info@ceramicpromanchester.com',
  
  // Addresses
  primaryWorkshop: {
    title: 'Manchester Workshop (Headquarters)',
    street: '115 Albert Road',
    town: 'Farnworth',
    city: 'Manchester',
    postcode: 'BL4 9EA',
    fullAddress: '115 Albert Road, Farnworth, Manchester, BL4 9EA',
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
    { title: 'Paint Correction Specialist', subtitle: 'Multi-Stage Defect Removal' },
    { title: 'Fully Insured', subtitle: '£5M Public & Vehicle Liability' },
    { title: 'Professional Grade Products', subtitle: 'Zero Consumer-Grade Dilution' },
  ],
};

export const NAV_LINKS = [
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Comparison', href: '/comparison' },
  { name: 'Locations', href: '/locations' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
];

export const HERO_TRUST_BADGES = [
  'Ceramic Pro Certified',
  'Fully Insured',
  "Manchester's Local Specialists",
  'Paint Correction Specialist',
];

export const STATS = [
  { value: '4.7★', label: 'Google Rating', detail: '15 Verified 5-Star Reviews' },
  { value: '15+', label: 'Happy Customers', detail: 'Across Manchester & Greater Manchester' },
  { value: 'Ceramic Pro', label: 'Certified Installer', detail: 'Factory-backed VIN Warranty' },
  { value: '9H', label: 'Ceramic Certified', detail: 'Molecular Paint Shield' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'lambo-aventador',
    title: 'Lamborghini Aventador',
    subtitle: 'Ceramic Pro 9H Gold Package · Manchester Workshop',
    vehicle: 'Lamborghini Aventador LP700-4',
    location: 'Manchester, Greater Manchester',
    service: 'Ceramic Coating 9H',
    package: 'Ceramic Pro 9H Multi-Layer Gold Package',
    finish: 'Mirror Reflection Glass Finish',
    imageUrl: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Lamborghini Aventador ceramic coating, Latin King Detailing, Manchester, Greater Manchester',
    tags: ['Ceramic Pro 9H', 'Paint Correction', 'Supercar'],
  },
  {
    id: 'ferrari-360',
    title: 'Ferrari 360 Modena',
    subtitle: 'Multi-stage Paint Correction & Detailing · Farnworth Workshop',
    vehicle: 'Ferrari 360 Modena Rosso Corsa',
    location: 'Farnworth, Manchester',
    service: 'Detailing & 9H Coating',
    package: 'Stage 2 Paint Correction + Ceramic Pro Top Coat',
    finish: 'Rosso Corsa Mirror Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Ferrari 360 Modena detailing, Latin King Detailing, Farnworth, Manchester',
    tags: ['Paint Correction', 'Exotic Detailing', 'Rosso Corsa'],
  },
  {
    id: 'bentley-gtc',
    title: 'Bentley Continental GTC',
    subtitle: 'Ceramic Pro 9H Coating & Leather Protection · Manchester Workshop',
    vehicle: 'Bentley Continental GT Convertible',
    location: 'Manchester Workshop',
    service: 'Ceramic Pro 9H & Leather',
    package: 'Full Exterior 9H + Interior Hydrophobic Shield',
    finish: 'Deep Diamond Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bentley Continental GTC Ceramic Pro 9H coating, Manchester workshop',
    tags: ['Ceramic Pro 9H', 'Leather Protection', 'Luxury Grand Tourer'],
  },
  {
    id: 'bmw-m5',
    title: 'BMW M5 F10',
    subtitle: 'Mirror-Gloss Ceramic Coating, Latin King Detailing, Manchester',
    vehicle: 'BMW M5 F10 V8 Twin-Turbo',
    location: 'Manchester Workshop',
    service: 'Ceramic Coating 9H',
    package: 'Stage 1 Machine Polish + Ceramic Pro 9H Silver Package',
    finish: 'Deep Obsidian Mirror Gloss',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'BMW M5 F10 mirror-gloss ceramic coating, Latin King Detailing, Manchester',
    tags: ['Ceramic Pro 9H', 'Stage 1 Polish', 'Performance Sedan'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ceramic-coating',
    slug: 'ceramic-coating',
    title: 'Professional Ceramic Coating - 9H Protection',
    tagline: 'Advanced Molecular Shielding & Lasting Showroom Gloss',
    startingPrice: 'From £200 (Final price varies by vehicle size & paintwork condition)',
    shortDesc: 'Advanced molecular shielding & lasting showroom gloss. Chemically bonds with your clear coat at a molecular level for years of 9H protection.',
    fullDesc:
      'Ceramic coating provides long-lasting protection for your car’s paintwork by creating a durable, invisible shield. Applied by certified specialists at Latin King Detailing in our Farnworth, Manchester workshop, our 9H ceramic coating is not something you simply spray on and wipe off - it chemically bonds with your clear coat at a molecular level for years of protection.',
    whatIs:
      'Unlike traditional wax, which sits on top of the paint and washes off within a few weeks, our ceramic coating is a liquid polymer that fuses directly into your paintwork. Once cured, it becomes a semi-permanent part of the surface. Rated at 9H on the pencil hardness scale (the hardest rating achievable), it adds a tough protective layer that resists light wash swirls, UV rays, acid rain, bird droppings, road salt, and everything Greater Manchester weather throws at your car. Its extreme hydrophobic properties make water and grime bead off effortlessly, meaning your car stays cleaner for longer, washes easier, and retains higher resale value.',
    iconName: 'ShieldCheck',
    warranty: 'Up to Lifetime VIN-Registered Ceramic Pro Warranty',
    hookText: 'Lock in deep, hydrophobic gloss for years.',
    ctaText: 'Book a Coating Consultation',
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
        desc: "We thoroughly inspect your vehicle's paintwork under specialist lighting to identify swirl marks, scratches, or contamination before beginning.",
      },
      {
        step: 2,
        title: 'Paint Decontamination & Clay Bar',
        desc: 'Using iron fallout remover and a clay bar, we lift embedded industrial fallout and bonded particles that regular washing cannot shift.',
      },
      {
        step: 3,
        title: 'Paint Correction (If Required)',
        desc: 'Machine polishing removes swirl marks, water spots, and light scratches. Because ceramic coating locks in whatever is underneath it, pre-coating correction is essential for a flawless finish.',
      },
      {
        step: 4,
        title: 'Surface Preparation',
        desc: 'Every panel is wiped down with a specialist panel wipe to strip polishing oils and leave a bare, chemically clean surface for maximum bonding.',
      },
      {
        step: 5,
        title: '9H Ceramic Coating Application',
        desc: 'Applied panel by panel by the Latin King Detailing team using certified techniques to form a uniform, molecularly bonded protective layer.',
      },
      {
        step: 6,
        title: 'Curing & Final Inspection',
        desc: 'Allowed to cure under controlled workshop conditions before undergoing a final inspection under detailing lights prior to handover.',
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
    id: 'machine-polishing',
    slug: 'machine-polishing-paint-correction',
    title: 'Professional Machine Polishing & Paint Correction',
    tagline: "Restore Depth, Clarity & Your Car's Factory Finish",
    startingPrice: 'From £250 (Single-Stage & Multi-Stage options available)',
    shortDesc: "Safely refines your clear coat to eliminate swirl marks, scratches, buffer trails, and dull oxidation to bring back depth, clarity, and mirror-like gloss.",
    fullDesc:
      'Everyday driving, automatic car washes, and environmental exposure leave your paintwork covered in swirl marks, light scratches, buffer trails, water spots, and dull oxidation. At Latin King Detailing, our machine polishing service safely refines your clear coat to bring back depth, clarity, and mirror-like gloss.',
    whyChoose: [
      {
        title: 'True Defect Removal',
        desc: 'Eliminates light scratches, swirl marks, and oxidation rather than temporarily masking them.',
      },
      {
        title: 'Essential Ceramic Prep',
        desc: 'Smooths and perfects the paint surface, creating the defect-free foundation required before applying wax or ceramic coating.',
      },
      {
        title: 'Lasting Value & Easier Washing',
        desc: 'Refreshes your car’s appearance, protects against further degradation, and improves resale value.',
      },
    ],
    iconName: 'Sparkles',
    warranty: 'Flawless Paint Finish Guarantee',
    hookText: 'Bring tired paintwork back to life.',
    ctaText: 'Request a Paint Inspection',
    highlights: [
      'Eliminates 85–95%+ of wash scratches and swirl marks',
      'Restores optical depth and crystal clarity to faded paint',
      'Safe paint depth gauge measurements taken on every panel',
      'Removes buffer trails, holograms, and oxidation',
      'Essential foundation prior to 9H ceramic coating',
    ],
  },
  {
    id: 'leather-coating',
    slug: 'leather-coating-interior-protection',
    title: 'Leather Coating & Interior Protection',
    tagline: 'Guard Your Cabin Against Spills, UV Fade & Daily Wear',
    startingPrice: 'From £130',
    shortDesc: 'Ceramic-grade leather and interior coatings that guard against UV fade, body oil staining, spills, and premature cracking.',
    fullDesc:
      'Most people think about protecting the paint, yet interiors take just as much punishment and the cabin is where you sit every day. At our Farnworth, Manchester workshop, Latin King Detailing applies ceramic-grade leather and interior coatings that guard against UV fade, body oil staining, spills, and premature cracking.',
    whatIs:
      "Unlike traditional leather conditioners that only moisturise the surface for a few days, our ceramic-grade protection forms an invisible, breathable barrier that lasts for months. It repels liquids before they stain, blocks UV radiation, and resists the abrasion that wears down seats and steering wheels - all while preserving your interior's natural look and feel.",
    surfacesProtected: [
      {
        title: 'Leather Seats',
        desc: 'Front and rear seat treatment with ceramic-grade protection against dye transfer, spills, and cracking.',
      },
      {
        title: 'Steering Wheel',
        desc: 'Specialist leather treatment resistant to hand oils and perspiration.',
      },
      {
        title: 'Dashboard & Trim',
        desc: 'UV-protective shielding for plastics and soft-touch dashboard surfaces.',
      },
      {
        title: 'Door Panels',
        desc: 'Leather and hard plastic protection on door cards and armrests.',
      },
      {
        title: 'Carpets & Fabric',
        desc: 'Hydrophobic stain protection for carpets, mats, and cloth seats.',
      },
      {
        title: 'Headlining',
        desc: 'Gentle cleaning and protective treatment for delicate roof lining materials.',
      },
    ],
    iconName: 'Armchair',
    warranty: 'Multi-Season Cabin Protection',
    hookText: 'Keep your cabin looking and feeling factory-fresh.',
    ctaText: 'Enquire About Interior Protection',
    highlights: [
      'Hydrophobic liquid barrier prevents drink and coffee stains',
      'Resists dye transfer from denim jeans into light leather',
      'Preserves original satin factory matte texture (no greasy shine)',
      'Blocks harsh UV radiation preventing leather cracking',
      'Anti-bacterial and odour-resistant shield',
    ],
  },
  {
    id: 'the-kings-detail',
    slug: 'the-kings-detail',
    title: 'The King’s Detail (Full Interior & Exterior Detailing)',
    tagline: 'Revive Your Ride: Ultimate Showroom Restoration',
    startingPrice: 'Small/Medium: From £180 | Large/4x4: From £220',
    pricingDetails: [
      { label: 'Small / Medium Car', price: 'From £180' },
      { label: 'Large / 4x4 / SUV', price: 'From £220' },
    ],
    shortDesc: 'Our signature, multi-stage restoration service designed to extract ingrained dirt from every pore and crevice and bring your vehicle back to showroom condition.',
    fullDesc:
      'There’s a big difference between a car that’s been washed and a car that’s been detailed. The King’s Detail is the signature, multi-stage restoration service from Latin King Detailing: designed to extract ingrained dirt from every pore and crevice and bring a neglected or daily-driven car back to showroom condition.',
    includedItems: [
      {
        title: 'Exterior Decontamination & Polish',
        desc: 'Safe two-bucket hand wash, iron fallout removal, clay bar decontamination, and machine polishing to remove swirl marks and restore deep gloss.',
      },
      {
        title: 'Deep Interior Restoration',
        desc: 'Full extraction of seats, carpets, and boot; pet hair removal; leather cleaning and conditioning; and source-level odour removal (with specialist restoration options available for heavy staining, mould, or smoke damage).',
      },
      {
        title: 'Long-Term Preservation',
        desc: 'Removes hidden contaminants that degrade surfaces over time, protecting both your car’s aesthetics and resale value.',
      },
    ],
    recommendation:
      'Recommended every 3–6 months for daily drivers in Greater Manchester, or every 4–6 weeks for high-value and show vehicles.',
    iconName: 'Award',
    warranty: 'Signature Latin King Showroom Standard',
    hookText: 'Give your vehicle the royal treatment.',
    ctaText: 'Book The King’s Detail',
    highlights: [
      'Comprehensive 8+ hour bumper-to-bumper transformation',
      'Safe 2-bucket wash, wheel barrels, arches & door shuts cleaned',
      'Full interior hot-water extraction & leather conditioning',
      'Single-stage machine polish for maximum gloss restoration',
      'Recommended every 3–6 months for daily drivers',
    ],
  },
  {
    id: 'deep-clean-engine-bay',
    slug: 'deep-clean-engine-bay',
    title: 'Deep Clean & Engine Bay Detailing',
    tagline: 'Hygienic Cabin Refresh & Under-Bonnet Care',
    startingPrice: 'Deep Clean: From £200 | Engine Bay: From £50',
    pricingDetails: [
      { label: 'Interior & Exterior Deep Clean', price: 'From £200' },
      { label: 'Engine Bay Cleaning (Standalone or Add-on)', price: 'From £50' },
    ],
    shortDesc: 'Hygienic cabin refresh and under-bonnet care. Removes built-up dirt, bacteria, and grime down to the last bolt.',
    fullDesc:
      'A comprehensive hygiene and under-bonnet care package designed to eliminate deep-seated contamination, odour-causing bacteria, and engine grease.',
    subServices: [
      {
        title: 'Interior & Exterior Deep Clean',
        subtitle: 'Hygienic Cabin Refresh',
        desc: 'A Deep Clean goes far beyond a standard wash: removing built-up dirt, grime, stains, and bacteria from inside and outside your vehicle. We thoroughly refresh carpets, seats, plastics, vents, and hard-to-reach areas to eliminate odours, improve cabin air quality, and protect your interior from premature wear.',
        price: 'From £200',
      },
      {
        title: 'Engine Bay Cleaning',
        subtitle: 'Detailing Down to the Last Bolt',
        desc: 'A clean engine bay not only looks great: it also contributes to the overall health of your vehicle. Our comprehensive engine bay cleaning removes built-up oil residue, grime, and road debris, helping prevent corrosion, making maintenance checks easier, and keeping your engine in top condition for any journey.',
        price: 'From £50 (Available standalone or as an add-on)',
      },
    ],
    iconName: 'Wrench',
    warranty: 'Hygienic Cleanliness Guarantee',
    hookText: 'Refresh your car inside, out, and under the bonnet.',
    ctaText: 'Schedule a Deep Clean',
    highlights: [
      'Anti-bacterial steam cleaning of vents, plastics, and high-touch areas',
      'Deep carpet & seat shampooing with stain extraction',
      'Under-bonnet degreasing with electronic component safeguarding',
      'Satin-finish engine dressing that resists dust accumulation',
      'Improves cabin air quality and prevents mechanical corrosion',
    ],
  },
  {
    id: 'full-valet',
    slug: 'full-valet',
    title: 'Professional Full Valet',
    tagline: 'Immaculate Full Valet Every Time',
    startingPrice: 'Small/Medium: From £55 | Large/4x4: From £75',
    pricingDetails: [
      { label: 'Full Valet (Small/Medium Car)', price: 'From £55' },
      { label: 'Full Valet (Large / 4x4 / SUV)', price: 'From £75' },
    ],
    shortDesc: 'Comprehensive top-to-bottom clean inside and out, leaving your vehicle spotless, sanitised, refreshed, and well presented.',
    fullDesc:
      'Our Full Valet provides an intensive, top-to-bottom clean inside and out: leaving your vehicle spotless, sanitised, refreshed, and well presented. Ideal for busy drivers and family cars that need professional care.',
    subServices: [
      {
        title: 'Full Valet (Small / Medium Car)',
        subtitle: 'Immaculate Full Valet',
        desc: 'Ideal for busy drivers and daily cars. Safe hand wash, wheel cleaning, full interior vacuum, dashboard & centre console wiped, glass polished inside and out, and tyres dressed with a satin finish.',
        price: 'From £55',
      },
      {
        title: 'Full Valet (Large / 4x4 / SUV)',
        subtitle: 'Thorough Cabin & Exterior Clean',
        desc: 'Extended full valet care tailored for large vehicles, 4x4s, and family SUVs requiring dedicated attention to spacious interiors, boot areas, and exterior body panels.',
        price: 'From £75',
      },
    ],
    iconName: 'Car',
    warranty: 'Spotless Handover Guarantee',
    hookText: 'Experience an immaculate full valet every single time.',
    ctaText: 'Book a Full Valet',
    highlights: [
      'Safe pH-neutral hand wash & wheel face cleaning',
      'Full interior vacuum, dashboard wipe & glass polished inside and out',
      'Tyres dressed with long-lasting satin finish',
      'Flexible booking slots for busy drivers in Manchester & Manchester',
      'Clear, honest pricing based on vehicle size',
    ],
  },
  {
    id: 'maintenance-wash',
    slug: 'maintenance-wash',
    title: 'Maintenance Wash',
    tagline: 'Preserve Your Detailing & Ceramic Coating Investment',
    startingPrice: 'From £45',
    shortDesc: 'The essential routine step performed every 4–5 weeks to prevent grime build-up and preserve your ceramic coating swirl-free.',
    fullDesc:
      'A Maintenance Wash is the essential routine step designed to keep your car looking pristine after a full valet, detail, or ceramic coating. Ideally performed every 4 to 5 weeks at Latin King Detailing, this safe hand-wash prevents the build-up of road grime and contaminants that can dull your finish: preserving the results of previous detailing work and keeping your paintwork swirl-free.',
    iconName: 'Droplets',
    warranty: 'Swirl-Free Hand Wash Protocol',
    hookText: 'Keep that just-detailed shine all year round.',
    ctaText: 'Book a Maintenance Wash',
    highlights: [
      'Pre-wash snow foam dissolves grit before mitts touch paintwork',
      'Two-bucket wash method with grit guards & plush microfibre mitts',
      'Non-acidic wheel cleaners safe for ceramic-coated alloys',
      'Touchless warm air drying & ultra-plush drying towels',
      'Hydrophobic top-up spray applied to boost water beading',
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'certified-installer',
    title: 'Ceramic Pro Certified Installer',
    description:
      "Certification means your coating is registered directly to your car's VIN with Ceramic Pro, so the warranty is real and traceable. Anyone can claim to 'use Ceramic Pro.' Being a certified installer means we're held accountable to the brand's standards on every single job.",
    badge: 'VIN-Registered Warranty',
    iconName: 'Award',
  },
  {
    id: 'professional-products',
    title: 'Professional Products Only',
    description:
      "Ceramic Pro 9H is the product used on Lamborghinis, Bentleys, and McLarens. We don't stock consumer-grade alternatives: what goes on your car is exactly the same as what goes on the cars in our gallery.",
    badge: 'Zero Dilution Guarantee',
    iconName: 'ShieldAlert',
  },
  {
    id: 'local-Manchester-specialists',
    title: 'Local Manchester Specialists',
    description:
      "Our workshop is in Farnworth, five minutes from the M61 at junction 4. Our customers drive from across Greater Manchester because they know what they're getting. We understand what Manchester roads and winters do to paintwork, and we know how to protect against it.",
    badge: 'M61 Junction 4 · Farnworth',
    iconName: 'MapPin',
  },
];

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    feature: 'Paint hardness protection',
    ceramic: '9H Diamond Hardness',
    dealership: 'Soft Polymer Sealant (~3H)',
    wax: 'None (Soft Organic Film)',
    notes: 'Ceramic Pro 9H permanently bonds and hardens clear coat.',
  },
  {
    feature: 'Bonding mechanism',
    ceramic: 'Molecular Chemical Quartz Fusion',
    dealership: 'Temporary Surface Cling',
    wax: 'Surface Sits / Wipes Off',
    notes: 'Ceramic Pro becomes a permanent extension of your clear coat.',
  },
  {
    feature: 'Scratch & swirl resistance',
    ceramic: 'High Micro-Scratch & Swirl Resistance',
    dealership: 'Low / Negligible',
    wax: 'Minimal / None',
    notes: 'Significantly prevents wash marring and fine scratches.',
  },
  {
    feature: 'UV & oxidation protection',
    ceramic: 'Permanent Chemical UV Blocker',
    dealership: 'Degrades in 2–3 Months',
    wax: 'Partial (Fades in 2–4 Weeks)',
    notes: 'Stops clear coat peeling, chalking, and paint fading under sun exposure.',
  },
  {
    feature: 'Hydrophobic contact angle',
    ceramic: 'Extreme >110° Self-Cleaning',
    dealership: '85° Initial (Fades quickly)',
    wax: '75° (Drops within weeks)',
    notes: 'Water beads at >110° contact angle, carrying dirt away with it.',
  },
  {
    feature: 'Chemical & road salt defense',
    ceramic: 'pH 2 to pH 12 Chemical Barrier',
    dealership: 'Stripped by Traffic Film Removers',
    wax: 'Strips on First Alkaline Wash',
    notes: 'Resists acid rain, bird lime, road salt, and harsh winter grime.',
  },
  {
    feature: 'Deep gloss enhancement',
    ceramic: 'Mirror Glass Optical Reflection',
    dealership: 'Moderate Synthetic Shine',
    wax: 'Short-term Warm Glow',
    notes: 'Ceramic Pro 9H yields the highest recorded optical reflection index.',
  },
  {
    feature: 'Longevity & Durability',
    ceramic: '2–5+ Years (VIN Registered)',
    dealership: '3–6 Months Maximum',
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
      'Had my BMW 5 Series coated with Ceramic Pro 9H. The finish is incredible: water just rolls straight off. Brilliant service from start to finish and the team really knows their stuff. Worth every penny.',
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
      'Third time using Latin King Detailing for my cars. Consistent quality every time. The ceramic coating on my Range Rover has held up perfectly through two winters now. Highly recommend to anyone in Manchester or Manchester.',
    verified: true,
  },
];

export const SERVICE_AREAS_24 = [
  'Manchester',
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
  name: 'Latin King Detailing: Manchester Partner',
  status: 'Verified Partner',
  rating: '5.0 ★',
  reviews: '47+ reviews',
  description:
    'Mobile car detailing, paint correction, ceramic coating, and interior protection delivered to your door across Manchester, Salford, Stretford, Sale, Altrincham, and 15+ Greater Manchester locations.',
  tags: ['Mobile Valeting', 'Paint Correction', 'Ceramic Coating', 'Interior Protection'],
  phone: '07482 225323',
};

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How much does ceramic coating cost in Manchester?',
    answer:
      "Prices depend on your car's size and the package you want: entry-level starts from competitive rates on a compact car, and a full Ceramic Pro 9H application on an SUV or prestige vehicle will be more. The best thing to do is drop us a message with your make and model. We'll come straight back with an honest quote, no pressure.",
  },
  {
    id: 'faq-2',
    question: 'Is ceramic coating worth it for a daily driver?',
    answer:
      'Genuinely, yes: and most people notice the difference straight away. After coating, water beads off, dirt doesn\'t cling the same way, and you spend far less time washing. For a Greater Manchester daily driver dealing with road salt, rain, and bird lime all year, the protection is real. Most of our customers say it paid for itself within 12–18 months in reduced cleaning costs alone.',
  },
  {
    id: 'faq-3',
    question: 'How long does a Ceramic Pro coating last?',
    answer:
      'A properly applied Ceramic Pro 9H coating lasts 2–5 years, depending on the package and how you look after it. The care routine is simple: pH-neutral shampoo, no automatic car washes, and an annual check with us. Do that, and you\'ll get every year out of it.',
  },
  {
    id: 'faq-4',
    question: 'Why choose Ceramic Pro 9H over dealership paint protection?',
    answer:
      "Dealerships typically apply quick polymer sealants (such as Supagard or Diamondbrite) that simply sit on top of the paint and wash away after a few months. Ceramic Pro 9H is a certified liquid polymer that chemically fuses with your clear coat at a molecular level, creating a permanent 9H hard glass barrier backed by a traceable VIN warranty.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ceramic-vs-wax',
    slug: 'ceramic-coating-vs-wax-Manchester-drivers',
    category: 'Ceramic Coating',
    title: 'Ceramic Coating vs Wax: What Manchester Drivers Should Know',
    excerpt:
      'Is ceramic coating really worth the investment over traditional wax? We break down the differences every Greater Manchester driver should understand.',
    readTime: '4 min read',
    date: 'February 2025',
    author: 'Latin King Detailing Team',
    content: [
      'For decades, traditional carnauba wax was the gold standard for protecting automotive paint. While wax produces an admirable warm glow, it sits solely on top of your clear coat as a soft organic residue that dissolves within 4 to 8 weeks, especially under persistent UK rain and winter road salt.',
      'Ceramic Pro 9H functions through an entirely different scientific mechanism: nanoceramic chemical bonding. It integrates into the microscopic pores of your clear coat, transforming into a diamond-hard, glass-like quartz matrix.',
      'For drivers commuting across Manchester, the M61, and Greater Manchester, the practical benefits are massive: road grime rinses away effortlessly, brake dust fails to bake into alloy rims, and bird droppings cannot etch the paint before you have a chance to wash the car.',
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
    id: 'paint-correction-guide',
    slug: 'why-paint-correction-is-essential-before-ceramic-coating',
    category: 'Paint Correction',
    title: 'Why Paint Correction is Essential Before Ceramic Coating',
    excerpt:
      'Ceramic coating locks in whatever is underneath it. We explain why pre-coating machine polishing is crucial for a flawless finish.',
    readTime: '4 min read',
    date: 'December 2024',
    author: 'Latin King Detailing Team',
    content: [
      'A common misconception among car owners is that ceramic coating will hide or fill existing scratches and swirl marks. In reality, because ceramic coating acts as an ultra-clear optical glass layer, it actually magnifies and locks in any defect present in your clear coat.',
      'This is why Latin King Detailing always performs multi-stage paint decontamination and machine polishing before applying Ceramic Pro 9H. Using dual-action and rotary polishers with diminishing abrasives, we refine the clear coat to eliminate buffer trails, wash swirls, and oxidation.',
      'Once the surface is chemically cleaned with panel wipe to strip all polishing oils, the 9H coating can form a flawless molecular bond directly to pristine, mirror-like clear coat.',
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
  'Professional Ceramic Coating - 9H Protection',
  'Professional Machine Polishing & Paint Correction',
  'Leather Coating & Interior Protection',
  'The King’s Detail (Full Interior & Exterior Detailing)',
  'Deep Clean & Engine Bay Detailing',
  'Professional Full Valet',
  'Maintenance Wash',
];

