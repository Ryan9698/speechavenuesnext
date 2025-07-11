import Image from 'next/image';
import { History, SmilePlus } from 'lucide-react';

export default function FunFacts() {
  return (
    <section
      aria-labelledby="fun-facts"
      className="bg-indigo-50/30 rounded-xl px-6 py-10 mt-12 shadow max-w-5xl mx-auto mb-12"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex justify-center md:w-1/3">
          <Image
            src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736019709/Speech%20Avenues/Occupational%20Therapy/large/otpage2_fmxf4n.webp"
            alt="Child Occupational Therapy Writing"
            height={300}
            width={300}
            className="rounded-full shadow-xl max-w-[300px] w-full h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-2/3">
          <h2
            id="fun-facts"
            className="text-2xl font-bold font-quicksand text-center md:text-left text-gray-800 mb-6"
          >
            Fun Facts:
          </h2>

          <ul className="space-y-6 text-sm text-gray-700 font-quicksand leading-relaxed ">
            <li className="flex items-start gap-3 border-b border-indigo-100 pb-6">
              <History className="w-10 h-10 text-indigo-500 mt-1 hover:scale-110 transition-transform duration-200" />
              <span>
                Occupational Therapy was <strong>founded in 1917</strong>,
                originally developed as a form of therapeutic intervention for
                soldiers returning from World War I who were dealing with
                physical and mental challenges..
                <br />
                <em className="text-xs text-gray-500 block mt-1">
                  ~ American Occupational Therapy Association (AOTA), “History
                  of Occupational Therapy” (2023)
                </em>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <SmilePlus className="w-10 h-10 text-indigo-500 mt-1 hover:scale-110 transition-transform duration-200" />
              <span>
                <strong>
                  Occupational Therapy doesn’t just focus on physical health
                </strong>{' '}
                - OTs also address mental health by helping individuals develop
                coping strategies, manage anxiety, and build routines for
                emotional well-being.
                <br />
                <em className="text-xs text-gray-500 block mt-1">
                  ~ American Occupational Therapy Association (AOTA), “OTs Role
                  in Mental Health” (2022)
                </em>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
