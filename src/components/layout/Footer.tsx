import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig, whatsappLink } from '../../data/siteConfig';
import { services } from '../../data/services';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-6 bg-ink pb-28 text-snow lg:pb-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-site">
        <div className="flex flex-col gap-8 border-b border-snow/10 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
          <p className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {siteConfig.brand.tagline.split('. ')[0]}.{' '}
            <span className="text-snow/40">{siteConfig.brand.tagline.split('. ')[1]}</span>
          </p>
          <Link
            to="/contact#enquiry"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-snow/20 py-3 pl-6 pr-3 text-[15px] font-medium transition-colors hover:border-snow hover:bg-snow hover:text-ink lg:self-auto"
          >
            Start an enquiry
            <span className="grid h-9 w-9 place-items-center rounded-full bg-snow text-ink transition-colors group-hover:bg-ink group-hover:text-snow">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-snow/55">{siteConfig.brand.shortDescription}</p>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Social media">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-full border border-snow/15 px-4 text-sm text-snow/70 transition-colors hover:border-snow hover:text-snow"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="eyebrow text-snow/40">Explore</h3>
            <ul className="mt-5 space-y-3">
              {siteConfig.nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[15px] text-snow/75 transition-colors hover:text-snow">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow text-snow/40">Popular services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/contact?service=${s.id}#enquiry`}
                    className="text-[15px] text-snow/75 transition-colors hover:text-snow"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-3">
            <div>
              <h3 className="eyebrow text-snow/40">Contact</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-snow/75">
                <li>
                  <a href={siteConfig.contact.phoneHref} className="flex items-center gap-3 hover:text-snow">
                    <Phone className="h-4 w-4 text-snow/40" aria-hidden />
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 break-all hover:text-snow">
                    <Mail className="h-4 w-4 shrink-0 text-snow/40" aria-hidden />
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-snow">
                    <MessageCircle className="h-4 w-4 text-snow/40" aria-hidden />
                    WhatsApp us
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-snow/40" aria-hidden />
                  <span>{siteConfig.contact.addressLines.slice(0, 2).join(', ')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow flex items-center gap-2 text-snow/40">
                <Clock className="h-3.5 w-3.5" aria-hidden /> Opening hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-snow/55">{h.days}</dt>
                    <dd className="text-snow/85">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-snow/10 py-8 text-sm text-snow/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brand.fullName}. Demo website template.
          </p>
          <p>Contact details, prices, statistics and reviews shown are sample content.</p>
        </div>
      </div>
    </footer>
  );
}
