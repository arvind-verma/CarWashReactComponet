/**
 * SAMPLE TESTIMONIALS — fictional demo content for the template.
 * Replace with genuine customer reviews (with permission) before going live.
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  service: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan M.',
    location: 'Pune',
    vehicle: 'BMW 3 Series',
    rating: 5,
    service: 'Ceramic Coating',
    quote:
      'Six months after the coating, water still beads straight off the bonnet. The team walked me through the aftercare and the car honestly looks better than the day I collected it.',
  },
  {
    id: 't2',
    name: 'Ananya S.',
    location: 'Bengaluru',
    vehicle: 'Hyundai Creta',
    rating: 5,
    service: 'Interior Deep Cleaning',
    quote:
      'Two kids and a dog — the back seat had seen things. They got out stains I had given up on, and the cabin smelt fresh without a heavy perfume smell.',
  },
  {
    id: 't3',
    name: 'Vikram P.',
    location: 'Mumbai',
    vehicle: 'Toyota Fortuner',
    rating: 5,
    service: 'SUV & Luxury Car Care',
    quote:
      'Booking was quick, they started on time, and I got a short update with photos when it was done. Professional from start to finish.',
  },
  {
    id: 't4',
    name: 'Meera K.',
    location: 'Hyderabad',
    vehicle: 'Honda City',
    rating: 4,
    service: 'Headlight Restoration',
    quote:
      'My headlights were badly yellowed. Now they are clear and night driving feels much safer. Took slightly longer than quoted, but worth the wait.',
  },
  {
    id: 't5',
    name: 'Arjun D.',
    location: 'Delhi NCR',
    vehicle: 'Mercedes-Benz C-Class',
    rating: 5,
    service: 'Paint Polishing',
    quote:
      'The swirl marks from automatic washes are gone. You can see the difference in direct sunlight. Careful, patient work.',
  },
  {
    id: 't6',
    name: 'Priya R.',
    location: 'Chennai',
    vehicle: 'Maruti Suzuki Baleno',
    rating: 5,
    service: 'Complete In-and-Out Wash',
    quote:
      'This is now my monthly routine. Consistent quality every time and the staff are always polite. Great value for the level of detail.',
  },
  {
    id: 't7',
    name: 'Karan J.',
    location: 'Ahmedabad',
    vehicle: 'Mahindra XUV700',
    rating: 5,
    service: 'Premium Foam Wash',
    quote:
      'After a monsoon road trip the car was caked in mud. The foam wash brought it back without a single new scratch. Very impressed.',
  },
  {
    id: 't8',
    name: 'Sneha L.',
    location: 'Kochi',
    vehicle: 'Kia Seltos',
    rating: 4,
    service: 'Engine Bay Cleaning',
    quote:
      'I did not expect an engine bay to look this neat. They explained what they would cover before rinsing, which gave me confidence.',
  },
];

/** Demo rating summary — illustrative numbers, not real data. */
export const ratingSummary = {
  average: 4.9,
  totalReviews: 1280,
  distribution: [
    { stars: 5, percent: 91 },
    { stars: 4, percent: 7 },
    { stars: 3, percent: 1 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ],
};
