import React from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 cursiveFont text-center">
        Contact Us
      </h1>
      <p className="text-center mb-4">
        We value your input and if you have any suggestions on how to improve
        our services, please feel free to contact us at any time. We thank you
        for your support!
      </p>

      <div className="text-center mb-4">
        <p>
          Email:{" "}
          <a
            href="mailto:admin@speechavenues.com"
            className="text-blue-500 hover:underline"
          >
            admin@speechavenues.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+13213382419" className="text-blue-500 hover:underline">
            321-338-2419
          </a>
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
