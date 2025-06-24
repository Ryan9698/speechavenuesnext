import React from 'react';
import { TransitionWrapper } from '@/components/Animations';

export const metadata = {
  title: 'Speech Avenues Therapy - Contact Us',
  description:
    'Please contact us with any questions, comments, and concerns. We love feedback and are always looking for ways to improve our services at Speech Avenues. Thank you!',
  alternates: {
    canonical: `/contact`,
  },
  keywords: [
    'Speech Avenues Contact Us',
    'Speech Avenues Rockledge Phone Number',
    'SATC phone number',
  ],
};

const businessHours = [
  { day: 'Monday', hours: '9:00 AM – 5:30 PM' },
  { day: 'Tuesday', hours: '8:30 AM – 6:00 PM' },
  { day: 'Wednesday', hours: '8:30 AM – 6:00 PM' },
  { day: 'Thursday', hours: '8:30 AM – 6:00 PM' },
  { day: 'Friday', hours: '8:30 AM – 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <>
      <TransitionWrapper>
        <div className="container mx-auto px-4 py-12 max-w-4xl mt-12">
          <h1 className="cursiveFont text-5xl font-bold mb-6 text-center text-gray-800">
            Contact Us
          </h1>
          <p className="text-center text-gray-600 text-lg mb-10">
            We value your input. If you have any suggestions on how to improve
            our services, please reach out anytime. Thank you for your support!
          </p>

          <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-6">
            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Email:</span>{' '}
                <a
                  href="mailto:admin@speechavenues.com"
                  className="text-blue-500 hover:underline"
                >
                  admin@speechavenues.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Phone:</span>{' '}
                <a
                  href="tel:+13213382419"
                  className="text-blue-500 hover:underline"
                >
                  321-338-2419
                </a>
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center md:text-left">
                Hours of Operation
              </h2>
              <ul className="space-y-1 text-gray-700">
                {businessHours.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex justify-between border-b border-gray-200 py-1"
                  >
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}

// export default function Contact() {
//   return (
//     <>
//       <div className="container mx-auto mt-8 px-4 py-8 bg-white max-w-3xl ">
//         <h1 className="text-6xl font-bold mb-10 cursiveFont text-center text-gray-800">
//           Contact Us
//         </h1>
//         <p className="text-center mx-4 text-gray-600 text-xl mb-8">
//           We value your input and if you have any suggestions on how to improve
//           our services, please feel free to contact us at any time. We thank you
//           for your support!
//         </p>

//         <div className="text-center mb-6">
//           <p className="text-xl text-gray-600">
//             <span className="font-bold">Email: </span>
//             <a
//               href="mailto:admin@speechavenues.com"
//               className="text-blue-500 hover:underline"
//             >
//               admin@speechavenues.com
//             </a>
//           </p>
//           <p className="text-xl text-gray-600">
//             <span className="font-bold">Phone: </span>
//             <a
//               href="tel:+13213382419"
//               className="text-blue-500 hover:underline"
//             >
//               321-338-2419
//             </a>
//           </p>
//         </div>

//         {/* Uncomment this when the feature is ready */}
//         {/* <ContactForm /> */}
//       </div>
//     </>
//   );
// }
