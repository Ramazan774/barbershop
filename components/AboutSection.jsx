import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 px-6 lg:px-24">
      <div className="roboto lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-4">
          Where Tradition Meets Style
        </h1>
        <h2 className="text-2xl lg:text-4xl text-gray-700 mb-6">
          Crafting the Perfect Cut, Every Time
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
          At our barbershop, we pride ourselves on offering more than just a haircut—we offer an experience.
          Our skilled barbers are dedicated to delivering the finest cuts, shaves, and grooming services, 
          tailored to your personal style. From modern trends to classic looks, we combine tradition 
          with innovation to ensure you leave feeling fresh and confident.
        </p>
      </div>

      <div className="lg:w-1/2">
        <Image
          src="/assets/img36.webp"
          alt="Picture of barbershop store front"
          width={600}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
