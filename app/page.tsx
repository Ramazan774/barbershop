import { Suspense } from 'react';
import { Metadata } from 'next';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Home | Magic Barbershop',
  description: 'Welcome to Magic Barbershop. We provide professional services in [your area of expertise].',
  openGraph: {
    title: 'Home | Magic Barbershop',
    description: 'Welcome to Magic Barbershop. We provide professional services in [your area of expertise].',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magic Barbershop',
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="sr-only">Welcome to Magic Barbershop</h1>
      <HeroSection />
      <Suspense fallback={<div>Loading about section...</div>}>
        <AboutSection />
      </Suspense>
      <CTASection />
      <Suspense fallback={<div>Loading gallery...</div>}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<div>Loading reviews...</div>}>
        <Reviews />
      </Suspense>
      <ContactSection />
    </main>
  );
}