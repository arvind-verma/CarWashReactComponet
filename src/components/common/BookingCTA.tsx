import { ArrowRight, MessageCircle } from 'lucide-react';
import { useBooking } from '../../context/BookingContext';
import { images } from '../../data/images';
import { whatsappLink } from '../../data/siteConfig';
import Button from './Button';
import Reveal from './Reveal';

interface BookingCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  image?: string;
  secondary?: { label: string; to: string };
}

export default function BookingCTA({
  eyebrow = 'Ready when you are',
  title = 'Give your car the care it deserves.',
  description = 'Choose a service, pick a time that suits you, and leave the rest to our detailing team.',
  image = images.ctaBlack911,
  secondary,
}: BookingCTAProps) {
  const { openBooking } = useBooking();
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-10 lg:py-10" aria-labelledby="cta-title">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[28px] bg-ink">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[35%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" aria-hidden />
        <Reveal className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28">
          <p className="eyebrow text-silver">{eyebrow}</p>
          <h2 id="cta-title" className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-[1.05] text-snow sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-snow/70 sm:text-lg">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="light" size="lg" icon={<ArrowRight className="h-4 w-4" />} onClick={() => openBooking()}>
              Book a Wash
            </Button>
            {secondary ? (
              <Button variant="outline-light" size="lg" to={secondary.to}>
                {secondary.label}
              </Button>
            ) : (
              <Button
                variant="outline-light"
                size="lg"
                href={whatsappLink()}
                external
                icon={<MessageCircle className="h-4 w-4" />}
              >
                Chat on WhatsApp
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
