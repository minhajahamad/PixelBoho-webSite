import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = ({ onServiceClick, onContactClick }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        // Always show header near top
        setShowHeader(true);
      } else if (currentY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <nav
      className={`h-[70px] sm:h-[85px] md:h-[95px] lg:h-[100px] xl:h-[100px] bg-black flex items-center justify-between px-5 sm:px-6 md:px-15 lg:px-30 xl:px-35 2xl:px-50 border-b border-[#D9D9D933] fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-[80px] h-[30px] sm:w-[100px] sm:h-[50px] lg:w-[105px] lg:h-[55px]   xl:w-[110px] xl:h-[60px]  flex items-center ">
        <img
          src="/images/PixelBoho-Logo.svg"
          className="object-cover cursor-pointer"
        />
      </div>
      <div className="text-white font-light text-[14px] sm:flex md:text-[16px]  items-center  gap-5  hidden cursor-pointer">
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          ABOUT
        </p>
        <p
          className="hover:text-[#8528FF] transition-colors duration-300"
          onClick={onServiceClick}
        >
          SERVICES
        </p>
        <p className="hover:text-[#8528FF] transition-colors duration-300">
          WORKS
        </p>
        <p
          className="hover:text-[#8528FF] transition-colors duration-300"
          onClick={onContactClick}
        >
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
