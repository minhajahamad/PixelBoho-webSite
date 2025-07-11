import React, { forwardRef } from 'react';

const ServiceCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-black py-10 md:py-5 md:px-10 lg:py-10 xl:py-5 "
    >
      <hr className="text-white flex  w-[80%] md:w-[95%] lg:w-[93%] xl:w-[90%] xl:mt-[5%] mt-[30%] md:mt-[15%] mx-auto " />

      <div className="font-semibold text-[70px] md:text-[110px] xl:text-[80px] 2xl:text-[140px] leading-[75px] md:leading-[110px] xl:leading-[90px] 2xl:leading-[150px] flex flex-col xl:flex-row  gap-18 2xl:gap-90 pl-[40px] xl:pl-[150px] py-15   ">
        <div>
          <p>
            <span className="text-[#9747FF] ">Unique</span> <br />{' '}
            <span className=" text-[#9747FF]">solutions </span>{' '}
            <span className="text-white">for</span> <br />
            <span className="text-white ">your business</span>
          </p>
        </div>
        <div className="mt-3 xl:mt-1">
          <p className="text-[40px] md:text-[55px] 2xl:text-[100px] text-white  ">
            Our Services
          </p>
          <p className=" font-light text-[15px] md:text-[22px] xl:text-[17px] 2xl:text-[24px] text-[#E2E2E2] xl:mt-9 w-[90%] xl:w-[450px] 2xl:w-[750px] leading-5 md:leading-8 xl:leading-6 2xl:leading-9">
            As we understand that every business is unique, we provide a
            customized service to meet your specific needs. We work closely with
            you to fully understand your needs and goals before developing an
            individual plan to assist you in achieving your goals.
          </p>
        </div>
      </div>
      <hr className="text-white w-[80%] md:w-[95%] xl:w-[90%]    mx-auto " />
      <div className="xl:mt-14 grid justify-center  lg:justify-normal md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:px-[180px] px-10 md:px-[5%] lg:px-5 py-10 xl:py-1 text-white font-normal font-marketing-1 text-[26px] 2xl:text-[34px] leading-8 2xl:leading-12 ">
        <div className="p-[.8px] w-[330px] md:w-[300px]  lg:w-[280px] xl:w-[230px] 2xl:w-[500px] h-[200px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border relative cursor-pointer  ">
          <div className="glow-box-1 bg-black rounded-[8px] h-full p-9 text-white text-bold flex items-center justify-center text-center  relative overflow-hidden z-1">
            Interactive Web Platforms & Scalable Applications
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px]  xl:w-[230px] 2xl:w-[500px] h-[200px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border   relative  cursor-pointer">
          <div className=" glow-box-2 overflow-hidden  bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Next-Gen Mobile Solutions
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px] xl:w-[230px] 2xl:w-[500px] h-[200px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border  relative  cursor-pointer">
          <div className="glow-box-3 bg-black rounded-[8px] h-full p-10 text-white flex items-center justify-center text-center  relative z-1">
            Strategic Brand Positioning & Demand Generation
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px]  h-[200px] xl:w-[230px] 2xl:w-[500px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border  relative cursor-pointer ">
          <div className="glow-box-4 bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Performance Driven SEO Services
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px]  h-[200px] xl:w-[230px] 2xl:w-[500px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-5 bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Cloud Infrastructure & Migration Solutions
          </div>
        </div>

        <div className="p-[.8px] w-[330px]  md:w-[300px] lg:w-[280px]  h-[200px]  xl:w-[230px] 2xl:w-[500px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-6 bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Cloud-Based Enterprise Solutions
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px]  h-[200px]  xl:w-[230px] 2xl:w-[500px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-7 bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Digital Tender Management Systems
          </div>
        </div>

        <div className="p-[.8px] w-[330px] md:w-[300px] lg:w-[280px] h-[200px] xl:w-[230px] 2xl:w-[500px] xl:h-[230px] 2xl:h-[300px] rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
          <div className="glow-box-8 bg-black rounded-[8px] h-full p-9 text-white flex items-center justify-center text-center  relative z-1">
            Identity Verification API Solutions
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
