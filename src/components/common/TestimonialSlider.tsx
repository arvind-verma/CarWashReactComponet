import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Testimonial } from '../../data/testimonials';
import StarRating from './StarRating';

interface TestimonialSliderProps {
  items: Testimonial[];
  tone?: 'light' | 'dark';
  interval?: number;
}

export default function TestimonialSlider({ items, tone = 'dark', interval = 7000 }: TestimonialSliderProps) {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const dark = tone === 'dark';

  const go = (delta: number) => setState(([i]) => [(i + delta + items.length) % items.length, delta]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => go(1), interval);
    return () => window.clearTimeout(t);
  }, [index, paused, interval]);

  const t = items[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[300px] sm:min-h-[260px]">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.figure
            key={t.id}
            custom={dir}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
          >
            <StarRating rating={t.rating} tone={tone} size={18} />
            <blockquote
              className={`mt-6 text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-[2.1rem] ${
                dark ? 'text-snow' : 'text-ink'
              }`}
            >
              “{t.quote}”
            </blockquote>
            <figcaption className={`mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${dark ? 'text-snow/55' : 'text-steel'}`}>
              <span className={`font-medium ${dark ? 'text-snow' : 'text-ink'}`}>{t.name}</span>
              <span aria-hidden>·</span>
              <span>{t.vehicle}</span>
              <span aria-hidden>·</span>
              <span>{t.service}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className="group grid h-6 place-items-center"
            >
              <span
                className={`block h-1 rounded-full transition-all duration-500 ${
                  i === index ? `w-8 ${dark ? 'bg-snow' : 'bg-ink'}` : `w-3 ${dark ? 'bg-snow/25 group-hover:bg-snow/50' : 'bg-mist group-hover:bg-steel'}`
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Resume auto-play' : 'Pause auto-play'}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors ${dark ? 'text-snow/60 hover:text-snow' : 'text-steel hover:text-ink'}`}
          >
            {paused ? <Play className="h-4 w-4" aria-hidden /> : <Pause className="h-4 w-4" aria-hidden />}
          </button>
          {[
            { d: -1, Icon: ArrowLeft, label: 'Previous testimonial' },
            { d: 1, Icon: ArrowRight, label: 'Next testimonial' },
          ].map(({ d, Icon, label }) => (
            <motion.button
              key={label}
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => go(d)}
              aria-label={label}
              className={`grid h-12 w-12 place-items-center rounded-full border transition-colors ${
                dark
                  ? 'border-snow/20 text-snow hover:border-snow hover:bg-snow hover:text-ink'
                  : 'border-mist text-ink hover:border-ink hover:bg-ink hover:text-snow'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
