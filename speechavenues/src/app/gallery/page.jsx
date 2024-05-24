// pages/gallery.js

import React from "react";
import Head from "next/head";
import GalleryComponent from "@/components/GalleryComponent//GalleryComponent";

export default function Gallery() {
  const metadata = {
    title: "Speech Avenues Picture Gallery",
    description: "Picture gallery for Speech Avenues Therapy Co which showcases photos of staff, therapy services, classes, school and events.",
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-6xl font-bold mb-6 cursiveFont text-center">
          Gallery
        </h1>
        <GalleryComponent />
      </div>
    </>
  );
}
