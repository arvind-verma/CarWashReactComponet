import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <Reveal className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''} ${dark ? 'text-silver' : 'text-steel'}`}>
          <span className={`h-px w-8 ${dark ? 'bg-silver/50' : 'bg-steel/50'}`} aria-hidden />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-balance text-[2rem] font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem] ${dark ? 'text-snow' : 'text-ink'}`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-snow/65' : 'text-steel'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
