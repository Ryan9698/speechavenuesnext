import React from 'react';
import Image from 'next/image';
import { IntroSection } from '@/components/HomepageContent';
import JoinTeamCTA from '@/components/JoinTeamCTA/JoinTeamCTA';
import GoogleReviewCTA from '@/components/GoogleReviewCTA/GoogleReviewCTA';

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
      <IntroSection />
      <GoogleReviewCTA />
      <JoinTeamCTA className="mt-6" />
    </>
  );
}
