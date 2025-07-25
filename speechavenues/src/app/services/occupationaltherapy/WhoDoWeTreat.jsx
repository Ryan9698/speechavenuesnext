import Image from 'next/image';
import {
  UserCheckCircle,
  UserCheckCircle2,
  UserRoundCheckCircle,
  UserRoundCheckCircleIcon,
  CheckCircle,
  CheckCircleCircle,
} from 'lucide-react';

export default function WhoDoWeTreat() {
  const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;

  return (
    <section
      aria-labelledby="what-do-we-treat"
      className="bg-indigo-50/70 border-r-4 border-indigo-300 shadow-sm rounded-md px-y py-12 md:px-8 lg:px-12 xl:px-20 max-w-screen-xl mx-auto"
    >
      <h2 className={`${header}`}>What Do We Treat?</h2>

      <div className="mb-8 text-center md:text-left text-base md:text-lg text-gray-700">
        <p>
          Our Occupational Therapists address a wide range of conditions, from
          developmental delays/disorders to physical injuries and neurological
          conditions.
        </p>
      </div>

      <h3 className={`${header}`}>We Work With Patients Who May Have:</h3>

      <ul className="space-y-10 text-sm md:text-base text-gray-800">
        {/* SPD */}
        <li className="px-2 md:px-4 flex gap-2">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>Sensory Processing Disorder (SPD):</strong> SPD may have
            difficulty processing sensory input, which can lead to behavioral
            challenges, difficulty focusing, or aversions to textures and
            sounds. Through sensory integration therapy, OT will help regulate
            sensory experiences and improve the ability to participate in daily
            activities.
          </span>
        </li>

        {/* ASD */}
        <li className="px-2 md:px-4 flex gap-2">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>
              Autism Spectrum Disorder (ASD) / Neurodivergent Individuals:
            </strong>{' '}
            Patients with ASD and other neurodivergent individuals may often
            face challenges with social skills, communication, transitions, and
            repetitive behaviors. We develop therapy programs that focus on
            improving interaction, enhancing motor skills, and building
            independence through sensory and motor activities tailored to each
            person's strengths.
          </span>
        </li>

        {/* Developmental Delays */}
        <li className="px-2 md:px-4 flex gap-2">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>Developmental Delays:</strong> Patients with developmental
            delays may struggle with fine and gross motor skills, speech, or
            daily self-care tasks. Through play-based therapy and exercises
            tailored to developmental milestones, we help children gain
            confidence and achieve greater independence at home and school.
          </span>
        </li>

        {/* Neurological Disorders w/ Image */}
        <li className="relative px-2 md:px-4">
          <div className="md:float-right md:ml-6 md:mb-4 mb-12 w-[250px] sm:w-[280px] md:w-[300px] shrink-0 mx-auto">
            <Image
              src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736020698/Speech%20Avenues/Occupational%20Therapy/large/otpage3_s1p6pw.webp"
              alt="Child Occupational Therapy Writing"
              width={300}
              height={300}
              className="rounded-full shadow-xl w-full h-auto md:-mt-8"
            />
          </div>
          <div className="flex gap-2 items-start">
            <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
            <span>
              <strong>
                Neurological Disorders (e.g., Seizures / Epilepsy):
              </strong>{' '}
              Patients with seizure disorders often experience disruptions in
              coordination, attention, and/or memory. Our therapists focus on
              promoting safety, managing triggers, and teaching compensatory
              techniques for cognitive and motor challenges. We help individuals
              develop strategies to regain independence in daily activities like
              work, self-care, and other community involvement.
            </span>
          </div>
        </li>

        {/* Clear the float */}
        <li className="clear-both px-2 md:px-4 flex gap-2 items-start">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>
              Learning Disabilities (e.g., Dyslexia, Dysgraphia, Nonverbal
              Learning):
            </strong>{' '}
            Learning disabilities can impact a child’s ability to perform school
            tasks, such as reading, writing, or processing and retaining
            information. Our therapists use a combination of cognitive
            strategies, handwriting training, and adaptive learning tools to
            improve academic performance and boost confidence. We also provide
            support for organizational and study skills to help better manage
            classroom expectations.
          </span>
        </li>

        {/* Ortho Injuries */}
        <li className="px-2 md:px-4 flex gap-2 items-start">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>
              Orthopedic Injuries (e.g., Fractures, Post-Surgery):
            </strong>{' '}
            Whether recovering from a fracture, dealing with chronic conditions
            like tendonitis, or rehabilitating after surgery, orthopedic
            injuries can limit a certain range of motion and strength.
          </span>
        </li>

        {/* CP */}
        <li className="px-2 md:px-4 flex gap-2 items-start">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>Cerebral Palsy:</strong> Patients with cerebral palsy may
            have difficulties with movement, balance, or coordination. Through
            therapeutic exercises, assistive devices, and adaptive strategies,
            we help improve motor function, enabling greater independence in
            daily tasks like dressing, eating, or work/school activities.
          </span>
        </li>

        {/* TBI */}
        <li className="px-2 md:px-4 flex gap-2 items-start">
          <CheckCircle className="w-5 h-5 text-indigo-500 mt-1 shrink-0" />
          <span>
            <strong>Traumatic Brain Injury (TBI):</strong> TBI can lead to both
            physical and cognitive impairments, such as memory loss or decreased
            coordination. We provide cognitive rehabilitation and retrain motor
            skills, helping patients regain their functional independence and
            reintegrate into social and professional settings.
          </span>
        </li>
      </ul>
    </section>
  );
}
