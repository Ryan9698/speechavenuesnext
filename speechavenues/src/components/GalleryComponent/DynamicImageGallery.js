// components/GalleryComponent/DynamicImageGallery.js
'use client';
import dynamic from 'next/dynamic';

const ImageGallery = dynamic(() => import('react-image-gallery'), {
  ssr: false,
});

export default ImageGallery;
