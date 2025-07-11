import { TherapyCarousel } from '@/components';
import { otSlides } from '@/data';
export default function OTHeader() {
  return (
    <section
      aria-label="Occupational Therapy Introduction"
      className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 px-4 md:px-6 lg:px-6"
    >
      <div className="flex-1 md:flex-grow text-center md:text-left">
        {/* Main Header */}

        <header>
          <h1 className="text-4xl tracking-tight font-bold text-gray-800 font-nunito mt-8 ">
            Occupational Therapy (OT):
          </h1>
          <h2 className="text-lg font-nunito italic text-gray-800 mt-1">
            Empowering Lives, One Session at a Time
          </h2>
        </header>

        <p className="mt-6 text-gray-700 leading-relaxed">
          At Speech Avenues Therapy Co, we specialize in occupational therapy
          (OT) services that help individuals of all ages live life to the
          fullest.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Whether it is enhancing daily skills, working on sensory systems,
          improving motor functions, or teaching skills for emotional
          regulation, OT is designed to make life more accessible and enjoyable.
        </p>
      </div>

      {/* OT Carousel */}
      <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[300px] aspect-[4/3] rounded-xl overflow-hidden shadow-lg mx-auto md:mt-8 ">
        <TherapyCarousel slides={otSlides} />
      </div>
    </section>
  );
}
