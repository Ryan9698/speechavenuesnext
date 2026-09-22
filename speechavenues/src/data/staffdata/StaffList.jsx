import { image } from 'framer-motion/client';

const speechStaff = [
  {
    id: 1,
    name: 'Gail Walter',
    role: 'M.S. CCC-SLP',
    bio: `
      Meet Mrs. Gail Walter, MS CCC-SLP, a dedicated Speech Language Pathologist and self-made businesswoman with over 40 years of experience in communicative disorders. Gail is the Clinical Director and owner of Speech Avenues Therapy Co and CEO and founder of Speech Avenues Therapy Co Communication Cultivations Academy.

      Licensed by the Florida Department of Health and nationally certified by ASHA, Gail specializes in motor speech disorders, phonological deficits, developmental delays, traumatic brain injuries, memory deficits, feeding and swallowing disorders, AAC programming, cognitive disorders, a certified Speak Out Therapist for Parkinson’s, and so much more.

      With a Master of Science in Speech Language Pathology from Nova Southeastern University and a Bachelor's degree from the University of Central Florida, Gail is committed to enhancing lives through communication. As a mother, grandmother, wife, advocate for the neurodivergent community, avid surf skater, and amateur surfer who has participated in numerous competitions, she brings passion, kindness, patience, experience, and expertise to her therapy sessions. `,
    imageUrl: `https://res.cloudinary.com/dfchcqbiq/image/upload/v1736005853/Speech%20Avenues/Bio%20Photos/Gail3_puseg0.webp`,
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
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735510010/Speech%20Avenues/Bio%20Photos/satc-jk_ukmm0j.webp',
    alt: 'Portrait of Jane Kran',
    width: 300,
    height: 400,
  },
  {
    id: 3,
    name: 'Erica Gallinat',
    role: 'M.S. CCC-SLP',
    bio: `
      Meet Mrs. Erica Gallinat, MS CCC-SLP, your experienced Speech-Language Pathologist and ally in communication care. Erica has over a decade of expertise in aiding both pediatric patients and adults with communication disorders. Erica is fully licensed by the Florida State Department of Health and nationally certified by the American Speech and Hearing Association (ASHA). Her academic background includes a bachelor's and master's degree from the University of Connecticut in communication disorders and speech pathology.

      Erica's specialization spans a wide spectrum, including speech apraxia, receptive language disorders, pragmatic skills, life skills, voice disorders, high/low tech alternative and augmentative communication methods, and cognitive communication.

      In addition to serving her community, Erica is a devoted mother of two and enjoys spending her off days with her family. Erica's passion lies in ensuring communication access for all who seek it. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735509497/Speech%20Avenues/Bio%20Photos/erica_convert_kdlkyn.webp',
    alt: 'Portrait of Erica Gallinat',
    width: 300,
    height: 400,
  },
  {
    id: 4,
    name: 'Chris Whidden',
    role: 'M.A. CCC - SLP',
    bio: `
      Meet Chris Whidden, a dedicated Speech Language Pathologist with a passion for serving others and a perpetual smile on his face. With a "can-do" attitude, Chris tackles every challenge head-on, offering assistance in any way he can.

      With years of experience in local hospitals across Brevard County and coaching Special Olympic Sports, Chris found his calling and home at Speech Avenues Therapy Co. His mission is to empower individuals to communicate and thrive, showcasing their inner greatness to the world. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735511296/Speech%20Avenues/Bio%20Photos/chris-convert2_s96xuh.webp',
    alt: 'Portrait of Chris Whidden',
    width: 300,
    height: 400,
  },
  {
    id: 5,
    name: 'Valessa',
    role: 'SLPA',
    bio: `Meet Valessa, our Speech-Language Pathology Assistant (SLPA)! Originally from South Florida and now based in Central Florida, Valessa began her career working with children with Autism Spectrum Disorder as a Registered Behavior Technician (RBT). That experience introduced her to speech-language pathology and sparked her passion for pediatric speech therapy. She is excited to continue growing in the field and hopes to one day become a pediatric Speech-Language Pathologist (SLP).

Outside of work, Valessa enjoys attending concerts, spending time at the beach, and making memories with friends and family.`,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1780343093/Speech%20Avenues/Bio%20Photos/valessa_vl9k76.webp',
    alt: 'Portrait of Valessa',
    width: 300,
    height: 400,
  },
  {
    id: 6,
    name: 'Alicia',
    role: 'SLPA',
    bio: '',
    imageUrl: '/avatar.webp',
    alt: 'Portrait of Alicia',
    width: 300,
    height: 400,
  },
];

const otStaff = [
  {
    id: 1,
    name: 'Kailey Watson',
    role: 'OTR/L',
    bio: `
      Meet Kailey Watson, an enthusiastic occupational therapist who is passionate about helping children achieve their highest potential in their meaningful daily occupations. She recognizes that each child is unique and provides care that will have a meaningful impact on each child’s life. 
    
      Kailey is fully licensed by the Florida State Department of Health and nationally certified by the American Occupational Therapy Association (AOTA). She received her bachelor’s in psychology from the University of Central Florida and her master's in occupational therapy from the University of St Augustine for Health Sciences. 
      
      Some of Kailey’s passions outside of work include spending time with her family, her dog, going to the beach, and trying new things.`,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735510565/Speech%20Avenues/Bio%20Photos/KAILEY-Convert_s79isd.webp',
    alt: 'Portrait of Kailey Watson',
    width: 300,
    height: 400,
  },
  {
    id: 2,
    name: 'Jasmine',
    role: 'COTA',
    bio: `Meet Jasmine, our newest Certified Occupational Therapy Assistant (COTA)! Before entering the therapy field, she worked in human services, but she quickly realized she couldn’t imagine herself doing anything else. Her passion for helping others began at a young age when teachers often asked her to assist classmates with physical limitations. She also spent summers helping her grandmother with daily living activities, which further inspired her love for occupational therapy.

Outside of work, Jasmine is a devoted mom to her two boys and cherishes spending quality family time together on her days off. She also enjoys traveling, cooking, and staying active in her community.`,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1780343092/Speech%20Avenues/Bio%20Photos/jasmine_v6rxkf.webp',
    alt: 'Portrait of Jasmine',
    width: 300,
    height: 400,
  },
  {
    id: 3,
    name: 'Krysta',
    role: 'COTA',
    bio: '',
    imageUrl: '/avatar.webp',
    alt: 'Portrait of Krysta',
    width: 300,
    height: 400,
  },
];

const nonTherapyStaff = [
  {
    id: 1,
    name: 'Gabby',
    role: 'Administrative Assistant',
    bio: `
      Stop in and say hello to Gabby, our vibrant administrative assistant with a heart full of passion for healthcare and advocacy for others! Gabby is always ready and happy to help with any concerns, billing needs, scheduling, questions, or anything else to ensure a seamless experience. 

      When she's not working or studying, Gabby enjoys exploring new places with her husband, connecting with nature, staying active, experimenting in the kitchen, reading a good book, and spending quality time with her trio of lovable fur babies.  `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1736006311/Speech%20Avenues/Bio%20Photos/Gabby_gxe2th.webp',
    alt: 'Portrait of Gabby, Administration Assistant',
    width: 300,
    height: 400,
  },
  {
    id: 2,
    name: 'Michelle',
    role: 'Front Desk/Reception',
    bio: `
      Chat a little with Michelle, our sweet and loving front desk extraordinaire who brings joy to everyone she meets! Known for her quick wit and contagious sense of humor, Michelle handles scheduling, referrals, and all other office needs with care and dedication. 

      When she's not spreading cheer around the office, Michelle enjoys crafting creative projects, baking delicious treats, spending time with her three wonderful daughters, and making memories out and about with friends and family. `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1736006176/Speech%20Avenues/Bio%20Photos/michelle_f2zoyk.webp',
    alt: 'Portrait of Michelle, Front Desk/Reception',
    width: 300,
    height: 400,
  },
  {
    id: 3,
    name: 'Garrett L.',
    role: 'Palm Bay Coordinator',
    bio: 'Meet Garrett, our Palm Bay Coordinator! Garrett handles many of the referrals and administative tasks for our Palm Bay office though also works as a vital member of our staff in Rockledge. Garrett is dedicated, hardworking, and always brings a positive attitude to the team. Outside of work, he enjoys spending time with his wife and their dog, Loretta. We’re excited to have him as part of the team and look forward to watching him continue to grow in his role!',
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1778791128/Speech%20Avenues/Bio%20Photos/garrettl_yqfx7l.webp',
    alt: 'Portrait of Garrett L.',
    width: 300,
    height: 400,
  },
  {
    id: 4,
    name: 'Aimee',
    role: 'Administatrative Assistant',
    bio: '',
    imageUrl: '/avatar.webp',
    alt: 'Portrait of Aimee',
    width: 300,
    height: 400,
  },
  {
    id: 5,
    name: 'Ozzy',
    role: 'Therapy Dog',
    bio: `
    Hi! My name is Ozzy, and I am a one-year-old Australian Shepherd Golden Retriever Mix. I am a Certified Therapy Dog registered with the AKC-recognized Alliance of Therapy Dogs.

    I love to bring comfort and smiles to all ages! I enjoy pets, snuggling, playing games, and going for walks.

    Feel free to say hi to me anytime!
  `,
    imageUrl:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735511074/Speech%20Avenues/Bio%20Photos/ozzy-convert_ow78uf.webp',
    alt: 'Portrait of Ozzy, Therapy Dog',
    width: 300,
    height: 400,
  },
];

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

export { speechStaff, otStaff, nonTherapyStaff };
