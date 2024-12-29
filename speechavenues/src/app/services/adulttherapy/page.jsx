import React from 'react';
import Carousel from '@/components/Carousel';
// import otSlides from '@/data/otpicturesdata/OTPictures';

export const metadata = {
  title: 'Speech Avenues Adult Therapy',
  description: 'Speech Avenues offers adult therapy services in Rockledge, FL.',
  alternates: {
    canonical: `/services/adulttherapy`,
  },
  keywords: [
    'adult Occupational Therapy',
    'adult speech therapy',
    'adult occupational therapy near me',
    'adult speech therapist near me rockledge',
    'occupational therapy near me rockledge',
    'adult speech therapy near me florida',
    'speech therapy rockledge',
    'adult occupational therapy',
    'child occupational therapy',
    'autism',
    'downs syndrome',
    'adult with autism',
    'ASD',
    'satc',
  ],
};

export default function AdultTherapy() {
  return (
    // Global Container
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
        <div className="w-full md:w-80 md:mr-4">
          {/* Carousel Container */}
          <div className="md:w-full mt-2">
            {/* <Carousel slides={otSlides} className="w-full h-full" /> */}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mt-8 font-dancing mx-auto text-center md:text-left md:mt-0 md:mx-6">
            Adult Therapy
          </h1>
          <div className="bg-white p-6 flex flex-col space-y-3">
            <h2>
              {/* <span className="font-bold">Data goes here</span> */}
              Adults acquire speech and language disabilities through organic
              and nonorganic causes, such as a stroke, Parkinson’s, dementia,
              etc. Treatment for adults is known as rehabilitation. It is
              rehabilitation because the therapist is attempting to restore the
              previously learned skill. A nonorganic cause might be traumatic
              head injury from a car accident.
            </h2>
            <p>
              Although every case is different, communication disorders seen
              most in treating adults are voice disorders, motor speech
              disorders, other neurologically based communicative disorders, and
              non-neurological disorders.
            </p>
          </div>
        </div>
      </div>
      {/* New Container for Services Provided Section */}
      {/* <div className="bg-white p-6 flex flex-col space-y-3  -mt-7">
        <p className="font-medium">
          Services provided by our occupational therapists here at SATC
          encompass a wide range of interventions, including: assessing and
          improving fine motor skills, balance, emotional regulation, self-care
          abilities, cognitive functions, and more.
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
      </div> */}
    </div>
  );
}
