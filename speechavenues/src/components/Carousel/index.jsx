'use client';
// Reused react image gallery component for the therapy pages
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '@/assets/styles/galleryStyles.css';

const Carousel = ({ slides }) => {
  return (
    <ImageGallery
      items={slides}
      showThumbnails={false} // Hidden for this Carousel
      autoPlay={true}
      slideInterval={5000} // Interval between slides
      showPlayButton={false}
      showFullscreenButton={false}
      lazyLoad={true}
      showNav={false}
    />
  );
};

export default Carousel;
