import { TherapyCarousel } from '@/components';
import { otSlides } from '@/data';
export default function OTHeader() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-800 font-nunito text-center md:text-left md:mt-8 ">
          Occupational Therapy (OT):
        </h1>
        <h2 className="text-lg font-nunito italic text-gray-800 text-center">
          Empowering Lives, One Session at a Time
        </h2>
        <p className="mt-8 px-8 text-center">
          At Speech Avenues Therapy Co, we specialize in occupational therapy
          (OT) services that help individuals of all ages live life to the
          fullest.
        </p>
        <p className="mt-2 px-8 text-center mb-4">
          Whether it is enhancing daily skills, working on sensory systems,
          improving motor functions, or teaching skills for emotional
          regulation, OT is designed to make life more accessible and enjoyable.
        </p>
      </div>
      <div className="flex justify-center items-center md:mr-12 md:p-2">
        <div className="w-96 h-96 md:w-80 md:h-80 mt-8 ">
          {/* <TherapyCarousel slides={otSlides} className="" /> */}
        </div>
      </div>
    </div>
  );
}
