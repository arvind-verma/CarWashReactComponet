import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, SearchX } from 'lucide-react';
import { useMemo, useState } from 'react';
import BookingCTA from '../components/common/BookingCTA';
import Button from '../components/common/Button';
import DemoBadge from '../components/common/DemoBadge';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import ServiceCard from '../components/common/ServiceCard';
import PageContainer from '../components/layout/PageContainer';
import PageHero from '../components/layout/PageHero';
import { images } from '../data/images';
import { formatINR, packages, serviceCategories, services, type ServiceCategory } from '../data/services';

type Filter = 'All' | ServiceCategory;

export default function Services() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = useMemo(
    () => (filter === 'All' ? services : services.filter((s) => s.category === filter)),
    [filter],
  );
  const minPrice = Math.min(...services.map((s) => s.price));

  return (
    <PageContainer
      title="Services"
      description="Car wash, interior detailing, paint polishing, ceramic coating and more — with demo pricing in INR."
    >
      <PageHero
        eyebrow="Services & pricing"
        crumb="Services"
        title={
          <>
            Care for every surface, <span className="text-snow/45">inside and out.</span>
          </>
        }
        description="Ten specialist services, each with a defined process and transparent starting price. Book a single service or save with a package."
        image={images.servicesHeroAmg}
        imageAlt="Grey Mercedes-AMG GT parked on an open road under an overcast sky"
      >
        <dl className="flex flex-wrap gap-x-10 gap-y-4 border-t border-snow/15 pt-6">
          {[
            { k: 'Services', v: String(services.length) },
            { k: 'Starting from', v: `${formatINR(minPrice)}*` },
            { k: 'Packages', v: String(packages.length) },
          ].map((d) => (
            <div key={d.k}>
              <dt className="text-xs uppercase tracking-[0.16em] text-snow/50">{d.k}</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">{d.v}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-snow/45">*All prices are sample demo pricing.</p>
      </PageHero>

      {/* Catalogue */}
      <section className="section bg-soft !pt-0" aria-labelledby="catalogue-title">
        <div className="sticky top-[72px] z-30 border-b border-mist bg-soft/90 backdrop-blur-xl lg:top-20">
          <div className="container-site flex items-center justify-between gap-6 py-4">
            <h2 id="catalogue-title" className="sr-only">
              All services
            </h2>
            <div
              role="tablist"
              aria-label="Filter services by category"
              className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0"
            >
              {serviceCategories.map((c) => {
                const count = c === 'All' ? services.length : services.filter((s) => s.category === c).length;
                const active = filter === c;
                return (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(c)}
                    className={`flex h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? 'border-ink bg-ink text-snow'
                        : 'border-mist bg-white text-steel hover:border-ink/40 hover:text-ink'
                    }`}
                  >
                    <span className="relative">{c}</span>
                    <span className={`relative text-xs ${active ? 'text-snow/60' : 'text-steel/70'}`}>{count}</span>
                  </button>
                );
              })}
            </div>
            <p className="hidden shrink-0 text-sm text-steel lg:block" aria-live="polite">
              Showing {visible.length} of {services.length}
            </p>
          </div>
        </div>

        <div className="container-site pt-10 lg:pt-14">
          {visible.length === 0 ? (
            <div className="grid place-items-center rounded-[22px] border border-dashed border-mist bg-white py-24 text-center">
              <SearchX className="h-8 w-8 text-steel" aria-hidden />
              <p className="mt-4 text-steel">No services in this category yet.</p>
            </div>
          ) : (
            <div key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ServiceCard service={s} index={services.indexOf(s)} showIncludes />
                </motion.div>
              ))}
            </div>
          )}
          <p className="mt-8 text-sm text-steel">
            Prices shown are sample starting prices for a standard sedan. Larger vehicles and heavily soiled cars may vary —
            we always confirm the final price before starting.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section scroll-mt-24 bg-ink text-snow" aria-labelledby="packages-title">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              tone="dark"
              eyebrow="Premium packages"
              title={<span id="packages-title">Combine and save.</span>}
              description="Curated combinations of our most popular services, priced lower than booking each one separately."
            />
            <DemoBadge tone="dark" label="Demo pricing" />
          </div>

          <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className={`relative flex h-full flex-col rounded-[26px] p-8 sm:p-10 ${
                    p.highlight ? 'bg-snow text-ink' : 'border border-snow/10 bg-charcoal/50 text-snow'
                  }`}
                >
                  <div className="flex min-h-[26px] flex-wrap items-center justify-between gap-3">
                    <p className={`eyebrow ${p.highlight ? 'text-steel' : 'text-silver'}`}>{p.tagline}</p>
                    {p.highlight && (
                      <span className="rounded-full bg-ink px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-snow">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold">{p.name}</h3>
                  <div className="mt-8 flex items-end gap-3">
                    <p className="font-display text-5xl font-semibold tracking-tight">{formatINR(p.price)}</p>
                    <p className={`pb-2 text-sm line-through ${p.highlight ? 'text-steel' : 'text-snow/40'}`}>
                      {formatINR(p.originalPrice)}
                    </p>
                  </div>
                  <p className={`mt-2 flex items-center gap-1.5 text-sm ${p.highlight ? 'text-steel' : 'text-snow/55'}`}>
                    <Clock className="h-4 w-4" aria-hidden /> Approx. {p.duration}
                  </p>
                  <ul className={`mt-8 space-y-3.5 border-t pt-8 ${p.highlight ? 'border-mist' : 'border-snow/10'}`}>
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[15px]">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                            p.highlight ? 'bg-ink text-snow' : 'bg-snow/10 text-snow'
                          }`}
                        >
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Button
                      to={`/contact?package=${p.id}#enquiry`}
                      variant={p.highlight ? 'primary' : 'light'}
                      fullWidth
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      Enquire Now
                    </Button>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA
        eyebrow="Not sure what you need?"
        title="Tell us about your car. We'll recommend the right care."
        description="Share your vehicle and its condition — our team will suggest the best service or package and confirm the price."
        image={images.galleryGreyBmw}
      />
    </PageContainer>
  );
}
