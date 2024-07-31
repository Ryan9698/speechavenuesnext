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
};

export default function StaffPage() {
  return (
    // Global Container
    <div className="container mx-auto px-4 pb-4">
      {/* h1/h2 elements for SEO purposes, may incorporate a meaningful one later */}
      <h1 className="visually-hidden">Speech and Occupational Therapy Staff</h1>
      <h2 className="visually-hidden">
        This is a placeholder paragraph using a visually-hidden class for SEO
        purposes.
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
