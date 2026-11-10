import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  tone?: 'light' | 'dark';
  className?: string;
}

const fmt = (n: number) => new Intl.NumberFormat('en-IN').format(Math.round(n));

/** Number that counts up once when scrolled into view. */
export default function StatItem({ value, suffix = '', label, tone = 'light', className = '' }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  const dark = tone === 'dark';
  return (
    <div ref={ref} className={className}>
      <p
        className={`font-display text-4xl font-semibold tabular-nums tracking-tight sm:text-5xl ${dark ? 'text-snow' : 'text-ink'}`}
        aria-label={`${fmt(value)}${suffix}`}
      >
        {fmt(display)}
        <span className={dark ? 'text-silver' : 'text-steel'}>{suffix}</span>
      </p>
      <p className={`mt-2 text-sm ${dark ? 'text-snow/60' : 'text-steel'}`}>{label}</p>
    </div>
  );
}
