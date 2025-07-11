import React from 'react';
import { TherapyCarousel } from '@/components';
import { speechSlides } from '@/data';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';
import Link from 'next/link';
import Image from 'next/image';
import SpeechDropdown from './SpeechDropdown';
import SpeakOutFooter from './SpeakOutFooter';
import { TransitionWrapper } from '@/components/Animations';
import BlurredCarousel from '@/components/Carousel/BlurredCarousel';
import WhatIsSpeech from './WhatIsSpeech';
import SpeechIntro from './SpeechIntro';
import FAQLinks from '@/components/FAQLinks/FAQLinks';
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
        <div className="container mx-auto p-4 max-w-4xl xl:max-w-5xl mt-12">
          {/* First Row: Carousel and Paragraph */}
          <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
            <div className="w-full h-1/2 md:w-96 md:mr-4 ">
              {/* Carousel Container */}
              <TherapyCarousel
                slides={speechSlides}
                className="w-full h-full "
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 mt-8 font-nunito mx-auto text-center md:text-left md:mt-0 md:mx-6">
                Speech Therapy
              </h1>
              <SpeechIntro />
            </div>
          </div>
          <FAQLinks topics={faqTopics} basePath="/services/speechtherapy/faq" />
          {/* Second Row: Content, Video, and Dropdowns */}
          <div className="md:mt-8">
            <div className="flex flex-col md:flex-row md:gap-6">
              {/* Main Content */}
              <div className="flex flex-col w-full ">
                <div className="mt-3 text-gray-700 leading-relaxed">
                  {/* Floating Video Section and Dropdowns */}

                  {/* Speech Dropdown Component */}
                  {/* Text Content (What is Speech?)*/}
                  <WhatIsSpeech />
                  {/* Image Row Container */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 md:my-10 mx-auto justify-items-center items-center">
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015242/Speech%20Avenues/Speech%20Therapy/speechpage2_fywv7x.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015078/Speech%20Avenues/Speech%20Therapy/speechpage1_j1cmak.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015537/Speech%20Avenues/Speech%20Therapy/speechpage3_bt5qea.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SpeechDropdown />
          <SpeakOutFooter />
        </div>
      </TransitionWrapper>
    </>
  );
}
