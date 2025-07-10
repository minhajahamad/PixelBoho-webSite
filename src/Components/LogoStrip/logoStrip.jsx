// import React from 'react';

// const LogoStrip = () => {
//   return (
//     <div className="py-20 xl:py-10 md:px-15  flex flex-col items-center justify-center bg-black  relative  overflow-x-hidden ">
//       <div className="  xl:w-[1100px]  h-[220px]  grid grid-cols-2  md:grid-cols-4  xl:grid-cols-5  gap-10 items-center justify-items-center px-4 py-6">
//         <img
//           src="/images/Prep-Academy.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain "
//         />
//         <img
//           src="/images/RLFC.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain "
//         />
//         <img
//           src="/images/Crowd-Works.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain "
//         />
//         <img
//           src="/images/Career-Launching.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22  object-contain "
//         />
//         <img
//           src="/images/JCI.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain "
//         />
//         <img
//           src="/images/Orchids.png"
//           className="xl:h-15 h-10  md:h-19 lg:h-22 object-contain "
//         />
//         <img
//           src="/images/Godrej.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain"
//         />
//         <img
//           src="/images/Puravankara.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22  object-contain "
//         />
//         <img
//           src="/images/Kannattu.png"
//           className="xl:h-15 h-10 md:h-19 lg:h-22  object-contain "
//         />
//         <img
//           src="/images/Dr-Scent.png"
//           className="xl:h-15 h-10  md:h-19 lg:h-22 object-contain "
//         />
//       </div>

//       <hr className="text-white w-[100%] md:w-[100%] xl:w-[93%] xl:mt-[5%]  mt-[50%] md:mt-[25%] " />

//       <img
//         src="/images/eclipse-right-1.png"
//         className="absolute   w-[400px] h-[500px] top-[-800px] right-[-150px] xl:top-[-495px] xl:right-[-150px]  "
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
//                   className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain flex-shrink-0 cursor-pointer"
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
//                   className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain flex-shrink-0 cursor-pointer"
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

// import React from 'react';

// const LogoStrip = () => {
//   return (
//     <div className="xl:py-10  bg-black flex items-center justify-center   ">
//       <div className="w-[1100px] h-[220px] bg-amber-200 flex flex-col   ">
//         <div className="w-full h-[50%] bg-black relative flex items-center overflow-hidden">
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 1) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img
//               src="/images/Prep-Academy.png"
//               className="h-[70px]   w-[160px]"
//             />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 2) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src="/images/RLFC.png" className="h-[70px]   w-[160px]" />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 3) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img
//               src=" /images/Crowd-Works.png"
//               className="h-[70px]   w-[160px]"
//             />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 4) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img
//               src=" /images/Career-Launching.png"
//               className="h-[70px]   w-[160px]"
//             />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 5) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src=" /images/JCI.png" className="h-[70px]   w-[160px]" />
//           </div>
//         </div>
//         <div className="w-full h-[50%] bg-black relative flex items-center overflow-hidden">
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 1) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src="/images/Orchids.png" className="h-[70px]   w-[160px]" />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 2) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src="/images/Godrej.png" className="h-[70px]   w-[160px]" />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 3) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img
//               src=" /images/Puravankara.png"
//               className="h-[70px]   w-[160px]"
//             />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 4) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src=" /images/Kannattu.png" className="h-[70px]   w-[160px]" />
//           </div>
//           <div
//             className="absolute  scroll-div"
//             style={{
//               animationDelay: 'calc( 10s / 5 * (5 - 5) * -1)',
//               left: 'max(calc(160px * 5),100%)',
//             }}
//           >
//             <img src="/images/Dr-Scent.png" className="h-[70px]   w-[160px]" />
//           </div>
//         </div>
//       </div>
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
    <div className="py-20 xl:py-10 flex flex-col items-center justify-center bg-black relative overflow-hidden">
      <div className="w-[380px] md:w-[680px] lg:w-[880px] xl:w-[1100px] overflow-hidden">
        <div className="marquee-container fade-effect cursor-pointer group"> {/* Added group here */}
          <div className="marquee-track flex">
            {columns.map((pair, i) => (
              <div
                key={`set1-${i}`}
                className="logo-column flex flex-col items-center gap-10 flex-shrink-0 w-[160px]"
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-1-${idx}`}
                    src={src}
                    alt={`Top Logo ${i}-${idx}`}
                    className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}

            {columns.map((pair, i) => (
              <div
                key={`set2-${i}`}
                className="logo-column flex flex-col items-center gap-10 flex-shrink-0 w-[160px]"
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-2-${idx}`}
                    src={src}
                    alt={`Bottom Logo ${i}-${idx}`}
                    className="xl:h-15 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Background decoration */}
      <img
        src="/images/eclipse-right-1.png"
        className="absolute w-[400px] h-[500px] top-[-900px] right-[-150px] xl:top-[-495px] xl:right-[-150px]"
        alt="Eclipse decoration"
      />
    </div>
  );
};

export default LogoStrip;
