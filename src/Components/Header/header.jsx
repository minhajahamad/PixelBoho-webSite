import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileSidebar from '../MobileSidebar/mobileSidebar';

const Header = ({ onServiceClick, onContactClick, onLogoClick }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState('home');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // sidebar state

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
  
    if (path === '/about') {
      setActive('about');
    } else if (path === '/contact') {
      setActive('contact');
    } else if (path === '/') {
      setActive('home');
    } else {
      setActive(''); // No active tab for unmatched routes like /career
    }
  }, [location.pathname]);
  

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) setShowHeader(true);
      else if (currentY > lastScrollY) setShowHeader(false);
      else setShowHeader(true);

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItemClass = name =>
    `cursor-pointer transition-all duration-300 ease-in-out menu-underline ${
      active === name
        ? 'text-[#8528FF] mb-2'
        : 'text-[#E2E2E2] hover:text-[#8528FF] hover:-translate-y-2'
    }`;

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <>
      <nav
        className={`w-screen h-[70px] xl:h-[100px] overflow-x-hidden bg-black flex justify-between items-center px-10 md:px-15 lg:px-25 xl:px-35 border-b border-[#d9d9d933] fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center">
          <img
            onClick={() => {
              onLogoClick?.();
              setActive('home');
              navigate('/');
            }}
            src="/images/PixelBoho-Logo.svg"
            className="object-cover cursor-pointer w-[80px] md:w-[90px]"
          />
        </div>
        <div className="text-[#E2E2E2] font-light md:text-[14px] xl:text-[15px] hidden sm:flex items-center gap-6 lg:gap-10 2xl:gap-20">
          <p
            onClick={() => {
              setActive('home');
              navigate('/');
            }}
            className={navItemClass('home')}
          >
            HOME
          </p>
          <p
            onClick={() => {
              setActive('about');
              navigate('/about');
            }}
            className={navItemClass('about')}
          >
            ABOUT US
          </p>
          <p
            onClick={() => navigate('/', { state: { scrollTo: 'services' } })}
            className="cursor-pointer transition-all duration-300 ease-in-out menu-underline text-[#E2E2E2] hover:text-[#8528FF] hover:mb-2"
          >
            SERVICES
          </p>
          <p
            onClick={() => {
              setActive('contact');
              navigate('/contact');
            }}
            className={navItemClass('contact')}
          >
            CONTACT US
          </p>
          <div
            onClick={handleContactClick}
            className="bg-[#8528FF] w-fit md:px-3 xl:px-5 py-1 text-white rounded-[5px] border border-black hover:border-[#999999] font-normal hover:bg-black hover:text-[#8528FF] transition-colors duration-400 cursor-pointer"
          >
            <p>Let's Connect</p>
          </div>
        </div>
        <RxHamburgerMenu
          className="block sm:hidden text-white text-[30px] cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />{' '}
      </nav>
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Header;
