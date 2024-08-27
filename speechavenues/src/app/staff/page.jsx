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
