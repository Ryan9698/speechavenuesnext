import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export default function FAQLinks({ topics = [], basePath = '' }) {
  return (
    <section aria-labelledby="faqs" className=" px-4 md:px-6">
      <h2
        id="faq-heading"
        className="text-2xl font-bold text-gray-900  text-center md:text-left font-nunito mb-10"
      >
        General Information and Frequently Asked Questions
      </h2>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`${basePath}/${topic.slug}`}
              className="flex md:justify-center md:items-center md:min-h-[100px] gap-3 bg-white border-l-4 border-indigo-400 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 group"
            >
              <HelpCircle className="w-5 h-5 mt-1 text-indigo-500 group-hover:scale-110 transition-transform duration-200" />
              <span className="text-sm md:text-base font-nunito text-gray-800 group-hover:text-indigo-600 font-bold leading-snug">
                {topic.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
