// src/pages/ContactUs.tsx
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-center font-bold mb-8 text-white">
        Contact Us
      </h1>
      <section className="mb-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf2k6J1ccmMwpNbyf2jh5u-uLRIsIEOkLOxe3We23MzVGQ0Ag/viewform?embedded=true"
          width="100%"
          height="1200"
        >
          Loading…
        </iframe>
      </section>
    </main>
  );
};

export default ContactUs;
