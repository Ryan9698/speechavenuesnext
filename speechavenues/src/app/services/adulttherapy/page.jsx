import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import adultSlides from '@/data/adultpicturesdata/adultCarousel';
import AdultDropdown from './Dropdown';
import SpeakOut from './SpeakOut';
import SpeakOutAlt from './SpeakOutAlt';
// import SpotifyPlayer from '@/components/Spotify/SpotifyPlayer';
import { TransitionWrapper } from '@/components/Animations';

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
    <>
      <TransitionWrapper>
        <div className="container mx-auto max-w-4xl mt-20">
          {/* Main Flex Container */}
          <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
            {/* Left Column: Carousel and Spotify Player */}
            <div className="flex flex-col w-full sm:w-96 md:w-[500px] md:mr-4 md:mx-4">
              {/* Carousel */}
              <div className="md:w-full mt-2 mx-auto md:mx-2 order-2 md:order-1">
                <Carousel slides={adultSlides} className="w-full h-full" />
              </div>

              {/* SPOTIFY PLAYER - NEEDS SOURCE FILE
          <div className="order-last flex justify-center items-center bg-gray-200 p-2 pt-4">
            <SpotifyPlayer url="https://open.spotify.com/embed/playlist/6tz582Yhm1naPsb0LnwvXa?utm_source=generator&theme=0" />
          </div> */}
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col w-full md:w-2/3 order-last md:order-2">
              <h1 className="text-5xl font-bold text-gray-800 mt-12 font-quicksand mx-auto text-center md:text-left md:mt-4 md:mx-6 md:mb-6">
                Adult Therapy
              </h1>
              <div className="mb-4 md:mb-0">
                <div className="md:space-y-4 md:ml-6 md:mb-6">
                  <h2 className="p-4 mt-6">
                    Adults acquire speech and language disabilities through
                    organic and nonorganic causes, such as a stroke,
                    Parkinson’s, dementia, etc. Treatment for adults is known as
                    rehabilitation. It is rehabilitation because the therapist
                    is attempting to restore the previously learned skill. A
                    nonorganic cause might be traumatic head injury from a car
                    accident.
                  </h2>
                  <p className="p-4 bg-sky-500/20 rounded">
                    Although every case is different, communication disorders
                    seen most in treating adults are{' '}
                    <strong>
                      voice disorders, motor speech disorders, other
                      neurologically based communicative disorders, and
                      non-neurological disorders
                    </strong>
                    .
                  </p>

                  <p>
                    SATC is proud to offer an array of{' '}
                    <Link
                      href="/services/speechtherapy"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      speech
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/services/occupationaltherapy"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      occupational
                    </Link>{' '}
                    therapy services to adults to enhance their quality of life.
                    We've included some of our adult services and helpful
                    information below. Click to learn more! If you're interested
                    in further information or would like to call to schedule an
                    appointment, you can find our contact information{' '}
                    <Link
                      href="/contact"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      here
                    </Link>{' '}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:w-full md:mt-4 md:mx-4">
                  {/* Dropdowns Section */}
                  <div className="flex flex-col md:flex-row w-full mb-6 justify-center items-center">
                    <AdultDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}
