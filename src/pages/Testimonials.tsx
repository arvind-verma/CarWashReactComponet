import { motion } from 'framer-motion';
import { Camera, ClipboardCheck, KeyRound, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import BookingCTA from '../components/common/BookingCTA';
import DemoBadge from '../components/common/DemoBadge';
import Reveal, { staggerChild, staggerParent } from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import StarRating from '../components/common/StarRating';
import TestimonialCard from '../components/common/TestimonialCard';
import PageContainer from '../components/layout/PageContainer';
import PageHero from '../components/layout/PageHero';
import { images } from '../data/images';
import { ratingSummary, testimonials } from '../data/testimonials';

const categoryScores = [
  { label: 'Quality of finish', score: 4.9 },
  { label: 'Punctuality', score: 4.8 },
  { label: 'Staff courtesy', score: 4.9 },
  { label: 'Value for money', score: 4.7 },
];

const journey = [
  { icon: MessageSquare, title: 'Enquire', text: 'Send a request online or on WhatsApp in under a minute.' },
  { icon: PhoneCall, title: 'Confirm', text: 'We call to understand your car, agree a slot and confirm the price.' },
  { icon: ClipboardCheck, title: 'Inspect', text: 'A walk-around inspection notes existing marks before we begin.' },
  { icon: Sparkles, title: 'Detail', text: 'Specialists follow the service checklist with surface-specific products.' },
  { icon: KeyRound, title: 'Handover', text: 'A final check under detailing lights, then aftercare tips as you collect.' },
];

const gallery = [
  { src: images.galleryRedBmw, alt: 'Red BMW coupe with a glossy, freshly polished finish', label: 'Paint polishing', cls: 'lg:col-span-2 lg:row-span-2' },
  { src: images.gallerySilverAmg, alt: 'Silver Mercedes-AMG GT gleaming against a city skyline', label: 'Ceramic coating', cls: '' },
  { src: images.galleryBlueBmw, alt: 'Close-up of a blue BMW front end with clean headlights', label: 'Headlight restoration', cls: 'lg:row-span-2' },
  { src: images.gallerySedanRoad, alt: 'Light grey BMW saloon driving on a clean road', label: 'Complete wash', cls: '' },
  { src: images.galleryHypercar, alt: 'Front of a silver hypercar with polished grille', label: 'Luxury car care', cls: 'lg:col-span-2' },
  { src: images.interiorLeatherSeats, alt: 'Clean quilted leather seats after interior detailing', label: 'Interior detailing', cls: 'lg:col-span-2' },
];

export default function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <PageContainer
      title="Testimonials"
      description="What drivers say about AutoGlow Car Care. Sample reviews and demo rating summary."
    >
      <PageHero
        layout="center"
        eyebrow="Customer stories"
        crumb="Testimonials"
        title={
          <>
            Trusted by drivers <span className="text-snow/45">who notice the details.</span>
          </>
        }
        description={
          <>
            Real experiences matter more than any claim we could make. Here's a selection of customer feedback.
            <span className="mt-4 block">
              <DemoBadge tone="dark" label="Sample reviews for template demo" />
            </span>
          </>
        }
        image={images.galleryHypercar}
        imageAlt="Silver hypercar front view illuminated at night"
      />

      {/* Featured review + rating summary */}
      <section className="section bg-white" aria-label="Featured review and rating summary">
        <div className="container-site grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <figure className="relative grid h-full overflow-hidden rounded-[28px] bg-ink text-snow md:grid-cols-5">
              <div className="relative min-h-[260px] md:col-span-2">
                <img
                  src={images.galleryGreyBmw}
                  alt="Grey BMW coupe with a deep gloss finish after ceramic coating"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-8 sm:p-12 md:col-span-3">
                <p className="eyebrow text-silver">Featured review</p>
                <div className="mt-5">
                  <StarRating rating={featured.rating} tone="dark" size={18} />
                </div>
                <blockquote className="mt-6 flex-1 text-balance font-display text-2xl font-medium leading-snug sm:text-[1.75rem]">
                  “{featured.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-snow/10 pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-snow font-display text-sm font-semibold text-ink">
                    {featured.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </span>
                  <div>
                    <p className="font-medium">
                      {featured.name} · {featured.location}
                    </p>
                    <p className="text-sm text-snow/55">
                      {featured.vehicle} · {featured.service}
                    </p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-[28px] border border-mist bg-soft p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <h2 className="eyebrow text-steel">Rating summary</h2>
                <DemoBadge label="Demo" />
              </div>
              <div className="mt-6 flex items-end gap-4">
                <p className="font-display text-7xl font-semibold tracking-tight text-ink">{ratingSummary.average}</p>
                <div className="pb-3">
                  <StarRating rating={ratingSummary.average} size={18} />
                  <p className="mt-1.5 text-sm text-steel">
                    from {ratingSummary.totalReviews.toLocaleString('en-IN')} sample reviews
                  </p>
                </div>
              </div>
              <ul className="mt-8 space-y-3" aria-label="Rating distribution">
                {ratingSummary.distribution.map((d) => (
                  <li key={d.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-8 text-steel">{d.stars}★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-mist">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${d.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-ink"
                      />
                    </div>
                    <span className="w-10 text-right tabular-nums text-steel">{d.percent}%</span>
                  </li>
                ))}
              </ul>
              <dl className="mt-auto grid grid-cols-2 gap-4 border-t border-mist pt-6 text-sm">
                {categoryScores.map((c) => (
                  <div key={c.label}>
                    <dt className="text-steel">{c.label}</dt>
                    <dd className="mt-0.5 font-display text-lg font-semibold text-ink">{c.score}/5</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Review wall */}
      <section className="section bg-soft" aria-labelledby="reviews-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="More reviews"
            title={<span id="reviews-title">In their own words.</span>}
            description="Feedback across our services — from monthly washes to full paint correction."
          />
          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {others.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 0.08} className="break-inside-avoid">
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-sm text-steel">
            Reviews shown are fictional sample content for this website template and are not verified customer feedback.
          </p>
        </div>
      </section>

      {/* Customer experience journey */}
      <section className="section bg-ink text-snow" aria-labelledby="journey-title">
        <div className="container-site">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="The customer experience"
            title={<span id="journey-title">A smooth journey from first message to final shine.</span>}
          />
          <motion.ol
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            className="relative mt-16 grid gap-px overflow-hidden rounded-[26px] bg-snow/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5"
          >
            {journey.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                variants={staggerChild}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-charcoal lg:min-h-[280px]"
              >
                <span className="font-display text-sm text-snow/30">Step {i + 1}</span>
                <span className="mt-6 grid h-12 w-12 place-items-center rounded-full border border-snow/15 transition-colors group-hover:border-snow/40">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-snow/60">{text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Results gallery */}
      <section className="section bg-white" aria-labelledby="gallery-title">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Results showcase"
              title={<span id="gallery-title">Finished, inspected, ready to drive.</span>}
            />
            <Reveal delay={0.1}>
              <p className="flex items-center gap-2 text-sm text-steel">
                <Camera className="h-4 w-4" aria-hidden /> Representative photography for demo
              </p>
            </Reveal>
          </div>
          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[240px] lg:mt-16 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g.label} delay={(i % 4) * 0.06} className={`${g.cls} h-full`}>
                <figure className="group relative h-full overflow-hidden rounded-[22px] bg-mist">
                  <img src={g.src} alt={g.alt} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <figcaption className="absolute bottom-4 left-5 text-sm font-medium text-snow">{g.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        eyebrow="Your turn"
        title="Experience the AutoGlow Difference"
        description="Join the drivers who trust us with their cars. Book a wash or detail and see the results for yourself."
        image={images.galleryBlackPorsche}
      />
    </PageContainer>
  );
}
