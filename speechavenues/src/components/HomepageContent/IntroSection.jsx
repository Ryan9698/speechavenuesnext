'use client';

import Link from 'next/link';
import TrustBadges from './TrustBadges';
import CallToAction from './CallToAction';

export default function IntroSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-14 text-gray-800 mb-14">
      {/* Welcome Header */}
      <h1 className="text-5xl md:text-6xl font-quicksand font-bold mb-10 text-center text-blue-900">
        Welcome!
      </h1>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
        {/* Trust Badges Section */}
        <div className="lg:w-1/3 w-full bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm text-center space-y-4">
          <h2 className="text-lg font-semibold text-blue-800">
            Why Choose Us?
          </h2>
          <TrustBadges />
          <div className="block lg:hidden mt-6">
            <CallToAction />
          </div>
        </div>

        {/* Main Content */}
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

          {/* CTA Box For Large Screens located underneath content*/}
          <div className="hidden lg:block">
            <CallToAction />
          </div>
        </div>
      </div>
    </section>
  );
}
