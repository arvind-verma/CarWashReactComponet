/**
 * Central image registry. Swap any file in src/assets/images (or point to a CDN URL)
 * and every page using it updates automatically.
 * Demo photography: Unsplash (https://unsplash.com/license).
 */
import heroDarkCar from '../assets/images/hero-dark-car.jpg';
import exteriorHandWash from '../assets/images/exterior-hand-wash.jpg';
import foamWashSpray from '../assets/images/foam-wash-spray.jpg';
import completeWashWheel from '../assets/images/complete-wash-wheel.jpg';
import interiorLeatherSeats from '../assets/images/interior-leather-seats.jpg';
import interiorDashboard from '../assets/images/interior-dashboard.jpg';
import paintPolishGloss from '../assets/images/paint-polish-gloss.jpg';
import ceramicCoatingGloss from '../assets/images/ceramic-coating-gloss.jpg';
import engineBay from '../assets/images/engine-bay.jpg';
import headlightRestoration from '../assets/images/headlight-restoration.jpg';
import suvLuxury from '../assets/images/suv-luxury.jpg';
import aboutHeroGarage from '../assets/images/about-hero-garage.jpg';
import workshopTeam from '../assets/images/workshop-team.jpg';
import technicianPortrait from '../assets/images/technician-portrait.jpg';
import workshopTools from '../assets/images/workshop-tools.jpg';
import detailMonoMercedes from '../assets/images/detail-mono-mercedes.jpg';
import beforeAfterAudi from '../assets/images/before-after-audi.jpg';
import galleryGreyBmw from '../assets/images/gallery-grey-bmw.jpg';
import galleryRedBmw from '../assets/images/gallery-red-bmw.jpg';
import galleryHypercar from '../assets/images/gallery-hypercar.jpg';
import galleryBlackPorsche from '../assets/images/gallery-black-porsche.jpg';
import galleryBlueBmw from '../assets/images/gallery-blue-bmw.jpg';
import gallerySilverAmg from '../assets/images/gallery-silver-amg.jpg';
import gallerySedanRoad from '../assets/images/gallery-sedan-road.jpg';
import contactHeroGarage from '../assets/images/contact-hero-garage.jpg';
import servicesHeroAmg from '../assets/images/services-hero-amg.jpg';
import ctaBlack911 from '../assets/images/cta-black-911.jpg';
import testimonialFeatured from '../assets/images/testimonial-featured.jpg';

export const images = {
  heroDarkCar,
  exteriorHandWash,
  foamWashSpray,
  completeWashWheel,
  interiorLeatherSeats,
  interiorDashboard,
  paintPolishGloss,
  ceramicCoatingGloss,
  engineBay,
  headlightRestoration,
  suvLuxury,
  aboutHeroGarage,
  workshopTeam,
  technicianPortrait,
  workshopTools,
  detailMonoMercedes,
  beforeAfterAudi,
  galleryGreyBmw,
  galleryRedBmw,
  galleryHypercar,
  galleryBlackPorsche,
  galleryBlueBmw,
  gallerySilverAmg,
  gallerySedanRoad,
  contactHeroGarage,
  servicesHeroAmg,
  ctaBlack911,
  testimonialFeatured,
} as const;

export type ImageKey = keyof typeof images;
