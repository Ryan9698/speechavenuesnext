import React from "react";

export const metadata = {
  title: "Speech Avenues Therapy - Contact Us",
  description:
    "Please contact us with any questions, comments, and concerns. We love feedback and are always looking for ways to improve our services at Speech Avenues. Thank you!",
};

export default function Contact() {
  return (
    <>
      <div className="container mx-auto mt-8 px-4 py-8 bg-white ">
        <h1 className="text-6xl font-bold mb-10 cursiveFont text-center text-gray-800">
          Contact Us
        </h1>
        <p className="text-center mb-4 text-gray-600 text-xl">
          We value your input and if you have any suggestions on how to improve
          our services, please feel free to contact us at any time. We thank you
          for your support!
        </p>

        <div className="text-center mb-6">
          <p className="text-xl text-gray-600">
            <span className="font-bold">Email: </span>
            <a
              href="mailto:admin@speechavenues.com"
              className="text-blue-500 hover:underline"
            >
              admin@speechavenues.com
            </a>
          </p>
          <p className="text-xl text-gray-600">
            <span className="font-bold">Phone: </span>
            <a
              href="tel:+13213382419"
              className="text-blue-500 hover:underline"
            >
              321-338-2419
            </a>
          </p>
        </div>

        {/* Uncomment this when the feature is ready */}
        {/* <ContactForm /> */}
      </div>
    </>
  );
}
