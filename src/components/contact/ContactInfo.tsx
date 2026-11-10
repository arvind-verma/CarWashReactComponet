import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteConfig, whatsappLink } from '../../data/siteConfig';
import Button from '../common/Button';

export default function ContactInfo() {
  const { contact, hours, social } = siteConfig;
  const today = new Date().getDay(); // 0 = Sunday
  const todayIndex = today === 0 ? 2 : today === 6 ? 1 : 0;

  return (
    <div className="space-y-5">
      <div className="rounded-[24px] bg-ink p-7 text-snow sm:p-8">
        <p className="eyebrow text-silver">Talk to us</p>
        <ul className="mt-6 space-y-5">
          <li>
            <a href={contact.phoneHref} className="group flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-snow/15 transition-colors group-hover:bg-snow group-hover:text-ink">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs text-snow/50">Phone (placeholder)</span>
                <span className="font-medium">{contact.phoneDisplay}</span>
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-snow/15 transition-colors group-hover:bg-snow group-hover:text-ink">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-snow/50">Email (placeholder)</span>
                <span className="block break-all font-medium">{contact.email}</span>
              </span>
            </a>
          </li>
          <li className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-snow/15">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <address className="not-italic">
              <span className="block text-xs text-snow/50">Studio address (placeholder)</span>
              {contact.addressLines.map((l) => (
                <span key={l} className="block font-medium">
                  {l}
                </span>
              ))}
            </address>
          </li>
        </ul>
        <div className="mt-7 border-t border-snow/10 pt-7">
          <Button
            variant="light"
            fullWidth
            href={whatsappLink()}
            external
            icon={<MessageCircle className="h-4 w-4" />}
          >
            Chat on WhatsApp
          </Button>
          <p className="mt-3 text-center text-xs text-snow/45">Opens WhatsApp with a pre-filled message.</p>
        </div>
      </div>

      <div className="rounded-[24px] border border-mist bg-white p-7 sm:p-8">
        <h3 className="eyebrow flex items-center gap-2 text-steel">
          <Clock className="h-3.5 w-3.5" aria-hidden /> Opening hours
        </h3>
        <dl className="mt-5 divide-y divide-mist">
          {hours.map((h, i) => (
            <div key={h.days} className="flex items-center justify-between gap-4 py-3 text-[15px]">
              <dt className={i === todayIndex ? 'font-medium text-ink' : 'text-steel'}>
                {h.days}
                {i === todayIndex && (
                  <span className="ml-2 rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-snow">
                    Today
                  </span>
                )}
              </dt>
              <dd className={i === todayIndex ? 'font-medium text-ink' : 'text-body'}>{h.time}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="rounded-[24px] border border-mist bg-white p-7 sm:p-8">
        <h3 className="eyebrow text-steel">Follow us</h3>
        <ul className="mt-5 flex flex-wrap gap-2">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full border border-mist px-4 text-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-snow"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
