import React from 'react';
import { TherapyCarousel } from '@/components';
import { speechSlides } from '@/data';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';
import Link from 'next/link';
import Image from 'next/image';
import SpeechDropdown from './SpeechDropdown';
import SpeakOutFooter from './SpeakOutFooter';
import { TransitionWrapper } from '@/components/Animations';

export const metadata = {
  title: 'Speech Therapy - Speech Avenues Therapy Co.',
  description:
    'Speech Avenues Therapy Co. has a team of gifted therapists who create personalized care plans to help patients reach their potential.',
  alternates: {
    canonical: `/services/speechtherapy`,
  },
  keywords: [
    'Speech Therapy',
    'speech therapy near me',
    'speech therapy near me florida',
    'adult speech therapy',
    'child speech therapy',
    'feeding therapy',
    'satc',
    'aac',
    'aac rockledge florida',
    'autism',
    'downs syndrome',
    'adult with autism',
    'Speech Therapy Rockledge',
    'ASD',
  ],
};

export default function SpeechTherapy() {
  return (
    <>
      <TransitionWrapper>
        <div className="container mx-auto p-4 max-w-5xl mt-12">
          {/* First Row: Carousel and Paragraph */}
          <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
            <div className="w-full h-1/2 md:w-96 md:mr-4">
              {/* Carousel Container */}
              <TherapyCarousel
                slides={speechSlides}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-800 mt-8 font-nunito mx-auto text-center md:text-left md:mt-0 md:mx-6">
                Speech Therapy
              </h1>
              <div className="bg-white p-6 flex flex-col space-y-5">
                <h2>
                  <span className="font-bold">Speech Therapy</span> services are
                  dedicated to enhancing communication, cognitive communication,
                  language development, articulation, voice, swallowing,
                  feeding, and both expressive and receptive language skills.
                  Our Speech-Language Pathologists specialize in Augmentative
                  and Alternative Communication (AAC) and offer AAC device
                  services and training. We're proud to say we are one of the
                  only providers in the Brevard County area that offer speech
                  and{' '}
                  <Link
                    href="/services/occupationaltherapy"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    occupational
                  </Link>{' '}
                  therapy services to{' '}
                  <span className="italic font-bold ">both</span>{' '}
                  <strong>
                    <Link
                      href="/services/adulttherapy"
                      className="text-blue-500 hover:text-blue-600"
                    >
                      adults
                    </Link>{' '}
                    and children
                  </strong>
                  .
                </h2>
                {/* <p>
                  We tailor communication strategies to break barriers and
                  foster independence, ensuring that each client can reach their
                  full potential.
                </p>
                <p className="italic">
                  “The most important thing in communication is hearing what
                  isn't being said.” - Peter Drucker
                </p> */}
              </div>
            </div>
          </div>

          {/* Second Row: Content, Video, and Dropdowns */}
          <div className="md:mt-8">
            <div className="flex flex-col md:flex-row md:gap-6">
              {/* Main Content */}
              <div className="flex flex-col w-full ">
                <div className="mt-3 text-gray-700 leading-relaxed">
                  {/* Floating Video Section and Dropdowns */}
                  <div className="float-right w-full md:w-1/2 md:ml-4 mb-10 md:mb-4 space-y-2">
                    <div className="shadow-lg rounded-lg overflow-hidden mb-8">
                      <VideoEmbed
                        videoId="dCoWv8yV8qk"
                        width={640}
                        height={360}
                        className="w-full h-auto"
                      />
                    </div>

                    {/* Speech Dropdown Component */}

                    <SpeechDropdown />
                  </div>
                  {/* Text Content (What is Speech?)*/}
                  <div className="w-full md:w-2/3 md:ml-6">
                    <h3 className="text-4xl font-dancing font-bold text-center text-gray-800 m:mx-2 md:p-0 mt-2 mb-8">
                      What is Speech?
                    </h3>
                    <p className="mb-10">
                      Speech is the expressive production of sounds and involves
                      a highly coordinated motor process of breathing, voice
                      production, and articulation of the mouth, lips, and
                      tongue. It's a vital part of human communication and
                      includes several key components:
                    </p>
                    <ul className="list-disc pl-5 mt-4 space-y-6 md:mb-6">
                      <li>
                        <strong>Articulation:</strong> The way we produce
                        individual sounds and words. Precise movement of the
                        mouth, lips, and tongue is necessary to form sounds
                        accurately. For instance, to say the word "rabbit," we
                        must be able to produce the "r" sound clearly instead of
                        misarticulating it as "wabbit."
                      </li>
                      <li>
                        <strong>Voice:</strong> This involves using our vocal
                        folds and breathing to produce sounds. The quality of
                        our voice can vary in loudness and pitch. Strain or
                        damage to the vocal folds can occur from excessive
                        talking, yelling, or persistent coughing, leading to
                        vocal issues.
                      </li>
                      <li>
                        <strong>Fluency:</strong> Fluency is the flow and rhythm
                        of speech. It's how smoothly sounds, syllables, words,
                        and phrases are joined together when we talk.
                        Disfluencies occur when this flow is interrupted by
                        repeated sounds, syllables, or by pausing mid-speech.
                        Stuttering is one type of fluency disorder characterized
                        by frequent disfluencies.
                      </li>
                    </ul>
                    <p className="my-4">
                      Understanding and addressing issues in these areas is
                      crucial for effective communication. Speech-language
                      pathologists specialize in diagnosing and treating various
                      speech disorders to help individuals communicate clearly
                      and confidently.
                    </p>
                  </div>
                  {/* Image Row Container */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 md:my-10 mx-auto justify-items-center items-center">
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015242/Speech%20Avenues/Speech%20Therapy/speechpage2_fywv7x.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015078/Speech%20Avenues/Speech%20Therapy/speechpage1_j1cmak.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                    <Image
                      src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736015537/Speech%20Avenues/Speech%20Therapy/speechpage3_bt5qea.webp"
                      alt="Child speech therapy with Speech Pathologist Gail Walter"
                      height={400}
                      width={400}
                      className="rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SpeakOutFooter />
        </div>
      </TransitionWrapper>
    </>
  );
}
