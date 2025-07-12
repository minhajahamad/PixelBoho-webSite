import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { BsTwitterX } from 'react-icons/bs';
const Footer = () => {
  return (
    <div className=" bg-black py-10 px-3 md:px-15 lg:px-20  xl:px-30 xl:py-10 2xl:px-60 flex flex-col relative z-10 overflow-x-hidden">
      <img
        src="/images/Footer-img.png"
        className="absolute top-[0px] z-0 pointer-events-none footer-image "
      />
      <div className=" flex flex-col gap-15    lg:flex-row lg:justify-between text-white ">
        <div className="flex flex-col gap-5 ">
          <img
            src="/images/PixelBoho-Logo.svg"
            className="w-[230px] h-[130px] 2xl:w-[300px]  mx-auto "
          />
          <p className="xl:text-[16px] 2xl:text-[20px] font-light font-rubik text-white xl:mt-10 mx-auto">
            <span className="font-medium">Pixelboho</span> is a digital
            marketing agency that <br /> has unique features and has high
            security.
          </p>
        </div>
        <div className="flex gap-10 md:gap-20 md:justify-around xl:gap-30 ">
          <div className="flex flex-col justify-start gap-5  font-medium xl:text-[20px] 2xl:text-[22px] ">
            <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
              ABOUT
            </p>
            <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
              WORKS
            </p>
          </div>
          <div className="text-[12px] 2xl:text-[14px] font-light text-[#969696] leading-[25px] ">
            <p className="font-medium text-[20px] 2xl:text-[22px] pb-5 text-white">
              SERVICES
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              {' '}
              Web & App Platforms
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              Mobile Solutions
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              Brand Strategy
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              SEO Services
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              Cloud Migration
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              Enterprise Cloud
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              Tender Systems
            </p>
            <p className="hover:text-white transition-colors duration-200 cursor-pointer  ">
              ID Verification APIs
            </p>
          </div>
          <div className=" flex flex-col gap-2 mt-[-5px]">
            <p className="font-medium text-[20px] 2xl:text-[22px] text-white">
              To Know More
            </p>
            <div className="text-white text-[14px] 2xl:text-[18px]  bg-[#8528FF] px-2 py-2 text-center rounded-[4px] border border-black hover:bg-black hover:border-[#999999] trasnition-colors duration-400 cursor-pointer  ">
              <p>Book Meeting</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-white xl:w-[100%] mt-10 " />

      <div className="text-white flex justify-between items-center py-10 text-[12px] xl:text-[14px] 2xl:text-[18px] relative">
        <div>
          <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
            ©2020PixelBoho
          </p>
        </div>
        <div>
          <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
            Privacy Policy
          </p>
        </div>
        <div>
          <p className="cursor-pointer hover:text-[#969696] transition-colors duration-300">
            Terms & Conditions
          </p>
        </div>
        <div className="flex gap-5 items-center absolute md:relative top-[70%] right-[33%] md:top-0 md:left-0">
          <div className=" bg-[#464646]  w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-pointer hover:text-[#1877F2]  ">
            <TiSocialFacebook className="text-[20px] 2xl:text-[30px]" />
          </div>

          <div className=" gradient-color   ">
            <i className="fa-brands fa-instagram"></i>
          </div>

          <div className=" bg-[#464646] w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 cursor-pointer hover:text-black ">
            <BsTwitterX className="text-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
