import Link from 'next/link';
import Image from 'next/image';

export default function SpeakOut() {
  return (
    <div className="mb-4 ">
      <section className="bg-gray-100 dark:bg-gray-900 rounded mx-6 mb-2 pb-6 md:pb-0">
        <div className="flex flex-col md:flex-row">
          <div className="sm:basis-1/3 m-auto rounded-xl mt-4 md:mt-0">
            <Image
              src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735691402/Speech%20Avenues/Adult%20Therapy/adult1_ebjfnm.webp"
              width={300}
              height={300}
              alt="Speak Out Adult Speech Therapy"
              className="rounded-xl w-96 h-96 md:h-auto md:w-auto p-2"
            />
          </div>

          <div className="flex flex-col sm:basis-2/3 items-center text-center sm:text-left">
            <h2 className="text-2xl  font-bold text-gray-800 dark:text-gray-100 mb-4 text-center pt-4 mx-6 md:mx-0">
              SATC is a Licensed SPEAK OUT!® Provider
            </h2>
            <div className="text-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-2 px-6">
                The "SPEAK OUT!" Therapy Program, developed by Parkinson Voice
                Project, helps people with Parkinson’s and related neurological
                disorders regain and retain their speaking abilities for a
                lifetime. Using the principles of motor learning, this
                evidence-based program combines education, a specialized
                workbook, individual and group speech therapy, daily home
                practice, and regular follow-ups.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 px-6  md:mb-2">
                SPEAK OUT!® Therapy trains patients to “speak with INTENT,”
                transitioning speech from an automatic function to an
                intentional act.
              </p>
            </div>
            <Link
              href="https://parkinsonvoiceproject.org/program/speak-out/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block  px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
