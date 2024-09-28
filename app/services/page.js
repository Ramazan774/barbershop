'use client'; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Services = () => {
  const [category, setCategory] = useState('Hair');
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  const services = [
    { name: 'Haircut/Fade', image: '/assets/img25.webp', svg: '/assets/haircut-tools-barber-tools-haircut.svg' },
    { name: 'Facial steaming', image: '/assets/img23.webp', svg: '/assets/face-scan-circle.svg'},
    { name: 'Beard Trim/Lining Up', image: '/assets/img24.webp', svg: '/assets/beard-male.svg' },
    { name: 'Ear and Nose Waxing', image: '/assets/img26.webp', svg: '/assets/ear.svg' },
    { name: 'Eyebrow Lining Up', image: '/assets/img27.webp', svg: '/assets/eyebrow.svg' },
    { name: 'Hair Styling', image: '/assets/img1.webp', svg: '/assets/haircut-tools-barber-tools-haircut.svg' },
  ];
  
  const servicesWithPrices = [
    { name: 'Full Service', price: '$100', duration: '75 minutes', category: 'Hair' },
    { name: 'Beard Trim/Lining Up', price: '$30', duration: '30 minutes', category: 'Hair' },
    { name: 'Haircut & Beard', price: '$60', duration: '50 minutes', category: 'Hair' },
    { name: 'Fade/Regular Cut', price: '$40', duration: '30 minutes', category: 'Hair' },
    { name: 'Beard Trim/Lining Up', price: '$30', duration: '30 minutes', category: 'Hair' },
    { name: 'Hair Styling', price: '$40', duration: '45 minutes', category: 'Hair' },
    { name: 'Facial Steaming', price: '$25', duration: '25 minutes', category: 'Facial' },
    { name: 'Ear and Nose Waxing', price: '$15', duration: '15 minutes', category: 'Facial' },
    { name: 'Eyebrow Lining Up', price: '$10', duration: '10 minutes', category: 'Facial' },
  ];

  return (
    <main className="isolate">
      <div className="relative h-96 bg-center bg-cover" style={{ backgroundImage: 'url("/assets/img20.webp")' }}>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="merienda text-5xl font-bold text-white text-center tracking-tight sm:text-6xl">
            Services We Provide
          </h2>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={index} className="relative group">
                <Image
                  src={service.image}
                  className="aspect-[3/2] rounded-2xl object-cover"
                  width={400}
                  height={400}
                  alt={service.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <Image
                    src={service.svg}
                    alt={`${service.name} icon`}
                    width={32}
                    height={32}
                    className="mt-2"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mx-2 rounded-2xl ${category === 'Hair' ? 'bg-black text-yellow-500 hover:text-yellow-100' : 'bg-yellow-500 hover:text-yellow-900 text-black'}`}
              onClick={() => setCategory('Hair')}
            >
              Hair Services
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-2xl ${category === 'Facial' ? 'bg-black text-yellow-500 hover:text-yellow-100' : 'bg-yellow-500 hover:text-yellow-900 text-black'}`}
              onClick={() => setCategory('Facial')}
            >
              Facial Services
            </button>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesWithPrices
              .filter((service) => service.category === category)
              .map((service, index) => (
                <li key={index} className="bg-black bg-opacity-80 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-yellow-500">{service.name}</h3>
                  <p className="text-white mt-2">Price: {service.price}</p>
                  <p className="text-gray-300">Duration: {service.duration}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Services;


