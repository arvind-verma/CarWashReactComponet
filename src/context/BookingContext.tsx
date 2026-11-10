import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

interface BookingContextValue {
  isOpen: boolean;
  serviceId: string | null;
  openBooking: (serviceId?: string | null) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);

  const openBooking = useCallback((id: string | null = null) => {
    setServiceId(id);
    setIsOpen(true);
  }, []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, serviceId, openBooking, closeBooking }),
    [isOpen, serviceId, openBooking, closeBooking],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>');
  return ctx;
}
