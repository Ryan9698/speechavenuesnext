// app/page.jsx
import React from 'react';
import PhoneIcon from '@/components/PhoneIcon';
import dynamic from 'next/dynamic';

// Dynamically import MainpageImages component
const MainpageImages = dynamic(
  () => import('@/components/MainpageImages/MainpageImages'),
  {
    ssr: false, // Ensure it is only rendered on the client-side
  }
);

export const metadata = {
  title: {
    default: 'Speech Avenues Therapy Co.',
  },
  description:
    'Speech Avenues Therapy Co offers speech and occupational therapy services to adults and children in Rockledge, FL. Let us help you achieve your goals!',
  alternates: {
    canonical: `/`,
  },
  keywords: [
    'Speech Avenues',
    'speech therapy near me',
    'occupational therapy near me rockledge',
    'speech therapy near me rockledge',
    'speech avenues therapy',
    'speech therapy',
    'occupational therapy',
    'feeding therapy',
    'autism',
    'cerebral palsy',
    'downs syndrome',
    'adult with autism',
    'child with autism',
    'ASD',
  ],
};

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 lg:pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <MainpageImages />
            <div className="w-full mt-4 md:mt-0">
              {/* Testimonials component goes here. Needs data */}
              {/* <Testimonials /> */}
            </div>
          </div>
          <div className="group prose prose-md max-w-none w-full md:w-1/2">
            <div className="ml-5 mr-5">
              <h1
                className="text-6xl font-bold mb-6 text-center md:text-left p-4"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                Welcome!
              </h1>
              <div className="space-y-4">
                <p>
                  Welcome to Speech Avenues Therapy Co. (
                  <span className="font-bold">S.A.T.C</span>), where we redefine
                  possibilities through our professional speech and occupational
                  therapy services. Our dedicated family of therapists is
                  committed to enhancing communication skills and promoting
                  functional independence for individuals across all age groups.
                </p>
                <p>
                  At S.A.T.C, we understand that every individual is unique. Our
                  therapists are dedicated to assisting each client by creating
                  carefully tailored Therapy Care Plans, reflecting our
                  commitment to personalized care. Our compassionate approach
                  and cutting-edge techniques have proven to unlock our clients'
                  full potential, nurturing growth, and empowering them to
                  overcome challenges while enhancing their unique special
                  abilities.
                </p>
                <p className="text-center md:text-left md:inline-block">
                  For inquiries or to book an appointment, please call:
                  <br />
                  <span className="">
                    <PhoneIcon className="inline mr-1 " />
                    <a
                      href="tel:+13213382419"
                      className="text-lg font-bold no-underline hover:text-blue-700"
                    >
                      321-338-2419
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
