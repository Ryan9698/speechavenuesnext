import React from "react";
import staffList from "@/data/staffdata/StaffList";
import StaffMember from "@/components/StaffMember";
import { Metadata } from 'next';

export const metadata = {
  title: "Therapy Staff - Speech Avenues Therapy Co.",
  description: "Below you will find the diverse and talented staff at Speech Avenues to help the individual in your life achieve improved and lasting independence."
}

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4 pb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {staffList.map((member) => (
          <StaffMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
