import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-indigo-100 to-white border-l-4 border-indigo-300 rounded-xl px-6 py-12 shadow-md max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-nunito text-gray-800 mb-4">
          Take the First Step Today
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          A brighter tomorrow starts with the right support. We're here to help
          you or your child grow, thrive, and reach their full potential.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-indigo-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Schedule an Evaluation
        </Link>
      </div>
    </section>
  );
}
