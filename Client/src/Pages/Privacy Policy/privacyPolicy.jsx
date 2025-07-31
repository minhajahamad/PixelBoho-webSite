import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const policySections = [
  {
    title: '1. Scope',
    content: (
      <ul className="list-disc ml-6">
        <li>Clients engaging in services with PixelBoho</li>
        <li>Users visiting our website or digital platforms</li>
        <li>Users of hosted/cloud/SaaS platforms managed by PixelBoho</li>
      </ul>
    ),
  },
  {
    title: '2. Information We Collect',
    content: (
      <ul className="list-disc ml-6">
        <li>Full Name, Contact Number, Email Address</li>
        <li>Billing Address, Company Name, GST Number</li>
        <li>Website usage data (IP address, browser type, access times)</li>
        <li>Project-related documents, media, and user credentials</li>
        <li>Communication logs and feedback</li>
        <li>
          We only collect personal data that is relevant to the purpose of
          engagement and required to deliver or improve our services.
        </li>
      </ul>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <ul className="list-disc ml-6">
        <li>Provide, improve, and customize our services</li>
        <li>Process transactions and send invoices</li>
        <li>Respond to customer inquiries and support requests</li>
        <li>Communicate updates, service changes, or promotions</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>
    ),
  },
  {
    title: '4. Data Sharing & Disclosure',
    content: (
      <ul className="list-disc ml-6">
        <li>
          We do not sell or rent your data to third parties. We may share your
          data:
          <ul className="list-disc ml-6">
            <li>
              With third-party vendors (e.g., hosting, email, analytics) for
              operational purposes
            </li>
            <li>When required by law, court order, or government request</li>
            <li>
              In connection with a business transaction such as merger,
              acquisition, or asset sale
            </li>
          </ul>
        </li>
        <li>
          All third parties are bound by strict confidentiality and data
          processing agreements.
        </li>
      </ul>
    ),
  },
  {
    title: '5. Data Security',
    content: (
      <>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          to protect your personal information from unauthorized access,
          disclosure, misuse, or loss.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>SSL encryption</li>
          <li>Firewall-protected cloud infrastructure</li>
          <li>Role-based access controls</li>
          <li>Regular backups and audits</li>
        </ul>
      </>
    ),
  },
  {
    title: '6. Data Retention',
    content: (
      <ul className="list-disc ml-6">
        <li>For the duration of the business relationship</li>
        <li>To fulfill contractual or legal obligations</li>
        <li>For accounting and record-keeping purposes (typically 7 years)</li>
        <li>
          Upon request or termination, data will be anonymized or securely
          deleted.
        </li>
      </ul>
    ),
  },
  {
    title: '7. Your Rights (as per GDPR and Indian Law)',
    content: (
      <ul className="list-disc ml-6">
        <li>Access the personal data we hold about you</li>
        <li>Request corrections to inaccurate data</li>
        <li>
          Withdraw consent or request deletion (subject to legal obligations)
        </li>
        <li>Object to processing or request data portability</li>
      </ul>
    ),
    note: (
      <div>
        <span>
          To exercise your rights, contact us at{' '}
          <a
            href="mailto:support@pixelboho.com"
            className="text-blue-400 underline"
          >
            support@pixelboho.com
          </a>
          .
        </span>
      </div>
    ),
  },
  {
    title: '8. International Transfers',
    content: (
      <ul className="list-disc ml-6">
        <li>Data Processing Agreements (DPAs)</li>
        <li>EU-approved Standard Contractual Clauses (for EU clients)</li>
        <li>Secure cloud data centers with ISO/IEC certifications</li>
      </ul>
    ),
  },
  {
    title: '9. Cookies & Tracking',
    content: (
      <p>
        Our website uses cookies for user experience and analytics. You may
        configure your browser to reject cookies or clear them manually.
        Disabling cookies may affect website functionality.
      </p>
    ),
  },
  {
    title: '10. Children’s Privacy',
    content: (
      <p>
        We do not knowingly collect data from children under 18 years. If we
        become aware, we will delete such data promptly.
      </p>
    ),
  },
  {
    title: '11. Updates to This Policy',
    content: (
      <p>
        PixelBoho may update this Privacy Policy periodically. Changes will be
        posted on our website, and your continued use constitutes acceptance of
        such changes.
      </p>
    ),
  },
  {
    title: '12. Contact Us',
    content: (
      <>
        <p>If you have questions about this policy or your data, contact:</p>
        <div className="ml-6 mt-1">
          <div>PixelBoho Creative Solutions</div>
          <div>
            Email:{' '}
            <a
              href="mailto:support@pixelboho.com"
              className="text-blue-400 underline"
            >
              support@pixelboho.com
            </a>
          </div>
          <div>
            Phone: <span className="text-gray-300">+91 96337 19333</span>
          </div>
          <div>
            Website:{' '}
            <a
              href="https://www.pixelboho.com/"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
              target="_blank"
            >
              www.pixelboho.com
            </a>
          </div>
        </div>
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="bg-black min-h-screen desc-text px-5 py-12 md:px-10 pt-[100px] xl:pt-[150px]  tracking-wide">
        <div className=" mx-auto bg-[#101010] rounded-xl shadow-md border border-[#dedede33] p-8">
          <h1 className="text-[35px] xl:text-[50px] font-semibold mb-2 font-poppins text-white">
            Privacy Policy
          </h1>
          <div className=" font-semibold mb-6">
            Effective Date: <span className="text-white">1-04-2023</span>
          </div>

          <div className="mb-6 text-gray-300">
            PixelBoho Creative Solutions ("we", "us", or "our") values your
            privacy and is committed to protecting your personal data. This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your information when you interact with our services, in compliance
            with the Information Technology Act, 2000, applicable rules
            thereunder, and international privacy regulations including the
            General Data Protection Regulation (GDPR).
          </div>

          <div>
            {policySections.map((section, idx) => (
              <div key={idx} className="mb-7">
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <div className="desc-text text-base">
                  {section.content}
                  {section.note && <div className="mt-2">{section.note}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
