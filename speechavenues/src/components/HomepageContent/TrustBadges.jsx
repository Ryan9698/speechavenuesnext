'use client';
import { ShieldCheck, HeartHandshake, UserCheck, Activity } from 'lucide-react';

export default function TrustBadges({ horizontal = false }) {
  const items = [
    { Icon: ShieldCheck, className: 'text-sky-600', label: 'HIPAA Compliant' },
    {
      Icon: HeartHandshake,
      className: 'text-rose-500',
      label: 'Autism-Friendly',
    },
    {
      Icon: UserCheck,
      className: 'text-emerald-600',
      label: 'Licensed Therapists',
    },
    {
      Icon: Activity,
      className: 'text-indigo-600',
      label: 'Neurodiversity Inclusive',
    },
  ];

  return (
    <div
      className={
        horizontal
          ? 'flex flex-wrap gap-6 justify-center sm:justify-start'
          : 'grid grid-cols-2 gap-6 sm:gap-x-10 sm:gap-y-8 justify-items-center'
      }
    >
      {items.map(({ Icon, label, className }) => (
        <div key={label} className="flex flex-col items-center text-center">
          <Icon className={`w-8 h-8 ${className}`} />
          <p className="text-sm font-medium text-gray-700 mt-2">{label}</p>
        </div>
      ))}
    </div>
  );
}
