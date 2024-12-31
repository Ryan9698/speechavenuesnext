import React from 'react';
import Carousel from '@/components/Carousel';
import otSlides from '@/data/otpicturesdata/OTPictures';
import Image from 'next/image';

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

const header = `font-bold text-gray-800 text-2xl mt-2 mt-8 font-dancing mx-auto text-center md:text-left md:mt-2 `;
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
              <h1 className="text-4xl font-bold text-gray-800 font-dancing text-center md:text-left md:mt-8">
                Occupational Therapy (OT):
              </h1>
              <h2 className="text-xl font-dancing text-gray-800 text-center">
                Empowering Lives, One Session at a Time
              </h2>
              <p className="mt-4 px-8 text-center">
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
            <div className="flex justify-center items-center">
              <div className="w-96 h-96 md:w-80 md:h-80 mt-8">
                <Carousel slides={otSlides} className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Parent Container for Main Text Body */}
        <div className="">
          <div className="w-full">
            <h3 className={`${header} mb-4`}>
              What is Occupational Therapy(OT)?
            </h3>
            <p className="mt-2 px-8">
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
            <h2 className={`${header} mb-4 font-bold`}>Fun Facts:</h2>
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
            <h2 className={`${header} mb-4`}>What Do We Treat?</h2>

            <div className="px-8 mb-3">
              <p>
                Our Occupational Therapists address a wide range of conditions,
                from developmental delays/disorders to physical injuries and
                neurological conditions.
              </p>
            </div>

            <h3 className={`${header} mb-4`}>
              We Work With Patients Who May Have:
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-sm mb-8">
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

            {/* Why Choose Us Section */}
            <Image
              src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735521679/Speech%20Avenues/Occupational%20Therapy/large/otpage_hhmy8s.webp"
              alt="Child Occupational Therapy"
              width={300}
              height={300}
              className="float-right mx-6 "
            />
            <h2 className={`${header} my-3`}>Why Choose Us?</h2>
            <p className="px-8 mb-4">
              At Speech Avenues Therapy Co, we are committed to making a
              difference. Our team of experienced therapists use approaches
              created for personalized treatment plans that support both
              progress and long-term success. We are passionate about empowering
              our patients to overcome barriers and become the best version of
              who they are.
            </p>

            {/* Facility Section */}
            <h2 className={`${header} mb-3`}>Our Facility Includes:</h2>
            <p className="px-8 mb-4">
              At Speech Avenues Therapy Co, we believe that having the right
              tools and environment is essential for effective therapy. That is
              why our facility is designed to provide a welcoming, fully
              equipped space where patients can achieve their goals. We are
              proud to offer a range of specialized equipment, a vibrant sensory
              gym full of swings, trampolines, ball pits, and one-on-one therapy
              rooms to ensure privacy and comfort for each patient.
            </p>

            {/* Call to Action */}
            <h2 className={`${header} mb-3`}>Take the First Step Today!</h2>
            <p className="px-8 mb-3">
              The path to a better tomorrow starts with the right support.
              Contact us now to schedule your evaluation and discover how
              occupational therapy can transform your life and the life of your
              loved one. Your goals are within reach ~ let us help you achieve
              them!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function OccupationalTherapy() {
//   return (
//     // Global Container
//     <div className="container mx-auto p-4 max-w-6xl">
//       {/* Content Container */}
//       <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
//         <div className="w-full md:w-80 md:mr-4">
//           {/* Carousel Container */}
//           <div className="md:w-full mt-2">
//             <Carousel slides={otSlides} className="w-full h-full" />
//           </div>
//         </div>
//         <div className="flex flex-col w-full md:w-2/3">
//           <h1 className="text-4xl font-bold text-gray-800 mt-8 font-dancing mx-auto text-center md:text-left md:mt-0 md:mx-6">
//             Occupational Therapy
//           </h1>
//           <div className="bg-white p-6 flex flex-col space-y-3">
//             <h2>
//               <span className="font-bold">Occupational Therapy (OT)</span> is a
//               branch of healthcare with professionals dedicated to empowering
//               patients of all ages to achieve independence and enhance their
//               quality of life through meaningful everyday activities, known as
//               occupations. Our OT practitioners work with individuals throughout
//               all stages of life who may be facing various physical, cognitive,
//               developmental, or emotional challenges.
//             </h2>
//             <p>
//               By collaborating with patients to set personalized goals and
//               develop tailored treatment plans, occupational therapy facilitates
//               individuals' engagement in daily activities, promotes overall
//               well-being, and maximizes independence across all life domains. At
//               SATC, supporting individuals in reaching their fullest potential
//               is our priority and passion.
//             </p>
//             <a
//               href="https://www.aota.org/about/what-is-ot"
//               className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
//             >
//               Learn more about Occupational Therapy
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* New Container for Services Provided Section */}
//       <div className="bg-white p-6 flex flex-col space-y-3  -mt-7">
//         <p className="font-medium">
//           Services provided by our occupational therapists here at SATC
//           encompass a wide range of interventions, including: assessing and
//           improving fine motor skills, balance, emotional regulation, self-care
//           abilities, cognitive functions, and more.
//         </p>
//         <div>
//           Additionally, our occupational therapists specialize in sensory
//           integration techniques:
//           <ul className="list-disc pl-5 mt-2">
//             <li>
//               Sensory integration is the brain's ability to process and make
//               sense of sensory information.
//             </li>
//             <li>
//               Techniques aim to regulate sensory input, improve body awareness,
//               coordination, and overall self-regulation.
//             </li>
//           </ul>
//         </div>
//         <a
//           href="https://asatonline.org/for-parents/learn-more-about-specific-treatments/sensory-integrative-therapy-sensory-integration-si-or-sit/"
//           className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
//         >
//           Learn more about Sensory Integrative Therapy
//         </a>
//         <p>
//           Lastly, being able to work alongside our wonderful Speech-Language
//           Pathologists (SLPs), our Occupational Therapists are able to support
//           and treat individuals in improving speech, language techniques,
//           communication, and expression skills by addressing possible underlying
//           sensory and motor components.
//         </p>
//       </div>
//     </div>
//   );
// }
