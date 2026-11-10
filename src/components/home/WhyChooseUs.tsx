import { motion } from 'framer-motion';
import { Award, CalendarCheck, FlaskConical, UserCheck } from 'lucide-react';
import { images } from '../../data/images';
import Reveal, { staggerChild, staggerParent } from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const reasons = [
  {
    icon: Award,
    title: 'Uncompromising quality',
    text: 'A documented, multi-stage process for every service — and a final inspection under detailing lights before handover.',
  },
  {
    icon: UserCheck,
    title: 'Trained specialists',
    text: 'Our team is trained in paint-safe wash methods, machine polishing and coating application — not just a bucket and sponge.',
  },
  {
    icon: FlaskConical,
    title: 'Premium products',
    text: 'pH-neutral shampoos, dedicated leather and fabric care, and professional-grade coatings matched to each surface.',
  },
  {
    icon: CalendarCheck,
    title: 'Convenient service',
    text: 'Easy slot booking, clear timelines, honest pricing up front, and a call or message the moment your car is ready.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-ink text-snow" aria-labelledby="why-title">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tone="dark"
              eyebrow="Why choose AutoGlow"
              title={<span id="why-title">Details others miss are the ones we start with.</span>}
              description="We treat every vehicle as if it were our own — with patience, the right tools, and a process you can trust."
            />
            <Reveal delay={0.15} className="mt-10">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[24px] lg:aspect-[5/4]">
                <img
                  src={images.workshopTeam}
                  alt="Two technicians working together on a car's engine bay"
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden />
                <p className="absolute bottom-5 left-5 right-5 text-sm text-snow/80">
                  Every technician completes in-house training before working on customer vehicles.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="grid gap-px self-start overflow-hidden rounded-[24px] bg-snow/10 sm:grid-cols-2 lg:col-span-7"
        >
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <motion.li
              key={title}
              variants={staggerChild}
              className="group flex flex-col bg-ink p-8 transition-colors duration-500 hover:bg-charcoal sm:min-h-[300px] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-snow/15 text-snow transition-colors duration-500 group-hover:border-snow/40">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="font-display text-sm text-snow/30">0{i + 1}</span>
              </div>
              <h3 className="mt-auto pt-10 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-snow/60">{text}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
