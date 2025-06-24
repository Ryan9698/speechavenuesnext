// pages/gallery.js

import React from 'react';
import GalleryComponent from '@/components/GalleryComponent//GalleryComponent';
import { TransitionWrapper } from '@/components/Animations';

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
      <TransitionWrapper>
        <div>
          <h1 className="text-6xl font-bold mt-8 mb-8 cursiveFont text-center  pb-2">
            Gallery
          </h1>
          <GalleryComponent />
        </div>
      </TransitionWrapper>
    </>
  );
}
