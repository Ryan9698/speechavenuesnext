import React from 'react';
import { TherapyCarousel } from '@/components';
import { speechSlides } from '@/data';
import { SpeakOut } from '@/components';
import { TransitionWrapper } from '@/components/Animations';
import BlurredCarousel from '@/components/Carousel/BlurredCarousel';
import WhatIsSpeech from './WhatIsSpeech';
import SpeechHeader from './SpeechHeader';
import { FAQLinks } from '@/components';
import { faqTopics } from './faq/speechFaqData';

export const metadata = {
  title: 'Speech Therapy - Speech Avenues Therapy Co.',
  description:
    'Speech Avenues Therapy Co. has a team of gifted therapists who create personalized care plans to help patients reach their potential.',
  alternates: {
    canonical: `/services/speechtherapy`,
  },
  keywords: [
    'Speech Therapy',
    'speech therapy near me',
    'speech therapy near me florida',
    'adult speech therapy',
    'child speech therapy',
    'feeding therapy',
    'satc',
    'aac',
    'aac rockledge florida',
    'autism',
    'downs syndrome',
    'adult with autism',
    'Speech Therapy Rockledge',
    'ASD',
  ],
};

export default function SpeechTherapy() {
  return (
    <>
      <TransitionWrapper>
        <div className="container mx-auto p-4 md:max-w-3xl xl:max-w-4xl mt-10">
          {/* First Row: Carousel and Paragraph */}

          <SpeechHeader />

          <WhatIsSpeech />
          <div className="">
            <FAQLinks
              topics={faqTopics}
              basePath="/services/speechtherapy/faq"
            />
          </div>
          <div className="mt-16 mb-12">
            <SpeakOut />
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}
