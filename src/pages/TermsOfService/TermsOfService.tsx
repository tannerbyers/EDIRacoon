import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-[#22212f] text-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-white">Terms of Service</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using EDI Raccoon (the "Service"), you agree to be
            bound by these Terms of Service and our Privacy Policy. If you do
            not agree to these terms, please do not use our Service.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            2. Services Provided
          </h2>
          <p>
            EDI Raccoon offers a platform for managing Electronic Data
            Interchange (EDI) transactions. Our services include storage,
            retrieval, and search capabilities for EDI data. We may update or
            modify our services from time to time, and we will notify you of any
            significant changes.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Lawful Use:</strong> You agree to use our Service only for
              lawful purposes and in compliance with applicable laws and
              regulations.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for
              maintaining the confidentiality of your account information and
              for all activities that occur under your account.
            </li>
            <li>
              <strong>Prohibited Activities:</strong> You agree not to engage in
              any activity that interferes with or disrupts the Service,
              including but not limited to unauthorized access or data breaches.
            </li>
            <li>
              <strong>Compliance:</strong> You agree to comply with any
              additional terms or guidelines that may apply to specific features
              or services we provide.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            4. Subscription and Payment
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              <strong>Fees:</strong> You agree to pay all fees associated with
              your subscription as described on our website or in our
              documentation.
            </li>
            <li>
              <strong>Billing Cycle:</strong> Your subscription will
              automatically renew at the end of each billing cycle unless you
              cancel it in accordance with our cancellation policy.
            </li>
            <li>
              <strong>Refunds:</strong> All payments are non-refundable except
              as required by law. We do not provide refunds for unused portions
              of your subscription.
            </li>
            <li>
              <strong>Taxes:</strong> You are responsible for any taxes or fees
              applicable to your subscription, including sales tax, VAT, or
              other taxes required by law.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            5. Intellectual Property
          </h2>
          <p>
            All intellectual property rights in the Service, including but not
            limited to trademarks, logos, and software, are owned by EDI Raccoon
            or its licensors. You may not use, reproduce, or distribute any part
            of the Service without our prior written consent.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, EDI Raccoon shall not be
            liable for any indirect, incidental, special, or consequential
            damages arising out of or related to your use of the Service, even
            if we have been advised of the possibility of such damages. Our
            total liability for any claim related to the Service is limited to
            the amount you paid for the Service in the past 12 months.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            7. Termination
          </h2>
          <p>
            We may suspend or terminate your access to the Service at any time,
            with or without cause, and with or without notice. You may terminate
            your subscription by following the instructions on our website. Upon
            termination, you will lose access to your account and any data
            associated with it.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            8. Changes to Terms
          </h2>
          <p>
            We may update these Terms of Service from time to time. Any changes
            will be posted on our website, and your continued use of the Service
            after such changes constitutes your acceptance of the new terms.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            9. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of [Your Jurisdiction], without regard to its conflict
            of law principles. Any disputes arising under these terms shall be
            resolved in the competent courts of [Your Jurisdiction].
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            10. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
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

export default TermsOfService;
