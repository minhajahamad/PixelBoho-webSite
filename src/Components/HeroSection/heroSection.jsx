import React from 'react';
import { PiHandWavingLight } from 'react-icons/pi';

const HeroSection = () => {
  return (
    <div className=" h-[650px] sm:h-[850px] md:h-[1100px] lg:h-[650px] xl:h-[660px] bg-black pl-[50px] sm:pl-[100px] md:pl-[120px] lg:pl-[160px] xl:pl-[200px] pt-[50px] md:pt-[60px] lg:pt-[50px] xl:pt-[70px]  relative  ">
      <p className="text-[#8528FF] leading-none w-fit  ">
        <span className="font-regular font-marketing-1 xl:text-[90px] sm:text-[70px] md:text-[100px] lg:text-[80px] text-[60px]  ">
          Marketing
        </span>{' '}
        <br />
        <span className="font-poppins text-white text-[60px] xl:text-[70px] sm:text-[70px] md:text-[100px] lg:text-[80px] font-semibold  ">
          that moves
        </span>{' '}
        <br />
        <span className=" font-poppins text-white text-[60px] xl:text-[90px] sm:text-[70px] md:text-[100px] lg:text-[80px] font-semibold ">
          the
        </span>{' '}
        <span className="font-regular font-marketing-1 text-[60px] xl:text-[90px] sm:text-[70px] md:text-[100px] lg:text-[80px]  ">
          needle
        </span>
      </p>
      <p className=" w-[90%] sm:w-[75%] md:w-[90%] lg:w-[65%] font-light text-[16px] sm:text-[17px] md:text-[28px] lg:text-[17px] xl:text-[17px] text-[#E2E2E2] mt-8 md:mt-10 lg:mt-5  xl:mt-10   xl:w-[700px] ">
        We don’t just create campaigns—we engineer impact. At PixelBoho, digital{' '}
        marketing is more than metrics. It's strategy, storytelling, and science{' '}
        working together to drive real growth.
      </p>

      <div className="w-fit group px-[25px] py-[10px] md:px-[30px] md:py-[15px] lg:text-[20px] md:text-[26px] xl:px-[25px] xl:py-[12px] xl:text-[14px] rounded-[47px] border border-[#999999] text-white font-normal mt-9 xl:mt-5 bg-black flex items-center gap-2 hover:border hover:border-white hover:bg-[#8528FF] hover:pr-[45px] transition-all duration-500 relative overflow-hidden cursor-pointer">
        Say Hi
        <img
          src="/images/Bye-img.png"
          className="xl:h-[25px] xl:w-[25px] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out absolute right-3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
