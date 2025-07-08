import React from 'react';
import Link from 'next/link';

export default function SensorySystem() {
  return (
    <div className="md:p-6 flex flex-col bg-white text-gray-800 max-h-[70vh]">
      <h2 className="text-3xl text-center font-bold mb-4 text-gray-800">
        The Eight Sensory Systems
      </h2>
      <p className="mb-4">
        Occupational Therapy (OT) often emphasizes the importance of the sensory
        systems to help individuals, especially children, process and respond to
        sensory information in a meaningful way.
      </p>
      <p className="mb-4">
        While many people are familiar with the five traditional senses, there
        are actually eight sensory systems that play a critical role in daily
        life and functioning.
      </p>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Here is a quick breakdown of all eight:
      </h3>
      <ul className="list-decimal list-inside mb-4 space-y-2 px-6">
        <li>Visual System (Sight)</li>
        <li>Auditory System (Hearing)</li>
        <li>Tactile System (Touch)</li>
        <li>Olfactory System (Smell)</li>
        <li>Gustatory System (Taste)</li>
        <li>Proprioceptive System (Body Awareness)</li>
        <li>Vestibular System (Balance and Spatial Orientation)</li>
        <li>Interoceptive System (Internal Body Signals)</li>
      </ul>
      <p className="mb-4">For more information, please visit the following:</p>
      <ul className="list-disc mb-4 space-y-2 px-6">
        <li>
          <Link
            href="https://sensoryhealth.org/basic/your-8-senses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            STAR Institute: Your 8 Senses
          </Link>
        </li>
        <li>
          <Link
            href="https://chlss.org/blog/8-senses-parenting-sensory-processing-disorder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            CHLSS: The 8 Senses
          </Link>
        </li>
        <li>
          <Link
            href="https://www.oxfordhealth.nhs.uk/wp-content/uploads/2014/05/Sensory-Processing-presentation-February-2014.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Oxford Health: Sensory Processing Presentation
          </Link>
        </li>
      </ul>
    </div>
  );
}
