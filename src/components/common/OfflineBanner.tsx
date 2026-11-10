import { AnimatePresence, motion } from 'framer-motion';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';

export default function OfflineBanner() {
  const online = useOnlineStatus();
  return (
    <AnimatePresence>
      {!online && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed left-1/2 top-20 z-[60] flex w-[calc(100%-2rem)] max-w-md -translate-x-1/2 items-start gap-3 rounded-2xl bg-charcoal px-5 py-4 text-sm text-snow shadow-lift"
        >
          <WifiOff className="mt-0.5 h-4 w-4 shrink-0 text-silver" aria-hidden />
          <p>
            You're offline. Pages you've visited are still available, but enquiries can't be sent until you
            reconnect.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
