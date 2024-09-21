"use client";

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative h-screen lg:h-screen w-full">
      <Image
        src="/assets/img35.webp"
        alt="Background photo"
        fill={true}
        className="z-10 object-cover"
        priority={true} 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-6">
        <p className="text-sm lg:text-lg mb-2">
          Haircuts, shaves, and everything else
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Your best barbershop in Madison, WI
        </h1>
        <p className="text-base lg:text-lg mb-6">
          Experience the finest barbershop in town where quality meets tradition, in the heart of your territory.
        </p>
        <button
          onClick={() => window.open('https://book.squareup.com/appointments/mlbx6u23qrpezz/location/L85JSC3H0SKXW/services?buttonTextColor=ffffff&color=ff1616&locale=en&referrer=so', '_blank')}
          className="bg-yellow-500 text-black font-bold py-4 px-8 rounded-md shadow-lg hover:bg-yellow-400 transition duration-300"
          style={{ minWidth: '150px', minHeight: '48px', fontSize: '18px' }} 
        >
          Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
