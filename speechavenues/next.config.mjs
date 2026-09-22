/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';

    const enforcedCsp = [
      "default-src 'self'",
      [
        "img-src 'self' data: blob:",
        'https://res.cloudinary.com',
        'https://img.youtube.com',
        'https://www.googletagmanager.com',
      ].join(' '),
      [
        "script-src 'self' 'unsafe-inline'",
        isDevelopment ? "'unsafe-eval'" : '',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
      ]
        .filter(Boolean)
        .join(' '),
      [
        "connect-src 'self'",
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://analytics.google.com',
        'https://*.google-analytics.com',
        'https://*.analytics.google.com',
        'https://stats.g.doubleclick.net',
        'https://api.spotify.com',
      ].join(' '),
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "object-src 'none'",
      'frame-src https://www.youtube.com https://open.spotify.com',
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; ');

    const reportOnlyCsp = [
      "default-src 'self'",
      [
        "img-src 'self' data: blob:",
        'https://res.cloudinary.com',
        'https://img.youtube.com',
        'https://www.googletagmanager.com',
      ].join(' '),
      [
        "script-src 'self' 'unsafe-inline'",
        isDevelopment ? "'unsafe-eval'" : '',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
      ]
        .filter(Boolean)
        .join(' '),
      [
        "connect-src 'self'",
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
        'https://analytics.google.com',
        'https://*.google-analytics.com',
        'https://*.analytics.google.com',
        'https://stats.g.doubleclick.net',
        'https://api.spotify.com',
      ].join(' '),
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "object-src 'none'",
      'frame-src https://www.youtube.com https://open.spotify.com',
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: enforcedCsp,
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: reportOnlyCsp,
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), geolocation=(), microphone=(), payment=(), usb=(), browsing-topics=()',
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128],
  },
};

export default nextConfig;
