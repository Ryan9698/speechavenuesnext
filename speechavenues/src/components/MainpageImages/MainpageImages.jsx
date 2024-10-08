'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const images = [
  '/images/mainpageimages/logo.webp',
  // "/images/mainpageimages/enrollacademy.png",
  // "/images/mainpageimages/summerintensives.jpg",
  // '/images/mainpageimages/whatweoffer.png',
  '/images/mainpageimages/feedingtherapy.png',
  '/images/mainpageimages/hoursofoperation.png',
];

export default function MainpageImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Ensure this timeout is shorter than the interval
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-96 md:h-96 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={classNames(
              'transition-opacity duration-1000 object-contain',
              {
                'opacity-100': index === currentImageIndex && fade,
                'opacity-0': index !== currentImageIndex || !fade,
              }
            )}
            priority={index === 0} // Add priority to the first image
          />
        ))}
      </div>
    </div>
  );
}
