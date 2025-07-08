import Link from 'next/link';

export default function SpeechIntro() {
  return (
    <div className="bg-white p-6 space-y-5">
      <h2>
        <span className="font-bold">Speech Therapy</span> services are dedicated
        to enhancing communication, cognitive communication, language
        development, articulation, voice, swallowing, feeding, and both
        expressive and receptive language skills. Our Speech-Language
        Pathologists specialize in Augmentative and Alternative Communication
        (AAC) and offer AAC device services and training. We're proud to say we
        are one of the only providers in the Brevard County area that offer
        speech and{' '}
        <Link
          href="/services/occupationaltherapy"
          className="text-blue-500 hover:text-blue-600"
        >
          occupational
        </Link>{' '}
        therapy services to <span className="italic font-bold ">both</span>{' '}
        <strong>
          <Link
            href="/services/adulttherapy"
            className="text-blue-500 hover:text-blue-600"
          >
            adults
          </Link>{' '}
          and children
        </strong>
        .
      </h2>
      <p>
        We tailor communication strategies to break barriers and foster
        independence, ensuring that each client can reach their full potential.
      </p>
      <p className="italic">
        “The most important thing in communication is hearing what isn't being
        said.” - Peter Drucker
      </p>
    </div>
  );
}
