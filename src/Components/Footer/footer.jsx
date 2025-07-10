import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black  xl:px-[120px] flex flex-col gap-4 relative z-1  ">
      <div className="flex justify-around items-center mt-20">
        <div>
          <img
            src="/images/PixelBoho-Logo.svg"
            className="w-[150px] h-[80px] "
            alt=""
          />
          <p className=" text-[14px] font-light text-[#E2E2E2] mt-4 ">
            PixelBoho is a digital marketing agency that <br />
            has unique features and has high security.
          </p>
        </div>
        <div className="text-white font-medium text-[25px] flex flex-col justify-between h-40 ">
          <p>ABOUT</p>
          <p>WORKS</p>
        </div>
        <div className="text-[#E2E2E2] font-light text-[14px] flex flex-col justify-between h-40  ">
          <p className="text-[25px] font-medium text-white">Services</p>
          <p>Digital Marketing</p>
          <p>Web Design</p>
          <p>SEO</p>
          <p>Perfomance Marketing</p>
        </div>
        <div className="text-white flex flex-col gap-3 mb-19">
          <p className="text-[18px] font-bold ">To Know More</p>
          <div className="text-[#E2E2E2] text-[14px]  bg-[#8528FF] px-2 py-2 text-center rounded-[4px]  ">
            <p>Book Meeting</p>
          </div>
        </div>
      </div>
      <hr className="text-white xl:w-[100%] mt-5 " />
      <div className="text-[#E9E9E9] flex justify-between mt-4 ">
        <p className="cursor-pointer">©2020PixelBoho</p>
        <p className="cursor-pointer">Privacy Policy</p>
        <p className="cursor-pointer">Terms & Conditions</p>
        <div className="flex items-center">
          <img src="/images/Facebook.png" className="cursor-pointer" />
          <img src="/images/Twitter.png" className="cursor-pointer" />
          <img src="/images/Instagram.png" className="cursor-pointer" />
        </div>
      </div>
      <img
        src="/images/Footer-img.png"
        className="absolute top-[30px] right-[7px] z-0"
      />
    </div>
  );
};

export default Footer;
