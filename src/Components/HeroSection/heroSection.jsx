import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full   2xl:h-[800px] bg-black pl-[50px] md:pl-[120px] xl:pl-[200px] 2xl:pl-[250px] py-10 lg:py-15 xl:py-20  z-10 relative  ">
      <img
        src="/images/heroSection-img.png"
        className="absolute top-[-209px] left-[-83px] xl:top-[-145px] xl:left-0  z-0   "
      />
      <p className="text-[#8528FF] leading-none w-fit  ">
        <span className="font-regular font-marketing-1 text-[60px] md:text-[65px] lg:text-[80px] xl:text-[90px]  2xl:text-[140px] ">
          Marketing
        </span>
        <br />
        <span className="font-poppins text-white text-[48px] md:text-[50px] lg:text-[63px] xl:text-[70px] 2xl:text-[105px]    font-semibold  ">
          that moves
        </span>
        <br />
        <span className=" font-poppins text-white text-[48px] md:text-[50px] lg:text-[63px] 2xl:text-[105px] xl:text-[70px] sm:text-[70px]   font-semibold ">
          the
        </span>
        <span className="ml-3 font-regular font-marketing-1 text-[60px] md:text-[65px] lg:text-[80px] xl:text-[90px] sm:text-[70px]    2xl:text-[140px]  ">
          needle
        </span>
      </p>
      <p className=" w-[88%]  md:w-[69%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] font-light text-[14px]  md:text-[17px] lg:text-[15px] xl:text-[15px] 2xl:text-[22px] text-[#E2E2E2] mt-8 md:mt-10 lg:mt-5  xl:mt-10">
        We don’t just create campaigns—we engineer impact. At PixelBoho, digital
        marketing is more than metrics. It's strategy, storytelling, and science
        working together to drive real growth.
      </p>

      <div className="w-fit group px-[25px] py-[10px] lg:px-[25px] lg:py-[10px] md:px-[25px] md:py-[10px] xl:px-[25px] xl:py-[12px] 2xl:px-[30px]  lg:text-[18px] 2xl:text-[24px] md:text-[18px]   xl:text-[14px] rounded-[47px] border border-[#999999] text-white font-normal mt-9 xl:mt-8 2xl:mt-10 bg-black flex items-center gap-2 hover:border hover:border-white hover:bg-[#8528FF] hover:pr-[45px] transition-all duration-500 relative overflow-hidden cursor-pointer">
        Say Hi
        <img
          src="/images/Bye-img.png"
          className="h-[20px] w-[20px] xl:h-[25px] xl:w-[25px] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out absolute right-3"
        />
      </div>
    </div>
  );
};

export default HeroSection;
