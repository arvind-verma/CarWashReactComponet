import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { siteConfig, whatsappLink } from '../../data/siteConfig';
import { useScrolled } from '../../hooks/useScrolled';

/** Thumb-friendly booking bar on phones and tablets, shown after the hero. */
export default function StickyMobileCTA() {
  const visible = useScrolled(520);
  const { openBooking, isOpen } = useBooking();

  return (
    <AnimatePresence>
      {visible && !isOpen && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-mist bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-xl items-center gap-2">
            <a
              href={siteConfig.contact.phoneHref}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-mist text-ink"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" aria-hidden />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-mist text-ink"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => openBooking()}
              className="h-12 flex-1 rounded-full bg-ink text-[15px] font-medium text-snow"
            >
              Book a Wash
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
