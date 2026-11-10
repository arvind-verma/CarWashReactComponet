import BookingCTA from '../components/common/BookingCTA';
import BeforeAfterSection from '../components/home/BeforeAfterSection';
import FeaturedServices from '../components/home/FeaturedServices';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import TestimonialPreview from '../components/home/TestimonialPreview';
import TrustStrip from '../components/home/TrustStrip';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PageContainer from '../components/layout/PageContainer';

export default function Home() {
  return (
    <PageContainer
      title="Premium Car Wash & Detailing"
      description="AutoGlow Car Care — premium car wash, interior detailing, paint polishing and ceramic coating."
    >
      <HeroSection />
      <TrustStrip />
      <FeaturedServices />
      <WhyChooseUs />
      <BeforeAfterSection />
      <HowItWorks />
      <TestimonialPreview />
      <BookingCTA
        eyebrow="Your car, at its best"
        title="Book your wash in under a minute."
        description="Tell us your car and preferred time — our team will call you to confirm your slot."
      />
    </PageContainer>
  );
}
