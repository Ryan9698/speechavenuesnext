// pages/gallery.js

import React from 'react';
import GalleryComponent from '@/components/GalleryComponent//GalleryComponent';
import { TransitionWrapper } from '@/components/Animations';
// import { AnimationLogger, DebugMount } from '@/components';

export const metadata = {
  title: 'Gallery - Speech Avenues Therapy Co.',
  description:
    'Picture gallery for Speech Avenues Therapy Co which showcases photos of staff, therapy services, classes, school and events.',
  alternates: {
    canonical: `/gallery`,
  },
  keywords: ['satc gallery', 'satc what we do', 'satc events'],
};

export default function Gallery() {
  return (
    <>
      {/* <DebugMount name="Gallery" />
      <AnimationLogger name="Gallery" /> */}
      <div>
        <h1 className="mt-24 text-6xl font-bold mb-8 font-nunito text-center font-gray-800 pb-2">
          Gallery
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto px-6 md:px-0">
          Explore moments from our staff, therapy sessions, and community
          events.
        </p>
        <GalleryComponent />
      </div>
    </>
  );
}
