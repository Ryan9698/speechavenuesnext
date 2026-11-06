export default function Donate() {
  return (
    <div className="container mx-auto max-w-6xl p-6 ">
      <section className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-4 items-center bg-sky-50 p-2 rounded-xl">
        <div>
          <img
            src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1775335779/Speech%20Avenues%20School/Gallery/class1.webp"
            alt="Students in a classroom at Communication Cultivation Academy"
            className="w-full max-w-2xl aspect-[16/9] lg:aspect-[4/5] h-80 lg:h-auto rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Help CCA Secure a Lasting Home!
          </h1>
          <p className="text-base md:text-lg leading-7 text-slate-700">
            Speech Avenues Communication Cultivation Academy provides
            communication-centered education, vocational preparation, and
            independent-living skills for autistic students and young adults
            with significant communication support needs. Your donation will
            help CCA establish a stable, long-term space where students can
            continue learning, building confidence, and developing greater
            independence.
          </p>

          <a
            href="https://www.zeffy.com/en-US/donation-form/help-cca-secure-a-lasting-home-2?source=org-page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 focus-visible:ring-4 focus:ring-offset-1 focus:ring-blue-600 text-white mx-auto rounded-xl transition-colors duration-300"
          >
            Donate to Support CCA
          </a>
        </div>
      </section>
    </div>
  );
}
