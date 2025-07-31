import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const termsSections = [
  {
    title: '1. Company Information',
    content: (
      <ul className="list-disc ml-6">
        <li>
          PixelBoho is a registered entity operating under applicable laws of
          India, providing:
        </li>
        <li>Creative and branding services</li>
        <li>Web and mobile application development</li>
        <li>Digital marketing and advertising</li>
        <li>Cloud hosting, backup, and storage solutions</li>
        <li>IT consulting and infrastructure services</li>
      </ul>
    ),
  },
  {
    title: '2. Scope of Engagement',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>2.1.</b> The scope of services will be defined in individual
          project proposals or Master Service Agreements ("MSA").
        </li>
        <li>
          <b>2.2.</b> Any modifications to the scope must be confirmed in
          writing and may incur additional costs.
        </li>
        <li>
          <b>2.3.</b> The client shall provide necessary content, assets, and
          approvals within agreed timelines to ensure timely delivery.
        </li>
      </ul>
    ),
  },
  {
    title: '3. Fees and Payment Terms',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>3.1.</b> All services will be billed in accordance with the pricing
          terms outlined in the proposal or MSA.
        </li>
        <li>
          <b>3.2.</b> Invoices are payable within 7 to 15 days from the date of
          issue, unless otherwise agreed.
        </li>
        <li>
          <b>3.3.</b> Late payments may attract an interest rate of 1.5% per
          month or the maximum permitted by law.
        </li>
        <li>
          <b>3.4.</b> PixelBoho reserves the right to suspend services for
          overdue accounts.
        </li>
      </ul>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>4.1.</b> Client-provided materials remain the intellectual property
          of the client.
        </li>
        <li>
          <b>4.2.</b> PixelBoho retains ownership of all proprietary code,
          templates, frameworks, or reusable components unless explicitly
          transferred via written agreement.
        </li>
        <li>
          <b>4.3.</b> Upon full payment, PixelBoho grants the client a
          non-exclusive, non-transferable license to use the final deliverables.
        </li>
      </ul>
    ),
  },
  {
    title: '5. Confidentiality',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>5.1.</b> Both parties agree to keep all proprietary or confidential
          information received during the course of the project confidential and
          shall not disclose it to any third party without prior written
          consent.
        </li>
        <li>
          <b>5.2.</b> This clause shall survive the termination of this
          Agreement.
        </li>
      </ul>
    ),
  },
  {
    title: '6. Data Protection and Privacy',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>6.1.</b> PixelBoho will process and store data in accordance with
          the Information Technology Act, 2000, and the General Data Protection
          Regulation (GDPR) for international clients.
        </li>
        <li>
          <b>6.2.</b> Appropriate technical and organizational measures are
          implemented to safeguard data integrity, access, and confidentiality.
        </li>
      </ul>
    ),
  },
  {
    title: '7. Hosting, SaaS, and Cloud Services',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>7.1.</b> Uptime SLA is 99.9% on an annual basis, excluding
          scheduled maintenance.
        </li>
        <li>
          <b>7.2.</b> PixelBoho will take reasonable steps to ensure data is
          regularly backed up. However, clients are responsible for maintaining
          backup copies of their critical data.
        </li>
        <li>
          <b>7.3.</b> We integrate third-party services (e.g., AWS, Google
          Cloud). PixelBoho is not liable for third-party downtime or service
          issues.
        </li>
      </ul>
    ),
  },
  {
    title: '8. Support & Maintenance',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>8.1.</b> Standard support is available during business hours,
          Monday to Friday, 10 AM to 6 PM IST.
        </li>
        <li>
          <b>8.2.</b> Extended or 24x7 support requires a custom SLA.
        </li>
        <li>
          <b>8.3.</b> Bug fixing and technical support will be provided for 30
          days post-deployment. Enhancements and feature additions will be
          billed separately.
        </li>
      </ul>
    ),
  },
  {
    title: '9. Warranties & Limitations',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>9.1.</b> PixelBoho warrants that it will provide services in a
          professional and workmanlike manner.
        </li>
        <li>
          <b>9.2.</b> We do not warrant that any deliverable will be 100%
          error-free or uninterrupted.
        </li>
        <li>
          <b>9.3.</b> Under no circumstances shall PixelBoho be liable for any
          indirect, incidental, or consequential damages. Our total liability
          shall not exceed the amount paid by the client in the 3-month period
          preceding the claim.
        </li>
      </ul>
    ),
  },
  {
    title: '10. Termination',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>10.1.</b> Either party may terminate the Agreement with a 15-day
          written notice.
        </li>
        <li>
          <b>10.2.</b> PixelBoho may terminate or suspend services with
          immediate effect in case of:
          <ul className="list-disc ml-6">
            <li>Non-payment</li>
            <li>Breach of terms</li>
            <li>Illegal or malicious activity</li>
          </ul>
        </li>
        <li>
          <b>10.3.</b> Upon termination, all dues must be cleared by the client.
          PixelBoho will return all project-related materials post-settlement.
        </li>
      </ul>
    ),
  },
  {
    title: '11. Governing Law & Dispute Resolution',
    content: (
      <ul className="list-disc ml-6">
        <li>
          <b>11.1.</b> This Agreement shall be governed by and construed under
          the laws of India.
        </li>
        <li>
          <b>11.2.</b> Any dispute shall be submitted to arbitration in
          accordance with the Arbitration and Conciliation Act, 1996. The venue
          of arbitration shall be [City, e.g., Kochi], and proceedings shall be
          conducted in English.
        </li>
        <li>
          <b>11.3.</b> For international clients, the agreement will comply with
          applicable jurisdictional laws as mutually agreed in the SLA.
        </li>
      </ul>
    ),
  },
  {
    title: '12. Force Majeure',
    content: (
      <p>
        PixelBoho shall not be liable for delays or non-performance resulting
        from acts beyond its reasonable control, including natural disasters,
        internet outages, cyberattacks, labor strikes, or governmental
        restrictions.
      </p>
    ),
  },
  {
    title: '13. Amendments',
    content: (
      <p>
        PixelBoho reserves the right to update or modify these Terms at any
        time. Updates will be posted on our official website and/or communicated
        via email. Continued use of services constitutes acceptance of the
        modified terms.
      </p>
    ),
  },
  {
    title: '14. Contact',
    content: (
      <>
        <p>For queries or legal notices, contact:</p>
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

const TermsConditions = () => {
  return (
    <div>
      <Header />
      <div className="bg-black min-h-screen desc-text px-5 py-12 md:px-10 pt-[100px] xl:pt-[150px] tracking-wide">
        <div className="mx-auto bg-[#101010] rounded-xl shadow-md border border-[#dedede33] p-8">
          <h1 className="text-[35px] xl:text-[50px] font-semibold mb-2 font-poppins text-white">
            Terms & Conditions
          </h1>
          <div className="font-semibold mb-6">
            Effective Date: <span className="text-white">1-04-2023</span>
          </div>
          <div className="mb-6 text-gray-300">
            This Terms and Conditions document ("Agreement") governs the use of
            services offered by PixelBoho, a Creative Digital Agency and
            provider of IT and Cloud Solutions, hereinafter referred to as
            "PixelBoho," "we," "our," or "us." <br />
            <br />
            By engaging our services, signing a proposal, or using our
            platforms, the client ("you," "your") agrees to be bound by this
            Agreement.
          </div>
          <div>
            {termsSections.map((section, idx) => (
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

export default TermsConditions;
