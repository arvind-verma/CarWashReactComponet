import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Phone, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { siteConfig, whatsappLink } from '../../data/siteConfig';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import Button from '../common/Button';
import Logo from './Logo';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { pathname } = useLocation();
  const { openBooking } = useBooking();
  const panelRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    onClose();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>('button')?.focus(), 60);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="container-site flex h-[72px] items-center justify-between">
            <Logo tone="light" onClick={onClose} />
            <button
              type="button"
              onClick={onClose}
              className="grid h-11 w-11 place-items-center rounded-full border border-snow/20 text-snow"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto pt-8">
            <ul>
              {siteConfig.nav.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-snow/10"
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-5 font-display text-[2rem] font-medium tracking-tight transition-colors ${
                        isActive ? 'text-snow' : 'text-snow/45 hover:text-snow'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-baseline gap-4">
                          <span className="font-sans text-xs text-snow/35">0{i + 1}</span>
                          {item.label}
                        </span>
                        <ArrowUpRight className={`h-5 w-5 ${isActive ? 'opacity-100' : 'opacity-30'}`} aria-hidden />
                      </>
                    )}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="container-site space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6"
          >
            <Button
              variant="light"
              size="lg"
              fullWidth
              onClick={() => {
                onClose();
                openBooking();
              }}
            >
              Book a Wash
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline-light" href={siteConfig.contact.phoneHref} icon={<Phone className="h-4 w-4" />}>
                Call
              </Button>
              <Button variant="outline-light" href={whatsappLink()} external icon={<MessageCircle className="h-4 w-4" />}>
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
