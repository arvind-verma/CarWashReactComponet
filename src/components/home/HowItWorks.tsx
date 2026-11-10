import { motion } from 'framer-motion';
import { CalendarClock, KeyRound, ListChecks } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import Button from '../common/Button';
import { staggerChild, staggerParent } from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const steps = [
  {
    icon: ListChecks,
    title: 'Choose a Service',
    text: 'Pick from quick washes, interior detailing or full paint protection. Not sure? We will recommend the right fit.',
  },
  {
    icon: CalendarClock,
    title: 'Book Your Slot',
    text: 'Request a date and time online or on WhatsApp. Our team calls to confirm the slot and the final price.',
  },
  {
    icon: KeyRound,
    title: 'Drive Away Fresh',
    text: 'We inspect every panel before handover, so you collect a car that looks, feels and smells genuinely clean.',
  },
];

export default function HowItWorks() {
  const { openBooking } = useBooking();
  return (
    <section className="section bg-white" aria-labelledby="how-title">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={<span id="how-title">Three simple steps to a spotless car.</span>}
        />

        <motion.ol
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20"
        >
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-mist to-transparent md:block"
            aria-hidden
          />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <motion.li key={title} variants={staggerChild} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full border border-mist bg-white text-ink shadow-soft">
                  <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </span>
                <span className="absolute -right-3 -top-2 z-20 grid h-7 w-7 place-items-center rounded-full bg-ink font-display text-xs font-semibold text-snow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-steel">{text}</p>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-14 flex justify-center">
          <Button size="lg" onClick={() => openBooking()}>
            Book a Wash
          </Button>
        </div>
      </div>
    </section>
  );
}
