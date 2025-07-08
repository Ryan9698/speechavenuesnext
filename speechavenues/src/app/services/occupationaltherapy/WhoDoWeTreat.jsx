import Image from 'next/image';

export default function WhoDoWeTreat() {
  const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;

  return (
    <section>
      <h2 className={`${header}`}>What Do We Treat?</h2>

      <div className="px-8 mb-3 text-center md:text-left">
        <p>
          Our Occupational Therapists address a wide range of conditions, from
          developmental delays/disorders to physical injuries and neurological
          conditions.
        </p>
      </div>

      <div>
        <h3 className={`${header}`}>We Work With Patients Who May Have:</h3>
        <ul className="flex flex-col list-disc pl-5 space-y-6 text-sm md:mb-8 mb-10">
          <li className="px-4">
            <strong>Sensory Processing Disorder (SPD):</strong> SPD may have
            difficulty processing sensory input, which can lead to behavioral
            challenges, difficulty focusing, or aversions to textures and
            sounds. Through sensory integration therapy, OT will help regulate
            sensory experiences and improve the ability to participate in daily
            activities.
          </li>
          <li className="px-4">
            <strong>
              Autism Spectrum Disorder (ASD) / Neurodivergent Individuals:
            </strong>
            Patients with ASD and other neurodivergent individuals may often
            face challenges with social skills, communication, transitions, and
            repetitive behaviors. We develop therapy programs that focus on
            improving interaction, enhancing motor skills, and building
            independence through sensory and motor activities tailored to each
            person's strengths.
          </li>

          {/* Container for List and Image Item (Inside UL)*/}
          <div className="flex flex-col md:flex-row m-auto">
            <div className="md:basis-2/3 space-y-6 lg:space-y-8 lg:mt-3 pr-6 lg:mb-4 mb-8 md:mb-0">
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
              {/* Image Container inside List */}
            </div>
            <div className="md:basis-1/3 md:mr-6 lg:p-2 md:mt-6 lg:mt-0 mr-4 mb-4 sm:mb-0">
              <Image
                src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736020698/Speech%20Avenues/Occupational%20Therapy/large/otpage3_s1p6pw.webp"
                alt="Child Occupational Therapy Writing"
                height={250}
                width={250}
                className="rounded-full mx-auto shadow-xl order-last h-96 w-96 md:h-auto md:w-auto md:order-none"
              />
            </div>
          </div>
          <li className="px-4">
            <strong>
              Learning Disabilities (e.g., Dyslexia, Dysgraphia, Nonverbal
              Learning):
            </strong>
            Learning disabilities can impact a child’s ability to perform school
            tasks, such as reading, writing, or processing and retaining
            information. Our therapists use a combination of cognitive
            strategies, handwriting training, and adaptive learning tools to
            improve academic performance and boost confidence. We also provide
            support for organizational and study skills to help better manage
            classroom expectations.
          </li>
          <li className="px-4">
            <strong>
              Orthopedic Injuries (e.g., Fractures, Post-Surgery):
            </strong>{' '}
            Whether recovering from a fracture, dealing with chronic conditions
            like tendonitis, or rehabilitating after surgery, orthopedic
            injuries can limit a certain range of motion and strength.
          </li>
          <li className="px-4">
            <strong>Cerebral Palsy:</strong> Patients with cerebral palsy may
            have difficulties with movement, balance, or coordination. Through
            therapeutic exercises, assistive devices, and adaptive strategies,
            we help improve motor function, enabling greater independence in
            daily tasks like dressing, eating, or work/school activities.
          </li>
          <li className="px-4">
            <strong>Traumatic Brain Injury (TBI):</strong> TBI can lead to both
            physical and cognitive impairments, such as memory loss or decreased
            coordination. We provide cognitive rehabilitation and retrain motor
            skills, helping patients regain their functional independence and
            reintegrate into social and professional settings.
          </li>
        </ul>
      </div>
    </section>
  );
}
