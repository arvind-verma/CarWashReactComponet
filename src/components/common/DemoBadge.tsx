import { Info } from 'lucide-react';

interface DemoBadgeProps {
  label?: string;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Small, honest label marking figures and content as sample/demo data. */
export default function DemoBadge({ label = 'Demo data', tone = 'light', className = '' }: DemoBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] ${
        tone === 'dark' ? 'border-snow/15 text-snow/60' : 'border-ink/10 text-steel'
      } ${className}`}
    >
      <Info className="h-3 w-3" aria-hidden />
      {label}
    </span>
  );
}
