// components/GalleryComponent.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"; // Ensure CSS is imported for styling
import images from "@/data/galleryimagesdata/galleryimages";

const GalleryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openGallery = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-36 cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <Image
              src={image.thumbnail}
              alt={image.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              priority={index === 0} // Add priority to the first image
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="gallery-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <ImageGallery
              items={images.map((img) => ({
                original: img.original,
                thumbnail: img.thumbnail,
                originalAlt: img.alt,
                thumbnailAlt: img.alt,
              }))}
              startIndex={currentImage}
              onSlide={(currentIndex) => setCurrentImage(currentIndex)}
              showFullscreenButton={true}
              showPlayButton={false}
              showThumbnails={true}
              showNav={true}
              showBullets={true}
            />
          </div>
        </div>
      )}
      <div className="pb-4"></div>
    </div>
  );
};

export default GalleryComponent;
