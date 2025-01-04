import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import otSlides from '@/data/otpicturesdata/OTPictures';
import ModalClient from '@/components/Modal/ModalClient';
import SensoryDisorder from './modalcontent/SensoryDisorder';
import SensorySystem from './modalcontent/SensorySystem';
import WhatIsAutism from './modalcontent/WhatIsAutism';
import AACDevice from './modalcontent/AACDevice';

export const metadata = {
  title: 'Speech Avenues Occupational Therapy',
  description:
    'Speech Avenues Occupational Therapists are healthcare professionals dedicated to empowering patients of all ages to achieve independence and enhance their quality of life.',
  alternates: {
    canonical: `/services/occupationaltherapy`,
  },
  keywords: [
    'Occupational Therapy',
    'occupational therapy near me',
    'occupational therapist near me rockledge',
    'occupational therapy near me rockledge',
    'occupational therapy near me florida',
    'occupational therapy rockledge',
    'adult occupational therapy',
    'child occupational therapy',
    'autism',
    'downs syndrome',
    'adult with autism',
    'ASD',
    'satc',
  ],
};

const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 font-dancing mx-auto text-center md:text-left md:mt-8 mb-6`;
export default function OccupationalTherapy() {
  return (
    <div>
      <div className="container p-4 mx-auto md:max-w-3xl lg:max-w-4xl">
        {/* Parent Flex Container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Carousel Image Container*/}

          {/* First and Second Paragraphs */}
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-800 font-dancing text-center md:text-left md:mt-8 ">
                Occupational Therapy (OT):
              </h1>
              <h2 className="text-xl font-dancing text-gray-800 text-center">
                Empowering Lives, One Session at a Time
              </h2>
              <p className="mt-8 px-8 text-center">
                At Speech Avenues Therapy Co, we specialize in occupational
                therapy (OT) services that help individuals of all ages live
                life to the fullest.
              </p>
              <p className="mt-2 px-8 text-center">
                Whether it is enhancing daily skills, working on sensory
                systems, improving motor functions, or teaching skills for
                emotional regulation, OT is designed to make life more
                accessible and enjoyable.
              </p>
            </div>
            <div className="flex justify-center items-center md:mr-12">
              <div className="w-96 h-96 md:w-80 md:h-80 mt-8 ">
                <Carousel slides={otSlides} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Parent Container for Main Text Body */}
        <div className="">
          <div className="w-full">
            <h3 className={`${header}`}>What is Occupational Therapy(OT)?</h3>
            <p className="mt-2 px-8 text-center md:text-left">
              Occupational Therapy is a patient-centered profession that focuses
              on improving a person’s ability to perform everyday tasks. Through
              personalized treatment plans, OT helps individuals regain skills,
              build strength, and overcome challenges that impact their daily
              lives. Our therapists do not just treat the symptoms, we consider
              the whole person and their environment to ensure they can thrive
              at home, school, work, and within other areas of the community.
            </p>
          </div>

          {/* Fun Facts Section */}

          <div className="p-2">
            <h2 className={`${header}`}>Fun Facts:</h2>
            <ul className="list-disc pl-5 space-y-2 px-8">
              <li>
                Occupational Therapy was founded in 1917, originally developed
                as a form of therapeutic intervention for soldiers returning
                from World War I who were dealing with physical and mental
                challenges. ~ American Occupational Therapy Association (AOTA),
                “History of Occupational Therapy”(2023)
              </li>
              <li>
                Occupational Therapy doesn’t just focus on physical health- OTs
                also address mental health by helping individuals develop coping
                strategies, manage anxiety, and build routines for emotional
                well-being. ~ American Occupational Therapy Association (AOTA) ~
                “OTs Role in Mental Health”(2022)
              </li>
            </ul>
          </div>

          {/* Services and Information Section */}

          <div className="container mx-auto">
            <h2 className={`${header}`}>What Do We Treat?</h2>

            <div className="px-8 mb-3 text-center md:text-left">
              <p>
                Our Occupational Therapists address a wide range of conditions,
                from developmental delays/disorders to physical injuries and
                neurological conditions.
              </p>
            </div>
            <div></div>
            <h3 className={`${header}`}>We Work With Patients Who May Have:</h3>
            <ul className="list-disc pl-5 space-y-6 text-sm md:mb-8">
              <li className="px-4">
                <strong>Sensory Processing Disorder (SPD):</strong> SPD may have
                difficulty processing sensory input, which can lead to
                behavioral challenges, difficulty focusing, or aversions to
                textures and sounds. Through sensory integration therapy, OT
                will help regulate sensory experiences and improve the ability
                to participate in daily activities.
              </li>
              <li className="px-4">
                <strong>
                  Autism Spectrum Disorder (ASD) / Neurodivergent Individuals:
                </strong>
                Patients with ASD and other neurodivergent individuals may often
                face challenges with social skills, communication, transitions,
                and repetitive behaviors. We develop therapy programs that focus
                on improving interaction, enhancing motor skills, and building
                independence through sensory and motor activities tailored to
                each person's strengths.
              </li>
              <li className="px-4">
                <strong>Developmental Delays:</strong> Patients with
                developmental delays may struggle with fine and gross motor
                skills, speech, or daily self-care tasks. Through play-based
                therapy and exercises tailored to developmental milestones, we
                help children gain confidence and achieve greater independence
                at home and school.
              </li>
              <li className="px-4">
                <strong>
                  Neurological Disorders (e.g., Seizures / Epilepsy):
                </strong>
                Patients with seizure disorders often experience disruptions in
                coordination, attention, and/or memory. Our therapists focus on
                promoting safety, managing triggers, and teaching compensatory
                techniques for cognitive and motor challenges. We help
                individuals develop strategies to regain independence in daily
                activities like work, self-care, and other community
                involvement.
              </li>
              <li className="px-4">
                <strong>
                  Learning Disabilities (e.g., Dyslexia, Dysgraphia, Nonverbal
                  Learning):
                </strong>
                Learning disabilities can impact a child’s ability to perform
                school tasks, such as reading, writing, or processing and
                retaining information. Our therapists use a combination of
                cognitive strategies, handwriting training, and adaptive
                learning tools to improve academic performance and boost
                confidence. We also provide support for organizational and study
                skills to help better manage classroom expectations.
              </li>
              <li className="px-4">
                <strong>
                  Orthopedic Injuries (e.g., Fractures, Post-Surgery):
                </strong>{' '}
                Whether recovering from a fracture, dealing with chronic
                conditions like tendonitis, or rehabilitating after surgery,
                orthopedic injuries can limit a certain range of motion and
                strength.
              </li>
              <li className="px-4">
                <strong>Cerebral Palsy:</strong> Patients with cerebral palsy
                may have difficulties with movement, balance, or coordination.
                Through therapeutic exercises, assistive devices, and adaptive
                strategies, we help improve motor function, enabling greater
                independence in daily tasks like dressing, eating, or
                work/school activities.
              </li>
              <li className="px-4">
                <strong>Traumatic Brain Injury (TBI):</strong> TBI can lead to
                both physical and cognitive impairments, such as memory loss or
                decreased coordination. We provide cognitive rehabilitation and
                retrain motor skills, helping patients regain their functional
                independence and reintegrate into social and professional
                settings.
              </li>
            </ul>

            {/* Modals with All Additional Information */}

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly gap-2 mt-6 md:mt-10">
              <div className="">
                <ModalClient triggerLabel="Sensory Processing Disorder">
                  <SensoryDisorder />
                </ModalClient>
              </div>
              <div className="">
                <ModalClient triggerLabel="The Eight Sensory Systems">
                  <SensorySystem />
                </ModalClient>
              </div>
              <div className="">
                <ModalClient triggerLabel="Autism Spectrum Disorder">
                  <WhatIsAutism />
                </ModalClient>
              </div>
              <div className="">
                <ModalClient triggerLabel="AAC DEVICES: Augmentative and Alternative Communication">
                  <AACDevice />
                </ModalClient>
              </div>
            </div>

            {/* Why Choose Us Section (Photo and Text) */}

            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6">
                <div className="flex-1 text-center md:text-left mt-6 md:mt-8">
                  <h2
                    className={`font-bold text-gray-800 text-3xl font-dancing mx-auto text-center md:mt-8 md:mb-8 mb-4`}
                  >
                    Why Choose Us?
                  </h2>
                  <p className="px-8 text-center mb-4 md:mb-0">
                    At Speech Avenues Therapy Co, we are committed to making a
                    difference. Our team of experienced therapists use
                    approaches created for personalized treatment plans that
                    support both progress and long-term success. We are
                    passionate about empowering our patients to overcome
                    barriers and become the best version of who they are.
                  </p>
                </div>
                {/* Therapy Image */}
                <div className="flex-shrink-0 mt-6">
                  <Image
                    src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735521679/Speech%20Avenues/Occupational%20Therapy/large/otpage_hhmy8s.webp"
                    alt="Child Occupational Therapy"
                    width={275}
                    height={275}
                    className="mx-auto md:mr-8 md:mt-8 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Facility Section */}
            <h2 className={`${header}`}>Our Facility Includes:</h2>
            <p className="px-8 mb-8 text-center md:text-left">
              At Speech Avenues Therapy Co, we believe that having the right
              tools and environment is essential for effective therapy. That is
              why our facility is designed to provide a welcoming, fully
              equipped space where patients can achieve their goals. We are
              proud to offer a range of specialized equipment, a vibrant sensory
              gym full of swings, trampolines, ball pits, and one-on-one therapy
              rooms to ensure privacy and comfort for each patient.
            </p>

            {/* Call to Action */}
            <h2
              className={`font-bold text-gray-800 text-3xl  mb-6 mt-8 font-dancing mx-auto text-center md:mt-2 `}
            >
              Take the First Step Today!
            </h2>
            <p className="px-8 mb-4 text-center md:text-left">
              The path to a better tomorrow starts with the right support.
              <Link href="/contact" className="text-blue-500 hover:underline">
                {' '}
                Contact us
              </Link>{' '}
              now to schedule your evaluation and discover how occupational
              therapy can transform your life and the life of your loved one.
              Your goals are within reach ~ let us help you achieve them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
