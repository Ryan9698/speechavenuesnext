'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'cookie-consent-v1';
const ConsentCtx = createContext({
  consent: 'unset',
  accept: () => {},
  reject: () => {},
});

function updateConsent(mode) {
  window.gtag?.('consent', 'update', {
    ad_storage: mode,
    ad_user_data: mode,
    ad_personalization: mode,
    analytics_storage: mode,
  });
}

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState('unset');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'granted' || stored === 'denied') {
        setConsent(stored);
        updateConsent(stored);
      }
    } catch {}
  }, []);

  const accept = () => {
    setConsent('granted');
    try {
      localStorage.setItem(STORAGE_KEY, 'granted');
    } catch {}
    updateConsent('granted');
  };

  const reject = () => {
    setConsent('denied');
    try {
      localStorage.setItem(STORAGE_KEY, 'denied');
    } catch {}
    updateConsent('denied');
  };

  return (
    <ConsentCtx.Provider value={{ consent, accept, reject }}>
      {children}
    </ConsentCtx.Provider>
  );
}

export const useConsent = () => useContext(ConsentCtx);
