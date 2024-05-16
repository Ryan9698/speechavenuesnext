"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "next/image";

export default function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Previous slide
  const previousSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Next slide
  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative mx-auto group">
      {/* Image Container */}
      <div className="relative h-80 md:h-96 lg:h-[500px] xl:h-[600px] w-full rounded-xl overflow-hidden">
        <Image
          src={slides[currentIndex].url}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="duration-500"
        />
      </div>
      {/* Navigation Arrows */}
      <BsChevronCompactLeft
        onClick={previousSlide}
        size={30}
        className="absolute top-1/2 -translate-y-1/2 left-5 cursor-pointer text-white bg-black/30 hover:bg-black/50 rounded-full"
      />
      <BsChevronCompactRight
        onClick={nextSlide}
        size={30}
        className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer text-white bg-black/30 hover:bg-black/50 rounded-full"
      />
      {/* Carousel Dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`h-1 w-1 rounded-full ${
              currentIndex === slideIndex ? "bg-white" : "bg-gray-400"
            } focus:outline-none`}
            onClick={() => setCurrentIndex(slideIndex)}
          ></button>
        ))}
      </div>
    </div>
  );
}
