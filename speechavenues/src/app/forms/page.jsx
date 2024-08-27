import React from 'react';
import PacketList from '@/components/PacketList';

export const metadata = {
  title: 'Intake Forms - Speech Avenues Therapy Co.',
  description:
    'Downloadable intake forms for Speech Avenues services. Please fill them out before you arrive.',
  alternates: {
    canonical: `/forms`,
  },
  keywords: ['speech avenues intake forms', 'satc intake forms'],
};

export default function Forms() {
  return (
    <>
      <div className="container mx-auto p-4 max-w-3xl">
        <div>
          <h1 className="text-5xl font-bold mb-6 cursiveFont text-center mt-6 md:mt-2">
            Patient Intake Forms
          </h1>
        </div>
        <h2 className="mt-4 leading-loose text-center md:text-left">
          Below you will find downloadable intake forms for our services. We ask
          that you please print out these forms and fill them out before you
          arrive.
        </h2>
        <PacketList />
      </div>
    </>
  );
}
