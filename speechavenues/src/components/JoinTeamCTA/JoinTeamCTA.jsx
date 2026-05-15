import Link from 'next/link';

export default function JoinTeamCTA({ className = '' }) {
  return (
    <section
      className={`mx-auto max-w-4xl rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-8 text-center shadow-sm ${className}`}
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
        Careers at Speech Avenues
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-800">
        Interested in Joining Our Team?
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-700">
        We’re always open to connecting with compassionate professionals who are
        passionate about helping children and families grow.
      </p>

      <Link
        href="/contact"
        className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
      >
        Contact Us About Opportunities
      </Link>
    </section>
  );
}
