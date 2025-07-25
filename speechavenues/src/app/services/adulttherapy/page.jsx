import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TherapyCarousel } from '@/components';
import { adultSlides } from '@/data';
// import SpotifyPlayer from '@/components/Spotify/SpotifyPlayer';
import { TransitionWrapper } from '@/components/Animations';
import AdultHeader from './AdultHeader';
import { adultFaqTopics } from './faq/adultFaqData';
import FAQLinks from '@/components/FAQLinks/FAQLinks';
import { SpeakOut } from '@/components';

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
        <div className="container p-4 mx-auto md:max-w-3xl lg:max-w-4xl my-12 space-y-12">
          <AdultHeader />
          <div>
            <FAQLinks
              topics={adultFaqTopics}
              basePath="/services/adulttherapy/faq"
            />
          </div>
          <div className="">
            <SpeakOut />
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}
