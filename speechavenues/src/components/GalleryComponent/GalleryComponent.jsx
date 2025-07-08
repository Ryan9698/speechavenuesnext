'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import images from '@/data/galleryimagesdata/galleryimages';
import { GalleryAnimation } from './GalleryAnimation/GalleryAnimation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GalleryComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // Ref for the ImageGallery component
  const galleryRef = useRef(null);

  // useEffect for making sure that the component is mounted only after acquiring the dynamic urls from cloudinary
  useEffect(() => {
    setMounted(true);
  }, []);

  const openGallery = (index) => {
    const globalIndex = (currentPage - 1) * imagesPerPage + index;
    setCurrentImage(globalIndex);
    setIsOpen(true);
  };

  const closeGallery = () => setIsOpen(false);

  // Pagination logic
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  // Ref for page changes
  const handlePageChange = (direction) => {
    setCurrentPage((prev) => {
      const nextPage =
        direction === 'next'
          ? Math.min(prev + 1, totalPages)
          : Math.max(prev - 1, 1);

      // Scroll the gallery back into view
      if (galleryRef.current) {
        galleryRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

      return nextPage;
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Grid for thumbnails */}
      <hr className="my-10 border-t border-gray-300 opacity-50" />
      {/* Ref here to allow reset to top of images on page change */}
      <GalleryAnimation page={currentPage}>
        <div
          className="scroll-mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
          ref={galleryRef}
        >
          {mounted &&
            currentImages.map((image, index) => (
              <motion.div
                key={`gallery-image-${startIndex + index}`}
                variants={itemVariants}
                className="relative w-full h-44 md:h-56 cursor-pointer rounded-md overflow-hidden shadow transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => openGallery(index)}
              >
                <Image
                  src={image.thumbnail}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  loading="lazy"
                />
              </motion.div>
            ))}
        </div>
      </GalleryAnimation>

      <hr className="my-10 border-t border-gray-300 opacity-50" />

      <div className="flex justify-center space-x-4 my-6 mb-10">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gradient-to-r from-black to-gray-900 text-white rounded border border-white/10 shadow-sm disabled:opacity-50 transition"
        >
          <ArrowLeft />
        </button>
        <span className="text-lg font-nunito mt-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gradient-to-r from-black to-gray-900 text-white rounded border border-white/10 shadow-sm disabled:opacity-50 transition"
        >
          <ArrowRight />
        </button>
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
              items={currentImages.map((img) => ({
                original: img.original,
                thumbnail: img.thumbnail,
                originalAlt: img.alt,
                thumbnailAlt: img.alt,
              }))}
              lazyLoad={true}
              startIndex={currentImage}
              onSlide={(i) => setCurrentImage(i)}
              showFullscreenButton={true}
              showPlayButton={false}
              showThumbnails={true}
              showNav={true}
              showBullets={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
