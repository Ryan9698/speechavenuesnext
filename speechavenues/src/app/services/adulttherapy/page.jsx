import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import adultSlides from '@/data/adultpicturesdata/AdultPictures';
import AdultDropdown from './Dropdown';
import SpeakOut from './SpeakOut';
import SpeakOutAlt from './SpeakOutAlt';
import SpotifyPlayer from '@/components/Spotify/SpotifyPlayer';

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
    <div className="container mx-auto max-w-4xl">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
        <div className="w-full sm:w-96 md:w-[500px] md:mr-4 md:mx-4">
          {/* Carousel Container */}
          <div className="md:w-full mt-2 mx-2 md:mx-2">
            <Carousel slides={adultSlides} className="w-full h-full" />
          </div>

          {/* Spotify Player Component (Needs Playlist) */}

          {/* <div className="md:mt-12 ml-2 w-full order-2 md:order-none flex justify-center items-center">
            <SpotifyPlayer url="https://open.spotify.com/embed/playlist/6pLvwniLaaDRHJfZj0IH7m?utm_source=generator&theme=0" />
          </div> */}
        </div>

        <div className="flex flex-col marker:w-full md:w-2/3 order-1 md:order-none">
          <h1 className="text-5xl font-bold text-gray-800 mt-8 font-dancing mx-auto text-center md:text-left md:mt-4 md:mx-6 md:mb-6">
            Adult Therapy
          </h1>
          <div className=" mb-4 md:mb-0">
            <div className="md:space-y-4 md:ml-6 md:mb-6">
              <h2>
                Adults acquire speech and language disabilities through organic
                and nonorganic causes, such as a stroke, Parkinson’s, dementia,
                etc. Treatment for adults is known as rehabilitation. It is
                rehabilitation because the therapist is attempting to restore
                the previously learned skill. A nonorganic cause might be
                traumatic head injury from a car accident.
              </h2>
              <p className="">
                Although every case is different, communication disorders seen
                most in treating adults are voice disorders, motor speech
                disorders, other neurologically based communicative disorders,
                and non-neurological disorders.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:w-full md:mt-4 md:mx-4">
              {/* Dropdowns Section */}
              <div className="flex flex-col md:flex-row w-full mb-6 justify-center items-center">
                <AdultDropdown />
              </div>

              {/* SpeakOut Section*/}
            </div>
          </div>
          {/* Spotify Player */}
        </div>
      </div>

      {/* Speak Out Banner and Dropdowns*/}
      <div className="w-full max-w-4xl flex flex-col md:flex-row mx-auto md:ml-4">
        <SpeakOutAlt />
      </div>
    </div>
  );
}
