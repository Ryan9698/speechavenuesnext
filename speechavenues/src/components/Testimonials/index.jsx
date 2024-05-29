// Testimonials component which cycles through different reviews.

"use client";
import React, { useState, useEffect } from "react";
import testimonials from "@/data/testimonials/Testimonials"; // Testimonials data imported from separate file in data folder for organization.

const Testimonials = () => {
  // Sets the initial state of currentTestimonial to 0 and cycles through an array of objects.
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    // Sets an interval which takes in the the testimonials object and cycles to the next object in the array every 6 seconds and renders it.
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 6000); // Change the testimonial every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount for memory and to restart the cycle if the user clicks on the homepage again
  }, []);

  const getStars = (rating) => {
    // Takes in the rating from the testimonials object and returns the amount of stars equal to the rating and renders them with the review.
    return Array.from({ length: rating }, (_, index) => "⭐").join(" ");
  };

  // The styled component which displays all of the information in the testimonials data object for display
  return (
    <div className="my-8 mx-auto p-4 max-w-2xl text-center">
      <p className="text-lg italic">
        "{testimonials[currentTestimonial].quote}"
      </p>
      <p className="text-md mt-4 mb-2 font-semibold">
        {testimonials[currentTestimonial].author}
      </p>
      <p className="text-yellow-400">
        {getStars(testimonials[currentTestimonial].rating)}
      </p>
    </div>
  );
};

export default Testimonials;
