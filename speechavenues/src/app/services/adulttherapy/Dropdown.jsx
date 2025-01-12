export default function AdultDropdown() {
  return (
    <div className="space-y-1 mx-auto  mb-4 md:mb-0 w-full">
      {/* What is Voice Therapy? Dropdown */}
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Voice Therapy?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-3">
          <p>
            Our licensed speech language pathologists provide voice therapy for
            a variety of conditions including, but not limited to, vocal fold
            pathology (nodules, polyps, and paralysis), neurological conditions
            such as Parkinson’s, stroke, and myasthenia gravis.
          </p>
          <p>
            Symptoms of voice disorder include hoarseness, strain, breathiness,
            difficulty with pitch, decreased loudness or vocal fatigue. Our
            therapy approaches include vocal function therapy, resonant voice
            therapy and SPEAK OUT.
          </p>
          <p>
            All of our voice therapy is focused on improving vocal quality,
            strength, and endurance and may include targeted breathing
            techniques as well as vocal exercises.
          </p>
          <p>
            We also provide gender affirming voice therapy to achieve desired
            pitch.
          </p>
        </div>
      </details>

      {/* What is Cognition and Linguistic Rehabilitation Dropdown */}
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Cognition and Linguistic Rehabilitation?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-3">
          <p>
            Our licensed Speech Language Pathologists provide cognitive
            linguistic rehabilitation to improve quality of life and
            productivity for adults with neurological conditions such as stroke
            and TBI. Therapy techniques include exercises for memory, attention,
            reasoning, safety awareness and word finding as well role play
            activities and caregiver training.
          </p>
        </div>
      </details>

      {/* What is Aphasia? Dropdown */}
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Aphasia?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-3">
          <p>
            Our licensed speech language pathologists provide language therapy
            for adults suffering from Aphasia or loss of language function.
          </p>
          <p>
            Most cases of Aphasia occur post stroke but some patients experience
            Aphasia unrelated to stroke known as primary progressive aphasia.
          </p>
          <p>
            Aphasia can affect both expression and comprehension depending on
            the type of damage.
          </p>
          <p>
            Our individualized therapy approaches may target word finding,
            conversational strategies and linguistic exercises.
          </p>
        </div>
      </details>

      {/* What is Dysphasia? Dropdown */}
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Dysphagia?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-3">
          <p>
            Our licensed speech pathologists provide services for adults
            suffering from Dysphagia.
          </p>
          <p>
            Swallowing difficulties in adults can include difficulty with
            chewing, inability to drink from a straw, excessive drooling, oral
            weakness or feeling of food getting stuck. Our targeted exercise
            programs can improve these symptoms to improve nutrition and quality
            of life.
          </p>
        </div>
      </details>
    </div>
  );
}
