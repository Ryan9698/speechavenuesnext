import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Carousel from '@/components/Carousel';
// import { TherapyCarousel } from '@/components';
// import { otSlides } from '@/data';
import ModalClient from '@/components/Modal/ModalClient';
import SensoryDisorder from './faqcontent/SensoryDisorder';
import SensorySystem from './faqcontent/SensorySystem';
import WhatIsAutism from './faqcontent/WhatIsAutism';
import AACDevice from './faqcontent/AACDevice';
import TherapeuticYoga from './faqcontent/TherapeuticYoga';
import { TransitionWrapper } from '@/components/Animations';
import OTHeader from './OTHeader';
import WhatIsOT from './WhatIsOT';
import FunFacts from './FunFacts';
import WhoDoWeTreat from './WhoDoWeTreat';
import WhyChooseUs from './WhyChooseUs';
import OurFacility from './OurFacility';
import CTA from './CTA';
import FAQLinks from '@/components/FAQLinks/FAQLinks';
import { otFaqTopics } from './faq/otFaqData';
import { AnimatedWrapper } from '@/components/Animations';
import { WindowSize, AnimationLogger, DebugMount } from '@/components';

export const metadata = {
  title: 'Speech Avenues Occupational Therapy',
  description:
    'Speech Avenues Occupational Therapists are healthcare professionals dedicated to empowering patients of all ages to achieve independence and enhance their quality of life.',
  alternates: {
    canonical: `/services/occupationaltherapy`,
  },
  keywords: [
    'Occupational Therapy',
    'occupational therapy near me',
    'occupational therapist near me rockledge',
    'occupational therapy near me rockledge',
    'occupational therapy near me florida',
    'occupational therapy rockledge',
    'adult occupational therapy',
    'child occupational therapy',
    'autism',
    'downs syndrome',
    'adult with autism',
    'ASD',
    'satc',
  ],
};

const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;
export default function OccupationalTherapy() {
  return (
    <>
      <TransitionWrapper>
        <div className="container p-4 mx-auto md:max-w-3xl lg:max-w-4xl space-y-16 my-12">
          <OTHeader />
          <AnimatedWrapper>
            <div className="">
              <WhatIsOT />
            </div>
          </AnimatedWrapper>
          {/* Fun Facts Section with Image*/}

          <FunFacts />

          <WhoDoWeTreat />

          {/* Modals with All Additional Information */}

          {/* <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-2 mt-6 md:mt-10 mb-6 sm:mb-0 lg:p-4">
            <div className="">
              <ModalClient triggerLabel="Sensory Processing Disorder">
                <SensoryDisorder />
              </ModalClient>
            </div>
            <div className="">
              <ModalClient triggerLabel="The Eight Sensory Systems">
                <SensorySystem />
              </ModalClient>
            </div>
            <div className="">
              <ModalClient triggerLabel="Autism Spectrum Disorder">
                <WhatIsAutism />
              </ModalClient>
            </div>
            <div className="">
              <ModalClient triggerLabel="AAC DEVICES: Augmentative and Alternative Communication">
                <AACDevice />
              </ModalClient>
            </div>
            <div className="">
              <ModalClient triggerLabel="Therapeutic Yoga">
                <TherapeuticYoga />
              </ModalClient>
            </div>
          </div> */}
          <div className="">
            <FAQLinks
              topics={otFaqTopics}
              basePath="/services/occupationaltherapy/faq"
            />
          </div>
          {/* Why Choose Us Section (Photo and Text) */}

          <WhyChooseUs />

          {/* Facility Section */}
          <OurFacility />

          {/* Call to Action */}

          <CTA />
        </div>
      </TransitionWrapper>
    </>
  );
}
