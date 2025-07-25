import AACDevice from '../faqcontent/AACDevice';
import SensoryDisorder from '../faqcontent/SensoryDisorder';
import SensorySystem from '../faqcontent/SensorySystem';
import TherapeuticYoga from '../faqcontent/TherapeuticYoga';
import WhatIsAutism from '../faqcontent/WhatIsAutism';

export const otFaqTopics = [
  {
    slug: 'sensory-processing-disorder',
    title: 'What is Sensory Processing Disorder?',
    content: () => <SensoryDisorder />,
  },
  {
    slug: 'the-eight-sensory-systems',
    title: 'The Eight Sensory Systems',
    content: () => <SensorySystem />,
  },
  {
    slug: 'therapeutic-yoga',
    title: 'Therapeutic Yoga',
    content: () => <TherapeuticYoga />,
  },
  {
    slug: 'autism-spectrum-disorder-ot',
    title: 'Autism Spectrum Disorder (ASD)',
    content: () => <WhatIsAutism />,
  },
  {
    slug: 'aac-and-how-it-is-used',
    title: 'AAC Devices: Augmentative and Alternative Communication',
    content: () => <AACDevice />,
  },
];
