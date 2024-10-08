import React from 'react';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'About Us | Magico Barbershop',
  description: 'Learn about Magico Barbershop, our expert team of barbers, and our commitment to transforming looks and boosting confidence.',
  openGraph: {
    title: 'About Magico Barbershop',
    description: 'Discover the magic behind Magico Barbershop - where style meets exceptional service.',
    images: [{ url: '/assets/img36.webp', width: 1200, height: 630, alt: 'Magico Barbershop team' }],
  },
};

const barbers = [
  { name: 'Moustafa', image: '/assets/img15.webp', alt: 'Moustafa, expert barber at Magico Barbershop' },
  { name: 'Sam', image: '/assets/img16.webp', alt: 'Sam, skilled barber at Magico Barbershop' },
  { name: 'Uday', image: '/assets/img17.webp', alt: 'Uday, experienced barber at Magico Barbershop' },
  { name: 'Ibra Dash', image: '/assets/img18.webp', alt: 'Ibra Dash, talented barber at Magico Barbershop' },
  { name: 'Nèstor', image: '/assets/img19.webp', alt: 'Nèstor, professional barber at Magico Barbershop' },
];

const About = () => {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Cover Photo with Dark Overlay */}
        <div className="relative h-96 w-full">
          <Image
            src="/assets/img20.webp"
            alt="Cover photo of Magico Barbershop"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 -z-10"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 -z-10" />
          <div className="relative flex items-center justify-center h-full">
            <h1 className="merienda text-4xl font-bold tracking-tight text-white sm:text-6xl text-center lg:mt-10">
              The Magic Behind Magico Barbershop
            </h1>
          </div>
        </div>

        <section className="relative isolate -z-10 overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="roboto text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  {`"At Magico Barbershop, we're not just changing looks – we're transforming confidence. 
                  Our passion for precision cuts and personalized service sets us apart in the world of grooming."`}
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">Founder Name</div>
                  <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-gray-600">Founder of Magico Barbershop</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8" aria-labelledby="team-heading">
          <div className="mx-auto max-w-2xl">
            <h2 id="team-heading" className="merienda text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
              Our Magical Team
            </h2>
            <p className="roboto mt-6 text-lg leading-8 text-gray-600 text-center">
              {`Each member of our team brings a unique flair to Magico Barbershop. With years of experience and a passion for their craft, 
              our barbers are dedicated to providing you with the best grooming experience possible.`}
            </p>
          </div>
          <ul role="list" className="mx-auto mt-20 grid max-w-4xl justify-center grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {barbers.map((barber) => (
              <li key={barber.name} className="flex flex-col items-center">
                <Image 
                  className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg" 
                  src={barber.image} 
                  alt={barber.alt} 
                  width={200} 
                  height={200} 
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{barber.name}</h3>
                <div className='flex items-center justify-center'>
                  <Image
                    src="/assets/barber-pole.svg"
                    alt="Barber pole icon"
                    width={20}
                    height={20}
                    className='mr-2'
                  />
                  <p className="text-sm leading-6 text-gray-600">Barber</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8" aria-labelledby="brands-heading">
          <h2 id="brands-heading" className="merienda text-center text-2xl font-semibold leading-8 text-gray-900">Top brands we use for your magical transformation</h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/assets/brand1-logo.svg" alt="Brand 1" width={158} height={48} />
            <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/assets/brand2-logo.svg" alt="Brand 2" width={158} height={48} />
            <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="/assets/brand3-logo.svg" alt="Brand 3" width={158} height={48} />
            <Image className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="/assets/brand4-logo.svg" alt="Brand 4" width={158} height={48} />
            <Image className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="/assets/brand5-logo.svg" alt="Brand 5" width={158} height={48} />
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
};

export default About;
