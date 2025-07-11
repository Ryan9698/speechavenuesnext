// app/speechtherapy/faq/[slug]/page.jsx

import { faqTopics } from '../speechFaqData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateMetadata({ params }) {
  const topic = faqTopics.find((t) => t.slug === params.slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Speech Therapy FAQs`,
    description: `Learn about ${topic.title.toLowerCase()} and how it relates to speech therapy and developmental support.`,
    alternates: {
      canonical: `/services/speechtherapy/faq/${topic.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return faqTopics.map((t) => ({ slug: t.slug }));
}

export default function FAQTopicPage({ params }) {
  console.log('params.slug:', params.slug);
  console.log(
    'faqTopics:',
    faqTopics.map((t) => t.slug)
  );
  const topic = faqTopics.find((t) => t.slug === params.slug);

  if (!topic) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 mt-10">{topic.title}</h1>
      <Link
        href="/services/speechtherapy"
        className="text-blue-600 hover:underline"
      >
        Back to Speech Therapy
      </Link>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        {typeof topic.content === 'function' ? topic.content() : topic.content}
      </section>
    </article>
  );
}
