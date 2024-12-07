'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import images from '@/data/galleryimagesdata/galleryimages';

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
      {/* Grid for thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={`gallery-image-${index}`}
            className="relative w-full h-56 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => openGallery(index)}
          >
            <Image
              src={image.thumbnail}
              alt={image.alt}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              priority={false} // Do not preload any images
            />
          </div>
        ))}
      </div>

      {/* Modal for the image gallery */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeGallery}
        >
          <div
            className="relative max-w-4xl w-full p-4 bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2"
              onClick={closeGallery}
            >
              X
            </button>
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
