import Image from 'next/image';

export default function FunFacts() {
  const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;

  return (
    <div className="container flex flex-col md:flex-row gap-4 md:mt-8 md:mb-10">
      <div className="md:w-1/3 mx-auto mt-6 md:mb-4">
        <Image
          src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1736019709/Speech%20Avenues/Occupational%20Therapy/large/otpage2_fmxf4n.webp"
          alt="Child Occupational Therapy Writing"
          height={250}
          width={250}
          className="rounded-full m-auto shadow-xl order-last md:order-first h-96 w-96 md:h-auto md:w-auto"
        />
      </div>
      <div className="flex flex-col md:w-2/3 order-first md:order-last">
        <h2 className={`${header}`}>Fun Facts:</h2>
        <ul className="list-disc pl-5 space-y-2 px-8 text-sm">
          <li>
            Occupational Therapy was founded in 1917, originally developed as a
            form of therapeutic intervention for soldiers returning from World
            War I who were dealing with physical and mental challenges. ~
            American Occupational Therapy Association (AOTA), “History of
            Occupational Therapy”(2023)
          </li>
          <li>
            Occupational Therapy doesn’t just focus on physical health- OTs also
            address mental health by helping individuals develop coping
            strategies, manage anxiety, and build routines for emotional
            well-being. ~ American Occupational Therapy Association (AOTA) ~
            “OTs Role in Mental Health”(2022)
          </li>
        </ul>
      </div>
    </div>
  );
}
