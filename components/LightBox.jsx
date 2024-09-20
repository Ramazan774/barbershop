import React from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
    const handlers = useSwipeable({
        onSwipedLeft: () => onNext(),
        onSwipedRight: () => onPrev(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" {...handlers}>
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-white text-3xl z-60"
            >&times;</button>
            <button 
                onClick={onPrev} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-60 md:left-10"
            >&larr;</button>
            <div className="relative z-50">
                <Image src={image} alt="Lightbox image" width={800} height={800} fill={true} />
            </div>
            <button 
                onClick={onNext} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-60 md:right-10"
            >&rarr;</button>
        </div>
    );
};

export default Lightbox;
