import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Speech Avenues - School",
  description:
    "Speech Avenues offers a comprehensive educational experience for learners with communication disorders.",
  canonical: "https://speechavenues.com/school",
};

export default function SchoolHome() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="relative w-96 md:mr-6">
            <Image
              src="/images/mainpageimages/enrollacademy.png"
              alt="Speech Avenues Academy offers personalized lesson plans tailored to your child's individual needs"
              width={600}
              height={600}
              priority={true}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold text-gray-800 mt-6 cursiveFont text-center md:text-left md:px-6">
              Education to Meet the Needs of Your Children
            </h1>
            <div className="bg-white rounded-lg p-6 max-w-prose md:max-w-xl">
              <h2 className="text-justify mb-4">
                We are working diligently to open up a brand new opportunity for
                Brevard County learners with communication disorders. Our full
                time program will provide a complete educational experience
                within a therapeutic setting. Learners will work on independent
                life skills in conjunction with individualized therapies.
              </h2>

              <p>
                {" "}
                We pride ourselves on providing a multisensory approach to
                academics that meets children at their level of need. We focus
                on relationship based learning which promotes social community
                building between our individuals and our staff. This approach
                gives children a place and a voice in our learning community
                which helps them to make gains that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
