/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit this one file to rebrand the template.
 *  Every value below is a DEMO PLACEHOLDER, not a real business.
 * ─────────────────────────────────────────────────────────────
 */
export const siteConfig = {
  brand: {
    name: 'AutoGlow',
    fullName: 'AutoGlow Car Care',
    tagline: 'A Cleaner Car. A Better Drive.',
    shortDescription:
      'Professional car washing, interior detailing, paint correction and protective coatings — delivered with care in every detail.',
  },
  contact: {
    phoneDisplay: '+91 00000 00000',
    phoneHref: 'tel:+910000000000',
    email: 'hello@your-domain.example',
    addressLines: ['Your Studio Address, Street Name', 'Area / Locality, City – 000000', 'India'],
    mapEmbedUrl: '', // Paste a Google Maps embed URL here to replace the placeholder map.
  },
  whatsapp: {
    // Replace with your number in international format, digits only (e.g. 9198XXXXXXXX).
    number: '910000000000',
    defaultMessage: 'Hi AutoGlow, I would like to book a car wash.',
  },
  hours: [
    { days: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 9:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 6:00 PM' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Facebook', href: 'https://facebook.com/' },
    { label: 'YouTube', href: 'https://youtube.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],
  /** Demo statistics — replace with your real figures before going live. */
  stats: [
    { value: 25000, suffix: '+', label: 'Vehicles cleaned' },
    { value: 12, suffix: '', label: 'Years of experience' },
    { value: 98, suffix: '%', label: 'Customer satisfaction' },
    { value: 40, suffix: '+', label: 'Trained specialists' },
  ],
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Testimonials', to: '/testimonials' },
    { label: 'Contact Us', to: '/contact' },
  ],
} as const;

export const whatsappLink = (message: string = siteConfig.whatsapp.defaultMessage) =>
  `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
