# Project: AutoGlow -- Premium Car Wash React Website & PWA Template

Act as a **Senior UI/UX Designer, React Architect, and Frontend
Developer**.

I want you to design and develop a premium, modern, visually impressive
**Car Wash company website template** that I can showcase to potential
clients and sell as a reusable React website template.

This must be a complete, working React application, not just a
screenshot, wireframe, or static HTML page. The result should look like
a professionally designed car detailing and car wash brand, with
excellent UX, polished interactions, responsive layouts, and tasteful
animations.

## 1. Brand Identity and Visual Direction

**Demo brand name:** AutoGlow Car Care\
**Business type:** Premium car wash, vehicle cleaning, detailing,
polishing, and maintenance care.

### Colour palette

Use a sophisticated monochrome theme throughout:

-   Primary: Deep black `#101114`
-   Secondary: Charcoal grey `#25272B`
-   Supporting grey: `#777B82`
-   Light grey: `#E8E9EB`
-   Background: Clean white `#FFFFFF`
-   Soft section background: `#F4F5F6`
-   Text on light backgrounds: `#17191C`
-   Text on dark backgrounds: `#F7F7F8`

Use white space carefully. Black and charcoal sections should create
contrast, while white and light-grey sections keep the experience clean
and readable. Do not introduce bright accent colours. If a subtle accent
is needed, use a restrained silver tone.

### Design style

-   Premium automotive detailing aesthetic
-   Bold, elegant typography with clear visual hierarchy
-   Large, high-quality car and detailing photography
-   Strong hero section with an impressive vehicle image
-   Clean grids, spacious layouts, refined borders and subtle shadows
-   Modern service cards with consistent image ratios
-   Sophisticated black-and-white buttons
-   Smooth, restrained transitions and micro-interactions
-   A polished, agency-quality appearance

Avoid generic Bootstrap layouts and cookie-cutter landing page sections.
Give each page its own layout and visual character while keeping a
consistent design system.

## 2. Technology Stack

Use:

-   React.js
-   TypeScript
-   Vite
-   Tailwind CSS
-   Framer Motion for animations
-   React Router DOM
-   Lucide React icons
-   Reusable functional React components
-   Progressive Web App (PWA) support

Use clean, maintainable, scalable code. Use semantic HTML, accessible
controls, and sensible component boundaries.

## 3. Website Pages: Exactly Five Main Navigation Pages

Create these five pages and make every navigation link work:

### Page 1: Home

Make this the strongest page. The first screen should immediately
communicate a premium car care business.

Include:

-   Premium hero section with a dramatic, high-quality image of a clean
    luxury car or professional car detailing in progress
-   Headline: **"A Cleaner Car. A Better Drive."**
-   Supporting text explaining professional car washing, detailing, and
    vehicle care
-   Primary CTA: **Book a Wash**
-   Secondary CTA: **Explore Our Services**
-   A compact trust strip with sample stats such as vehicles cleaned,
    years of experience, and customer satisfaction. Clearly treat these
    as demo figures.
-   Featured services preview
-   "Why Choose AutoGlow" section with quality, trained staff, premium
    products, and convenient service highlights
-   Before-and-after image comparison or a visually strong detailing
    showcase
-   Simple "How It Works" section with three steps: Choose a Service,
    Book Your Slot, Drive Away Fresh
-   Customer testimonial preview
-   Strong final booking CTA
-   Professional footer with contact details, opening hours, quick
    links, and social links

Use varied section layouts and strong photography. Do not make the
homepage feel like a generic collection of cards.

### Page 2: About Us

Create a brand-story page that feels credible and premium.

Include:

-   Page hero/banner with automotive detailing photography
-   "Our Story" section explaining the company's passion for vehicle
    care
-   Mission and vision
-   Values: attention to detail, quality products, trained
    professionals, customer trust, and responsible water usage
-   A "Care in Every Detail" section with a large image and supporting
    content
-   Team/workshop photography
-   A few demo business statistics
-   CTA to explore services or book a wash

Use a distinctive editorial layout with alternating image-and-text
sections.

### Page 3: Services

Create a complete services overview using attractive, image-led service
cards.

Include these sample services:

1.  Exterior Car Wash
2.  Interior Deep Cleaning
3.  Complete In-and-Out Wash
4.  Premium Foam Wash
5.  Car Interior Detailing
6.  Paint Polishing
7.  Ceramic Coating
8.  Engine Bay Cleaning
9.  Headlight Restoration
10. SUV and Luxury Car Care

Each service card should include:

-   High-quality relevant image
-   Service name
-   Short, realistic description
-   Estimated duration
-   Sample price in INR (clearly demo pricing)
-   "Enquire Now" or "Book This Service" CTA

Add category filters if they improve usability, but keep the page easy
to scan. Include a premium package/combo section and a booking CTA near
the bottom.

### Page 4: Testimonials

Create a dedicated testimonials and customer-trust page.

Include:

-   Strong page heading and short introduction
-   Featured customer review with an elegant layout
-   Testimonial cards with customer names, vehicle types, star ratings,
    and short reviews
-   A clean rating summary using clearly labelled demo data
-   A "Customer Experience" section showing the service journey
-   A photo gallery or car-care results showcase
-   CTA: "Experience the AutoGlow Difference"

Use realistic placeholder/demo reviews. Do not imply that fictional
reviews are verified real customer feedback.

### Page 5: Contact Us

Create a polished contact and enquiry page.

Include:

-   Contact page hero/header
-   Contact form with name, email, phone, vehicle type, preferred
    service, preferred date/time, and message
-   Client-side form validation
-   Clear success state after demo form submission
-   Phone number and email placeholders
-   Address/location placeholder
-   Business opening hours
-   Map placeholder or a clearly marked map embed area
-   WhatsApp contact CTA using a configurable placeholder link
-   Social media links
-   FAQ section for common questions such as appointment booking,
    service duration, and vehicle types

Do not invent a real business address, phone number, or email. Use
clearly identifiable demo placeholders in one central configuration file
so they can be replaced easily.

## 4. Booking and Demo Interactions

The application should be interactive enough for a client presentation
without requiring a backend.

Implement:

-   Book a Wash buttons that navigate to the contact/booking form or
    open a booking modal
-   Service selection that can prefill the enquiry form
-   Mobile navigation menu
-   Contact form validation
-   Demo form submission success message
-   Testimonial carousel or slider if appropriate
-   FAQ accordion
-   Smooth scroll for in-page links
-   Working page navigation
-   Back-to-top control if useful

Do not claim that a real booking is confirmed or that a message is
actually sent. Clearly show that the form is a frontend demo unless a
backend is later connected.

## 5. Animations and User Experience

Use Framer Motion for tasteful, lightweight interactions:

-   Smooth page transitions
-   Hero text and image entrance animations
-   Scroll-reveal effects for sections
-   Subtle service-card hover movement
-   Image zoom on hover
-   Animated mobile menu
-   Button hover and tap feedback
-   Testimonial slider transitions
-   FAQ accordion transitions
-   Smooth modal open/close if a booking modal is used

Keep motion refined and fast. Respect `prefers-reduced-motion`. Avoid
excessive parallax, distracting effects, or animations that make the
site feel slow.

## 6. Responsive Design: Desktop, Mobile and PWA

The website must look excellent on:

-   Large desktop screens
-   Standard laptops
-   Tablets
-   Android phones
-   iPhones

Mobile requirements:

-   Mobile-first responsive layouts
-   Compact header with accessible hamburger menu
-   Touch-friendly buttons and form fields
-   Service cards that adapt to narrow screens
-   Proper image cropping and responsive image sizing
-   Readable typography and spacing
-   No horizontal overflow
-   Sticky or easily accessible booking CTA where appropriate
-   Contact form that is comfortable to use on a phone

Test the actual layouts at common mobile, tablet, and desktop widths. Do
not simply shrink the desktop design.

## 7. PWA Functionality

Make the application installable as a Progressive Web App.

Implement:

-   Web app manifest
-   Service worker using a suitable Vite PWA approach
-   App name, theme colour, background colour, and icons
-   Installable experience on supported browsers
-   Basic static asset caching
-   Offline fallback page or offline-friendly message

Do not claim that live booking or form submission works offline. Keep
offline behaviour honest and useful.

## 8. Reusable Component Architecture

Use a maintainable structure similar to:

``` text
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
      PageContainer.tsx
    common/
      Button.tsx
      SectionHeading.tsx
      ServiceCard.tsx
      TestimonialCard.tsx
      StatItem.tsx
      FAQAccordion.tsx
      BookingCTA.tsx
    home/
      HeroSection.tsx
      TrustStrip.tsx
      FeaturedServices.tsx
      WhyChooseUs.tsx
      BeforeAfterSection.tsx
      HowItWorks.tsx
      TestimonialPreview.tsx
    contact/
      ContactForm.tsx
      ContactInfo.tsx
  pages/
    Home.tsx
    About.tsx
    Services.tsx
    Testimonials.tsx
    Contact.tsx
  data/
    services.ts
    testimonials.ts
    faqs.ts
    siteConfig.ts
  hooks/
  assets/
  App.tsx
  main.tsx
```

You may improve this structure if it makes the project cleaner. Keep
business details and demo content in data/config files rather than
scattering them throughout components.

## 9. Important Quality and Design Requirements

-   Use high-quality automotive photography relevant to each section.
-   Keep the black, grey, and white colour palette consistent.
-   Use premium, readable typography.
-   Create five genuinely distinct pages, not one long page with five
    anchors.
-   Make the homepage visually impressive and client-demo ready.
-   Use realistic sample service descriptions and INR demo prices.
-   Ensure all five pages have polished layouts and responsive
    behaviour.
-   Use consistent spacing, typography, buttons, cards, and image
    treatment.
-   Add hover states, focus states, loading or empty states where
    relevant.
-   Ensure keyboard accessibility and appropriate colour contrast.
-   Add descriptive alt text to meaningful images.
-   Avoid broken image links. Use reliable image assets or suitable
    local placeholders, and centralize image references.
-   Do not use random unrelated images or repeat the same image across
    every service.
-   Do not use lorem ipsum. Write realistic car wash business copy.
-   Do not add extra main navigation pages. The main menu must contain
    only Home, About Us, Services, Testimonials, and Contact Us.
-   Secondary booking interactions may use a modal or section on the
    Contact page, not an additional main menu item.

## 10. Final Deliverables and Verification

Please:

1.  Create the complete React + TypeScript + Vite project.
2.  Implement all five pages and reusable components.
3.  Implement desktop, tablet, and mobile responsive layouts.
4.  Add tasteful Framer Motion animations.
5.  Implement PWA functionality.
6.  Add realistic demo content, service prices in INR, and testimonials
    clearly marked as sample content.
7.  Make navigation, CTAs, FAQ, service selection, and demo form
    interactions work.
8.  Run the project and inspect all five pages.
9.  Run TypeScript/build checks and fix errors.
10. Check for console errors, broken images, and horizontal overflow.
11. Provide the final project structure and clear setup/run
    instructions.

### Acceptance checklist

Before considering the work complete, verify:

-   [ ] Exactly five main navigation pages exist.
-   [ ] Every navigation item opens the correct page.
-   [ ] All five pages have complete, polished content.
-   [ ] Header and footer are consistent across pages.
-   [ ] Mobile menu opens, closes, and navigates correctly.
-   [ ] Service CTA correctly carries the selected service into the
    enquiry form.
-   [ ] Contact form validates required fields and shows a demo success
    state.
-   [ ] FAQ accordion works.
-   [ ] Responsive layout has no horizontal scrolling.
-   [ ] PWA manifest and service worker are configured.
-   [ ] Production build completes without TypeScript errors.

## 11. How to Work

First inspect the existing project and its current dependencies. If a
React/Vite project already exists, work within it and preserve useful
existing configuration. Do not overwrite unrelated files unnecessarily.

Then implement the complete application page by page. Do not stop after
the homepage, do not return only a plan, and do not leave core sections
as TODOs or placeholders.

If you need to make reasonable design decisions, make them independently
and continue. Use your design judgement to make this feel like a premium
car wash and detailing brand.

**Most important:** The first impression must be excellent. When a
potential client opens the homepage on desktop or mobile, it should
immediately look like a premium, professionally designed car wash
website template worth purchasing.

Start implementing the project now.
