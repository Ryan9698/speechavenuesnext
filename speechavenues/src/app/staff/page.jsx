import React from 'react';
import {
  speechStaff,
  otStaff,
  nonTherapyStaff,
} from '@/data/staffdata/StaffList';
import StaffMember from '@/components/StaffMember';
import { TransitionWrapper } from '@/components/Animations';
import { StaffDirectory } from '@/components';

export const metadata = {
  title: 'Therapy Staff - Speech Avenues Therapy Co.',
  description:
    'Below you will find the diverse and talented staff at Speech Avenues to help the individual in your life achieve improved and lasting independence.',
  alternates: {
    canonical: `/staff`,
  },
  keywords: [
    'Speech Avenues',
    'speech therapy near me',
    'occupational therapy near me rockledge',
    'speech therapy near me rockledge',
    'speech avenues therapy',
    'speech avenues staff',
    'feeding therapy',
    'satc staff',
    'autism',
    'downs syndrome',
    'adult with autism',
    'ASD',
  ],
};

const subHeading = `flex justify-center items-center text-center px-2 text-slate-800 font-sans text-sm md:mx-24`;
const staffHeading =
  'flex justify-center items-center p-2 mt-12 text-slate-800 font-nunito text-2xl';
export default function StaffPage() {
  return (
    // Global Container
    <>
      <TransitionWrapper>
        <div className="container mx-auto px-4 mb-4 mt-16 md:max-w-3xl lg:max-w-4xl">
          <div className="flex flex-col lg:mx-20 text-center">
            <h1 className="flex justify-center items-center  text-slate-800 font-nunito tracking-tight text-4xl font-bold my-8">
              Our Team
            </h1>
            <h2 className={`${subHeading} mb-4`}>
              These are the skilled and diverse staff at Speech Avenues,
              dedicated to helping you or a loved one attain your goals.
            </h2>
            <h3 className={`${subHeading} mb-8`}>
              Our staff members are highly skilled in their respective fields
              with years of experience.
            </h3>
          </div>
          {/* Grid Styling for Staff Cards */}

          {/* Speech Therapist Group */}
          {/* Section 1: Speech */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Speech Therapy Staff
            </h2>
            <StaffDirectory staff={speechStaff} />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Occupational Therapy Staff
            </h2>
            <StaffDirectory staff={otStaff} />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Non-Therapy Staff
            </h2>
            <StaffDirectory staff={nonTherapyStaff} />
          </section>
        </div>
      </TransitionWrapper>
    </>
  );
}
