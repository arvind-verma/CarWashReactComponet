import { motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { siteConfig } from '../../data/siteConfig';

interface PageContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
}

/** Wraps each route with a page transition and sets the document title/description. */
export default function PageContainer({ title, description, children }: PageContainerProps) {
  useEffect(() => {
    document.title = `${title} — ${siteConfig.brand.fullName}`;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
