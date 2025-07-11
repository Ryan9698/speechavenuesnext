import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6">
          <div className="flex-1 text-center md:text-left mt-6 md:mt-8 lg:mt-20">
            <h2
              className={`font-bold text-gray-800 text-3xl font-nunito mx-auto text-center md:mt-8 md:mb-8 mb-4`}
            >
              Why Choose Us?
            </h2>
            <p className="px-8 text-center mb-4 md:mb-0">
              At Speech Avenues Therapy Co, we are committed to making a
              difference. Our team of experienced therapists use approaches
              created for personalized treatment plans that support both
              progress and long-term success. We are passionate about empowering
              our patients to overcome barriers and become the best version of
              who they are.
            </p>
          </div>
          {/* Therapy Image */}
          <div className="flex-shrink-0 mt-6 mb-4 sm:mb-0">
            <Image
              src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735521679/Speech%20Avenues/Occupational%20Therapy/large/otpage_hhmy8s.webp"
              alt="Child Occupational Therapy"
              width={275}
              height={275}
              className="mx-auto md:mr-8 md:mt-8 rounded-lg shadow-xl h-96 w-96 sm:h-auto sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
