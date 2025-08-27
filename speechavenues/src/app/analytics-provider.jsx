'use client';

import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { gaPageview } from '@/components/GoogleAnalytics/GoogleAnalytics';
import { useConsent } from '@/components/ConsentProvider/ConsentProvider';

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { consent } = useConsent();

  useEffect(() => {
    if (!pathname) return;
    if (consent !== 'granted') return;

    const url = `${pathname}${
      searchParams?.toString() ? `?${searchParams}` : ''
    }`;
    gaPageview(url);
  }, [pathname, searchParams, consent]);

  return null;
}
