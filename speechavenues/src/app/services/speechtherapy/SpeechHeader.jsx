import { TherapyCarousel } from '@/components';
import { speechSlides } from '@/data';
import Link from 'next/link';

export default function SpeechHeader() {
  return (
    <section
      aria-label="Speech Therapy Introduction"
      className="px-4 md:px-6 lg:px-6"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Left Side: Header + First Paragraph */}
        <div className="flex-1">
          <header>
            <h1 className="text-4xl font-bold text-center md:text-left text-gray-800 font-nunito mt-8">
              Speech Therapy
            </h1>
            <h2 className="text-lg font-nunito italic text-center md:text-left text-gray-800 mt-1">
              Building Voices, Breaking Barriers
            </h2>
          </header>

          <p className="text-gray-700 leading-relaxed mt-4">
            <span className="font-bold">Speech Therapy</span> services are
            dedicated to enhancing communication, cognitive communication,
            language development, articulation, voice, swallowing, feeding, and
            both expressive and receptive language skills. Our Speech-Language
            Pathologists specialize in Augmentative and Alternative
            Communication (AAC) and offer AAC device services and training.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-shrink-0 w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg mx-auto md:mt-20">
          <TherapyCarousel slides={speechSlides} />
        </div>
      </div>

      {/* Remaining Paragraphs */}
      <div className="mt-6 space-y-4 text-gray-700">
        <p>
          We're proud to be one of the only providers in Brevard County offering
          speech and{' '}
          <Link
            href="/services/occupationaltherapy"
            className="text-indigo-500 hover:underline"
          >
            occupational therapy
          </Link>{' '}
          services for <strong>both adults and children</strong>.
        </p>

        <p className="text-gray-700">
          We tailor communication strategies to break barriers and foster
          independence, ensuring each client reaches their full potential.
        </p>

        <p className="italic text-gray-600">
          “The most important thing in communication is hearing what isn't being
          said.” – Peter Drucker
        </p>
      </div>
    </section>
  );
}
