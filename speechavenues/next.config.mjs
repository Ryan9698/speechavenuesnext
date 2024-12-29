/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.devtool = 'eval-source-map';
    }
    return config;
  },
  async headers() {
    const isDevelopment = process.env.NODE_ENV === 'development';
    return [
      {
        source: '/(.*)', // Match all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDevelopment
              ? "default-src 'self'; img-src 'self' data: https://res.cloudinary.com https://img.youtube.com https://www.googletagmanager.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-src 'self' https://www.youtube.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
              : "default-src 'self'; img-src 'self' data: https://res.cloudinary.com https://img.youtube.com https://www.googletagmanager.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; object-src 'none'; frame-src 'self' https://www.youtube.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
          },
          // Enables HSTS for HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3000; includeSubDomains; preload',
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
            value: 'geolocation=(), microphone=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com', 'img.youtube.com'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1440],
    imageSizes: [16, 32, 48, 64, 96, 128],
    path: '/_next/image',
    loader: 'default',
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
