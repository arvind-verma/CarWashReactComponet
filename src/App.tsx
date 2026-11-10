import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollManager from './components/layout/ScrollManager';
import StickyMobileCTA from './components/layout/StickyMobileCTA';
import BackToTop from './components/common/BackToTop';
import OfflineBanner from './components/common/OfflineBanner';
import BookingModal from './components/common/BookingModal';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <MotionConfig reducedMotion="user">
      <BookingProvider>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 text-snow focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ScrollManager />
        <Header />
        <main id="main">
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => {
              if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
            }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <StickyMobileCTA />
        <BackToTop />
        <OfflineBanner />
        <BookingModal />
      </BookingProvider>
    </MotionConfig>
  );
}
