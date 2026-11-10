export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'How do I book an appointment?',
    answer:
      'Use the enquiry form on this page, tap “Book a Wash” anywhere on the site, or message us on WhatsApp. Our team will call you back to confirm a time slot that suits you.',
  },
  {
    question: 'How long does a service take?',
    answer:
      'An exterior wash takes around 45 minutes and a complete in-and-out wash about 1.5 hours. Detailing and paint polishing take 4–6 hours, while ceramic coating needs 1–2 days including curing time.',
  },
  {
    question: 'Which vehicles do you service?',
    answer:
      'We work on hatchbacks, sedans, SUVs, MUVs and luxury vehicles. Larger vehicles may take a little longer and are priced slightly differently — we always confirm the price before starting.',
  },
  {
    question: 'Do I need to stay while my car is being cleaned?',
    answer:
      'Not at all. You are welcome to wait in our lounge for shorter services, or drop the car off and we will let you know as soon as it is ready for collection.',
  },
  {
    question: 'Are your products safe for my paint and interior?',
    answer:
      'Yes. We use pH-neutral shampoos, dedicated microfibre for each stage and professional-grade products suited to each surface — paint, glass, leather, fabric and trim.',
  },
  {
    question: 'How do you approach water usage?',
    answer:
      'Our wash bays use controlled-flow pressure equipment and snow foam that loosens dirt before rinsing, which helps us use water more efficiently than a typical hose wash.',
  },
];
