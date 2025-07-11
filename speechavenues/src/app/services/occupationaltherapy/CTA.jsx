import Link from 'next/link';

export default function CTA() {
  return (
    <section>
      <h2
        className={`font-bold text-gray-800 text-3xl  mb-8 mt-8 font-nunito mx-auto text-center md:mt-2 border-b-2 border-gray-800`}
      >
        Take the First Step Today!
      </h2>
      <p className="px-8 mb-4 text-center md:text-left">
        The path to a better tomorrow starts with the right support.
        <Link href="/contact" className="text-blue-500 hover:underline">
          {' '}
          Contact us
        </Link>{' '}
        now to schedule your evaluation and discover how occupational therapy
        can transform your life and the life of your loved one. Your goals are
        within reach ~ let us help you achieve them!
      </p>
    </section>
  );
}
