import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const Header = ({ onServiceClick, onContactClick, onLogoClick }) => {
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

  const navigate = useNavigate();
  return (
    <nav
      className={`w-screen h-[70px] xl:h-[100px] overflow-x-hidden  bg-black flex  justify-between items-center md:justify-items-normal px-10 md:px-15 lg:px-25 xl:px-35 border-b border-[#d9d9d933]   fixed top-0 left-0  z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className=" flex items-center ">
        <img
          onClick={onLogoClick}
          src="/images/PixelBoho-Logo.svg"
          className="object-cover cursor-pointer w-[80px] md:w-[90px] "
        />
      </div>
      <div className="text-[#E2E2E2] font-light md:text-[14px] xl:text-[15px]  sm:flex items-center gap-6 lg:gap-10 2xl:gap-20   hidden ">
        <p
          onClick={() => navigate('/about')}
          className="hover:text-[#8528FF] transition-colors duration-300 cursor-pointer"
        >
          ABOUT
        </p>
        <p
          className="hover:text-[#8528FF] transition-colors duration-300 cursor-pointer"
          onClick={onServiceClick}
        >
          SERVICES
        </p>
        <p className="hover:text-[#8528FF] transition-colors duration-300 cursor-pointer">
          WORKS
        </p>
        <p
          className="hover:text-[#8528FF] transition-colors duration-300 cursor-pointer"
          onClick={onContactClick}
        >
          CONTACT
        </p>
        <div className="bg-[#8528FF] w-fit md:px-3 xl:px-5  py-1  text-white rounded-[45px] border border-black hover:border-[#999999]   font-normal hover:bg-black  hover:text-[#8528FF] transition-colors duration-400 cursor-pointer    ">
          <p>Book Meeting</p>
        </div>
      </div>

      <RxHamburgerMenu className="block sm:hidden  text-white text-[30px] " />
    </nav>
  );
};

export default Header;
