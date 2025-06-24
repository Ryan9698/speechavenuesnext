import React from 'react';
import PhoneIcon from '@/components/PhoneIcon';
import Image from 'next/image';
import Link from 'next/link';
import IntroSection from '@/components/IntroSection/IntroSection';

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
      {/* Image Banner */}
      <div className="w-full mt-16">
        <Image
          src="/images/mainpageimages/satcbannernew.webp"
          alt="Logo"
          width={1920}
          height={1080}
          className=""
        />
      </div>

      {/* Introduction Content */}
      <IntroSection />
    </>
  );
}
