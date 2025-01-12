export default function SpeechDropdown() {
  return (
    <div className="space-y-1">
      {/* <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                  <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
                    Adult Therapy
                  </summary>
                  <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-3">
                    <p>
                      Adults acquire speech and language disabilities through
                      organic and nonorganic causes, such as a stroke,
                      Parkinson’s, dementia, etc. Treatment for adults is known
                      as rehabilitation. It is rehabilitation because the
                      therapist is attempting to restore the previously learned
                      skill. A nonorganic cause might be traumatic head injury
                      from a car accident.
                    </p>
                    <p>
                      Although every case is different, communication disorders
                      seen most in treating adults are voice disorders, motor
                      speech disorders, other neurologically based communicative
                      disorders, and non-neurological disorders.
                    </p>
                    <h2 className="font-sans text-lg md:text-left text-center">
                      Adult Dysphagia
                    </h2>
                    <p>
                      Difficulty swallowing (<strong>dysphagia</strong>) means
                      it takes more time and effort to move food or liquid from
                      your mouth to your stomach. Dysphagia may also be
                      associated with pain. In some cases, swallowing may be
                      impossible. Occasional difficulty swallowing, which may
                      occur when you eat too fast or do not chew your food well
                      enough, usually is not a cause for concern, but persistent
                      dysphagia may indicate a serious medical condition
                      requiring treatment. Dysphagia can occur at any age, but
                      it is more common in older adults. The causes of
                      swallowing problems vary, and treatment depends on the
                      cause.
                    </p>
                    <p className="font-sans text-center underline">
                      Signs of dysphagia may include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Drooling and poor oral management.</li>
                      <li>
                        Food or liquid remaining in the oral cavity after
                        swallowing.
                      </li>
                      <li>
                        Inability to maintain lip closure, leading to food
                        and/or liquids leaking from the oral cavity.
                      </li>
                      <li>
                        Food and/or liquids leaking from the nasal cavity.
                      </li>
                      <li>Complaints of food "sticking".</li>
                      <li>
                        Globus sensation or complaints of a "fullness" in the
                        neck.
                      </li>
                      <li>Complaints of pain when swallowing.</li>
                      <li>
                        Wet or gurgled-sounding voice during or after eating or
                        drinking.
                      </li>
                      <li>
                        Coughing during or right after eating or drinking.
                      </li>
                      <li>Difficulty coordinating breathing and swallowing.</li>
                      <li>
                        Recurring aspiration pneumonia/respiratory infection
                        and/or fever.
                      </li>
                      <li>Extra effort or time needed to chew or swallow.</li>
                      <li>
                        Changes in eating habits—specifically, avoidance of
                        certain foods/drinks.
                      </li>
                      <li>
                        Weight loss or dehydration from not being able to eat
                        enough.
                      </li>
                    </ul>
                  </div>
                </details> */}

      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is a Speech Disorder?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed">
          <p>
            A speech disorder refers to difficulties in producing sounds
            correctly, speaking fluently, or using one's voice effectively.
            Articulatory distortions can arise from organic causes—those with a
            known physical origin—such as hearing loss, cleft palate, cerebral
            palsy, apraxia, or dysarthria, or from functional causes, where no
            physical cause is identified. An articulation disorder is typically
            diagnosed when errors persist across four to six phonemes. Phonemes
            are the smallest units of sound in a language that differentiate
            meaning between words, such as consonants and vowels.
          </p>
          <p>
            Phonological development is a critical aspect of a child’s growth,
            encompassing the processes by which a child learns to segment and
            differentiate various sounds into recognizable units. During this
            period, a child interprets a continuous flow of sounds, gradually
            discerning and isolating individual words, and associating each with
            meaning drawn from environmental cues and verbal interactions.
            Children pass through distinct stages of phoneme acquisition,
            allowing speech pathologists to determine whether a child’s
            phonological development falls within typical patterns.
          </p>
          <p>
            As part of their natural linguistic progression, children attempt to
            emulate adult speech, employing phonological strategies while they
            master specific sounds. If a child does not acquire a particular
            sound within the expected developmental timeline, they may persist
            in imitating, omitting, or distorting the sound in an effort to
            approximate it as closely as possible.
          </p>
        </div>
      </details>

      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Augmentative and Alternative Communication (AAC)?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed">
          <p>
            AAC is employed by individuals who cannot always depend on speech.
            It includes various forms of communication, from gestures and sign
            language to the use of specialized communication devices. AAC
            empowers those with significant expressive language impairments to
            communicate more effectively and encompasses both unaided methods,
            like manual signs, and aided methods, such as speech-generating
            devices.
          </p>
          <p>
            To learn more about AAC and its benefits,{' '}
            <a
              href="https://www.asha.org/njc/aac/#:~:text=Augmentative%20and%20alternative%20communication%20(AAC)%20describes%20multiple%20ways%20to%20communicate,with%20severe%20expressive%20communication%20disorders."
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-block mt-1"
            >
              Click here.
            </a>
          </p>
        </div>
      </details>
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="font-sans text-center text-lg cursor-pointer text-gray-800">
          Language Disorders
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed">
          <p>
            Language disorders are diagnosed when children do not meet these
            milestones within 12 months of the specified development or there is
            a suspected birth defect, such as cerebral palsy, Down’s syndrome,
            etc.
          </p>
          <p className="mt-3">
            Language disorders can occur in children with or without any other
            co-occurring diagnosis (happening at the same time or causing the
            language disorder).
          </p>
          <p className="mt-3">
            Language disorders in children can be developmental in nature,
            meaning the child’s language is not developing or following the
            rules of the language system. It can also be caused by the
            environment the child is in. Usually, language disorders in children
            are caused when a child is developmentally delayed or there is a
            co-occurring diagnosis that is affecting speech or language
            development.
          </p>
          <p className="mt-3">
            After a developmental psychologist, speech-language pathologist,
            developmental pediatrician, neurologist, and/or geneticist
            determines the diagnosis, therapy should begin. Researchers have
            found that the younger a child receives consistent therapy, the
            better the outcome. This therapy is called habilitation.
          </p>
        </div>
      </details>
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          Feeding and Swallowing
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed">
          <p>
            The term feeding difficulties is a broad term used to describe a
            variety of feeding or mealtime behaviors perceived as problematic
            for a child or family.
          </p>
          <p>This may include behaviors such as:</p>

          {/* Two Column Layout for Behaviors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc pl-5">
              <li>Picky eating</li>
              <li>Food fussiness</li>
              <li>Food refusal</li>
              <li>Food neophobia</li>
              <li>Restricted variety of foods</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Food fads</li>
              <li>Limited, excessive, or variable appetite</li>
              <li>Prolonged mealtimes</li>
              <li>Disruptive mealtime behaviors</li>
            </ul>
          </div>

          <p className="mt-3">
            To some extent, these behaviors are all considered to be part of
            typical feeding development and are usually transient. Children
            displaying a significant number of these behaviors or displaying a
            behavior to a greater extent for a prolonged period may be
            considered to have a ‘Feeding Difficulty.’ In other words, it is not
            merely the presence of a behavior but the severity and duration of
            behaviors that signifies a problem.
          </p>
          <p className="mt-3">
            Standard definitions of these terms are lacking; however, behaviors
            are generally considered to exist on a continuum from typical to
            more complex feeding and mealtime behavior problems.
          </p>
          <p className="mt-3">
            The term feeding difficulties is also used to describe children with
            oral motor difficulties in ingesting & swallowing foods and/or
            fluids. This may be combined with other difficult mealtime
            behaviors.
          </p>
          <p className="mt-3">
            Feeding Disorders are problems within the range of eating activities
            that may or may not include swallowing.
          </p>
          <p className="mt-3">
            Swallowing Disorders can occur when there is disruption in one or
            more of the four stages of swallowing. This is known as Dysphagia.
          </p>

          {/* Stages of Swallowing */}
          <div className="mt-4">
            <p>
              <strong>Stage I:</strong>
            </p>
            <p>
              Biting and chewing food takes place in the mouth. At this stage,
              lack of strength, control, or feeling in the mouth—due to stroke
              or muscle or nerve disease—may cause food or liquid to fall
              directly into the throat and cause choking.
            </p>

            <p className="mt-3">
              <strong>Stage II:</strong>
            </p>
            <p>
              The tongue pushes the food to the back of the mouth where a
              structure folds over the top of the windpipe to keep food out. At
              the back of the mouth, the presence of food triggers muscle
              contractions. At this stage, the muscle at the back of the mouth
              that opens to allow food into the esophagus may malfunction and
              cause aspiration (food passing into the windpipe), which results
              in choking.
            </p>

            <p className="mt-3">
              <strong>Stage III:</strong>
            </p>
            <p>
              Muscle contractions push food down the esophagus. At this stage,
              lack of or inadequate muscle contractions may cause food to stick
              in the chest.
            </p>

            <p className="mt-3">
              <strong>Stage IV:</strong>
            </p>
            <p>
              Food moves through the esophagus, and the lower esophageal
              sphincter muscle opens to let food pass into the stomach. At this
              stage, weakening of this sphincter muscle at the stomach opening
              may allow acidic stomach secretions to come back up into the
              esophagus from the stomach, a condition called reflux.
            </p>
          </div>

          {/* Causes of Swallowing Disorders */}
          <div className="mt-4">
            <p>
              <strong>Causes</strong>
            </p>
            <p>
              More than 15 million Americans have a swallowing disorder. They
              can occur at any age. Swallowing problems may be temporary, or
              they may be an indication of a serious medical problem. There are
              many causes, including nerve and muscle problems, head and neck
              injuries, and cancer. Or they may occur because of a stroke.
              Certain medications can also contribute to the disorder.
            </p>
          </div>
        </div>
      </details>
      <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
        <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
          What is Myofunctional Therapy (OMT)?
        </summary>
        <div className="mt-3 text-base text-gray-700 leading-relaxed space-y-4">
          <p>
            At SATC, we combine Oral Placement Therapy (OPT) with Myofunctional
            Therapy (OMT) to address a variety of issues related to feeding,
            swallowing, and speech clarity. One of the key areas we focus on is{' '}
            <span className="font-bold">tongue thrust</span>, a condition that
            is often confused with a <span className="font-bold">lisp</span>.
          </p>
          <p>
            A lisp is a speech disorder where a person has difficulty producing
            the sounds <span className="font-bold">/s/</span> and{' '}
            <span className="font-bold">/z/</span>. There are four different
            types of lisps—interdental, dental, palatal, and lateral.
          </p>
          <p>
            <span className="font-bold">Tongue thrust</span>, on the other hand,
            is a condition where the tongue moves forward during activities like
            eating, swallowing, or speaking. This can affect the production of
            sounds such as{' '}
            <span className="font-bold">/s/, /z/, /sh/, /zh/, /ch/,</span> and{' '}
            <span className="font-bold">/j/</span>.
          </p>
          <p>
            <span className="font-bold">Oral Placement Therapy (OPT)</span> was
            developed by Sara Rosenfeld-Johnson of{' '}
            <span className="italic">TalkTools (rights reserved)</span> and has
            proven to be an effective tool in improving or even eliminating
            tongue thrust. In many cases, with consistent therapy over a 6–8
            month period, we’ve seen significant progress. Some children have
            even been able to avoid the need for braces or dental surgery.
          </p>
          <p>
            At SATC, our therapists use OPT to help children understand the
            concepts of{' '}
            <span className="font-bold">air flow, oral imitation</span>, and{' '}
            <span className="font-bold">phoneme placement</span>. We've
            successfully integrated OPT with OMT to help children with{' '}
            <span className="font-bold">
              severe childhood apraxia of speech
            </span>
            .
          </p>
          <p>
            By using tools like whistles and Apraxia blocks, we support these
            children in developing clearer, more precise speech.
          </p>
        </div>
      </details>
    </div>
  );
}
