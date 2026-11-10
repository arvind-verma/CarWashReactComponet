import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  tone?: 'light' | 'dark';
}

export default function StarRating({ rating, size = 16, tone = 'light' }: StarRatingProps) {
  const filled = tone === 'dark' ? 'fill-snow text-snow' : 'fill-ink text-ink';
  const empty = tone === 'dark' ? 'text-snow/25' : 'text-mist';
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i < Math.round(rating) ? filled : empty}
          strokeWidth={1.5}
          aria-hidden
        />
      ))}
    </div>
  );
}
