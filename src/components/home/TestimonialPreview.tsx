import { ArrowRight } from 'lucide-react';
import { images } from '../../data/images';
import { ratingSummary, testimonials } from '../../data/testimonials';
import Button from '../common/Button';
import DemoBadge from '../common/DemoBadge';
import Reveal from '../common/Reveal';
import StarRating from '../common/StarRating';
import TestimonialSlider from '../common/TestimonialSlider';

export default function TestimonialPreview() {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 lg:px-10" aria-labelledby="tp-title">
      <div className="mx-auto grid max-w-site overflow-hidden rounded-[28px] bg-ink text-snow lg:grid-cols-12">
        <div className="relative min-h-[280px] lg:col-span-5 lg:min-h-full">
          <img
            src={images.testimonialFeatured}
            alt="Freshly detailed grey luxury saloon parked by the waterfront"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink" aria-hidden />
          <div className="absolute bottom-6 left-6 rounded-2xl border border-snow/10 bg-ink/60 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <p className="font-display text-3xl font-semibold">{ratingSummary.average}</p>
              <div>
                <StarRating rating={ratingSummary.average} tone="dark" size={14} />
                <p className="mt-1 text-xs text-snow/60">
                  {ratingSummary.totalReviews.toLocaleString('en-IN')}+ sample reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-14 sm:px-12 sm:py-16 lg:col-span-7 lg:px-16 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p id="tp-title" className="eyebrow text-silver">
                What drivers say
              </p>
              <DemoBadge label="Sample reviews" tone="dark" />
            </div>
          </Reveal>
          <div className="mt-8">
            <TestimonialSlider items={testimonials.slice(0, 5)} />
          </div>
          <div className="mt-10 border-t border-snow/10 pt-8">
            <Button to="/testimonials" variant="outline-light" icon={<ArrowRight className="h-4 w-4" />}>
              Read more reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
