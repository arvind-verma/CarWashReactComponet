import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, WifiOff } from 'lucide-react';
import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { formatINR, getServiceById, services } from '../../data/services';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import Button from '../common/Button';

export const vehicleTypes = ['Hatchback', 'Sedan', 'SUV / MUV', 'Luxury / Premium', 'Pickup / Other'];
export const timeSlots = [
  '08:00 – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 – 02:00 PM',
  '02:00 – 04:00 PM',
  '04:00 – 06:00 PM',
  '06:00 – 08:00 PM',
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

const emptyValues = (service = ''): FormValues => ({
  name: '',
  email: '',
  phone: '',
  vehicle: '',
  service,
  date: '',
  time: '',
  message: '',
});

function validate(v: FormValues, compact: boolean): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!compact || v.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  }
  const digits = v.phone.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) e.phone = 'Please enter a valid 10-digit mobile number.';
  if (!v.vehicle) e.vehicle = 'Please select your vehicle type.';
  if (!v.service) e.service = 'Please choose a service.';
  if (!v.date) e.date = 'Please pick a preferred date.';
  else if (v.date < todayISO()) e.date = 'Please choose today or a future date.';
  if (!v.time) e.time = 'Please pick a preferred time slot.';
  if (v.message.length > 600) e.message = 'Please keep your message under 600 characters.';
  return e;
}

interface ContactFormProps {
  initialService?: string | null;
  /** Prefills the message field, e.g. when arriving from a package CTA. */
  initialMessage?: string;
  /** Compact layout used inside the booking modal (email and message optional). */
  compact?: boolean;
  onDone?: () => void;
}

export default function ContactForm({ initialService, initialMessage, compact = false, onDone }: ContactFormProps) {
  const uid = useId();
  const online = useOnlineStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(() => emptyValues(getServiceById(initialService)?.id ?? ''));
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  // Keep the selected service in sync when the user arrives via a service CTA.
  useEffect(() => {
    const match = getServiceById(initialService);
    if (match) setValues((v) => ({ ...v, service: match.id }));
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) setValues((v) => ({ ...v, message: initialMessage }));
  }, [initialMessage]);

  const id = (name: keyof FormValues) => `${uid}-${name}`;

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name as keyof FormValues;
    const next = { ...values, [name]: e.target.value };
    setValues(next);
    if (touched[name]) setErrors((prev) => ({ ...prev, [name]: validate(next, compact)[name] }));
  };

  const onBlur = (e: { target: { name: string } }) => {
    const name = e.target.name as keyof FormValues;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values, compact)[name] }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values, compact);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    const firstError = Object.keys(found)[0];
    if (firstError) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    // Frontend demo only — replace this timeout with a real API / form-service call.
    window.setTimeout(() => {
      setSubmitted(values);
      setStatus('success');
    }, 1100);
  };

  const reset = () => {
    setValues(emptyValues());
    setErrors({});
    setTouched({});
    setSubmitted(null);
    setStatus('idle');
  };

  const fieldClass = (name: keyof FormValues) => `field ${errors[name] ? 'field-error' : ''}`;

  const ErrorText = ({ name }: { name: keyof FormValues }) =>
    errors[name] ? (
      <p id={`${id(name)}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-800">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {errors[name]}
      </p>
    ) : null;

  const a11y = (name: keyof FormValues) => ({
    id: id(name),
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${id(name)}-error` : undefined,
    className: fieldClass(name),
  });

  if (status === 'success' && submitted) {
    const svc = getServiceById(submitted.service);
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        aria-live="polite"
        className="flex flex-col items-start"
      >
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
          className="grid h-14 w-14 place-items-center rounded-full bg-ink text-snow"
        >
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </motion.span>
        <h3 className="mt-6 text-2xl font-semibold text-ink sm:text-3xl">Thanks, {submitted.name.split(' ')[0]}.</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-steel">
          Your enquiry details were captured successfully in this demo.
        </p>

        <dl className="mt-6 grid w-full grid-cols-2 gap-x-6 gap-y-4 rounded-2xl bg-soft p-5 text-sm">
          <div className="col-span-2">
            <dt className="text-steel">Service</dt>
            <dd className="mt-0.5 font-medium text-ink">
              {svc?.name} {svc && <span className="font-normal text-steel">· from {formatINR(svc.price)} (demo)</span>}
            </dd>
          </div>
          <div>
            <dt className="text-steel">Vehicle</dt>
            <dd className="mt-0.5 font-medium text-ink">{submitted.vehicle}</dd>
          </div>
          <div>
            <dt className="text-steel">Preferred slot</dt>
            <dd className="mt-0.5 font-medium text-ink">
              {new Date(submitted.date + 'T00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })},{' '}
              {submitted.time}
            </dd>
          </div>
        </dl>

        <p className="mt-5 flex items-start gap-2 rounded-xl border border-mist px-4 py-3 text-[13px] leading-relaxed text-steel">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>
            <strong className="font-medium text-ink">Frontend demo:</strong> no booking has been confirmed and no message
            has been sent. Connect a backend or form service to receive real enquiries.
          </span>
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row">
          <Button onClick={reset} variant="outline">
            Send another enquiry
          </Button>
          {onDone && <Button onClick={onDone}>Close</Button>}
        </div>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Booking enquiry form">
      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label htmlFor={id('name')} className="field-label">
            Full name <span className="text-steel">*</span>
          </label>
          <input type="text" autoComplete="name" placeholder="Your name" {...a11y('name')} />
          <ErrorText name="name" />
        </div>

        <div className={compact ? 'grid gap-5 sm:grid-cols-2' : 'contents'}>
          <div>
            <label htmlFor={id('phone')} className="field-label">
              Mobile number <span className="text-steel">*</span>
            </label>
            <input type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" {...a11y('phone')} />
            <ErrorText name="phone" />
          </div>
          <div>
            <label htmlFor={id('email')} className="field-label">
              Email {compact ? <span className="font-normal text-steel">(optional)</span> : <span className="text-steel">*</span>}
            </label>
            <input type="email" inputMode="email" autoComplete="email" placeholder="you@email.com" {...a11y('email')} />
            <ErrorText name="email" />
          </div>
        </div>

        <div className={compact ? 'grid gap-5 sm:grid-cols-2' : 'contents'}>
          <div>
            <label htmlFor={id('vehicle')} className="field-label">
              Vehicle type <span className="text-steel">*</span>
            </label>
            <select {...a11y('vehicle')}>
              <option value="">Select vehicle</option>
              {vehicleTypes.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
            <ErrorText name="vehicle" />
          </div>
          <div>
            <label htmlFor={id('service')} className="field-label">
              Preferred service <span className="text-steel">*</span>
            </label>
            <select {...a11y('service')}>
              <option value="">Select service</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <ErrorText name="service" />
          </div>
        </div>

        <div className={compact ? 'grid gap-5 sm:grid-cols-2' : 'contents'}>
          <div>
            <label htmlFor={id('date')} className="field-label">
              Preferred date <span className="text-steel">*</span>
            </label>
            <input type="date" min={todayISO()} {...a11y('date')} />
            <ErrorText name="date" />
          </div>
          <div>
            <label htmlFor={id('time')} className="field-label">
              Preferred time <span className="text-steel">*</span>
            </label>
            <select {...a11y('time')}>
              <option value="">Select time slot</option>
              {timeSlots.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <ErrorText name="time" />
          </div>
        </div>

        {!compact && (
          <div className="sm:col-span-2">
            <label htmlFor={id('message')} className="field-label">
              Message <span className="font-normal text-steel">(optional)</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your car's condition or anything we should know."
              {...a11y('message')}
              className={`${fieldClass('message')} resize-y`}
            />
            <div className="flex justify-between">
              <ErrorText name="message" />
              <span className="ml-auto mt-1.5 text-xs text-steel">{values.message.length}/600</span>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {!online && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 overflow-hidden text-sm text-steel"
          >
            <WifiOff className="h-4 w-4" aria-hidden /> You're offline — reconnect to send your enquiry.
          </motion.p>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-steel sm:max-w-xs">
          Demo form — submissions are not sent anywhere. We'll never share your details.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={status === 'submitting' || !online}
          icon={status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </Button>
      </div>
    </form>
  );
}
