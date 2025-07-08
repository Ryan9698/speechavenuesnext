// Server-friendly component, no 'use client'

import Link from 'next/link';

export default function FAQLinks({ topics = [], basePath = '' }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`${basePath}/${topic.slug}`}
              className="text-blue-600 hover:underline"
            >
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
