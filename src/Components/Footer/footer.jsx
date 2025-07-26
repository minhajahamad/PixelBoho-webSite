import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { BsTwitterX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-10 px-4 md:px-10 lg:px-20 xl:px-28 flex flex-col relative z-10 overflow-x-hidden">
      <img
        src="/images/Footer-img.png"
        alt="Footer Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none footer-image"
      />

      {/* Top Section - Content */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr] gap-y-12 gap-x-10 text-white mb-10">
        {/* Logo & About */}
        <div className="flex flex-col gap-5 items-start pr-6 lg:pr-10">
          <img
            src="/images/PixelBoho-Logo.svg"
            className="w-[180px] h-auto"
            alt="PixelBoho Logo"
          />
          <p className="text-[14px] xl:text-[16px] font-light font-rubik text-white max-w-xs">
            <span className="font-medium">Pixelboho</span> is a digital
            marketing agency that has unique features and high security.
          </p>
        </div>

        {/* Services */}
        <div className="text-[12px] font-light text-[#969696] leading-[25px]">
          <p className="font-medium text-[20px] pb-5 text-white">SERVICES</p>
          {[
            'Web & App',
            'Mobile Solutions',
            'Brand Strategy',
            'SEO Services',
            'Cloud Migration',
            'Enterprise Cloud',
            'Tender Systems',
            'ID Verification APIs',
          ].map((item, index) => (
            <p
              key={index}
              className="hover:text-white text-[14px] hover:ml-[2%] transition-all duration-200 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Company */}
        <div className="text-[12px] font-light text-[#969696] leading-[25px]">
          <p className="font-medium text-[20px] pb-5 text-white">COMPANY</p>
          <p
            onClick={() => navigate('/about')}
            className="hover:text-white hover:ml-[2%] transition-all duration-200 cursor-pointer text-[14px]"
          >
            About Us
          </p>
          <p
            onClick={() => navigate('/career')}
            className="hover:text-white hover:ml-[2%] transition-all duration-200 cursor-pointer text-[14px]"
          >
            Careers
          </p>
          <p
            onClick={() => navigate('/contact')}
            className="hover:text-white hover:ml-[2%] transition-all duration-200 cursor-pointer text-[14px]"
          >
            Contact
          </p>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="font-medium text-[20px] pb-5 text-white">
            GET IN TOUCH
          </p>

          {/* Address */}
          <div className="flex items-start  gap-2 group">
            <CiLocationOn className=" text-[50px] text-[#ffff] group-hover:text-red-400 transition-all duration-200 ease-in-out " />
            <p className="font-light text-[#E2E2E2] xl:text-[16px] font-rubik">
              Pukalakkat Complex, Mahakavi Vailoppilli Rd, Palarivattom, Kochi,
              Ernakulam, Kerala, 682025
            </p>
          </div>

          {/* Phone */}
          <a className="flex items-center gap-2 group mt-2">
            <FaPhoneAlt className="text-[#767676]  group-hover:text-[#25D366]" />
            <span className="font-light text-[#E2E2E2] xl:text-[16px] font-rubik group-hover:underline">
              +91 96337 19333
            </span>
          </a>

          {/* Email */}
          <a className="flex items-center gap-2 group mt-2">
            <IoMail className="text-[#767676]" />
            <span className="text-blue-400 hover:underline font-light font-rubik xl:text-[16px]">
              info@pixelboho.in
            </span>
          </a>
        </div>
      </div>

      <hr className="text-[#9e9e9e] w-full mt-4" />

      {/* Bottom Section */}
      <div className="text-white flex flex-col md:flex-row justify-between items-center py-10 text-[12px] xl:text-[14px] relative z-10 gap-4">
        <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
          ©2025 PixelBoho
        </p>
        <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
          Privacy Policy
        </p>
        <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
          Terms & Conditions
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 items-center">
          <div className="bg-[#464646] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-pointer hover:text-[#1877F2]">
            <TiSocialFacebook className="text-[20px]" />
          </div>

          <div className="gradient-color">
            <i className="fa-brands fa-instagram" />
          </div>

          <div className="bg-[#464646] w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-pointer hover:text-black">
            <BsTwitterX className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
