import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { siteConfig } from '../../data/siteConfig';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import ContactForm from '../contact/ContactForm';

export default function BookingModal() {
  const { isOpen, serviceId, closeBooking } = useBooking();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();
  useLockBodyScroll(isOpen);

  // Close on route change.
  useEffect(() => {
    closeBooking();
  }, [pathname, closeBooking]);

  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement as HTMLElement;
    const t = window.setTimeout(() => dialogRef.current?.querySelector<HTMLElement>('input, select, button')?.focus(), 80);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBooking();
      if (e.key === 'Tab' && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      lastFocused.current?.focus?.();
    };
  }, [isOpen, closeBooking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={closeBooking} aria-hidden />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-[28px] bg-white px-5 pb-8 pt-6 shadow-lift sm:rounded-[28px] sm:p-9"
          >
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-mist sm:hidden" aria-hidden />
            <div className="mb-7 flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-steel">{siteConfig.brand.fullName}</p>
                <h2 id="booking-title" className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
                  Book a Wash
                </h2>
                <p className="mt-2 text-sm text-steel">Request a slot — our team will call to confirm.</p>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-mist text-ink transition-colors hover:border-ink hover:bg-ink hover:text-snow"
                aria-label="Close booking form"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ContactForm compact initialService={serviceId} onDone={closeBooking} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
