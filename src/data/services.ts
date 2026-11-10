import { images } from './images';

export type ServiceCategory = 'Wash' | 'Interior' | 'Paint & Protection' | 'Specialist';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  includes: string[];
  duration: string;
  /** Demo starting price in INR. */
  price: number;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const serviceCategories: ('All' | ServiceCategory)[] = [
  'All',
  'Wash',
  'Interior',
  'Paint & Protection',
  'Specialist',
];

export const services: Service[] = [
  {
    id: 'exterior-wash',
    name: 'Exterior Car Wash',
    category: 'Wash',
    description:
      'A careful two-bucket hand wash with pH-neutral shampoo, wheel and tyre clean, and a streak-free microfibre dry.',
    includes: ['Pre-rinse & hand wash', 'Wheel & arch clean', 'Tyre dressing', 'Glass polish'],
    duration: '45 min',
    price: 599,
    image: images.exteriorHandWash,
    imageAlt: 'Detailer hand-washing a black car with a soapy mitt',
    featured: true,
  },
  {
    id: 'interior-deep-clean',
    name: 'Interior Deep Cleaning',
    category: 'Interior',
    description:
      'Vacuuming, shampoo extraction of seats and carpets, and a wipe-down of every touch point to leave the cabin fresh.',
    includes: ['Full vacuum', 'Seat & carpet shampoo', 'Dashboard & console clean', 'Odour treatment'],
    duration: '2 – 3 hrs',
    price: 1999,
    image: images.interiorLeatherSeats,
    imageAlt: 'Clean black quilted leather car seats',
    featured: true,
  },
  {
    id: 'complete-wash',
    name: 'Complete In-and-Out Wash',
    category: 'Wash',
    description:
      'Our most-booked service: a full exterior hand wash combined with a thorough interior vacuum and wipe-down.',
    includes: ['Exterior hand wash', 'Interior vacuum', 'Dashboard wipe', 'Door jambs cleaned'],
    duration: '1.5 hrs',
    price: 1199,
    image: images.completeWashWheel,
    imageAlt: 'Water splashing off the alloy wheel of a dark car during a wash',
  },
  {
    id: 'foam-wash',
    name: 'Premium Foam Wash',
    category: 'Wash',
    description:
      'Thick snow-foam pre-soak lifts grit before contact, reducing swirl marks. Finished with a gloss-enhancing spray sealant.',
    includes: ['Snow-foam pre-soak', 'Contact-safe hand wash', 'Spray sealant', 'Tyre shine'],
    duration: '1 hr',
    price: 899,
    image: images.foamWashSpray,
    imageAlt: 'Pressure washer spraying water over the rear of a dark sports car',
    featured: true,
  },
  {
    id: 'interior-detailing',
    name: 'Car Interior Detailing',
    category: 'Interior',
    description:
      'Steam cleaning, leather cleaning and conditioning, and UV protection for plastics — a showroom-grade cabin reset.',
    includes: ['Steam sanitisation', 'Leather clean & condition', 'Trim UV protection', 'Vent & seam detailing'],
    duration: '4 – 5 hrs',
    price: 3499,
    image: images.interiorDashboard,
    imageAlt: 'Detailed car dashboard with infotainment screen and steering wheel',
  },
  {
    id: 'paint-polishing',
    name: 'Paint Polishing',
    category: 'Paint & Protection',
    description:
      'Machine polishing removes light swirls, oxidation and water spots to restore depth, clarity and gloss to your paint.',
    includes: ['Clay bar decontamination', 'Single-stage machine polish', 'Paint depth check', 'Wax finish'],
    duration: '5 – 6 hrs',
    price: 4999,
    image: images.paintPolishGloss,
    imageAlt: 'Glossy red paint and headlight reflecting studio lights',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic Coating',
    category: 'Paint & Protection',
    description:
      'A professional-grade ceramic layer bonds to the clear coat for long-lasting gloss, hydrophobic beading and easier washing.',
    includes: ['Paint correction prep', 'Panel wipe', '9H ceramic application', 'Curing & inspection'],
    duration: '1 – 2 days',
    price: 18999,
    image: images.ceramicCoatingGloss,
    imageAlt: 'Silver muscle car with a deep reflective finish in a dark tunnel',
    featured: true,
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Cleaning',
    category: 'Specialist',
    description:
      'Safe, low-pressure degreasing of the engine bay with sensitive electrics protected, then a dressing for rubber and plastics.',
    includes: ['Electrics masked', 'Degrease & agitate', 'Controlled rinse', 'Plastic & hose dressing'],
    duration: '1 hr',
    price: 999,
    image: images.engineBay,
    imageAlt: 'Close-up of a clean car engine with belts and pulleys',
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight Restoration',
    category: 'Specialist',
    description:
      'Wet-sanding and polishing removes yellowing and haze, followed by a UV sealant to keep your headlights clear for longer.',
    includes: ['Multi-stage wet sanding', 'Polish to clarity', 'UV protective sealant', 'Both headlights'],
    duration: '1.5 hrs',
    price: 1499,
    image: images.headlightRestoration,
    imageAlt: 'Technician working on the headlight of a silver Mercedes',
  },
  {
    id: 'suv-luxury',
    name: 'SUV & Luxury Car Care',
    category: 'Specialist',
    description:
      'Extra time, extra care and dedicated products for large SUVs and luxury vehicles, from soft-close doors to delicate leathers.',
    includes: ['Size-appropriate wash', 'Premium interior care', 'Leather & trim protection', 'Senior detailer assigned'],
    duration: '3 – 4 hrs',
    price: 2999,
    image: images.suvLuxury,
    imageAlt: 'Black luxury SUV parked in front of a dark garage',
  },
];

export const getServiceById = (id: string | null | undefined) => services.find((s) => s.id === id);

export const formatINR = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);

export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  duration: string;
  items: string[];
  highlight?: boolean;
}

export const packages: Package[] = [
  {
    id: 'essential-care',
    name: 'Essential Care',
    tagline: 'For regular upkeep',
    price: 1499,
    originalPrice: 1798,
    duration: '2 hrs',
    items: ['Premium Foam Wash', 'Interior vacuum & wipe-down', 'Tyre & trim dressing', 'Glass inside & out'],
  },
  {
    id: 'signature-detail',
    name: 'Signature Detail',
    tagline: 'Our most popular package',
    price: 4499,
    originalPrice: 5498,
    duration: '5 hrs',
    items: ['Complete In-and-Out Wash', 'Car Interior Detailing', 'Engine Bay Cleaning', 'Spray sealant protection'],
    highlight: true,
  },
  {
    id: 'showroom-finish',
    name: 'Showroom Finish',
    tagline: 'Full correction & protection',
    price: 22999,
    originalPrice: 26497,
    duration: '2 days',
    items: ['Paint Polishing', 'Ceramic Coating', 'Headlight Restoration', 'Interior detailing included'],
  },
];
