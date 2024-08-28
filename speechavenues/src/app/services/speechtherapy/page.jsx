import React from 'react';
import Carousel from '@/components/Carousel';
import speechSlides from '@/data/speechpicturesdata/SpeechPictures';
import VideoEmbed from '@/components/VideoEmbed/VideoEmbed';
import Link from 'next/link';

export const metadata = {
  title: 'Speech Therapy - Speech Avenues Therapy Co.',
  description:
    'Speech Avenues Therapy Co. has a team of gifted therapists who create personalized care plans to help patients reach their potential.',
  alternates: {
    canonical: `/services/speechtherapy`,
  },
  keywords: [
    'Speech Therapy',
    'speech therapy near me',
    'speech therapy near me florida',
    'adult speech therapy',
    'child speech therapy',
    'feeding therapy',
    'satc',
    'aac',
    'aac rockledge florida',
    'autism',
    'downs syndrome',
    'adult with autism',
    'Speech Therapy Rockledge',
    'ASD',
  ],
};

export default function SpeechTherapy() {
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* First Row: Carousel and Paragraph */}
      <div className="flex flex-col md:flex-row md:items-start md:mt-8 md:ml-6">
        <div className="w-full h-1/2 md:w-80 md:mr-4">
          {/* Carousel Container */}
          <Carousel slides={speechSlides} className="w-full h-full" />
        </div>
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mt-8 font-dancing mx-auto text-center md:text-left md:mt-0 md:mx-6">
            Speech Therapy
          </h1>
          <div className="bg-white p-6 flex flex-col space-y-3">
            <h2>
              <span className="font-bold">Speech Therapy</span> services are
              dedicated to enhancing communication, cognitive communication,
              language development, articulation, voice, swallowing, feeding,
              and both expressive and receptive language skills. Our
              Speech-Language Pathologists specialize in Augmentative and
              Alternative Communication (AAC) and offer AAC device services and
              training. We're proud to say we are one of the only providers in
              the Brevard County area that offer speech and{' '}
              <Link
                href="/services/occupationaltherapy"
                className="text-blue-500 hover:text-blue-600"
              >
                occupational
              </Link>{' '}
              therapy services to{' '}
              <span className="italic font-bold underline">both</span>{' '}
              <strong>adults and children</strong>.
            </h2>
            <p>
              We tailor communication strategies to break barriers and foster
              independence, ensuring that each client can reach their full
              potential.
            </p>
            <p className="italic">
              “The most important thing in communication is hearing what isn't
              being said.” - Peter Drucker
            </p>
          </div>
        </div>
      </div>

      {/* Second Row: Content, Video, and Dropdowns */}
      <div className="mt-2">
        <div className="flex flex-col md:flex-row md:gap-6">
          {/* Main Content */}
          <div className="flex flex-col w-full ">
            <div className="mt-3 text-gray-700 leading-relaxed">
              {/* Floating Video Section and Dropdowns */}
              <div className="float-right w-full md:w-1/2 md:ml-4 mb-4 space-y-2">
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <VideoEmbed
                    videoId="dCoWv8yV8qk"
                    width={640}
                    height={360}
                    className="w-full h-auto"
                  />
                </div>
                <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
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
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                  <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
                    What is a Speech Disorder?
                  </summary>
                  <div className="mt-3 text-base text-gray-700 leading-relaxed">
                    <p>
                      A speech disorder refers to difficulties in producing
                      sounds correctly, speaking fluently, or using one's voice
                      effectively. Articulatory distortions can arise from
                      organic causes—those with a known physical origin—such as
                      hearing loss, cleft palate, cerebral palsy, apraxia, or
                      dysarthria, or from functional causes, where no physical
                      cause is identified. An articulation disorder is typically
                      diagnosed when errors persist across four to six phonemes.
                      Phonemes are the smallest units of sound in a language
                      that differentiate meaning between words, such as
                      consonants and vowels.
                    </p>
                    <p>
                      Phonological development is a critical aspect of a child’s
                      growth, encompassing the processes by which a child learns
                      to segment and differentiate various sounds into
                      recognizable units. During this period, a child interprets
                      a continuous flow of sounds, gradually discerning and
                      isolating individual words, and associating each with
                      meaning drawn from environmental cues and verbal
                      interactions. Children pass through distinct stages of
                      phoneme acquisition, allowing speech pathologists to
                      determine whether a child’s phonological development falls
                      within typical patterns.
                    </p>
                    <p>
                      As part of their natural linguistic progression, children
                      attempt to emulate adult speech, employing phonological
                      strategies while they master specific sounds. If a child
                      does not acquire a particular sound within the expected
                      developmental timeline, they may persist in imitating,
                      omitting, or distorting the sound in an effort to
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
                      AAC is employed by individuals who cannot always depend on
                      speech. It includes various forms of communication, from
                      gestures and sign language to the use of specialized
                      communication devices. AAC empowers those with significant
                      expressive language impairments to communicate more
                      effectively and encompasses both unaided methods, like
                      manual signs, and aided methods, such as speech-generating
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
                      Language disorders are diagnosed when children do not meet
                      these milestones within 12 months of the specified
                      development or there is a suspected birth defect, such as
                      cerebral palsy, Down’s syndrome, etc.
                    </p>
                    <p className="mt-3">
                      Language disorders can occur in children with or without
                      any other co-occurring diagnosis (happening at the same
                      time or causing the language disorder).
                    </p>
                    <p className="mt-3">
                      Language disorders in children can be developmental in
                      nature, meaning the child’s language is not developing or
                      following the rules of the language system. It can also be
                      caused by the environment the child is in. Usually,
                      language disorders in children are caused when a child is
                      developmentally delayed or there is a co-occurring
                      diagnosis that is affecting speech or language
                      development.
                    </p>
                    <p className="mt-3">
                      After a developmental psychologist, speech-language
                      pathologist, developmental pediatrician, neurologist,
                      and/or geneticist determines the diagnosis, therapy should
                      begin. Researchers have found that the younger a child
                      receives consistent therapy, the better the outcome. This
                      therapy is called habilitation.
                    </p>
                  </div>
                </details>
                <details className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                  <summary className="text-lg font-sans text-center cursor-pointer text-gray-800">
                    Feeding and Swallowing
                  </summary>
                  <div className="mt-3 text-base text-gray-700 leading-relaxed">
                    <p>
                      The term feeding difficulties is a broad term used to
                      describe a variety of feeding or mealtime behaviors
                      perceived as problematic for a child or family.
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
                      To some extent, these behaviors are all considered to be
                      part of typical feeding development and are usually
                      transient. Children displaying a significant number of
                      these behaviors or displaying a behavior to a greater
                      extent for a prolonged period may be considered to have a
                      ‘Feeding Difficulty.’ In other words, it is not merely the
                      presence of a behavior but the severity and duration of
                      behaviors that signifies a problem.
                    </p>
                    <p className="mt-3">
                      Standard definitions of these terms are lacking; however,
                      behaviors are generally considered to exist on a continuum
                      from typical to more complex feeding and mealtime behavior
                      problems.
                    </p>
                    <p className="mt-3">
                      The term feeding difficulties is also used to describe
                      children with oral motor difficulties in ingesting &
                      swallowing foods and/or fluids. This may be combined with
                      other difficult mealtime behaviors.
                    </p>
                    <p className="mt-3">
                      Feeding Disorders are problems within the range of eating
                      activities that may or may not include swallowing.
                    </p>
                    <p className="mt-3">
                      Swallowing Disorders can occur when there is disruption in
                      one or more of the four stages of swallowing. This is
                      known as Dysphagia.
                    </p>

                    {/* Stages of Swallowing */}
                    <div className="mt-4">
                      <p>
                        <strong>Stage I:</strong>
                      </p>
                      <p>
                        Biting and chewing food takes place in the mouth. At
                        this stage, lack of strength, control, or feeling in the
                        mouth—due to stroke or muscle or nerve disease—may cause
                        food or liquid to fall directly into the throat and
                        cause choking.
                      </p>

                      <p className="mt-3">
                        <strong>Stage II:</strong>
                      </p>
                      <p>
                        The tongue pushes the food to the back of the mouth
                        where a structure folds over the top of the windpipe to
                        keep food out. At the back of the mouth, the presence of
                        food triggers muscle contractions. At this stage, the
                        muscle at the back of the mouth that opens to allow food
                        into the esophagus may malfunction and cause aspiration
                        (food passing into the windpipe), which results in
                        choking.
                      </p>

                      <p className="mt-3">
                        <strong>Stage III:</strong>
                      </p>
                      <p>
                        Muscle contractions push food down the esophagus. At
                        this stage, lack of or inadequate muscle contractions
                        may cause food to stick in the chest.
                      </p>

                      <p className="mt-3">
                        <strong>Stage IV:</strong>
                      </p>
                      <p>
                        Food moves through the esophagus, and the lower
                        esophageal sphincter muscle opens to let food pass into
                        the stomach. At this stage, weakening of this sphincter
                        muscle at the stomach opening may allow acidic stomach
                        secretions to come back up into the esophagus from the
                        stomach, a condition called reflux.
                      </p>
                    </div>

                    {/* Causes of Swallowing Disorders */}
                    <div className="mt-4">
                      <p>
                        <strong>Causes</strong>
                      </p>
                      <p>
                        More than 15 million Americans have a swallowing
                        disorder. They can occur at any age. Swallowing problems
                        may be temporary, or they may be an indication of a
                        serious medical problem. There are many causes,
                        including nerve and muscle problems, head and neck
                        injuries, and cancer. Or they may occur because of a
                        stroke. Certain medications can also contribute to the
                        disorder.
                      </p>
                    </div>
                  </div>
                </details>
              </div>
              {/* Text Content (What is Speech?)*/}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-dancing font-bold md:text-start text-center text-gray-800 p-3 md:p-0">
                  What is Speech?
                </h3>
                <p>
                  Speech is the expressive production of sounds and involves a
                  highly coordinated motor process of breathing, voice
                  production, and articulation of the mouth, lips, and tongue.
                  It's a vital part of human communication and includes several
                  key components:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>
                    <strong>Articulation:</strong> The way we produce individual
                    sounds and words. Precise movement of the mouth, lips, and
                    tongue is necessary to form sounds accurately. For instance,
                    to say the word "rabbit," we must be able to produce the "r"
                    sound clearly instead of misarticulating it as "wabbit."
                  </li>
                  <li>
                    <strong>Voice:</strong> This involves using our vocal folds
                    and breathing to produce sounds. The quality of our voice
                    can vary in loudness and pitch. Strain or damage to the
                    vocal folds can occur from excessive talking, yelling, or
                    persistent coughing, leading to vocal issues.
                  </li>
                  <li>
                    <strong>Fluency:</strong> Fluency is the flow and rhythm of
                    speech. It's how smoothly sounds, syllables, words, and
                    phrases are joined together when we talk. Disfluencies occur
                    when this flow is interrupted by repeated sounds, syllables,
                    or by pausing mid-speech. Stuttering is one type of fluency
                    disorder characterized by frequent disfluencies.
                  </li>
                </ul>
                <p className="mt-4">
                  Understanding and addressing issues in these areas is crucial
                  for effective communication. Speech-language pathologists
                  specialize in diagnosing and treating various speech disorders
                  to help individuals communicate clearly and confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
