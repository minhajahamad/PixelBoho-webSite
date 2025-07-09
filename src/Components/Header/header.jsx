import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  return (
    <nav className="w-full h-[70px] sm:h-[85px] md:h-[95px] lg:h-[100px] xl:h-[100px]  bg-black flex items-center justify-between px-5 sm:px-6 md:px-15 lg:px-30 xl:px-35 2xl:px-50 border border-b-[#D9D9D933]">
      <div className="w-[80px] h-[30px] sm:w-[100px] sm:h-[50px] lg:w-[105px] lg:h-[55px]   xl:w-[110px] xl:h-[60px]  flex items-center ">
        <img src="/images/PixelBoho-Logo.svg" className="object-cover" />
      </div>
      <div className="text-white font-light text-[14px] sm:flex  items-center  gap-5  hidden cursor-pointer">
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          ABOUT
        </p>
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          SERVICES
        </p>
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          WORKS
        </p>
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          CONTACT
        </p>
        <div className="bg-[#8528FF] w-fit px-3 py-1 text-white rounded-[45px] border border-black hover:border-[#999999] hidden sm:block font-normal hover:bg-black  hover:text-[#8528FF] transition-colors duration-400    ">
          <p>Book Meeting</p> 
        </div>
      </div>

      <RxHamburgerMenu className="block sm:hidden  text-white text-[30px] " />
    </nav>
  );
};

export default Header;
