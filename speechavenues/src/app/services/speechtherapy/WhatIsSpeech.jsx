import { motion, AnimatePresence } from 'framer-motion';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';

export default function WhatIsSpeech() {
  return (
    <section className="bg-indigo-50/70 border-r-4 border-indigo-300 shadow-sm rounded py-12 px-6 mt-12 mb-12">
      <h3 className="text-4xl font-nunito font-bold text-center text-gray-800 mb-4">
        What is Speech?
      </h3>
      <p className="mb-10">
        Speech is the expressive production of sounds and involves a highly
        coordinated motor process of breathing, voice production, and
        articulation of the mouth, lips, and tongue. It's a vital part of human
        communication and includes several key components:
      </p>
      <ul className="list-disc pl-5 mt-4 space-y-6 md:mb-6">
        <li>
          <strong>Articulation:</strong> The way we produce individual sounds
          and words. Precise movement of the mouth, lips, and tongue is
          necessary to form sounds accurately. For instance, to say the word
          "rabbit," we must be able to produce the "r" sound clearly instead of
          misarticulating it as "wabbit."
        </li>

        {/* YOUTUBE VIDEO COMPONENT */}
        <div className="float-right w-full md:max-w-sm lg:max-w-md md:ml-8 mb-6 lg:p-4">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <VideoEmbed
              videoId="dCoWv8yV8qk"
              width={640}
              height={360}
              className="w-full aspect-video"
            />
          </div>
        </div>

        <li>
          <strong>Voice:</strong> This involves using our vocal folds and
          breathing to produce sounds. The quality of our voice can vary in
          loudness and pitch. Strain or damage to the vocal folds can occur from
          excessive talking, yelling, or persistent coughing, leading to vocal
          issues.
        </li>

        <li>
          <strong>Fluency:</strong> Fluency is the flow and rhythm of speech.
          It's how smoothly sounds, syllables, words, and phrases are joined
          together when we talk. Disfluencies occur when this flow is
          interrupted by repeated sounds, syllables, or by pausing mid-speech.
          Stuttering is one type of fluency disorder characterized by frequent
          disfluencies.
        </li>
      </ul>
      <p className="my-4">
        <strong>
          Understanding and addressing issues in these areas is crucial for
          effective communication.
        </strong>{' '}
        Speech-language pathologists specialize in diagnosing and treating
        various speech disorders to help individuals communicate clearly and
        confidently.
      </p>
    </section>
  );
}
