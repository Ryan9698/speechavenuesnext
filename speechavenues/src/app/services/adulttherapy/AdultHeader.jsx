import { TherapyCarousel } from '@/components';
import { adultSlides } from '@/data';
import Link from 'next/link';

export default function AdultHeader() {
  return (
    <section
      aria-label="Adult Therapy Introduction"
      className="px-4 md:px-6 lg:px-6"
    >
      {/* Top Row: Header + First Paragraph + Carousel */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <header>
            <h1 className="text-4xl tracking-tight font-bold text-gray-800 font-nunito mt-8">
              Adult Therapy
            </h1>
            <h2 className="text-lg font-nunito italic text-gray-800 mt-1">
              Comprehensive Care for Communication Challenges
            </h2>
          </header>

          {/* First Paragraph */}
          <p className="mt-6 text-gray-700 leading-relaxed">
            Adults acquire speech and language disabilities through organic and
            nonorganic causes, such as a stroke, Parkinson’s, dementia, etc.
            Treatment for adults is known as rehabilitation. It is
            rehabilitation because the therapist is attempting to restore the
            previously learned skill. A nonorganic cause might be traumatic head
            injury from a car accident.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[300px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto md:mt-20">
          <TherapyCarousel slides={adultSlides} />
        </div>
      </div>

      {/* Remaining Paragraphs Full Width */}
      <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
        <p className="bg-indigo-50/70 border-r-4 border-indigo-300 p-4 rounded shadow-sm">
          Although every case is different, communication disorders seen most in
          treating adults are{' '}
          <strong>
            voice disorders, motor speech disorders, other neurologically based
            communicative disorders, and non-neurological disorders
          </strong>
          .
        </p>

        <p>
          SATC is proud to offer an array of{' '}
          <a
            href="/services/speechtherapy"
            className="text-blue-500 hover:underline"
          >
            speech
          </a>{' '}
          and{' '}
          <a
            href="/services/occupationaltherapy"
            className="text-blue-500 hover:underline"
          >
            occupational
          </a>{' '}
          therapy services to adults to enhance their quality of life. We've
          included some of our adult services and helpful information below.
          Click to learn more! If you're interested in further information or
          would like to call to schedule an appointment, you can find our
          contact information{' '}
          <a href="/contact" className="text-blue-500 hover:underline">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}
