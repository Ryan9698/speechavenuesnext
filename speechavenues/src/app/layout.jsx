import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Set viewport

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // Theme set to white
  themeColor: '#ffffff',
};

export const metadata = {
  metadataBase: new URL('https://speechavenues.com/'),
  // The object isn't necessary at this point but the site may grow and the data may change in the future. It's a reminder for me that you can have different fields in the title
  canonical: '/',
  applicationName: 'Speech Avenues (Next)',
  author: {
    name: 'Ryan Caltabiano',
    url: 'https://ryancaltabiano.com',
  },
  title: {
    default: 'Speech Avenues Therapy Co.',
  },
  description:
    'Speech Avenues Therapy Co offers speech and occupational therapy services to adults and children in Rockledge, FL. Let us help you achieve your goals!',
  keywords: [
    'Speech Avenues',
    'speech therapy',
    'occupational therapy',
    'satc',
    'school for autism',
    'autism',
    'cerebral palsy',
    'downs syndrome',
    'child with autism',
    'adult with autism',
    'Speech Therapy Rockledge FL',
    'ASD',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    siteName: 'Speech Avenues Therapy Co.',
    images: [
      {
        url: '/images/mainpageimages/logo.jpg',
        width: 600,
        height: 400,
        alt: 'Speech Avenues Academy offers personalized speech and occupational therapy services in Rockledge, Florida',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  applicationName: 'Speech Avenues Therapy Co.',
  icons: {
    icon: '/favicon.ico',
  },
  // Add additional verifications for others platforms such as Yandex in the future.
  verification: {
    // Domain is verified by Google through DNS
    yandex: ['e1a1ffab5f23a05c'],
    other: {
      //   "msvalidate.01": ["YOUR_DATA"],
      //   "facebook-domain-verification": ["YOUR_DATA"],
      me: ['rcaltabiano90@gmail.com', 'https://www.ryancaltabiano.com'],
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speech Avenues Therapy - Home',
    description:
      'Speech Avenues Therapy Co offers speech and occupational therapy services to adults and children in Rockledge, FL. Let us help you achieve your goals!',
    images: [
      {
        url: '/images/mainpageimages/logo.jpg',
        alt: 'Speech Avenues Therapy Company',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
