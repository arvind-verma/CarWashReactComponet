import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { siteConfig } from '../../data/siteConfig';
import { useScrolled } from '../../hooks/useScrolled';
import Button from '../common/Button';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  // Every page opens on a dark hero, so the header starts light-on-dark.
  const solid = scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          solid
            ? 'border-b border-mist/80 bg-white/85 shadow-[0_8px_30px_-20px_rgba(16,17,20,.35)] backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Logo tone={solid ? 'dark' : 'light'} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative block rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${
                        solid
                          ? isActive
                            ? 'text-ink'
                            : 'text-steel hover:text-ink'
                          : isActive
                            ? 'text-snow'
                            : 'text-snow/65 hover:text-snow'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className={`absolute inset-x-4 -bottom-0.5 h-px ${solid ? 'bg-ink' : 'bg-snow'}`}
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.contact.phoneHref}
              className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors xl:flex ${
                solid ? 'text-steel hover:text-ink' : 'text-snow/70 hover:text-snow'
              }`}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.contact.phoneDisplay}
            </a>
            <div className="hidden sm:block">
              <Button size="sm" variant={solid ? 'primary' : 'light'} onClick={() => openBooking()}>
                Book a Wash
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                solid ? 'border-mist text-ink hover:border-ink' : 'border-snow/20 text-snow hover:border-snow/60'
              }`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
