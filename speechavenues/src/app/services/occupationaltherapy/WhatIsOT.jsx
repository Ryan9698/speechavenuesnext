export default function WhatIsOT() {
  const header = `font-bold text-gray-800 text-3xl md:text-3xl mt-8 mb-8 font-nunito mx-auto text-center md:text-left md:mt-8 md:mb-6`;

  return (
    <div className="w-full md:mt-10">
      <h3 className={`${header}`}>What is Occupational Therapy(OT)?</h3>
      <p className="mt-2 px-8 text-center md:text-left">
        Occupational Therapy is a patient-centered profession that focuses on
        improving a person’s ability to perform everyday tasks. Through
        personalized treatment plans, OT helps individuals regain skills, build
        strength, and overcome challenges that impact their daily lives. Our
        therapists do not just treat the symptoms, we consider the whole person
        and their environment to ensure they can thrive at home, school, work,
        and within other areas of the community.
      </p>
    </div>
  );
}
