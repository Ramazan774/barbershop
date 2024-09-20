"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/Lightbox';

const Gallery = () => {
    const [images] = useState([
        '/assets/img1.jpg',
        '/assets/img2.jpg',
        '/assets/img3.jpg',
        '/assets/img4.jpg',
        '/assets/img5.jpg',
        '/assets/img6.jpg',
        '/assets/img7.jpg',
        '/assets/img8.jpg',
        '/assets/img9.jpg',
        '/assets/img10.jpg',
        '/assets/img11.jpg',
        '/assets/img12.jpg',
        '/assets/img13.jpg',
        '/assets/img14.jpg',
        '/assets/img28.jpg',
        '/assets/img29.jpg',
        '/assets/img30.jpg',
        '/assets/img31.jpg',
        '/assets/img32.jpg',
        '/assets/img33.jpg',
        '/assets/img34.jpg',
    ]);
    const [activeImage, setActiveImage] = useState(null);

    const handleClick = (index) => {
        setActiveImage(index);
    };

    const closeLightbox = () => {
        setActiveImage(null);
    };

    const moveNext = () => {
        setActiveImage((activeImage + 1) % images.length);
    };

    const movePrev = () => {
        setActiveImage((activeImage + images.length - 1) % images.length);
    };

    return (
        <div className='mb-10'>
            <div className="text-center mt-40 mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gallery</h2>
                <p className="mt-4 mb-4 text-lg leading-8 text-gray-600">{`See some of our memories`}</p>
            </div>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <ul className='grid grid-cols-3 gap-8 relative'>
                    {images.map((image, index) => (
                        <li key={index} className='relative'>
                            <div
                                className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden cursor-pointer transform"
                                onClick={() => handleClick(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery ${index}`}
                                    width={400}
                                    height={400}
                                    className='aspect-[3/2] rounded-xl object-cover'
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {activeImage !== null && (
                <Lightbox
                    image={images[activeImage]}
                    onClose={closeLightbox}
                    onNext={moveNext}
                    onPrev={movePrev}
                />
            )}
        </div>
    );
};

export default Gallery;
