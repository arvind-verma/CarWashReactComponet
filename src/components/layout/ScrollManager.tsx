import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smoothly scrolls to an in-page anchor when the URL has a hash
 * (e.g. /contact#enquiry). Scroll-to-top between pages is handled in App
 * once the outgoing page transition completes.
 */
export default function ScrollManager() {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    if (!hash) return;
    let tries = 0;
    let timer = 0;
    const seek = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries++ < 20) {
        timer = window.setTimeout(seek, 60);
      }
    };
    timer = window.setTimeout(seek, 450);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, search]);

  return null;
}
