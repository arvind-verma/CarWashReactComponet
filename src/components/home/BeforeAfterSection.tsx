import { motion } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import { images } from '../../data/images';
import DemoBadge from '../common/DemoBadge';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';

const points = [
  { k: 'Swirl marks', v: 'Machine-polished out' },
  { k: 'Water spots', v: 'Chemically decontaminated' },
  { k: 'Gloss level', v: 'Restored & sealed' },
];

/**
 * Drag / keyboard comparison slider.
 * The "before" side is a simulated treatment of the same photo for demo purposes —
 * replace with real before/after shots of your work.
 */
export default function BeforeAfterSection() {
  const [pos, setPos] = useState(52);
  const boxRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(97, Math.max(3, pct)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => dragging.current && update(e.clientX);
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(3, p - 4));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(97, p + 4));
    if (e.key === 'Home') setPos(3);
    if (e.key === 'End') setPos(97);
  };

  return (
    <section className="section bg-soft" aria-labelledby="ba-title">
      <div className="container-site">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The AutoGlow difference"
            title={<span id="ba-title">See what a proper detail does.</span>}
          />
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-steel lg:ml-auto">
              Drag the handle to compare. Paint correction removes the dull, hazy layer that everyday washing leaves
              behind — revealing the depth and reflection underneath.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12 lg:mt-16">
          <div
            ref={boxRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% showing after`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onKeyDown={onKey}
            className="relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[28px] bg-ink sm:aspect-[16/9] lg:aspect-[21/9]"
          >
            {/* After (full) */}
            <img
              src={images.beforeAfterAudi}
              alt="After detailing: black Audi with deep, glossy reflective paint"
              draggable={false}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Before (clipped) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img
                src={images.beforeAfterAudi}
                alt="Before detailing: the same car looking dull and dusty"
                draggable={false}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: 'grayscale(.7) sepia(.35) contrast(.72) brightness(.88) blur(.6px)' }}
              />
              <div
                className="absolute inset-0 opacity-60 mix-blend-multiply"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(120,100,80,.35) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(120,100,80,.3) 0 1.5px, transparent 2.5px), radial-gradient(circle at 40% 80%, rgba(110,95,75,.3) 0 1px, transparent 2px)',
                  backgroundSize: '38px 38px, 27px 27px, 19px 19px',
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-[#8a7d6a]/20" aria-hidden />
            </div>

            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-snow backdrop-blur sm:left-6 sm:top-6">
              Before
            </span>
            <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-snow/90 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-ink backdrop-blur sm:right-6 sm:top-6">
              After
            </span>

            {/* Handle */}
            <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }} aria-hidden>
              <div className="absolute inset-y-0 -translate-x-1/2 border-l-2 border-snow/90" />
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="absolute top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-snow text-ink shadow-lift"
              >
                <MoveHorizontal className="h-5 w-5" />
              </motion.div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-12">
            {points.map((p) => (
              <div key={p.k}>
                <dt className="text-sm text-steel">{p.k}</dt>
                <dd className="mt-1 font-display text-lg font-medium text-ink">{p.v}</dd>
              </div>
            ))}
          </dl>
          <DemoBadge label="Illustrative before/after" />
        </div>
      </div>
    </section>
  );
}
