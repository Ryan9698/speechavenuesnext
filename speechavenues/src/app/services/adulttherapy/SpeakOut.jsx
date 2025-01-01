import Link from 'next/link';

export default function SpeakOut() {
  return (
    <div className="mb-4">
      <section className="bg-gray-100 dark:bg-gray-900 md:py-2 md:px-4 mb-6 md:mr-8 m-4 md:m-0 p-4 md:p-0 rounded ">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            SATC is a Licensed SPEAK OUT!® Provider
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            The "SPEAK OUT!" Therapy Program, developed by Parkinson Voice
            Project, helps people with Parkinson’s and related neurological
            disorders regain and retain their speaking abilities for a lifetime.
            Using the principles of motor learning, this evidence-based program
            combines education, a specialized workbook, individual and group
            speech therapy, daily home practice, and regular follow-ups.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            SPEAK OUT!® Therapy trains patients to “speak with INTENT,”
            transitioning speech from an automatic function to an intentional
            act.
          </p>
          <Link
            href="https://parkinsonvoiceproject.org/program/speak-out/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
