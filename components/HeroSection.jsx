import Image from 'next/image';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <Image
        src="/assets/img21.jpg"
        alt="Background"
        fill={true} 
        // objectPosition="center"
        className="z-0 items-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-6">
        <p className="text-sm lg:text-lg mb-2">Haircuts, shaves, and everything else</p>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Your best barbershop in Madison, WI</h1>
        <p className="text-sm lg:text-lg mb-6">
          Experience the finest barbershop in town where quality meets tradition, in the heart of your territory.
        </p>
        <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-yellow-400 transition duration-300">
          <a href="https://book.squareup.com/appointments/mlbx6u23qrpezz/location/L85JSC3H0SKXW/services?buttonTextColor=ffffff&color=ff1616&locale=en&referrer=so" target='_blank'>
            Book an Appointment
          </a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
