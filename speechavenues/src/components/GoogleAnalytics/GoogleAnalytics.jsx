// // components/GoogleAnalytics.js

// import React from 'react';
// import Script from 'next/script';

// const GoogleAnalytics = () => {
//   return (
//     <>
//       <Script
//         strategy="lazyOnload"
//         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
//       />

//       <Script strategy="lazyOnload" id="google-analytics">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
//             page_path: window.location.pathname,
//           });
//         `}
//       </Script>
//     </>
//   );
// };

// export default GoogleAnalytics;

'use client';

import Script from 'next/script';

const GA_IDS = (process.env.NEXT_PUBLIC_GA_IDS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

export default function GoogleAnalytics() {
  if (!GA_IDS.length) return null;

  return (
    <>
      {/* Load gtag once with the first ID */}
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_IDS[0]}`}
        strategy="afterInteractive"
      />
      {/* Init dataLayer + deny-by-default consent + multi-ID config */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }

          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });

          gtag('js', new Date());

          ${GA_IDS.map(
            (id) => `gtag('config', '${id}', { send_page_view: false });`
          ).join('\n')}
        `}
      </Script>
    </>
  );
}

// Helpers (optional)
export const gaPageview = (url) => {
  if (typeof window === 'undefined') return;
  const ids = (process.env.NEXT_PUBLIC_GA_IDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  ids.forEach((id) => {
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.origin + url,
      page_path: new URL(url, window.location.origin).pathname,
      send_to: id,
    });
  });
};

export const gaEvent = (name, params = {}) => {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
};
