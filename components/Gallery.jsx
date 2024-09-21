"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <section
      className="relative py-16 px-4 lg:px-16"
      style={{
        background: `url('/assets/marble-background.webp')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              style={{
                width: '100%',
                height: '300px'
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/work">
          <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md shadow-lg hover:bg-yellow-400 transition duration-300">
            View Full Gallery
          </button>
        </Link>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Enlarged View"
              width={800}
              height={600}
              className="object-cover rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
