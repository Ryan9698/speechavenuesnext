export default function Donate() {
  return (
    <div className="container mx-auto max-w-6xl p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src="https://res.cloudinary.com/dfchcqbiq/image/upload/v1775335779/Speech%20Avenues%20School/Gallery/class1.webp"
            alt="Students in a classroom at Communication Cultivation Academy"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold ">
            Help Speech Avenues Communication Cultivation Academy Secure a
            Lasting Home!
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-slate-700">
            Communication Cultivation Academy provides communication-centered
            education, vocational preparation, and independent-living skills for
            autistic students and young adults with significant communication
            support needs. Your donation will help CCA establish a stable,
            long-term space where students can continue learning, building
            confidence, and developing greater independence.
          </p>
        </div>
      </section>
    </div>
  );
}
