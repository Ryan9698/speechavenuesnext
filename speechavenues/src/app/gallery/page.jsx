// pages/gallery.js

import React from "react";
import GalleryComponent from "@/components/GalleryComponent//GalleryComponent";

export const metadata = {
  title: "Gallery - Speech Avenues Therapy Co.",
  description:
    "Picture gallery for Speech Avenues Therapy Co which showcases photos of staff, therapy services, classes, school and events.",
  canonical: "https://speechavenues.com/gallery",
};

export default function Gallery() {
  return (
    <>
      <div>
        <h1 className="text-6xl font-bold mt-8 mb-8 cursiveFont text-center  pb-2">
          Gallery
        </h1>
        <GalleryComponent />
      </div>
    </>
  );
}
