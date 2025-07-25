import Image from 'next/image';

export default function WhyChooseUs() {
  return (
    <section className="bg-indigo-50/70 border-r-4 border-indigo-300 shadow-sm rounded py-12 px-6 mt-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:items-start gap-10 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 font-nunito mb-6">
              Why Choose Us?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-prose mx-auto lg:mx-0">
              At Speech Avenues Therapy Co, we are committed to making a
              difference. Our team of experienced therapists use approaches
              created for personalized treatment plans that support both
              progress and long-term success. We are passionate about empowering
              our patients to overcome barriers and become the best version of
              who they are.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-64 sm:w-64 md:w-80 lg:w-80 xl:w-72">
            <Image
              src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735521679/Speech%20Avenues/Occupational%20Therapy/large/otpage_hhmy8s.webp"
              alt="Child Occupational Therapy"
              className="rounded-full object-cover shadow-xl w-full max-w-[18rem] md:max-w-sm lg:max-w-md"
              width={0}
              height={0}
              sizes="(min-width: 1024px) 320px, 100vw"
              priority
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
