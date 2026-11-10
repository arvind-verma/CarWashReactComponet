import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { images } from '../../data/images';
import { siteConfig } from '../../data/siteConfig';
import Button from '../common/Button';

const ease = [0.22, 1, 0.36, 1] as const;

const headline = ['A Cleaner Car.', 'A Better Drive.'];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-snow">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-10">
        <motion.img
          src={images.heroDarkCar}
          alt="Glossy black performance car emerging from darkness under studio lighting"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
          className="h-full w-full object-cover object-[62%_center] lg:object-center"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/5" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/50" aria-hidden />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="container-site flex min-h-[100svh] flex-col justify-end pb-10 pt-32 lg:justify-center lg:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="eyebrow flex items-center gap-3 text-silver"
        >
          <span className="h-px w-10 bg-silver/60" aria-hidden />
          Premium car wash &amp; detailing studio
        </motion.p>

        <h1 className="mt-6 font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[6.4rem]">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? 'text-snow/45' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 + i * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease }}
          className="mt-7 max-w-lg text-base leading-relaxed text-snow/70 sm:text-lg"
        >
          Professional hand washing, interior detailing, paint correction and ceramic protection — performed by trained
          specialists with premium products, so your car looks and feels as good as the day you bought it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button variant="light" size="lg" icon={<ArrowRight className="h-4 w-4" />} onClick={() => openBooking()}>
            Book a Wash
          </Button>
          <Button variant="outline-light" size="lg" to="/services">
            Explore Our Services
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="mt-12 grid max-w-2xl grid-cols-1 gap-4 border-t border-snow/15 pt-6 text-sm text-snow/65 sm:grid-cols-3 lg:mt-16"
        >
          {[
            { icon: Droplets, text: 'pH-neutral, paint-safe wash' },
            { icon: ShieldCheck, text: 'Trained detailing team' },
            { icon: Clock, text: `Open daily · ${siteConfig.hours[0].time.split(' – ')[0]} onwards` },
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 shrink-0 text-silver" aria-hidden />
              {text}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Floating detail card — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2, ease }}
        className="absolute bottom-24 right-10 hidden w-72 rounded-2xl border border-snow/10 bg-ink/50 p-5 backdrop-blur-xl xl:block"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-snow text-ink">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-medium">Signature Detail</p>
            <p className="text-xs text-snow/55">Wash · Interior · Engine bay</p>
          </div>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-snow/10 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-snow/45">From (demo)</p>
            <p className="font-display text-2xl font-semibold">₹4,499</p>
          </div>
          <Link
            to="/services#packages"
            className="rounded-full border border-snow/25 px-4 py-2 text-xs font-medium transition-colors hover:bg-snow hover:text-ink"
          >
            View package
          </Link>
        </div>
      </motion.div>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-snow/50 hover:text-snow lg:flex"
        aria-label="Scroll to content"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
