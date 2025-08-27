'use client';

import React, { useEffect, useState } from 'react';
import { useConsent } from '@/components/ConsentProvider/ConsentProvider';

export default function ConsentBanner() {
  const { consent, accept, reject } = useConsent();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || consent !== 'unset') return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-5xl
                 rounded-t-xl border border-gray-300 bg-white/95 backdrop-blur
                 p-4 shadow-xl flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
    >
      <p className="text-sm text-gray-800">
        We use cookies to analyze traffic and improve your experience. You can
        accept or deny analytics/advertising cookies.
      </p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={reject}
          className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Deny
        </button>
        <button
          onClick={accept}
          className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
