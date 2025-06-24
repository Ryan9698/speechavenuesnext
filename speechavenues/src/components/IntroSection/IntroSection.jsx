'use client';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 mt-10 text-gray-800 mb-10">
      <h1
        className="text-5xl md:text-6xl font-bold mb-8 text-center text-blue-900"
        style={{ fontFamily: '"Dancing Script", cursive' }}
      >
        Welcome!
      </h1>

      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        <p>
          Welcome to Speech Avenues Therapy Co. (
          <span className="font-bold">S.A.T.C</span>), where we redefine
          possibilities through our professional{' '}
          <Link
            href="/services/speechtherapy"
            className="font-bold text-blue-600 hover:underline"
          >
            speech
          </Link>{' '}
          and{' '}
          <Link
            href="/services/occupationaltherapy"
            className="font-bold text-blue-600 hover:underline"
          >
            occupational
          </Link>{' '}
          therapy services. Our dedicated family of therapists is committed to
          enhancing communication skills and promoting functional independence
          for individuals across all age groups.
        </p>
        <p>
          At S.A.T.C, we understand that every individual is unique. Our
          therapists are dedicated to assisting each client by creating
          carefully tailored Therapy Care Plans, reflecting our commitment to
          personalized care. Our compassionate approach and cutting-edge
          techniques have proven to unlock our clients' full potential,
          nurturing growth, and empowering them to overcome challenges while
          enhancing their unique special abilities.
        </p>
        <div className="text-center  mt-6 mb-8 bg-sky-400/50 w-full p-2 rounded-lg">
          <p className="font-semibold text-lg">
            For inquiries or appointments:
          </p>
          <a
            href="tel:+13213382419"
            className="text-xl font-bold text-blue-700 hover:underline"
          >
            321-338-2419
          </a>
        </div>
      </div>
    </section>
  );
}
