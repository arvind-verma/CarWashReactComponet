import { MapPin, MessageCircle, Navigation } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/common/Button';
import FAQAccordion from '../components/common/FAQAccordion';
import Reveal from '../components/common/Reveal';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import PageContainer from '../components/layout/PageContainer';
import PageHero from '../components/layout/PageHero';
import { faqs } from '../data/faqs';
import { images } from '../data/images';
import { getServiceById, packages } from '../data/services';
import { siteConfig, whatsappLink } from '../data/siteConfig';

export default function Contact() {
  const [params] = useSearchParams();
  const serviceId = params.get('service');
  const pkg = packages.find((p) => p.id === params.get('package'));
  const selected = getServiceById(serviceId);
  const initialMessage = pkg ? `I'm interested in the ${pkg.name} package.` : undefined;

  return (
    <PageContainer
      title="Contact Us"
      description="Book a car wash or detailing appointment with AutoGlow Car Care. Demo enquiry form, opening hours and FAQs."
    >
      <PageHero
        layout="split"
        eyebrow="Contact & booking"
        crumb="Contact Us"
        title={
          <>
            Let's get your car <span className="text-snow/45">looking its best.</span>
          </>
        }
        description="Send an enquiry, call or message us on WhatsApp. We'll confirm your slot and price before anything begins."
        image={images.contactHeroGarage}
        imageAlt="Dark muscle car with glowing tail lights inside a moody garage"
        imagePosition="65% center"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#enquiry" variant="light" size="lg">
            Send an enquiry
          </Button>
          <Button href={whatsappLink()} external variant="outline-light" size="lg" icon={<MessageCircle className="h-4 w-4" />}>
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      {/* Form + info */}
      <section className="section bg-soft" aria-labelledby="enquiry-title">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7 xl:col-span-8">
            <div id="enquiry" className="scroll-mt-28 rounded-[28px] border border-mist bg-white p-6 shadow-soft sm:p-10 lg:p-12">
              <p className="eyebrow text-steel">Booking enquiry</p>
              <h2 id="enquiry-title" className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
                Request your slot
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-steel">
                Fill in the details below and our team will call you back to confirm availability.
              </p>
              {(selected || pkg) && (
                <p className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full bg-soft px-4 py-2 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden />
                  Selected: <strong className="font-medium">{selected?.name ?? `${pkg?.name} package`}</strong>
                </p>
              )}
              <div className="mt-8 border-t border-mist pt-8">
                <ContactForm initialService={serviceId} initialMessage={initialMessage} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-28">
              <ContactInfo />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-soft pb-20 sm:pb-24 lg:pb-32" aria-labelledby="map-title">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-mist bg-mist">
              {siteConfig.contact.mapEmbedUrl ? (
                <iframe
                  title="Map showing AutoGlow studio location"
                  src={siteConfig.contact.mapEmbedUrl}
                  className="h-[420px] w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative h-[380px] sm:h-[440px]" role="img" aria-label="Map placeholder — replace with your map embed">
                  {/* Stylised map grid */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
                    <defs>
                      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                        <path d="M48 0H0V48" fill="none" stroke="#D5D7DA" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="#ECEDEF" />
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <path d="M-20 300 C 200 260, 380 340, 620 250 S 1100 180, 1600 260" stroke="#fff" strokeWidth="22" fill="none" />
                    <path d="M420 -20 C 460 120, 400 260, 470 480" stroke="#fff" strokeWidth="16" fill="none" />
                    <path d="M900 -20 C 860 160, 980 300, 940 480" stroke="#fff" strokeWidth="12" fill="none" />
                  </svg>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                    <span className="absolute left-1/2 top-full h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-ink/10" aria-hidden />
                    <span className="relative grid h-14 w-14 place-items-center rounded-full bg-ink text-snow shadow-lift">
                      <MapPin className="h-6 w-6" aria-hidden />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 rounded-2xl bg-white/95 p-5 shadow-soft backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm">
                    <div>
                      <p id="map-title" className="font-display text-lg font-semibold text-ink">
                        {siteConfig.brand.fullName} Studio
                      </p>
                      <p className="mt-1 text-sm text-steel">{siteConfig.contact.addressLines.join(', ')}</p>
                    </div>
                    <p className="flex items-center gap-2 rounded-xl bg-soft px-3 py-2 text-xs text-steel">
                      <Navigation className="h-3.5 w-3.5" aria-hidden />
                      Map embed area — add your Google Maps URL in siteConfig.ts
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-title">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title={<span id="faq-title">Questions, answered.</span>}
                description="Can't find what you're looking for? Message us and we'll get back to you."
              />
              <Reveal delay={0.1} className="mt-8">
                <Button href={whatsappLink('Hi AutoGlow, I have a question.')} external variant="outline" icon={<MessageCircle className="h-4 w-4" />}>
                  Ask on WhatsApp
                </Button>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>
    </PageContainer>
  );
}
