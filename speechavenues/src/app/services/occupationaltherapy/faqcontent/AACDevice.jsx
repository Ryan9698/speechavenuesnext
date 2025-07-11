import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AACDevice() {
  return (
    <div className="p-6 bg-white text-gray-800 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        What is an AAC Device? How do we use it?
      </h2>
      <p className="mb-4">
        The{' '}
        <span className="italic">
          American Speech-Language-Hearing Association (ASHA)
        </span>{' '}
        describes an AAC as “all of the ways someone communicates besides
        talking.” People of all ages can use an AAC if they have trouble with
        speech or expressive language skills. AAC is helpful for, but not
        limited to, apraxia of speech or childhood apraxia of speech (CAS),
        autism, and other speech/language delays. These are communication
        devices or “talkers.” There are multiple levels of AAC.
      </p>
      <p className="mb-4">
        Our Speech-Language Pathologist evaluates the patient and programs the
        AAC for our patients to start learning on/using.
      </p>
      <p className="mb-4">
        {' '}
        A few of our students use these tools to help with their everyday
        activities.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <strong className="italic">AUGMENTATIVE</strong>: Adds to someone’s
          speech.
        </li>
        <li>
          <strong className="italic">ALTERNATIVE</strong>: Used instead of
          speech or alongside speech.
        </li>
      </ul>
      <p className="mb-4">
        Some individuals use an AAC their entire life, while others may use it
        as a stepping stone for their next voice journey. It is a fallacy that
        people who use AAC will not promote speech.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Types of AAC:
      </h3>
      <div className="mb-4">
        <h4 className="text-lg font-bold text-gray-800 mb-2">
          “No-Tech” and “Low-Tech” Options:
        </h4>
        <p className="mb-2">
          These options do not require much technology at all.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Gestures/facial expressions</li>
          <li>Writing</li>
          <li>Drawing</li>
          <li>Spelling words by pointing to letters/photos</li>
          <li>AAC Board (Pictured Below)</li>
        </ul>

        {/* AAC Board (Lower-tech) */}
        <Image
          src="/images/therapyimages/ot/aac1.webp"
          alt="AAC Board (Lower-tech)"
          width={1000}
          height={700}
          className="p-2 pt-4"
        />
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-bold text-gray-800 mb-2">
          “High-Tech” Options:
        </h4>
        <p className="mb-4 text-center">
          These devices do require some technology. They are used to speak a
          message out loud for the person after they push a button.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Using an app to communicate</li>
          <li>Using a device/tablet to generate speech/voice</li>
        </ul>

        {/* AAC Board (High-tech) Image */}

        <Image
          src="/images/therapyimages/ot/aac2.webp"
          alt="AAC Board (High-tech)"
          width={900}
          height={700}
          className="p-2 pt-6"
        />
      </div>
      <p className="mb-4">
        For more information, please visit the following resources:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link
            href="https://www.asha.org/public/speech/disorders/aac/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.asha.org/public/speech/disorders/aac/
          </Link>
        </li>
        <li>
          <Link
            href="https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/
          </Link>
        </li>
      </ul>
      <p className="mt-6">
        If you have any further questions or require more assistance, please
        <Link href="/contact" className="text-blue-500 hover:underline">
          {' '}
          reach out to us.{' '}
        </Link>
      </p>
    </div>
  );
}
