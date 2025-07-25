// app/adulttherapy/faq/[slug]/page.jsx

import { adultFaqTopics } from '../adultFaqData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = adultFaqTopics.find((t) => t.slug === slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Adult Therapy FAQs`,
    description: `Learn about ${topic.title.toLowerCase()} and how it relates to adult speech therapy, occupational therapy and developmental support.`,
    alternates: {
      canonical: `/services/adulttherapy/faq/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return adultFaqTopics.map((t) => ({ slug: t.slug }));
}

export default async function FAQTopicPage({ params }) {
  const { slug } = await params;
  console.log('params.slug:', slug);
  console.log(
    'faqTopics:',
    adultFaqTopics.map((t) => t.slug)
  );
  const topic = adultFaqTopics.find((t) => t.slug === slug);

  if (!topic) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 mt-10">{topic.title}</h1>
      <Link
        href="/services/adulttherapy"
        className="text-blue-600 hover:underline"
      >
        Back to Adult Therapy
      </Link>
      <section className="space-y-6 text-gray-700 leading-relaxed">
        {typeof topic.content === 'function' ? topic.content() : topic.content}
      </section>
    </article>
  );
}
