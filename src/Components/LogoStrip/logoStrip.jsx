// import React from 'react';

// const LogoStrip = () => {
//   return (
//     <div className="w-full bg-black xl:py-10 relative overflow-x-hidden">
//       <div className="flex xl:w-[1200px] animate-marquee gap-10 overflow-x-hidden">
//         {[...Array(2)].map((_, index) => (
//           <div key={index} className="flex gap-10 items-center">
//             <img
//               src="/images/Prep-Academy.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/RLFC.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Crowd-Works.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Career-Launching.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Orchids.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Godrej.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Puravankara.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Kannattu.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//             <img
//               src="/images/Dr-Scent.png"
//               className="xl:h-20 h-10 object-contain"
//             />
//           </div>
//         ))}
//       </div>

//       <img
//         src="/images/eclipse-right-1.png"
//         className="absolute w-[400px] h-[500px] top-[-800px] right-[-150px] xl:top-[-495px] xl:right-[-150px] pointer-events-none"
//       />
//     </div>
//   );
// };

// export default LogoStrip;

// import React from 'react';

// const LogoStrip = () => {
//   const logos = [
//     '/images/Prep-Academy.png',
//     '/images/RLFC.png',
//     '/images/Crowd-Works.png',
//     '/images/Career-Launching.png',
//     '/images/JCI.png',
//     '/images/Orchids.png',
//     '/images/Godrej.png',
//     '/images/Puravankara.png',
//     '/images/Kannattu.png',
//     '/images/Dr-Scent.png',
//   ];

//   const firstRowLogos = logos.slice(0, 5);
//   const secondRowLogos = logos.slice(5, 10);

//   return (
//     <div className="py-20 xl:py-10 md:px-15 flex flex-col items-center justify-center bg-black relative overflow-x-hidden">
//       <div className="xl:w-[1100px] h-[220px] overflow-hidden relative">
//         <div className="scroll-container-1 flex gap-20  items-center  py-3 cursor-pointer">
//           {[...Array(10)].map((_, setIndex) => (
//             <div
//               key={`first-row-set-${setIndex}`}
//               className="flex items-center gap-20 flex-shrink-0"
//             >
//               {firstRowLogos.map((logo, index) => (
//                 <img
//                   key={`first-row-${setIndex}-${index}`}
//                   src={logo}
//                   className="xl:h-20 h-10 md:h-19 lg:h-22 object-contain flex-shrink-0 cursor-pointer"
//                   alt={`Logo ${index + 1}`}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className="scroll-container-2 flex gap-20 items-center py-3 ">
//           {[...Array(10)].map((_, setIndex) => (
//             <div
//               key={`second-row-set-${setIndex}`}
//               className="flex items-center gap-20 flex-shrink-0"
//             >
//               {secondRowLogos.map((logo, index) => (
//                 <img
//                   key={`second-row-${setIndex}-${index}`}
//                   src={logo}
//                   className="xl:h-20 h-10 md:h-19 lg:h-22 object-contain flex-shrink-0 cursor-pointer"
//                   alt={`Logo ${index + 6}`}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       <hr className="text-white w-[100%] md:w-[100%] xl:w-[93%] xl:mt-[5%] mt-[50%] md:mt-[25%]" />

//       <img
//         src="/images/eclipse-right-1.png"
//         className="absolute w-[400px] h-[500px] top-[-800px] right-[-150px] xl:top-[-495px] xl:right-[-150px]"
//         alt="Eclipse decoration"
//       />
//     </div>
//   );
// };

// export default LogoStrip;

import React from 'react';

const LogoStrip = () => {
  const firstRowLogos = [
    '/images/Prep-Academy.png',
    '/images/RLFC.png',
    '/images/Crowd-Works.png',
    '/images/Career-Launching.png',
    '/images/JCI.png',
  ];

  const secondRowLogos = [
    '/images/Orchids.png',
    '/images/Godrej.png',
    '/images/Puravankara.png',
    '/images/Kannattu.png',
    '/images/Dr-Scent.png',
  ];

  const columns = firstRowLogos.map((top, i) => ({
    top,
    bottom: secondRowLogos[i],
  }));

  return (
    <div className="bg-black py-20 xl:py-10    relative overflow-hidden  ">
      <div className="w-[360px] md:w-[680px] lg:w-[880px] xl:w-[1250px]   overflow-hidden mx-auto">
        <div className="marquee-container fade-effect cursor-pointer group">
          <div className="marquee-track flex">
            {columns.map((pair, i) => (
              <div
                key={`set1-${i}`}
                className="logo-column flex flex-col items-center gap-10  flex-shrink-0 w-[160px] "
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-1-${idx}`}
                    src={src}
                    alt={`Top Logo ${i}-${idx}`}
                    className=" xl:h-20 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}

            {columns.map((pair, i) => (
              <div
                key={`set2-${i}`}
                className="logo-column flex flex-col items-center gap-10 xl:gap-10  flex-shrink-0 w-[160px] "
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-2-${idx}`}
                    src={src}
                    alt={`Bottom Logo ${i}-${idx}`}
                    className=" xl:h-20 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/eclipse-right-1.png"
        className="absolute w-[400px] h-[500px] top-[-900px] right-[-150px] xl:top-[-495px] xl:right-[-150px]"
        alt="Eclipse decoration"
      />
    </div>
  );
};

export default LogoStrip;
