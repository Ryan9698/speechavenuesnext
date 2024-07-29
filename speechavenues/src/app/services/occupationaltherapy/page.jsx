import React from "react";
import Carousel from "@/components/Carousel";
import otSlides from "@/data/otpicturesdata/OTPictures";

export const metadata = {
  title: "Speech Avenues Occupational Therapy",
  description:
    "Speech Avenues Occupational Therapists are healthcare professionals dedicated to empowering patients of all ages to achieve independence and enhance their quality of life through meaningful everyday activities, known as occupations.",
};

export default function OccupationalTherapy() {
  return (
    // Global Container
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
        <div className="w-full md:w-80 md:mr-4">
          {/* Carousel Container */}
          <div className="md:w-full mt-2">
            <Carousel slides={otSlides} className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mt-8 font-dancing mx-auto text-center md:text-left md:mt-0 md:mx-6">
            Occupational Therapy
          </h1>
          <div className="bg-white p-6 flex flex-col space-y-3">
            <p>
              <span className="font-bold">Occupational Therapy (OT)</span> is a
              branch of healthcare with professionals dedicated to empowering
              patients of all ages to achieve independence and enhance their
              quality of life through meaningful everyday activities, known as
              occupations. Our OT practitioners work with individuals throughout
              all stages of life who may be facing various physical, cognitive,
              developmental, or emotional challenges.
            </p>
            <p>
              By collaborating with patients to set personalized goals and
              develop tailored treatment plans, occupational therapy facilitates
              individuals' engagement in daily activities, promotes overall
              well-being, and maximizes independence across all life domains. At
              SATC, supporting individuals in reaching their fullest potential
              is our priority and passion.
            </p>
            <a
              href="https://www.aota.org/about/what-is-ot"
              className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Learn more about Occupational Therapy
            </a>
          </div>
        </div>
      </div>
      {/* New Container for Services Provided Section */}
      <div className="bg-white p-6 flex flex-col space-y-3 mt-8 -mt-7">
        <p className="font-medium">
          Services provided by our occupational therapists encompass a wide
          range of interventions, including: assessing and improving fine motor
          skills, balance, emotional regulation, self-care abilities, cognitive
          functions, and more.
        </p>
        <div>
          Additionally, our occupational therapists specialize in sensory
          integration techniques:
          <ul className="list-disc pl-5 mt-2">
            <li>
              Sensory integration is the brain's ability to process and make
              sense of sensory information.
            </li>
            <li>
              Techniques aim to regulate sensory input, improve body awareness,
              coordination, and overall self-regulation.
            </li>
          </ul>
        </div>
        <a
          href="https://asatonline.org/for-parents/learn-more-about-specific-treatments/sensory-integrative-therapy-sensory-integration-si-or-sit/"
          className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
        >
          Learn more about Sensory Integrative Therapy
        </a>
        <p>
          Lastly, being able to work alongside our wonderful Speech-Language
          Pathologists (SLPs), our Occupational Therapists are able to support
          and treat individuals in improving speech, language techniques,
          communication, and expression skills by addressing possible underlying
          sensory and motor components.
        </p>
      </div>
    </div>
  );
}
