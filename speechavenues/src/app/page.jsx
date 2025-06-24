import React from 'react';
import Image from 'next/image';
import { IntroSection } from '@/components/HomepageContent';

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
    'downs syndrome',
    'adult with autism',
    'child with autism',
    'ASD',
  ],
};

export default function Home() {
  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto mt-16 overflow-hidden rounded-xl">
        <Image
          src="/images/mainpageimages/satcbannernew.webp"
          alt="Logo"
          width={1440}
          height={617}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      <IntroSection />
    </>
  );
}
