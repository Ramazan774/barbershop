"use client";
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ContactSection from '@/components/ContactSection';

const ArrowButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
);

const ImageModal = ({ src, alt, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" role="dialog" aria-modal="true">
      <div className="max-w-4xl w-full p-4 relative">
        <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto" />
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ArrowButton direction="left" onClick={onPrev} />
        <ArrowButton direction="right" onClick={onNext} />
      </div>
    </div>
  );
};

const Gallery = () => {
  const [images] = useState([
    '/assets/img1.webp',
    '/assets/img2.webp',
    '/assets/img3.webp',
    '/assets/img4.webp',
    '/assets/img5.webp',
    '/assets/img6.webp',
    '/assets/img7.webp',
    '/assets/img8.webp',
    '/assets/img9.webp',
    '/assets/img10.webp',
    '/assets/img11.webp',
    '/assets/img12.webp',
    '/assets/img13.webp',
    '/assets/img14.webp',
    '/assets/img28.webp',
    '/assets/img29.webp',
    '/assets/img30.webp',
    '/assets/img31.webp',
    '/assets/img32.webp',
    '/assets/img33.webp',
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => setSelectedImage(index);

  const handleClose = () => setSelectedImage(null);

  const handlePrev = useCallback(() => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  return (
    <>
      <Head>
        <title>Gallery | Magico Barbershop</title>
        <meta name="description" content="Explore our gallery of haircuts, styles, and barbershop memories at Magico Barbershop." />
      </Head>
      <main className='mb-10'>
        <section className="merienda text-center mt-40 mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gallery</h1>
          <p className="mt-4 mb-4 text-lg leading-8 text-gray-600">See some of our memories</p>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8" aria-label="Photo gallery">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <div key={src} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Barbershop image ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => handleImageClick(index)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
        {selectedImage !== null && (
          <ImageModal
            src={images[selectedImage]}
            alt={`Enlarged view of barbershop image ${selectedImage + 1}`}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </main>
    </>
  );
};

export default Gallery;