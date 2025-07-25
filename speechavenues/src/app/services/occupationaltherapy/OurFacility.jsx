import Image from 'next/image';

export default function OurFacility() {
  return (
    <section
      aria-labelledby="our-facility"
      className="bg-white  px-4 max-w-screen-xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* Text */}
        {/* Image */}
        <div className="w-[250px] sm:w-[280px] md:w-[300px] mx-auto flex-shrink-0">
          <Image
            src="/images/therapyimages/ot/sensoryroom.webp"
            alt="Speech Avenues Sensory Gym"
            width={300}
            height={300}
            className="rounded-full shadow-xl w-full h-auto"
            priority
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2
            id="our-facility"
            className="text-3xl md:text-4xl font-bold text-gray-800 font-nunito mb-6"
          >
            Our Facility Includes:
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-prose mx-auto lg:mx-0">
            At Speech Avenues Therapy Co, we believe that having the right tools
            and environment is essential for effective therapy. That is why our
            facility is designed to provide a welcoming, fully equipped space
            where patients can achieve their goals. We are proud to offer a
            range of specialized equipment, a vibrant sensory gym full of
            swings, trampolines, ball pits, and one-on-one therapy rooms to
            ensure privacy and comfort for each patient.
          </p>
        </div>
      </div>
    </section>
  );
}
