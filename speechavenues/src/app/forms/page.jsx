import React from 'react';
import PacketList from '@/components/PacketList/PacketList';
import { TransitionWrapper } from '@/components/Animations';

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
      <TransitionWrapper>
        <div className="container mx-auto p-4 max-w-5xl">
          <div>
            <h1 className="text-5xl text-gray-800 font-bold mb-12 font-nunito tracking-tight text-center my-20">
              Patient Intake Forms
            </h1>
          </div>
          <p className="mt-4 mb-12 text-gray-700 leading-loose text-center md:text-left">
            Please select the intake forms appropriate for your appointment.
            Download, print, and complete the forms before your visit, then
            bring the completed paperwork with you. If you're unsure which forms
            you need, please contact our office for assistance.
          </p>
          <PacketList />
        </div>
      </TransitionWrapper>
    </>
  );
}
