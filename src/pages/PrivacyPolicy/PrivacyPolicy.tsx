// src/pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#22212f] text-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Introduction
          </h2>
          <p>
            Welcome to EDI Raccoon! We are committed to protecting your personal
            information and privacy. This Privacy Policy explains how we
            collect, use, and protect your information when you use our
            services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Personal Information:</strong> When you sign up or use our
              services, we may collect personal information such as your name,
              email address, and payment details.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect data about your usage of
              our services, including IP addresses, browser types, and actions
              taken within the application.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar technologies
              to enhance your experience and gather data about how you use our
              services.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>To Provide and Improve Our Services:</strong> We use your
              data to deliver and enhance our services and features.
            </li>
            <li>
              <strong>To Communicate With You:</strong> We may send you updates,
              newsletters, or promotional materials related to our services.
            </li>
            <li>
              <strong>To Process Payments:</strong> We use payment information
              to process transactions and manage billing.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. How We Protect Your Information
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Encryption:</strong> We use encryption to secure data
              during transmission and storage.
            </li>
            <li>
              <strong>Access Controls:</strong> Only authorized personnel have
              access to your personal information.
            </li>
            <li>
              <strong>Regular Audits:</strong> We conduct regular security
              audits to ensure the integrity of our systems.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Sharing Your Information
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>With Service Providers:</strong> We may share data with
              third-party vendors who perform services on our behalf.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose information if
              required by law or to protect our rights.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. Your Choices
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Access:</strong> You can request access to your personal
              data.
            </li>
            <li>
              <strong>Correction:</strong> You can request corrections to any
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the deletion of your
              personal data, subject to certain conditions.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Email:</strong> support@ediraccoon.com
            </li>
            <li>
              <strong>Address:</strong> [Your Company Address]
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
