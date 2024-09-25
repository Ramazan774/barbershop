import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div>
        <HeroSection />
        <AboutSection />
        <CTASection />
        <Gallery />
        <Reviews />
        <ContactSection />
      </div>
    </main>
  )
}
