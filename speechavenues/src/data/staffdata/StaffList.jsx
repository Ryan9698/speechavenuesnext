const staffList = [
  {
    id: 1,
    name: 'Gail Walter',
    role: 'M.S. CCC-SLP',
    bio: `
      Meet Mrs. Gail Walter, MS CCC-SLP, a dedicated Speech Language Pathologist and self-made businesswoman with over 40 years of experience in communicative disorders. Gail is the Clinical Director and owner of Speech Avenues Therapy Co and CEO and founder of Speech Avenues Therapy Co Communication Cultivations Academy.

      Licensed by the Florida Department of Health and nationally certified by ASHA, Gail specializes in motor speech disorders, phonological deficits, developmental delays, traumatic brain injuries, memory deficits, feeding and swallowing disorders, AAC programming, cognitive disorders, a certified Speak Out Therapist for Parkinson’s, and so much more.

      With a Master of Science in Speech Language Pathology from Nova Southeastern University and a Bachelor's degree from the University of Central Florida, Gail is committed to enhancing lives through communication. As a mother, grandmother, wife, advocate for the neurodivergent community, avid surf skater, and amateur surfer who has participated in numerous competitions, she brings passion, kindness, patience, experience, and expertise to her therapy sessions. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1716066029/Speech%20Avenues/Bio%20Photos/satc-gw_q0bt8i.jpg',
    alt: 'Portrait of Gail Walter',
    width: 300,
    height: 400,
  },
  {
    id: 2,
    name: 'Jane Kran',
    role: 'M.S. CCC-SLP',
    bio: `
      Introducing Mrs. Jane Kran, MS CCC-SLP, a seasoned Speech-Language Pathologist boasting over three decades of professional experience. Licensed in the vibrant state of Florida since 1995, Jane is a dedicated specialist in Speech Disorders, Phonological Disorders, Childhood/Developmental Apraxia of Speech, Autism Spectrum Disorders/Pervasive Developmental Disorders, Language Disorders, Developmental Delays, and Pragmatic/Social Skills.

      Currently offering telemedicine appointments, Jane's commitment to excellence extends beyond her clinical practice. As a devoted wife and mother of two adult children, she values an active lifestyle, particularly relishing coastal living. Passionate about fostering profound transformations in her clients' lives, Jane considers it a privilege to provide speech-language therapy services.`,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1716066031/Speech%20Avenues/Bio%20Photos/satc-jk_odss7n.jpg',
    alt: 'Portrait of Jane Kran',
    width: 300,
    height: 400,
  },
  {
    id: 3,
    name: 'Erica Gallinat',
    role: 'MS CCC-SLP',
    bio: `
      Meet Mrs. Erica Gallinat, MS CCC-SLP, your experienced Speech-Language Pathologist and ally in communication care. Erica has over a decade of expertise in aiding both pediatric patients and adults with communication disorders. Erica is fully licensed by the Florida State Department of Health and nationally certified by the American Speech and Hearing Association (ASHA). Her academic background includes a bachelor's and master's degree from the University of Connecticut in communication disorders and speech pathology.

      Erica's specialization spans a wide spectrum, including speech apraxia, receptive language disorders, pragmatic skills, life skills, voice disorders, high/low tech alternative and augmentative communication methods, and cognitive communication.

      In addition to serving her community, Erica is a devoted mother of two and enjoys spending her off days with her family. Erica's passion lies in ensuring communication access for all who seek it. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1716066034/Speech%20Avenues/Bio%20Photos/erica_ab9zvw.jpg',
    alt: 'Portrait of Erica Gallinat',
    width: 300,
    height: 400,
  },
  {
    id: 4,
    name: 'Chris Whidden',
    role: 'Clinical Fellow SLP',
    bio: `
      Meet Chris Whidden, a dedicated Speech Language Pathologist Clinical Fellow with a passion for serving others and a perpetual smile on his face. With a "can-do" attitude, Chris tackles every challenge head-on, offering assistance in any way he can.

      With years of experience in local hospitals across Brevard County and coaching Special Olympic Sports, Chris found his calling and home at Speech Avenues Therapy Co. His mission is to empower individuals to communicate and thrive, showcasing their inner greatness to the world. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1716412147/Speech%20Avenues/Bio%20Photos/chris-satc2_xag7hw.jpg',
    alt: 'Portrait of Chris Whidden',
    width: 300,
    height: 400,
  },
  {
    id: 5,
    name: 'Selina Karczewski',
    role: 'Occupational Therapy Assistant',
    bio: `
      Meet Mrs. Selina Karczewski, a certified Occupational Therapy Assistant with 9 years of pediatric experience. Selina loves all things sensory and incorporates self-regulation and sensory modulation techniques into each session to assist children in accomplishing meaningful day-to-day tasks with increased independence.

      She serves as the Board Secretary at SATC Communication Cultivation Academy and often provides push-in therapy during class hours. Selina believes fun and function go hand in hand, so play-based therapy is prevalent in each session.

      Some of Selina's passions outside of work include traveling with her husband and fur baby Bear, trying new recipes, and enjoying a strong cup of coffee!
    `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735407650/Speech%20Avenues/Bio%20Photos/Selina_K_xtc1xw.webp',
    alt: 'Portrait of Selina Karczewski',
    width: 300,
    height: 400,
  },
  {
    id: 6,
    name: 'Taryn Byrnes',
    role: 'COTA/L',
    bio: 'Meet Taryn Byrnes, a dedicated and compassionate Certified Occupational Therapy Assistant (COTA) with a deep passion for improving lives through evidence-based therapy interventions. With a commitment to helping individuals achieve their highest level of independence and quality of life, Taryn has had the privilege of working with diverse populations in a variety of settings, including rehabilitation centers, schools, and within local communities. Taryn believes in the power of creating supportive, encouraging environments that empower individuals to overcome challenges and reach meaningful goals. Driven by a genuine passion for making a positive impact, she combines her expertise in evidence-based practice with a compassionate, person-centered approach to care. Her ultimate goal is to help each individual unlock their full potential and lead a fulfilling, independent life.',
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735408309/Speech%20Avenues/Bio%20Photos/TARYN_BYRNES_xlac8p.webp',
    alt: 'Portrait of Taryn Byrnes',
    width: 300,
    height: 400,
  },
  {
    id: 7,
    name: 'Lisa Timrick',
    role: 'COTA/L',
    bio: 'Meet Lisa, our passionate Certified Occupational Therapy Assistant (COTA) graduate from City Colleges of Chicago, Illinois. She received her occupational therapy assistant degree in 2010. She has over 15 years’ experience working with children of all abilities, and truly finding her passion for occupational therapy while she was working at Shriners Hospital for Children in Chicago. In 2014, Lisa moved to Florida where she began her work as an occupational therapist assistant with medically fragile children. She discovered yoga and the importance of integrating movements into her therapy sessions to support children with learning and regulating their nervous system. She specializes in kids yoga & mindfulness, pediatric massage, sensory challenges and "DIRfloortime" approach. In her free time, Lisa spends time cooking with her family and friends. She enjoys researching and learning about Florida’s snakes and spiders of all kinds. Lisa’s other interests include traveling and training her dog Wrigley to "leave it".',
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735408310/Speech%20Avenues/Bio%20Photos/LISA_TIMRICK_ritbti.webp',
    alt: 'Portrait of Lisa Timrick',
    width: 300,
    height: 400,
  },
];
// {
//   id: 6,
//   name: 'Ozzy',
//   role: 'Therapy Dog',
//   bio: `
//     Hi! My name is Ozzy, and I am a one-year-old Australian Shepherd Golden Retriever Mix. I am a Certified Therapy Dog registered with the AKC-recognized Alliance of Therapy Dogs.

//     I love to bring comfort and smiles to all ages! I enjoy pets, snuggling, playing games, and going for walks.

//     Feel free to say hi to me anytime!
//   `,
//   imageUrl:
//     'https://res.cloudinary.com/dfchcqbiq/image/upload/v1716066035/Speech%20Avenues/Bio%20Photos/ozzy_eevaez.jpg',
//   alt: 'Portrait of Ozzy, Therapy Dog',
//   width: 300,
//   height: 400,
// },

////////////////////////////OBJECT TEMPLATE////////////////////////////
// {
//   id: ,
//   name: ,
//   role: ,
//   bio: ,
//   imageUrl: ,
//   alt: ,
//   width: 300,
//   height: 400,
// },
// ];

export default staffList;
