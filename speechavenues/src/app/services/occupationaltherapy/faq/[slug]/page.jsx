import { otFaqTopics } from '../otFaqData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = otFaqTopics.find((t) => t.slug === slug);
  if (!topic) return {};

  return {
    title: `${topic.title} | Occupational Therapy FAQs`,
    description: `Learn about ${topic.title.toLowerCase()} and how it relates to occupational therapy.`,
    alternates: {
      canonical: `/services/occupationaltherapy/faq/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return otFaqTopics.map((t) => ({ slug: t.slug }));
}

export default async function FAQTopicPage({ params }) {
  const { slug } = await params;
  const topic = otFaqTopics.find((t) => t.slug === slug);

  if (!topic) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 mt-12">
      {/* Back Navigation */}
      <div className="mb-6 p-2">
        <Link
          href="/services/occupationaltherapy"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-bold text-lg"
        >
          <ArrowLeft size={22} className="text-indigo-600" />
          Back to Occupational Therapy
        </Link>
      </div>
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 ">{topic.title}</h1>

      {/* Content */}
      <div className="bg-white rounded-xl  p-6 md:p-0 md:px-8 leading-relaxed text-gray-700 prose max-w-none">
        {typeof topic.content === 'function' ? topic.content() : topic.content}
      </div>
    </article>
  );
}
