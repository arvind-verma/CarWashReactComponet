import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { formatINR, type Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  index?: number;
  showIncludes?: boolean;
}

export default function ServiceCard({ service, index, showIncludes = false }: ServiceCardProps) {
  const { openBooking } = useBooking();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-mist bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="img-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
          {service.category}
        </span>
        {typeof index === 'number' && (
          <span className="absolute bottom-4 right-4 font-display text-sm font-medium text-snow/80">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-steel">{service.description}</p>

        {showIncludes && (
          <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-body/80 sm:grid-cols-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-steel" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-end justify-between border-t border-mist pt-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em] text-steel">From · demo price</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">{formatINR(service.price)}</p>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-steel">
              <Clock className="h-4 w-4" aria-hidden />
              {service.duration}
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => openBooking(service.id)}
              className="flex h-11 flex-1 items-center justify-center rounded-full bg-ink px-5 text-sm font-medium text-snow transition-colors hover:bg-charcoal"
              aria-label={`Book ${service.name}`}
            >
              Book This Service
            </motion.button>
            <Link
              to={`/contact?service=${service.id}#enquiry`}
              className="flex h-11 items-center gap-1 rounded-full border border-mist px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
              aria-label={`Enquire about ${service.name}`}
            >
              Enquire
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
