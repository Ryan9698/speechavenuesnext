// app/speechtherapy/faq/[slug]/page.jsx

import { otFaqTopics } from '../otFaqData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateMetadata({ params }) {
  const topic = otFaqTopics.find((t) => t.slug === params.slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Occupational Therapy FAQs`,
    description: `Learn about ${topic.title.toLowerCase()} and how it relates to occupational therapy and developmental support.`,
    alternates: {
      canonical: `/services/occupationaltherapy/faq/${topic.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return otFaqTopics.map((t) => ({ slug: t.slug }));
}

export default function FAQTopicPage({ params }) {
  console.log('params.slug:', params.slug);
  console.log(
    'faqTopics:',
    otFaqTopics.map((t) => t.slug)
  );
  const topic = otFaqTopics.find((t) => t.slug === params.slug);

  if (!topic) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 mt-10">{topic.title}</h1>
      <Link
        href="/services/occupationaltherapy"
        className="text-blue-600 hover:underline"
      >
        Back to Occupational Therapy
      </Link>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        {typeof topic.content === 'function' ? topic.content() : topic.content}
      </section>
    </article>
  );
}
