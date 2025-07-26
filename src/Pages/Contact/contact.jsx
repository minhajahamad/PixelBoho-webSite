import React from 'react';
import Header from '../../Components/Header/header';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import Footer from '../../Components/Footer/footer';
const offices = [
  {
    name: 'Kerala ',
    address:
      'Pukalakkat complex, Mahakavi Vailoppilli Rd, Palarivattom, Kochi, Ernakulam, Kerala, 682025',
    // location: <CiLocationOn className="text-white " />,
    phone: '+91 96337 19333',
    email: 'info@pixelboho.in',
    // hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    // employees: '25+ Employees',
  },
  {
    name: 'Karnataka ',
    address: 'Brigade Road, MG Road Area, Bengaluru, Karnataka 560001',
    // location: <CiLocationOn className="text-white " />,

    phone: '+91 87141 71027',
    email: 'info@pixelboho.in',
    // hours: 'Mon-Fri: 9:30 AM - 6:30 PM',
    // employees: '40+ Employees',
  },
  {
    name: 'Tamil Nadu ',
    address: 'OMR Road, Thoraipakkam, Chennai, Tamil Nadu 600097',
    // location: <CiLocationOn className="text-white " />,

    phone: '+91 87141 71027',
    email: 'info@pixelboho.in',
    // hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    // employees: '30+ Employees',
  },
  {
    name: 'Uttar Pradesh ',
    address: 'Sector 62, Noida, Uttar Pradesh 201309',
    // location: <CiLocationOn className="text-white " />,

    phone: '+91 87141 71027',
    email: 'info@pixelboho.in',
    // hours: 'Mon-Fri: 9:30 AM - 6:30 PM',
    // employees: '35+ Employees',
  },
  {
    name: 'Gujarat ',
    address: 'SG Highway, Makarba, Ahmedabad, Gujarat 380051',
    // location: <CiLocationOn className="text-white " />,

    phone: '+91 87141 71027',
    email: 'info@pixelboho.in',
    // hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    // employees: '20+ Employees',
  },
];

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-black text-white pt-[100px] font-poppins ">
        {/* Section 1: Header */}
        <section className="flex flex-col items-center py-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#8528FF] mb-2">
            <span className="text-white">Contact</span> PixelBoho
          </h1>
          <p className="font-light text-[#E2E2E2]  xl:text-[18px] text-center max-w-2xl">
            Connect with our teams across India. We're here to help bring your
            digital vision to life.
          </p>
        </section>

        {/* Section 2: Office Locations */}
        <section className="px-4 py-8 max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-regular text-white mb-4 text-left">
            Our Office Locations
          </h2>
          <p className="font-light text-[#E2E2E2]  xl:text-[18px]  mb-8">
            Find us across major tech hubs in India
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-[#101010] border border-[#dedede33] rounded-xl shadow-2xl p-6 flex flex-col gap-2 cursor-pointer "
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {office.name}
                </h3>
                <div className="flex items-start gap-2 group">
                  <p className="mt-1 text-[#767676] text-[20px]">
                    <CiLocationOn className="group-hover:scale-120 group-hover:text-red-400 transition-all duration-200 ease-in-out" />
                  </p>
                  <p className="font-light text-[#E2E2E2]  xl:text-[16px] font-rubik">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center gap-2 group">
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 group"
                  >
                    <p className="text-[#767676]">
                      <FaPhoneAlt className="group-hover:text-[#25D366]" />
                    </p>
                    <span className="font-light text-[#E2E2E2] xl:text-[16px] font-rubik group-hover:underline">
                      {office.phone}
                    </span>
                  </a>
                </div>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-2 group"
                >
                  <p className="text-[#767676]">
                    <IoMail />
                  </p>
                  <span className="text-blue-400 hover:underline font-light font-rubik xl:text-[16px]">
                    {office.email}
                  </span>
                </a>

                <div className="flex items-center gap-2">
                  <span className="font-light text-[#E2E2E2]  xl:text-[16px] font-rubik">
                    {office.hours}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
