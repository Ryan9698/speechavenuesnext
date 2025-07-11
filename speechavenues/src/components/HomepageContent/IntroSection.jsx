import Link from 'next/link';
import Image from 'next/image';
import TrustBadges from './TrustBadges';
import CallToAction from './CallToAction';
import { Phone, Mail } from 'lucide-react';
import BannerImage from './BannerImage';

export default function IntroSection() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 mt-6 text-gray-800 mb-14">
        <BannerImage className="mt-24 md:mb-12 mb-8 rounded-xl" />

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Main Content on the Left */}
          <div className="lg:w-2/3 w-full space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Welcome to <strong>Speech Avenues Therapy Co. (S.A.T.C)</strong>,
              where we redefine possibilities through our professional{' '}
              <Link
                href="/services/speechtherapy"
                className="font-semibold text-blue-600 hover:underline"
              >
                speech
              </Link>{' '}
              and{' '}
              <Link
                href="/services/occupationaltherapy"
                className="font-semibold text-blue-600 hover:underline"
              >
                occupational
              </Link>{' '}
              therapy services.
            </p>

            <p>
              Our dedicated family of therapists is committed to enhancing
              communication and promoting independence across all age groups.
              Every individual is unique — that’s why our personalized Therapy
              Care Plans are carefully tailored to unlock each client’s full
              potential with compassion and expertise.
            </p>
          </div>

          {/* Trust Badges + CTA on the Right */}
          <div className="lg:w-1/3 w-full bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm text-center space-y-4">
            <h2 className="text-lg font-semibold text-blue-800">
              Why Choose Us?
            </h2>
            <TrustBadges />
            <div className="mt-6">
              <CallToAction />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
