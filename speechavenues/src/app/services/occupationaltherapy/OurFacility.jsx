export default function OurFacility() {
  const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;

  return (
    <section>
      <h2 className={`${header}`}>Our Facility Includes:</h2>
      <p className="px-8 mb-10 text-center md:text-left">
        At Speech Avenues Therapy Co, we believe that having the right tools and
        environment is essential for effective therapy. That is why our facility
        is designed to provide a welcoming, fully equipped space where patients
        can achieve their goals. We are proud to offer a range of specialized
        equipment, a vibrant sensory gym full of swings, trampolines, ball pits,
        and one-on-one therapy rooms to ensure privacy and comfort for each
        patient.
      </p>
    </section>
  );
}
