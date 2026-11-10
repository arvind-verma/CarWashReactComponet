import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export default function Logo({ tone = 'dark', onClick }: { tone?: 'dark' | 'light'; onClick?: () => void }) {
  const light = tone === 'light';
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-2.5"
      aria-label={`${siteConfig.brand.fullName} — home`}
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-[11px] transition-colors duration-300 ${
          light ? 'bg-snow text-ink' : 'bg-ink text-snow'
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 64 64" className="h-6 w-6">
          <path d="M14 42c4-9 10-14 18-14s14 5 18 14" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="22" cy="44" r="4.5" fill="currentColor" />
          <circle cx="42" cy="44" r="4.5" fill="currentColor" />
          <path d="M32 8l2.6 6.8L41.5 17.5l-6.9 2.6L32 27l-2.6-6.9-6.9-2.6 6.9-2.7z" fill="currentColor" />
        </svg>
      </span>
      <span className={`font-display text-[19px] font-semibold tracking-tight transition-colors duration-300 ${light ? 'text-snow' : 'text-ink'}`}>
        {siteConfig.brand.name}
        <span className={`ml-1 hidden font-normal sm:inline ${light ? 'text-snow/55' : 'text-steel'}`}>Car Care</span>
      </span>
    </Link>
  );
}
