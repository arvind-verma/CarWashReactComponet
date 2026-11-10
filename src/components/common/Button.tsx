import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { MouseEventHandler, ReactNode } from 'react';

type Variant = 'primary' | 'light' | 'outline' | 'outline-light' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  /** Internal route — renders a router Link. */
  to?: string;
  /** External URL / tel: / mailto: — renders an anchor. */
  href?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  'aria-label'?: string;
}

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-snow hover:bg-charcoal shadow-[0_10px_30px_-12px_rgba(16,17,20,.6)]',
  light: 'bg-snow text-ink hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,.5)]',
  outline: 'border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-snow',
  'outline-light': 'border border-snow/30 text-snow hover:border-snow hover:bg-snow hover:text-ink',
  ghost: 'text-ink hover:bg-soft',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-[15px] sm:px-8 sm:text-base',
};

const MotionLink = motion.create(Link);

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 25 },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  fullWidth,
  to,
  href,
  external,
  type = 'button',
  disabled,
  onClick,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = [
    'group/btn relative inline-flex select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium',
    'transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ');

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden>
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <MotionLink to={to} onClick={onClick} aria-label={ariaLabel} className={classes} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
