'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import Image from 'next/image';

export default function SpeakOut() {
  return (
    <section className="bg-indigo-50/70 py-10 border-r-4 border-indigo-400 rounded-md shadow-md px-8 flex flex-col xl:flex-row items-center gap-8 ">
      <Image
        src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1735691402/Speech%20Avenues/Adult%20Therapy/adult1_ebjfnm.webp"
        alt="PAtient with Speak Out literature"
        width={300}
        height={300}
        className="rounded-full w-[260px] h-[260px] object-cover"
      />
      <div className="max-w-xl text-center md:text-left">
        <div className="flex">
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Mic className="w-8 h-8 text-indigo-500" />
          </motion.div>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Speech Avenues is a licensed{' '}
            <span className="text-indigo-500">SPEAK OUT!®</span> Provider
          </h2>
        </div>

        <p className="text-base text-gray-700 mb-4">
          SATC proudly offers SPEAK OUT!® therapy, a Parkinson Voice Project
          program designed to help individuals with neurological disorders
          regain and retain speech. This evidence-based program emphasizes{' '}
          <strong>speaking with INTENT</strong> through targeted sessions, home
          practice, and workbook tools.
        </p>
        <p className="text-gray-700 mb-4">
          SPEAK OUT!® Therapy trains patients to{' '}
          <strong>speak with INTENT</strong>, transitioning speech from an
          automatic function to an intentional act.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition ">
            <Link
              href="https://parkinsonvoiceproject.org/program/speak-out/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
