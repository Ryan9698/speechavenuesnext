import React from 'react';
import Image from 'next/image';
import { TransitionWrapper } from '@/components/Animations';

export const metadata = {
  title: 'Speech Avenues - School',
  description:
    'Speech Avenues offers a comprehensive educational experience for learners with communication disorders.',
  alternates: {
    canonical: `/school`,
  },
  keywords: [
    'Speech school',
    'speech therapy school',
    'speech avenues school',
    'school for autism',
    'k-12 autism',
    'school rockledge',
    'school for autism rockledge',
    'autism',
    'downs syndrome',
    'ASD',
    'ASD school',
  ],
};

export default function SchoolHome() {
  return (
    <>
      <TransitionWrapper>
        <div className="container mx-auto flex flex-col items-center md:mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl gap-6">
            <div className="relative w-full max-w-xs md:w-96 mb-6 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1724427658/Speech%20Avenues/School/SATC_CCA_zdjxpj.webp"
                alt="Speech Avenues Academy offers personalized lesson plans tailored to your child's individual needs"
                width={600}
                height={600}
                className="rounded-lg"
                priority={true}
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 cursiveFont mb-4 md:mb-0 text-center md:ml-6">
                Education to Meet the Needs of Your Children
              </h1>
              <div className="bg-white rounded-lg p-6 max-w-prose">
                <h2 className="mb-4">
                  We are working diligently to open up a brand new opportunity
                  for Brevard County learners with communication disorders. Our
                  full time program will provide a complete educational
                  experience within a therapeutic setting. Learners will work on
                  independent life skills in conjunction with individualized
                  therapies.
                </h2>
                <p>
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
      </TransitionWrapper>
    </>
  );
}
