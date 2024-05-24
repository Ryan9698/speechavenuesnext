// app/page.jsx
import React from "react";
// import Head from "next/head";
import PhoneIcon from "@/components/PhoneIcon";
import Testimonials from "@/components/Testimonials";
import MainpageImages from "@/components/MainpageImages/MainpageImages";
import { Metadata } from 'next';

export const metadata = {
  title: "Speech Avenues Therapy - Home",
  description:
    "Speech Avenues Therapy Co offers speech therapy and occupational therapy services in Rockledge Florida. SATC offers an array of speech and communication services with a focus on Autism Spectrum Disorder (ASD), Downs Syndrome and Cerebral Palsy in both adults and children.",
};

export default function Home() {
  return (
    <>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/2">
            <MainpageImages />
            <div className="w-full mt-4 md:mt-0">
              <Testimonials />
            </div>
          </div>
          <div className="prose prose-lg max-w-none w-full md:w-1/2">
            <div className="ml-5 mr-5">
              <h1
                className="text-4xl font-bold mb-6"
                style={{ fontFamily: '"Dancing Script", cursive' }}
              >
                Welcome!
              </h1>
              <p>
                Welcome to Speech Avenues Therapy Co. (S.A.T.C), where we
                redefine possibilities through our professional speech and
                occupational therapy services. Our dedicated family of
                therapists is committed to enhancing communication skills and
                promoting functional independence for individuals across all age
                groups.
              </p>
              <p>
                At S.A.T.C, we understand that every individual is unique. Our
                therapists are dedicated to assisting each client by creating
                carefully tailored Therapy Care Plans, reflecting our commitment
                to personalized care. Our compassionate approach and
                cutting-edge techniques have proven to unlock our clients' full
                potential, nurturing growth, and empowering them to overcome
                challenges while enhancing their unique special abilities.
              </p>
              <p>For inquiries or to book an appointment, please call</p>
              <div className="flex items-center">
                <PhoneIcon className="inline mr-2" />
                <a
                  href="tel:+13213382419"
                  className="text-lg font-medium no-underline"
                >
                  321-338-2419
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// // "use client";
// // import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import PhoneIcon from "@/components/PhoneIcon";
// import Testimonials from "@/components/Testimonials";
// import MainpageImages from "@/components/MainpageImages"

// const metadata = {
//   title: "Speech Avenues Home Page",
//   description:
//     "Speech Avenues Therapy Co offers speech therapy and occupational therapy services in Rockledge Florida. SATC offers an array of speech and communication services with a focus on Autism Spectrum Disorder (ASD), Downs Syndrome and Cerebral Palsy in both adults and children.",
// };

// const images = [
//   "/images/mainpageimages/logo.jpg",
//   "/images/mainpageimages/enrollacademy.png",
//   "/images/mainpageimages/summerintensives.jpg",
//   "/images/mainpageimages/whatweoffer.png",
//   "/images/mainpageimages/feedingtherapy.png",
//   "/images/mainpageimages/hoursofoperation.png", // Update with your second image path
// ];

// export default function Home() {
//   <MainpageImages />
//   // const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   // const [fade, setFade] = useState(true); // True means fade-in, false means fade-out

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setFade(false); // Start fading out
//   //     setTimeout(() => {
//   //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   //       setFade(true); // Start fading in
//   //     }, 2000); // Wait for fade-out duration
//   //   }, 5000); // Change image every 5 seconds
//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     <>
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="container mx-auto p-4">
//         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
//           <div className="w-full md:w-1/2">
//             {/* Image Container Size */}
//             <div className="relative w-full h-96 md:h-96">
//               {images.map((image, index) => (
//                 <Image
//                   key={index}
//                   src={image}
//                   alt={`Image ${index}`}
//                   fill
//                   className={`absolute top-0 left-0 transition-opacity duration-1000 ${
//                     index === currentImageIndex
//                       ? fade
//                         ? "fade-in"
//                         : "fade-out"
//                       : "opacity-0"
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="w-full mt-4 md:mt-0">
//               <Testimonials />
//             </div>
//           </div>
//           <div className="prose prose-lg max-w-none w-full md:w-1/2">
//             <div className="ml-5 mr-5">
//               <h1
//                 className="text-4xl font-bold mb-6"
//                 style={{ fontFamily: '"Dancing Script", cursive' }}
//               >
//                 Welcome!
//               </h1>
//               <p>
//                 Welcome to Speech Avenues Therapy Co. (S.A.T.C), where we
//                 redefine possibilities through our professional speech and
//                 occupational therapy services. Our dedicated family of
//                 therapists is committed to enhancing communication skills and
//                 promoting functional independence for individuals across all age
//                 groups.
//               </p>
//               <p>
//                 At S.A.T.C, we understand that every individual is unique. Our
//                 therapists are dedicated to assisting each client by creating
//                 carefully tailored Therapy Care Plans, reflecting our commitment
//                 to personalized care. Our compassionate approach and
//                 cutting-edge techniques have proven to unlock our clients' full
//                 potential, nurturing growth, and empowering them to overcome
//                 challenges while enhancing their unique special abilities.
//               </p>
//               <p>For inquiries or to book an appointment, please call</p>
//               <div className="flex items-center">
//                 <PhoneIcon className="inline mr-2" />
//                 <a
//                   href="tel:+13213382419"
//                   className="text-lg font-medium no-underline"
//                 >
//                   321-338-2419
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
