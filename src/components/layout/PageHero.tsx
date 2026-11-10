import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  crumb: string;
  children?: ReactNode;
  /** Layout flavour so each page's banner feels distinct. */
  layout?: 'split' | 'bottom' | 'center';
  imagePosition?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumb,
  children,
  layout = 'bottom',
  imagePosition = 'center',
}: PageHeroProps) {
  const center = layout === 'center';
  return (
    <section className="relative isolate overflow-hidden bg-ink text-snow">
      <motion.img
        src={image}
        alt={imageAlt}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease }}
        style={{ objectPosition: imagePosition }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className={`absolute inset-0 -z-10 ${
          layout === 'split'
            ? 'bg-gradient-to-r from-ink via-ink/80 to-ink/10'
            : center
              ? 'bg-ink/70'
              : 'bg-gradient-to-t from-ink via-ink/60 to-ink/30'
        }`}
        aria-hidden
      />

      <div
        className={`container-site flex min-h-[78svh] flex-col pb-14 pt-32 sm:min-h-[70vh] lg:pb-20 lg:pt-40 ${
          center ? 'items-center justify-center text-center' : 'justify-end'
        }`}
      >
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-snow/55">
            <li>
              <Link to="/" className="hover:text-snow">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-snow">
              {crumb}
            </li>
          </ol>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="eyebrow text-silver"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease }}
          className={`mt-5 text-balance text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl ${
            center ? 'max-w-4xl' : 'max-w-3xl'
          }`}
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className={`mt-6 text-base leading-relaxed text-snow/70 sm:text-lg ${center ? 'max-w-xl' : 'max-w-xl'}`}
        >
          {description}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-10 w-full"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
