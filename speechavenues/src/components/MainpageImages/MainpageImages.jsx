// components/MainpageImages.jsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/mainpageimages/logo.jpg",
  "/images/mainpageimages/enrollacademy.png",
  "/images/mainpageimages/summerintensives.jpg",
  "/images/mainpageimages/whatweoffer.png",
  "/images/mainpageimages/feedingtherapy.png",
  "/images/mainpageimages/hoursofoperation.png",
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
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-96">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          fill
          className={`absolute top-0 left-0 transition-opacity duration-1000 ${
            index === currentImageIndex
              ? fade
                ? "fade-in"
                : "fade-out"
              : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
