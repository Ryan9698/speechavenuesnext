import {
  Quicksand,
  Nunito_Sans,
  Schoolbell,
  Dancing_Script,
} from 'next/font/google';

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const schoolbell = Schoolbell({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-schoolbell',
  display: 'swap',
});

export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
});
