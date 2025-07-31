import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

const MobileSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = path => {
    onClose(); // close sidebar
    navigate(path);
  };

  const activeRoute = location.pathname;

  const linkClass = path =>
    `cursor-pointer transition-all duration-300 ease-in-out menu-underline ${
      activeRoute === path
        ? 'text-[#8528FF] mb-2'
        : 'text-[#E2E2E2] hover:text-[#8528FF] hover:-translate-y-1'
    }`;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[250px] bg-black z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <IoClose
          className="text-white text-2xl cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex flex-col items-start gap-6 pl-6 mt-4 font-light text-[16px]">
        <p className={linkClass('/')} onClick={() => handleNav('/')}>
          HOME
        </p>
        <p className={linkClass('/about')} onClick={() => handleNav('/about')}>
          ABOUT US
        </p>
        <p
          className="text-[#E2E2E2] hover:text-[#8528FF] hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out"
          onClick={() => {
            handleNav('/');
            setTimeout(() => {
              window.scrollTo({ top: 1000, behavior: 'smooth' }); // adjust for "services"
            }, 100);
          }}
        >
          SERVICES
        </p>
        <p
          className={linkClass('/contact')}
          onClick={() => handleNav('/contact')}
        >
          CONTACT US
        </p>
        <button
          onClick={() => handleNav('/contact')}
          className="mt-4 bg-[#8528FF] text-white px-4 py-2 rounded border border-black hover:bg-black hover:text-[#8528FF] hover:border-[#999999] transition-all duration-300"
        >
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default MobileSidebar;
