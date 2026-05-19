import Link from 'next/link';

export default function GoogleReviewCTA({
  title = 'We’d love your feedback!',
  text = 'If Speech Avenues has helped your family, leaving a Google review is one of the best ways to support us.',
  href = 'https://www.google.com/search?q=Speech+Avenues+Therapy+Co.',
}) {
  return (
    <section className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-white px-6 py-8 text-center shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
        Share your experience
      </p>

      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>

      <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600">
        {text}
      </p>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        Leave a Google Review
      </Link>
    </section>
  );
}
