const images = [
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502920/Speech%20Avenues/Gallery%20Photos/Original/sabuilding_xjtuw9.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503066/Speech%20Avenues/Gallery%20Photos/Thumbnail/sabuilding_hgymbg.webp',
    alt: 'Speech Avenues Building in Rockledge Florida. Specializing in Speech and Occupational Therapy Services for adults and children.',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502919/Speech%20Avenues/Gallery%20Photos/Original/satcfamily_uepkev.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503063/Speech%20Avenues/Gallery%20Photos/Thumbnail/satcfamily_sjfr43.webp',
    alt: 'Speech Avenues CCA Family with all members and staff present at ceremony with Wayne Ivey',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502920/Speech%20Avenues/Gallery%20Photos/Original/satcclass_r7ipd1.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503064/Speech%20Avenues/Gallery%20Photos/Thumbnail/satcclass_th7czq.webp',
    alt: 'Speech Avenues Therapy class with therapists, teachers and children',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502921/Speech%20Avenues/Gallery%20Photos/Original/satcfamily2_hxvo5v.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503061/Speech%20Avenues/Gallery%20Photos/Thumbnail/satcfamily2_gbj5tn.webp',
    alt: 'Speech Avenues Therapy Staff',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502918/Speech%20Avenues/Gallery%20Photos/Original/satcribbon_n9nuut.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503062/Speech%20Avenues/Gallery%20Photos/Thumbnail/satcribbon_b42bja.webp',
    alt: 'Speech Avenues Therapy Co Grant Ribbon Cutting',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502923/Speech%20Avenues/Gallery%20Photos/Original/summerintensive2_wqhrtf.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503060/Speech%20Avenues/Gallery%20Photos/Thumbnail/summerintensive2_jukqfz.webp',
    alt: 'Speech Avenues SATC CCA Summer Intensive Program 2023',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502924/Speech%20Avenues/Gallery%20Photos/Original/satcevent_nwtovf.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503065/Speech%20Avenues/Gallery%20Photos/Thumbnail/satcevent_q67slv.webp',
    alt: 'Gail Walter CEO Speech Therapy at local event in Cocoa Village',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502922/Speech%20Avenues/Gallery%20Photos/Original/summerintensive_csomar.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503059/Speech%20Avenues/Gallery%20Photos/Thumbnail/summerintensive_ijyod6.webp',
    alt: 'SATC Group Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502991/Speech%20Avenues/Gallery%20Photos/Original/gallery9_z8dnrq.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503106/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery9_x1mtir.webp',
    alt: 'Child Speech Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502989/Speech%20Avenues/Gallery%20Photos/Original/gallery8_nybma3.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503107/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery8_fvjbmx.webp',
    alt: 'Child Occupational Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502994/Speech%20Avenues/Gallery%20Photos/Original/gallery1_t8agbb.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503127/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery1_lvwvno.webp',
    alt: 'Adult Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503000/Speech%20Avenues/Gallery%20Photos/Original/gallery7_hralt3.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503108/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery7_xv5c8k.webp',
    alt: 'Child Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502990/Speech%20Avenues/Gallery%20Photos/Original/gallery6_lucy8a.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503109/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery6_bnladt.webp',
    alt: 'Child Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502997/Speech%20Avenues/Gallery%20Photos/Original/gallery5_xzzzl9.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503110/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery5_ws9kzn.webp',
    alt: 'Child Thanksgiving Project',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502985/Speech%20Avenues/Gallery%20Photos/Original/gallery4_ouqpnw.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503111/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery4_n0eogw.webp',
    alt: 'Child Interaction',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503001/Speech%20Avenues/Gallery%20Photos/Original/gallery3_ggukqb.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503112/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery3_mwg7so.webp',
    alt: 'Chris with Ozzy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502981/Speech%20Avenues/Gallery%20Photos/Original/gallery2_y5amrm.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503115/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery2_j6vjjr.webp',
    alt: 'Feeding Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503003/Speech%20Avenues/Gallery%20Photos/Original/gallery25_qobn3u.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503101/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery25_isupva.webp',
    alt: 'Child OT',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502980/Speech%20Avenues/Gallery%20Photos/Original/gallery24_rbz6yq.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503102/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery24_mepfkd.webp',
    alt: 'Child Feeding Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502980/Speech%20Avenues/Gallery%20Photos/Original/gallery23_ibixx9.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503103/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery23_mrnfxn.webp',
    alt: 'Child using AAC Device',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502987/Speech%20Avenues/Gallery%20Photos/Original/gallery22_la1y0p.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503104/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery22_uyreb6.webp',
    alt: 'Child Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502992/Speech%20Avenues/Gallery%20Photos/Original/gallery21_p722ar.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503113/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery21_wn84oq.webp',
    alt: 'Standing next to SATC sign',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502993/Speech%20Avenues/Gallery%20Photos/Original/gallery20_c2g4hx.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503115/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery20_rddhdt.webp',
    alt: 'Looking cool',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503005/Speech%20Avenues/Gallery%20Photos/Original/gallery19_mtrca0.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503117/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery19_uo9e4x.webp',
    alt: 'Working Together',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502999/Speech%20Avenues/Gallery%20Photos/Original/gallery18_elksoo.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503118/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery18_seklmx.webp',
    alt: 'Athlete',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502982/Speech%20Avenues/Gallery%20Photos/Original/gallery17_hqlw5p.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503119/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery17_vfrxdj.webp',
    alt: 'Hanging out with Ozzy. Peace sign',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502986/Speech%20Avenues/Gallery%20Photos/Original/gallery16_g4ppvv.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503120/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery16_yxabby.webp',
    alt: 'Smile!',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502984/Speech%20Avenues/Gallery%20Photos/Original/gallery15_suzbqp.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503123/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery15_cfx49m.webp',
    alt: 'Group event SATC Staff',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502983/Speech%20Avenues/Gallery%20Photos/Original/gallery14_lbwejh.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503121/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery14_sepqoe.webp',
    alt: 'Group event outside',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502996/Speech%20Avenues/Gallery%20Photos/Original/gallery13_ylv1ou.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503124/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery13_wxllfu.webp',
    alt: 'Adult Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503004/Speech%20Avenues/Gallery%20Photos/Original/gallery12_hahamf.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503128/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery12_gnjdbn.webp',
    alt: 'Child Feeding Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502995/Speech%20Avenues/Gallery%20Photos/Original/gallery11_ja5lgu.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503125/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery11_t94hrb.webp',
    alt: 'Child Therapy',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502999/Speech%20Avenues/Gallery%20Photos/Original/gallery10_ylacog.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503126/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery10_bw9hfj.webp',
    alt: 'Deep Sea',
  },
  {
    original:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735502988/Speech%20Avenues/Gallery%20Photos/Original/gallery0_zboa1y.webp',
    thumbnail:
      'https://res.cloudinary.com/dfchcqbiq/image/upload/v1735503130/Speech%20Avenues/Gallery%20Photos/Thumbnail/gallery0_m7ekzc.webp',
    alt: 'Adult Speech Therapy',
  },
  // {
  //   original: '',
  //   thumbnail: '',
  //   alt: '',
  // },
  // {
  //   original: '',
  //   thumbnail: '',
  //   alt: '',
  // },
  // {
  //   original: '',
  //   thumbnail: '',
  //   alt: '',
  // },
  // {
  //   original: '',
  //   thumbnail: '',
  //   alt: '',
  // },
  // {
  //   original: '',
  //   thumbnail: '',
  //   alt: '',
  // },
];

export default images;
