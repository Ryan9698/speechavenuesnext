import React from 'react';
import {
  speechStaff,
  otStaff,
  nonTherapyStaff,
} from '@/data/staffdata/StaffList';
import StaffMember from '@/components/StaffMember';

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
export default function StaffPage() {
  return (
    // Global Container
    <div className="container mx-auto px-4 mb-4">
      <div className="flex flex-col lg:mx-20 text-center">
        <h1 className="flex justify-center items-center  text-slate-800 font-dancing text-4xl font-bold my-8">
          Our Team
        </h1>
        <h2 className={`${subHeading} mb-4`}>
          These are the skilled and diverse staff at Speech Avenues, dedicated
          to helping you or a loved one attain your goals.
        </h2>
        <h3 className={`${subHeading} mb-8`}>
          Our staff members are highly skilled in their respective fields with
          years of experience.
        </h3>
      </div>
      {/* Grid Styling for Staff Cards */}

      {/* Speech Therapist Group */}

      <h1 className="flex justify-center items-center p-2 text-slate-800 font-dancing text-2xl">
        Speech Therapy Staff
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {speechStaff.map((member) => (
            <StaffMember key={member.id} {...member} />
          ))}
        </div>
      </div>

      {/* Occupational Therapist Group */}

      <h1 className="flex justify-center items-center p-2 mt-8 text-slate-800 font-dancing text-2xl">
        Occupational Therapy Staff
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {otStaff.map((member) => (
            <StaffMember key={member.id} {...member} />
          ))}
        </div>
      </div>

      {/* Non-Therapy Staff Group */}

      <h1 className="flex justify-center items-center p-2 mt-8 text-slate-800 font-dancing text-2xl">
        Non-Therapy Staff
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {nonTherapyStaff.map((member) => (
            <StaffMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
