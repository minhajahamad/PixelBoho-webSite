import React, { forwardRef } from 'react';

const ServiceCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-black w-full py-10 md:py-5  lg:py-10 xl:py-15  "
    >
      <div className="flex flex-col gap-10 md:gap-15 lg:gap-20   xl:flex-row  xl:justify-around w-[360px] md:w-[680px] lg:w-[880px] xl:w-[1250px] 2xl:w-[2200px] py-10 xl:py-12 2xl:py-15 mx-auto border-t border-b border-white  px-7 md:px-12 lg:px-15">
        <div className=" font-semibold 2xl:h-[420px] text-[60px] md:text-[90px] xl:text-[70px] 2xl:text-[140px] leading-[60px] md:leading-[98px] xl:leading-[80px] 2xl:leading-[130px]  ">
          <p>
            <span className="text-[#9747FF] ">Unique</span> <br />{' '}
            <span className=" text-[#9747FF]">solutions </span>
            <br className="hidden md:block lg:hidden" />
            <span className="text-white">for</span>{' '}
            <br className="md:hidden lg:block" />
            <span className="text-white ">your business</span>
          </p>
        </div>
        <div className=" h-[160px] md:h-[210px] lg:h-[170px] sm:h-fit xl:w-[450px] xl:h-[220px] 2xl:w-[500px] 2xl:h-[390px]  flex flex-col justify-between xl:justify-end xl:gap-5 2xl:gap-7 ">
          <p className="text-[25px] md:text-[35px] xl:text-[30px] 2xl:text-[50px] text-white font-semibold  ">
            Our Services
          </p>
          <p className=" desc-text">
            As we understand that every business is unique, we provide a
            customized service to meet your specific needs. We work closely with
            you to fully understand your needs and goals before developing an
            individual plan to assist you in achieving your goals.
          </p>
        </div>
      </div>
      <div className="w-[360px] md:w-[680px] lg:w-[880px] xl:w-[1100px]  2xl:w-[2200px] px-7 md:px-12 lg:px-15      mx-auto pt-5 md:pt-10 xl:pt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 2xl:gap-10  text-white font-normal font-marketing-1 text-[26px] 2xl:text-[34px] leading-8 2xl:leading-12 ">
        <div className="p-[.8px]  rounded-[8px] animated-gradient-border relative cursor-pointer  ">
          <div className="glow-box-1 bg-black rounded-[8px] h-[270px] 2xl:h-[350px] text-white text-bold  flex items-center justify-center text-center  relative overflow-hidden z-1 md:p-5 2xl:p-10">
            Interactive Web Platforms & Scalable Applications
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative  cursor-pointer">
          <div className=" glow-box-2 overflow-hidden  bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white  flex items-center justify-center text-center relative z-1 md:p-5 2xl:p-10">
            Next-Gen Mobile Solutions
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border  relative  cursor-pointer">
          <div className="glow-box-3 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center   relative z-1 md:p-5 2xl:p-10">
            Strategic Brand Positioning & Demand Generation
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative cursor-pointer ">
          <div className="glow-box-4 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center  relative z-1 md:p-5 2xl:p-10">
            Performance Driven SEO Services
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-5 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center  relative z-1 md:p-5 2xl:p-10">
            Cloud Infrastructure & Migration Solutions
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-6 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center  relative z-1 md:p-5 2xl:p-10">
            Cloud-Based Enterprise Solutions
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-7 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center  relative z-1 md:p-5 2xl:p-10">
            Digital Tender Management Systems
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-8 bg-black rounded-[8px] h-[270px]  2xl:h-[350px] text-white flex items-center justify-center text-center  relative z-1 md:p-5 2xl:p-10">
            Identity Verification API Solutions
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
