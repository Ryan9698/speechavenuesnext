export default function WhatIsOT() {
  return (
    <section
      aria-labelledby="what-is-occupational-therapy"
      className="border-l-4 border-indigo-500 bg-blue-50/50 rounded-md px-6 py-10 sm:px-10 max-w-4xl mx-auto my-12 shadow-sm"
    >
      {/* WhatIsOT Header */}
      <header>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-4 font-nunito">
          What is Occupational Therapy?
        </h2>
        <p className="text-center text-indigo-600 italic text-lg mb-6 font-nunito">
          A whole-person approach to life skills and independence
        </p>
      </header>

      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left font-nunito">
        Occupational Therapy is a patient-centered profession that focuses on
        improving a person’s ability to perform everyday tasks. Through
        personalized treatment plans, OT helps individuals regain skills, build
        strength, and overcome challenges that impact their daily lives. Our
        therapists do not just treat the symptoms, we consider the whole person
        and their environment to ensure they can thrive at home, school, work,
        and within other areas of the community.
      </p>
    </section>
  );
}
