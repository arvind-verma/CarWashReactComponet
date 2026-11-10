import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { formatINR, services } from '../../data/services';
import Button from '../common/Button';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

/** Editorial layout: one large feature + a tidy list, rather than a flat grid of cards. */
export default function FeaturedServices() {
  const { openBooking } = useBooking();
  const featured = services.filter((s) => s.featured);
  const [lead, ...rest] = featured;

  return (
    <section className="section bg-white" aria-labelledby="featured-services">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our services"
            title={<span id="featured-services">From a quick refresh to a full showroom finish.</span>}
            description="Every service follows a defined process, uses dedicated products for each surface, and is checked before handover."
          />
          <Reveal delay={0.1}>
            <Button to="/services" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
              View all 10 services
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {/* Lead feature */}
          <Reveal className="lg:col-span-7">
            <article className="group relative h-full min-h-[460px] overflow-hidden rounded-[28px] bg-ink text-snow lg:min-h-[620px]">
              <img
                src={lead.image}
                alt={lead.imageAlt}
                loading="lazy"
                className="img-zoom absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />
              <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-7 sm:p-10">
                <span className="eyebrow text-silver">Most requested</span>
                <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{lead.name}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-snow/70">{lead.description}</p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button variant="light" onClick={() => openBooking(lead.id)}>
                    Book This Service
                  </Button>
                  <p className="text-sm text-snow/60">
                    From <span className="font-display text-lg font-semibold text-snow">{formatINR(lead.price)}</span>{' '}
                    · {lead.duration} · demo price
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          {/* List */}
          <div className="lg:col-span-5">
            <ul className="flex h-full flex-col divide-y divide-mist border-y border-mist">
              {rest.map((s, i) => (
                <Reveal as="li" key={s.id} delay={i * 0.06} className="flex-1">
                  <Link
                    to={`/contact?service=${s.id}#enquiry`}
                    className="group flex h-full items-center gap-5 py-5"
                    aria-label={`Enquire about ${s.name}, from ${formatINR(s.price)}`}
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl bg-mist sm:h-24 sm:w-32">
                      <img src={s.image} alt="" loading="lazy" className="img-zoom h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-steel">{s.category}</p>
                      <h3 className="mt-1 text-lg font-semibold text-ink sm:text-xl">{s.name}</h3>
                      <p className="mt-1 text-sm text-steel">
                        {formatINR(s.price)} · {s.duration}
                      </p>
                    </div>
                    <motion.span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-mist text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-snow"
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
