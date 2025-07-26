// import React, { forwardRef } from 'react';

// const ServiceCard = forwardRef((props, ref) => {
//   return (
//     <div
//       ref={ref}
//       className="bg-black overflow-x-hidden w-full py-10 px-10 md:px-20 md:py-5  lg:py-10 xl:py-15 xl:px-30  "
//     >
//       <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 xl:gap-10   xl:flex-row  xl:justify-around   py-10 xl:py-12   border-t border-b border-white  ">
//         <div className=" font-semibold  text-[60px] md:text-[90px] xl:text-[70px]  leading-[60px] md:leading-[98px] xl:leading-[80px]   ">
//           <p>
//             <span className="text-[#9747FF] ">Unique</span> <br />{' '}
//             <span className=" text-[#9747FF]">solutions </span>
//             <br className="hidden md:block lg:hidden" />
//             <span className="text-white">for</span>{' '}
//             <br className="md:hidden lg:block" />
//             <span className="text-white ">your business</span>
//           </p>
//         </div>
//         <div className="  xl:w-[450px]     flex flex-col justify-around    ">
//           <p className="text-[25px] md:text-[35px] xl:text-[30px]  text-white font-semibold  ">
//             Our Services
//           </p>
//           <p className=" desc-text">
//             As we understand that every business is unique, we provide a
//             customized service to meet your specific needs. We work closely with
//             you to fully understand your needs and goals before developing an
//             individual plan to assist you in achieving your goals.
//           </p>
//         </div>
//       </div>
//       <div className="   px-7 md:px-12 lg:px-15         grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5   text-white font-normal font-marketing-1 text-[26px]  leading-8  ">
//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border relative cursor-pointer  ">
//           <div className="glow-box-1 bg-black rounded-[8px]   text-white text-bold  flex items-center justify-center text-center  relative overflow-hidden z-10 md:p-5 ">
//             Interactive Web Platforms & Scalable Applications
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative  cursor-pointer">
//           <div className=" glow-box-2 overflow-hidden  bg-black rounded-[8px]    text-white  flex items-center justify-center text-center relative z-10 md:p-5 ">
//             Next-Gen Mobile Solutions
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border  relative  cursor-pointer">
//           <div className="glow-box-3 bg-black rounded-[8px]    text-white flex items-center justify-center text-center   relative z-10 md:p-5 ">
//             Strategic Brand Positioning & Demand Generation
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative cursor-pointer ">
//           <div className="glow-box-4 bg-black rounded-[8px]    text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
//             Performance Driven SEO Services
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
//           <div className="glow-box-5 bg-black rounded-[8px]    text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
//             Cloud Infrastructure & Migration Solutions
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
//           <div className="glow-box-6 bg-black rounded-[8px]    text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
//             Cloud-Based Enterprise Solutions
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
//           <div className="glow-box-7 bg-black rounded-[8px]    text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
//             Digital Tender Management Systems
//           </div>
//         </div>

//         <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer">
//           <div className="glow-box-8 bg-black rounded-[8px]    text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
//             Identity Verification API Solutions
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default ServiceCard;

import React, { forwardRef } from 'react';

const ServiceCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full overflow-hidden border flex flex-col px-10 md:px-15  xl:px-20 "
    >
      <div className="w-full border-t border-b border-[#9e9e9e] flex flex-col gap-10 md:gap-15 xl:flex-row xl:justify-between px-5 py-5 md:px-10   xl:px-20  xl:py-10 ">
        <div className="text-[60px] md:text-[70px] xl:text-[70px] font-semibold leading-none ">
          <p>
            <span className="text-[#9747FF] ">Unique</span> <br />
            <span className=" text-[#9747FF]">solutions </span>{' '}
            <br className="hidden md:block lg:hidden" />
            <span className="text-white">for </span>
            <br className="hidden xl:block" />
            <span className="text-white ">your business</span>
          </p>
        </div>
        <div className="xl:w-[40%] flex flex-col justify-around">
          <p className="text-[25px] md:text-[35px] xl:text-[30px]  text-white font-semibold  ">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 py-5 md:px-10 md:py-10 xl:py-10 xl:px-10  font-marketing-1 text-[24px] ">
        <div className="p-[.8px]  rounded-[8px] animated-gradient-border relative cursor-pointer h-[300px] ">
          <div className="glow-box-1 bg-black rounded-[8px] px-10 py-20 xl:px-10 xl:py-15 h-full  text-white text-bold  flex items-center justify-center text-center  relative overflow-hidden z-10  ">
            Interactive Web Platforms & Scalable Applications
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative  cursor-pointer  h-[300px]">
          <div className=" glow-box-2 overflow-hidden px-10 py-20 xl:px-10 xl:py-15 h-full  bg-black rounded-[8px]   text-white  flex items-center justify-center text-center relative z-10 ">
            Next-Gen Mobile Solutions
          </div>
        </div>
        <div className="p-[.8px]  rounded-[8px] animated-gradient-border  relative  cursor-pointer  h-[300px]">
          {' '}
          <div className="glow-box-3 bg-black rounded-[8px] px-10 py-20 xl:px-10 xl:py-15 h-full   text-white flex items-center justify-center text-center   relative z-10 md:p-5 ">
            Strategic Brand Positioning & Demand Generation
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border   relative cursor-pointer  h-[300px] ">
          <div className="glow-box-4 bg-black rounded-[8px] px-10 py-20 xl:px-10 xl:py-15 h-full   text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
            Performance Driven SEO Services
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer  h-[300px]">
          <div className="glow-box-5 bg-black rounded-[8px] px-10 py-20  xl:px-10 xl:py-15 h-full  text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
            Cloud Infrastructure & Migration Solutions
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer  h-[300px]">
          <div className="glow-box-6 bg-black rounded-[8px] px-10 py-20  xl:px-10 xl:py-15 h-full  text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
            Cloud-Based Enterprise Solutions
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer  h-[300px]">
          <div className="glow-box-7 bg-black rounded-[8px] px-10 py-20  xl:px-10 xl:py-15 h-full  text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
            Digital Tender Management Systems
          </div>
        </div>

        <div className="p-[.8px]  rounded-[8px] animated-gradient-border-1  relative  cursor-pointer  h-[300px]">
          <div className="glow-box-8 bg-black rounded-[8px] px-10 py-20  xl:px-10 xl:py-15 h-full  text-white flex items-center justify-center text-center  relative z-10 md:p-5 ">
            Identity Verification API Solutions
          </div>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
