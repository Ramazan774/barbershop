"use client";
import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowButton = memo(({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${direction === 'left' ? 'left-4' : 'right-4'} bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200`}
    aria-label={direction === 'left' ? 'Previous image' : 'Next image'}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
    </svg>
  </button>
));

ArrowButton.displayName = 'ArrowButton';

const ImageModal = memo(({ src, alt, onClose, onPrev, onNext }) => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="max-w-4xl w-full p-4 relative">
        <Image src={src} alt={alt} width={800} height={600} className="w-full h-auto rounded-lg" priority />
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ArrowButton direction="left" onClick={onPrev} />
        <ArrowButton direction="right" onClick={onNext} />
      </div>
    </div>
  );
});

ImageModal.displayName = 'ImageModal';

const GalleryImage = memo(({ src, alt, onClick }) => (
  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className="w-full h-full object-cover cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
      loading='lazy'
    />
  </div>
));

GalleryImage.displayName = 'GalleryImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/assets/img1.webp', alt: 'Image 1' },
    { src: '/assets/img2.webp', alt: 'Image 2' },
    { src: '/assets/img3.webp', alt: 'Image 3' },
    { src: '/assets/img4.webp', alt: 'Image 4' },
    { src: '/assets/img5.webp', alt: 'Image 5' },
    { src: '/assets/img6.webp', alt: 'Image 6' },
    { src: '/assets/img7.webp', alt: 'Image 7' },
    { src: '/assets/img8.webp', alt: 'Image 8' },
  ];

  const handleImageClick = useCallback((index) => {
    setSelectedImage(index);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

  return (
    <section className="relative py-16 px-4 lg:px-16 marble-background">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <GalleryImage
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/work" className="merienda inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl shadow-sm text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200">
          View Gallery
        </Link>
      </div>
      {selectedImage !== null && (
        <ImageModal
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
      <style jsx>{`
        .marble-background {
          background-color: #1a1a1a;
          background-image: 
            linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%);
          background-size: 60px 60px;
          background-position: 0 0, 30px 0, 30px -30px, 0px 30px;
          position: relative;
        }

        .marble-background::before,
        .marble-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .marble-background::before {
          background-image: 
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%);
          background-size: 100% 100%, 50% 50%, 50% 50%;
          background-position: 0 0, 0 0, 0 0;
          opacity: 0.7;
        }

        .marble-background::after {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          mix-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
};

export default Gallery;