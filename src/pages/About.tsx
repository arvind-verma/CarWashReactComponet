import { motion } from 'framer-motion';
import { Droplet, Eye, Gem, Handshake, Microscope, Target, Users } from 'lucide-react';
import BookingCTA from '../components/common/BookingCTA';
import DemoBadge from '../components/common/DemoBadge';
import Reveal, { staggerChild, staggerParent } from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import StatItem from '../components/common/StatItem';
import PageContainer from '../components/layout/PageContainer';
import PageHero from '../components/layout/PageHero';
import { images } from '../data/images';
import { siteConfig } from '../data/siteConfig';

const values = [
  {
    icon: Microscope,
    title: 'Attention to detail',
    text: 'Door shuts, wheel barrels, air vents, seat rails — the places most washes skip are part of our checklist.',
  },
  {
    icon: Gem,
    title: 'Quality products',
    text: 'Professional-grade, surface-specific products chosen for results and safety, never just because they are cheap.',
  },
  {
    icon: Users,
    title: 'Trained professionals',
    text: 'Structured in-house training and supervised work before anyone details a customer vehicle on their own.',
  },
  {
    icon: Handshake,
    title: 'Customer trust',
    text: 'Clear pricing before we start, honest advice on what your car actually needs, and no surprise add-ons.',
  },
  {
    icon: Droplet,
    title: 'Responsible water usage',
    text: 'Controlled-flow equipment and foam pre-soaks help us clean thoroughly while using water more carefully.',
  },
];

const team = [
  {
    image: images.workshopTeam,
    alt: 'Two AutoGlow technicians inspecting an engine bay together',
    caption: 'Engine bay preparation',
    span: 'sm:col-span-2 lg:row-span-2',
    aspect: 'aspect-[4/3] lg:aspect-auto lg:h-full',
  },
  {
    image: images.workshopTools,
    alt: 'Organised workshop wall with professional tools and equipment',
    caption: 'Our workshop',
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    image: images.headlightRestoration,
    alt: 'Technician carefully restoring a car headlight',
    caption: 'Headlight restoration',
    span: '',
    aspect: 'aspect-[4/3]',
  },
];

export default function About() {
  return (
    <PageContainer
      title="About Us"
      description="The story, mission and values behind AutoGlow Car Care — a premium car wash and detailing studio."
    >
      <PageHero
        layout="split"
        eyebrow="About AutoGlow"
        crumb="About Us"
        title={
          <>
            Built by people who <span className="text-snow/45">love clean cars.</span>
          </>
        }
        description="We started AutoGlow to offer something simple but rare: car care done properly, every single time."
        image={images.aboutHeroGarage}
        imageAlt="Grey sports car under moody lighting in a dark garage"
        imagePosition="70% center"
      />

      {/* Our story — editorial split */}
      <section className="section bg-white" aria-labelledby="story-title">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our story" title={<span id="story-title">From one wash bay to a full detailing studio.</span>} />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-[17px] leading-relaxed text-steel">
              <p>
                AutoGlow began with a single wash bay and a frustration we think many drivers share: quick washes that
                left swirl marks, missed corners and cabins that never quite felt clean.
              </p>
              <p>
                So we did it differently. We invested in training, proper equipment and products designed for each
                surface. We slowed down where it matters and built a process our customers could rely on — whether
                they drive a city hatchback or a luxury SUV.
              </p>
              <p className="text-ink">
                Today, our team cares for thousands of vehicles a year, but the principle hasn't changed: treat every
                car as if it were our own.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex items-center gap-4 border-t border-mist pt-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-snow">
                AG
              </span>
              <div>
                <p className="font-medium text-ink">The AutoGlow founding team</p>
                <p className="text-sm text-steel">Est. 2014 (demo)</p>
              </div>
            </Reveal>
          </div>

          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-5 gap-4">
              <Reveal className="col-span-3">
                <div className="group overflow-hidden rounded-[24px]">
                  <img
                    src={images.technicianPortrait}
                    alt="Smiling AutoGlow technician working under the bonnet of a yellow car"
                    loading="lazy"
                    className="img-zoom aspect-[3/4] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.15} className="col-span-2 mt-16 lg:mt-28">
                <div className="group overflow-hidden rounded-[24px]">
                  <img
                    src={images.exteriorHandWash}
                    alt="Careful hand wash of a black car using a wash mitt"
                    loading="lazy"
                    className="img-zoom aspect-[3/5] w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-steel">Two-bucket hand washing — our standard since day one.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section bg-soft" aria-label="Mission and vision">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Target,
              label: 'Our mission',
              title: 'Deliver consistently excellent car care that customers can trust without a second thought.',
              text: 'Through trained people, defined processes and honest communication — on every vehicle, every visit.',
              dark: true,
            },
            {
              icon: Eye,
              label: 'Our vision',
              title: 'To set the standard for premium, responsible vehicle care in every city we serve.',
              text: 'Raising expectations of what a car wash can be, while using water and products more thoughtfully.',
              dark: false,
            },
          ].map(({ icon: Icon, label, title, text, dark }, i) => (
            <Reveal key={label} delay={i * 0.1}>
              <article
                className={`flex h-full flex-col rounded-[28px] p-8 sm:p-12 ${
                  dark ? 'bg-ink text-snow' : 'border border-mist bg-white text-ink'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 ${dark ? 'text-silver' : 'text-steel'}`} aria-hidden />
                  <p className={`eyebrow ${dark ? 'text-silver' : 'text-steel'}`}>{label}</p>
                </div>
                <h2 className="mt-10 text-balance text-2xl font-semibold leading-snug sm:text-3xl">{title}</h2>
                <p className={`mt-5 text-[15px] leading-relaxed ${dark ? 'text-snow/60' : 'text-steel'}`}>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white" aria-labelledby="values-title">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="What we value" title={<span id="values-title">Five principles behind every wash.</span>} />
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-steel lg:ml-auto">
                These aren't slogans on a wall. They shape how we hire, how we train and how we decide what goes into
                each service.
              </p>
            </Reveal>
          </div>

          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5"
          >
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.li
                key={title}
                variants={staggerChild}
                whileHover={{ y: -6 }}
                className="group flex flex-col rounded-[22px] border border-mist bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-ink/20 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-soft text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-snow">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </span>
                  <span className="font-display text-sm text-steel/60">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Care in every detail — full-bleed image with overlay card */}
      <section className="relative isolate overflow-hidden bg-ink" aria-labelledby="care-title">
        <img
          src={images.detailMonoMercedes}
          alt="Black-and-white image of a gleaming Mercedes coupe at a harbour"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent lg:bg-gradient-to-l lg:from-ink/90 lg:via-ink/30" aria-hidden />
        <div className="container-site flex min-h-[640px] items-end py-16 lg:min-h-[760px] lg:items-center lg:justify-end lg:py-24">
          <Reveal className="w-full max-w-lg rounded-[28px] border border-snow/10 bg-ink/60 p-8 text-snow backdrop-blur-xl sm:p-10">
            <p className="eyebrow text-silver">Care in every detail</p>
            <h2 id="care-title" className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              We measure success by what you notice when you get back in.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-snow/65">
              The crisp reflection on the bonnet. Spotless glass at sunset. A cabin that smells clean, not perfumed. It's
              the sum of hundreds of small, deliberate steps — and we don't skip any of them.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-4 border-t border-snow/10 pt-6 text-sm">
              {['60+ point checklist', 'Detailing-light inspection', 'Surface-specific products', 'Photo handover update'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-snow/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-silver" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Team & workshop */}
      <section className="section bg-white" aria-labelledby="team-title">
        <div className="container-site">
          <SectionHeading
            eyebrow="Inside the studio"
            title={<span id="team-title">The people and place behind the shine.</span>}
            description="A clean, well-lit workshop and a team that takes pride in their craft."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {team.map((t, i) => (
              <Reveal key={t.caption} delay={i * 0.08} className={t.span}>
                <figure className="group relative h-full overflow-hidden rounded-[24px] bg-mist">
                  <img src={t.image} alt={t.alt} loading="lazy" className={`img-zoom w-full object-cover ${t.aspect}`} />
                  <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-ink backdrop-blur">
                    {t.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-soft py-16 lg:py-20" aria-label="AutoGlow in numbers">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {siteConfig.stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
          <DemoBadge className="mt-10" label="Sample figures for demo" />
        </div>
      </section>

      <BookingCTA
        eyebrow="Experience it yourself"
        title="See the AutoGlow standard on your own car."
        secondary={{ label: 'Explore Our Services', to: '/services' }}
        image={images.galleryBlackPorsche}
      />
    </PageContainer>
  );
}
