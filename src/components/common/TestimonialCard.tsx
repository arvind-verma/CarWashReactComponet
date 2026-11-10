import { Quote } from 'lucide-react';
import type { Testimonial } from '../../data/testimonials';
import StarRating from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
  tone?: 'light' | 'dark';
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function TestimonialCard({ testimonial, tone = 'light' }: TestimonialCardProps) {
  const dark = tone === 'dark';
  return (
    <article
      className={`flex h-full flex-col rounded-[22px] border p-7 transition-colors duration-300 ${
        dark
          ? 'border-snow/10 bg-charcoal/60 hover:border-snow/25'
          : 'border-mist bg-white shadow-soft hover:border-ink/20'
      }`}
    >
      <div className="flex items-center justify-between">
        <StarRating rating={testimonial.rating} tone={tone} />
        <Quote className={`h-6 w-6 ${dark ? 'text-snow/20' : 'text-mist'}`} aria-hidden />
      </div>
      <blockquote className={`mt-5 flex-1 text-[15px] leading-relaxed ${dark ? 'text-snow/80' : 'text-body/85'}`}>
        “{testimonial.quote}”
      </blockquote>
      <footer className={`mt-7 flex items-center gap-3.5 border-t pt-5 ${dark ? 'border-snow/10' : 'border-mist'}`}>
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-semibold ${
            dark ? 'bg-snow text-ink' : 'bg-ink text-snow'
          }`}
          aria-hidden
        >
          {initials(testimonial.name)}
        </span>
        <div className="min-w-0">
          <p className={`font-medium ${dark ? 'text-snow' : 'text-ink'}`}>
            {testimonial.name} <span className={`font-normal ${dark ? 'text-snow/50' : 'text-steel'}`}>· {testimonial.location}</span>
          </p>
          <p className={`truncate text-sm ${dark ? 'text-snow/50' : 'text-steel'}`}>
            {testimonial.vehicle} · {testimonial.service}
          </p>
        </div>
      </footer>
    </article>
  );
}
