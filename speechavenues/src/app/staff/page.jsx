import React from 'react';
import staffList from '@/data/staffdata/StaffList';
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

export default function StaffPage() {
  return (
    // Global Container
    <div className="container mx-auto px-4 pb-4">
      <h1 className="flex justify-center items-center p-2 text-slate-800 font-dancing text-2xl">
        Speech and Occupational Therapy Staff
      </h1>
      <h2 className="flex justify-center items-center text-center px-2 text-slate-800 font-sans text-sm mx-24 pb-6">
        These are the skilled and diverse staff at Speech Avenues, dedicated to
        helping you or a loved on attain your goals. Our staff members are
        highly skilled in their respective fields with years of experience.
      </h2>
      {/* Grid Styling for Staff Cards */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {staffList.map((member) => (
            <StaffMember key={member.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
