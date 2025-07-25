import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import BannerImage from './BannerImage';
import TrustBadges from './TrustBadges';

export default function IntroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-6 text-gray-800 mb-14">
      {/* Banner */}
      <BannerImage className="mt-24 md:mb-12 mb-8 rounded-xl" />

      <div className="flex flex-col lg:flex-row gap-12  items-start">
        {/* Left Column: Intro Text + CTA + Badges */}
        <div className="lg:w-2/3 w-full space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start ">
            <a
              href="tel:+13213382419"
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold text-lg"
            >
              <Phone size={20} />
              Call 321-338-2419
            </a>
            <a
              href="mailto:admin@speechavenues.com"
              className="inline-flex items-center gap-2 px-5 py-3 border border-blue-600 text-blue-700 rounded-lg shadow hover:bg-blue-50 transition font-semibold text-lg"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>

          {/* Trust Badges in Horizontal Row */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center sm:justify-start">
            <TrustBadges horizontal />
          </div>
        </div>

        {/* Right Column: Office Image */}
        <div className="lg:w-1/3 w-full">
          <Image
            src="/images/mainpageimages/newoffice.webp"
            alt="Speech Avenues Office"
            width={773}
            height={1000}
            className="rounded-xl shadow-md object-cover w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
