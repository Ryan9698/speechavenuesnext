// pages/gallery.js

import React from "react";
import GalleryComponent from "@/components/GalleryComponent//GalleryComponent";

export const metadata = {
  title: "Gallery - Speech Avenues Therapy Co.",
  description: "Picture gallery for Speech Avenues Therapy Co which showcases photos of staff, therapy services, classes, school and events.",
};


export default function Gallery() {

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold mb-6 cursiveFont text-center">
          Gallery
        </h1>
        <GalleryComponent />
      </div>
    </>
  );
}
