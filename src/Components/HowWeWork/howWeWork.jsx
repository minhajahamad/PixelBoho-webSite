// import React from 'react';
// import fullpage from 'fullpage.js';
// import 'fullpage.js/dist/fullpage.css';

// const HowWeWork = () => {
//   return (
//     <div className="bg-black pb-10   ">
//       <p className="text-center font-semibold text-[65px] text-white ">
//         How We Work
//       </p>

//       <div className="bg-black h-[500px] flex pl-[180px] relative overflow-x-hidden">
//         <div className="w-[1225px] h-[100px] absolute z-1 top-[-20px] left-[207px] ">
//           <img
//             src="/images/Blur Top.png"
//             className="w-full h-full opacity-90 mix-blend-screen blur-sm"
//           />
//         </div>
//         <div className="absolute h-[130px] w-[1225px] bottom-0 z-1 left-[207px] ">
//           <img
//             src="/images/Blur Bottom.png"
//             className="h-full w-full opacity-90 mix-blend-screen blur-sm"
//           />
//         </div>
//         <div className="h-full w-[55%] flex flex-col justify-center   ">
//           <p className="font-marketing-1 text-[60px] text-white ">
//             Discover & Decode
//           </p>
//           <p className="font-light text-[17px] text-[#E2E2E2] mt-13 w-[600px] ">
//             We start by listening—closely. To your goals, your market, and your
//             brand's unique DNA. Then we dig deep with research and insights to
//             decode what your audience actually wants.
//           </p>
//           <img
//             src="/images/Disc.png"
//             className=" w-[200px] h-[210px] absolute left-[-94px] top-[55px]  "
//           />
//         </div>

//         <div className="bg-black w-[45%] h-full  ">
//           <img
//             src="/images/HowWeWork-img.png"
//             className="w-full h-full object-cover relative z-0"
//             alt="How We Work"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowWeWork;

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';

// const sections = [
//   {
//     title: 'Discover & Decode',
//     description:
//       "We start by listening—closely. To your goals, your market, and your brand's unique DNA. Then we dig deep with research and insights to decode what your audience actually wants.",
//     imageRight: '/images/Image 1.png',
//   },
//   {
//     title: 'Map & Wireframe',
//     description:
//       'With clarity in hand, we structure intuitive flows and user journeys that put purpose first. Every click, scroll, and interaction is mapped to support your business objectives.',
//     imageRight: '/images/Image 2.png',
//   },
//   {
//     title: 'Design With Intent',
//     description:
//       "Our design process isn't just about looking good—it's about building visual systems that convert. Think bold aesthetics, crisp layouts, and storytelling that moves people. You're involved at every key step.",
//     imageRight: '/images/Image 3.png',
//   },
//   {
//     title: 'Build & Elevate',
//     description:
//       "Once approved, our developers bring everything to life—with precision code, smooth animations, and tech that scales. We don't just develop—we engineer ",
//     imageRight: '/images/Image 4.png',
//   },
//   {
//     title: 'Launch, Learn, and Grow',
//     description:
//       "Your brand doesn't stop at launch. We monitor, analyze, and optimize. From post-launch support to campaign integration, we ensure your digital presence stays sharp, relevant, and growth-driven.",
//     imageRight: '/images/Image 5.png',
//   },
// ];

// const HowWeWork = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.8, once: false });
//   const [step, setStep] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollCount = useRef(0);
//   const scrollTimeout = useRef(null);
//   const accumulatedDelta = useRef(0);

//   useEffect(() => {
//     const threshold = 30;
//     const requiredAccumulation = 150;
//     const maxScrollCount = 4;

//     const onWheel = e => {
//       if (!isInView || isScrolling) return;

//       const rect = ref.current?.getBoundingClientRect();
//       if (!rect) return;

//       const isFullyVisible =
//         rect.top <= 100 && rect.bottom >= window.innerHeight - 100;
//       if (!isFullyVisible) return;

//       e.preventDefault();

//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }

//       accumulatedDelta.current += Math.abs(e.deltaY);

//       if (accumulatedDelta.current < requiredAccumulation) {
//         scrollTimeout.current = setTimeout(() => {
//           accumulatedDelta.current = 0;
//           scrollCount.current = 0;
//         }, 300);
//         return;
//       }

//       if (Math.abs(e.deltaY) < threshold) return;

//       scrollCount.current += 1;

//       if (scrollCount.current < maxScrollCount) {
//         scrollTimeout.current = setTimeout(() => {
//           scrollCount.current = 0;
//           accumulatedDelta.current = 0;
//         }, 400);
//         return;
//       }

//       scrollCount.current = 0;
//       accumulatedDelta.current = 0;

//       setIsScrolling(true);

//       setStep(prev => {
//         let newStep = prev;
//         if (e.deltaY > 0 && prev < sections.length - 1) {
//           newStep = prev + 1;
//         } else if (e.deltaY < 0 && prev > 0) {
//           newStep = prev - 1;
//         }
//         return newStep;
//       });

//       setTimeout(() => setIsScrolling(false), 700);
//     };

//     const handleKeyDown = e => {
//       if (!isInView || isScrolling) return;

//       if (e.key === 'ArrowDown' && step < sections.length - 1) {
//         setIsScrolling(true);
//         setStep(prev => prev + 1);
//         setTimeout(() => setIsScrolling(false), 1000);
//       } else if (e.key === 'ArrowUp' && step > 0) {
//         setIsScrolling(true);
//         setStep(prev => prev - 1);
//         setTimeout(() => setIsScrolling(false), 1000);
//       }
//     };

//     window.addEventListener('wheel', onWheel, { passive: false });
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('wheel', onWheel);
//       window.removeEventListener('keydown', handleKeyDown);
//       if (scrollTimeout.current) {
//         clearTimeout(scrollTimeout.current);
//       }
//     };
//   }, [isInView, isScrolling, step]);

//   const currentSection = sections[step] || {};
//   const { title, description, imageRight } = currentSection;

//   return (
//     <div className="w-full overflow-hidden ">
//       <div
//         className="h-screen lg:h-[1000px]   flex flex-col justify-center items-center bg-black sticky top-0 z-10"
//         ref={ref}
//       >
//         <p className="text-center font-semibold text-[65px] text-white mb-4">
//           How We Work
//         </p>

//         <div className="bg-black h-[500px]  flex flex-col xl:flex-row pl-[60px] lg:pl-40  xl:pl-[180px] relative overflow-x-hidden ">
//           <div className="w-[1225px] h-[100px] absolute z-1 top-[-20px] left-[207px] pointer-events-none hidden xl:block">
//             <img
//               src="/images/Blur Top.png"
//               className="w-full h-full opacity-90 mix-blend-screen blur-sm"
//               alt="Top Blur"
//             />
//           </div>
//           <div className="absolute h-[110px] w-[1225px] bottom-0 z-1 left-[207px] pointer-events-none hidden xl:block">
//             <img
//               src="/images/Blur Bottom.png"
//               className="h-full w-full opacity-90 mix-blend-screen blur-sm"
//               alt="Bottom Blur"
//             />
//           </div>

//           <div className="h-full w-[55%]  flex flex-col  justify-center relative mt-3 ">
//             <img
//               src="/images/Disc.png"
//               className=" xl:h-[210px] lg:h-[210px] absolute xl:left-[-274px] lg:left-[-300px] top-[55px] z-0 hidden lg:block"
//               alt="Disc"
//             />
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -200 }}
//                 transition={{ duration: 0.45, ease: 'easeInOut' }}
//               >
//                 <p className="font-marketing-1 xl:w-[500px] text-[50px] lg:text-[60px]  text-white leading-[60px]">
//                   {title}
//                 </p>
//                 <p className="font-light text-[17px] lg:text-[20px] xl:text-[14px] text-[#E2E2E2] mt-6 w-[300px] md:w-[500px] lg:w-[700px] xl:w-[600px]">
//                   {description}
//                 </p>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="bg-black w-[60%] xl:w-[45%] h-[500px] mt-4 overflow-hidden  flex items-center justify-center ">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={imageRight}
//                 src={imageRight}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -200 }}
//                 transition={{ duration: 0.45, ease: 'easeInOut' }}
//                 className="h-full w-auto max-h-full object-contain "
//                 alt="How We Work"
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         <div className="flex space-x-2 mt-8">
//           {sections.map((_, index) => (
//             <motion.div
//               key={index}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === step ? 'bg-white w-6' : 'bg-gray-600'
//               }`}
//               animate={{
//                 scale: index === step ? 1.2 : 1,
//               }}
//             />
//           ))}
//         </div>

//         {step < sections.length - 1 && (
//           <motion.div
//             className="absolute bottom-15 md:bottom-35 lg:bottom-80 xl:bottom-37 text-gray-400 text-sm"
//             animate={{ opacity: isScrolling ? 0 : 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             Scroll to continue
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HowWeWork;

import React, { useEffect, useRef, useState } from 'react';

const sections = [
  {
    title: 'Discover & Decode',
    description:
      "We start by listening—closely. To your goals, your market, and your brand's unique DNA. Then we dig deep with research and insights to decode what your audience actually wants.",
    imageRight: '/images/Image 1.png',
  },
  // {
  //   title: 'Map & Wireframe',
  //   description:
  //     'With clarity in hand, we structure intuitive flows and user journeys that put purpose first. Every click, scroll, and interaction is mapped to support your business objectives.',
  //   imageRight: '/images/Image 2.png',
  // },
  // {
  //   title: 'Design With Intent',
  //   description:
  //     "Our design process isn't just about looking good—it's about building visual systems that convert. Think bold aesthetics, crisp layouts, and storytelling that moves people. You're involved at every key step.",
  //   imageRight: '/images/Image 3.png',
  // },
  // {
  //   title: 'Build & Elevate',
  //   description:
  //     "Once approved, our developers bring everything to life—with precision code, smooth animations, and tech that scales. We don't just develop—we engineer ",
  //   imageRight: '/images/Image 4.png',
  // },
  // {
  //   title: 'Launch, Learn, and Grow',
  //   description:
  //     "Your brand doesn't stop at launch. We monitor, analyze, and optimize. From post-launch support to campaign integration, we ensure your digital presence stays sharp, relevant, and growth-driven.",
  //   imageRight: '/images/Image 5.png',
  // },
];

const HowWeWork = () => {
  return (
    <div className="w-full overflow-x-hidden bg-black pb-5 lg:pb-10  ">
      <div className=" flex flex-col px-10 md:px-25 lg:px-0 gap-10 lg:gap-0   bg-black relative  z-10">
        <p className="text-center font-semibold text-[40px] lg:text-[65px] 2xl:text-[80px] text-white xl:py-5 ">
          How We Work
        </p>
        <img
          src="/images/Disc.png"
          className="xl:h-[210px] 2xl:h-[300px] lg:h-[210px] absolute xl:left-[-100px] 2xl:left-[-150px] 2xl:top-[140px] lg:left-[-100px] lg:top-[100px] xl:top-[208px] z-2 hidden lg:block"
          alt="Disc"
        />

        <div className="flex flex-col overflow-y-scroll overflow-x-hidden no-scrollbar snap-y snap-mandatory scroll-smooth xl:max-h-[90vh]">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col gap-5 lg:gap-0   w-full flex-shrink-0 snap-start relative"
            >
              {/* <div className="w-[1225px] h-[100px] absolute z-1 xl:top-[-10px] xl:left-[180px] 2xl:top-[0px] 2xl:left-[0px] pointer-events-none hidden xl:block">
                <img
                  src="/images/Blur Top.png"
                  className="w-full h-full opacity-90 mix-blend-screen blur-sm"
                  alt="Top Blur"
                />
              </div>
              <div className="absolute h-[110px] w-[1225px] bottom-0 z-1 left-[180px] pointer-events-none hidden xl:block">
                <img
                  src="/images/Blur Bottom.png"
                  className="h-full w-full opacity-90 mix-blend-screen blur-sm"
                  alt="Bottom Blur"
                />
              </div> */}

              {/* Left Part */}
              <div className="lg:w-[60%]  xl:w-[50%] h-[200px] lg:h-full  flex flex-col xl:gap-10 justify-around lg:pl-[130px] xl:pl-[140px] 2xl:pl-[300px] lg:py-20 xl:py-40">
                <p className="font-marketing-1 text-[30px] lg:text-[60px] 2xl:text-[90px] text-white leading-[60px] ">
                  {section.title}
                </p>
                <p className="desc-text xl:w-[500px] 2xl:w-[900px] ">
                  {section.description}
                </p>
              </div>

              {/* Right Image Part */}
              <div className="lg:w-[40%] xl:w-[50%]  overflow-hidden">
                <img
                  src={section.imageRight}
                  className="object-cover w-full h-full max-h-[500px] xl:max-h-[600px]"
                  alt={`Section ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots & Scroll Text */}
        {/* <div className="flex flex-col items-center mt-6">
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to section ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === activeIndex
                    ? 'bg-white w-6 h-2'
                    : 'bg-gray-600 w-2 h-2'
                }`}
              />
            ))}
          </div>
          <p className="text-white text-sm mt-2 opacity-70">
            Scroll to navigate
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default HowWeWork;

// import React, { useEffect, useRef, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const sections = [
//   {
//     title: 'Discover & Decode',
//     description:
//       "We start by listening—closely. To your goals, your market, and your brand's unique DNA. Then we dig deep with research and insights to decode what your audience actually wants.",
//     imageRight: '/images/Image 1.png',
//   },
//   {
//     title: 'Map & Wireframe',
//     description:
//       'With clarity in hand, we structure intuitive flows and user journeys that put purpose first. Every click, scroll, and interaction is mapped to support your business objectives.',
//     imageRight: '/images/Image 2.png',
//   },
//   {
//     title: 'Design With Intent',
//     description:
//       "Our design process isn't just about looking good—it's about building visual systems that convert. Think bold aesthetics, crisp layouts, and storytelling that moves people. You're involved at every key step.",
//     imageRight: '/images/Image 3.png',
//   },
//   {
//     title: 'Build & Elevate',
//     description:
//       "Once approved, our developers bring everything to life—with precision code, smooth animations, and tech that scales. We don't just develop—we engineer ",
//     imageRight: '/images/Image 4.png',
//   },
//   {
//     title: 'Launch, Learn, and Grow',
//     description:
//       "Your brand doesn't stop at launch. We monitor, analyze, and optimize. From post-launch support to campaign integration, we ensure your digital presence stays sharp, relevant, and growth-driven.",
//     imageRight: '/images/Image 5.png',
//   },
// ];

// const HowWeWork = () => {
//   const containerRef = useRef(null);
//   const [step, setStep] = useState(0);
//   const [isLocked, setIsLocked] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const scrollTimeout = useRef(null);
//   const accumulatedDelta = useRef(0);
//   const lockTimeout = useRef(null);

//   useEffect(() => {
//     const threshold = 50;
//     const requiredAccumulation = 100;

//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const rect = containerRef.current.getBoundingClientRect();
//       const isAtTop = rect.top <= 0;

//       if (isAtTop && !isLocked) {
//         setIsLocked(true);
//         document.body.style.overflow = 'hidden';
//       }
//     };

//     const handleWheel = e => {
//       if (!isLocked || isScrolling) return;

//       e.preventDefault();

//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
//       accumulatedDelta.current += Math.abs(e.deltaY);

//       if (accumulatedDelta.current < requiredAccumulation) {
//         scrollTimeout.current = setTimeout(() => {
//           accumulatedDelta.current = 0;
//         }, 200);
//         return;
//       }

//       if (Math.abs(e.deltaY) < threshold) return;

//       accumulatedDelta.current = 0;
//       setIsScrolling(true);

//       setStep(prev => {
//         let newStep = prev;

//         if (e.deltaY > 0 && prev < sections.length - 1) {
//           newStep = prev + 1;
//         } else if (e.deltaY < 0 && prev > 0) {
//           newStep = prev - 1;
//         } else if (e.deltaY < 0 && prev === 0) {
//           setIsLocked(false);
//           document.body.style.overflow = 'auto';
//           return prev;
//         } else if (e.deltaY > 0 && prev === sections.length - 1) {
//           setTimeout(() => {
//             setIsLocked(false);
//             document.body.style.overflow = 'auto';
//             const nextElement = containerRef.current?.nextElementSibling;
//             if (nextElement) {
//               nextElement.scrollIntoView({ behavior: 'smooth' });
//             } else {
//               window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
//             }
//           }, 100);
//           return prev;
//         }

//         return newStep;
//       });

//       setTimeout(() => {
//         setIsScrolling(false);
//       }, 500);
//     };

//     const handleKeyDown = e => {
//       if (!isLocked || isScrolling) return;

//       if (e.key === 'ArrowDown' && step < sections.length - 1) {
//         setIsScrolling(true);
//         setStep(prev => prev + 1);
//         setTimeout(() => setIsScrolling(false), 500);
//       } else if (e.key === 'ArrowUp' && step > 0) {
//         setIsScrolling(true);
//         setStep(prev => prev - 1);
//         setTimeout(() => setIsScrolling(false), 500);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('keydown', handleKeyDown);
//       if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
//       if (lockTimeout.current) clearTimeout(lockTimeout.current);
//       document.body.style.overflow = 'auto';
//     };
//   }, [isLocked, isScrolling, step]);

//   const currentSection = sections[step] || {};
//   const { title, description, imageRight } = currentSection;

//   return (
//     <div className="min-h-screen">
//       <div
//         ref={containerRef}
//         className={`min-h-screen bg-black text-white transition-all duration-300 ${
//           isLocked ? 'fixed inset-0 z-50' : 'relative'
//         }`}
//       >
//         <div className="h-screen flex flex-col justify-center">
//           <motion.h2
//             className="text-center font-semibold text-[65px] text-white mb-4"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             How We Work
//           </motion.h2>

//           <div className="w-full h-[500px] flex overflow-hidden relative">
//             <div className="bg-black w-[55%] xl:pl-[140px] flex flex-col justify-center relative overflow-hidden">
//               <img
//                 src="/images/Disc.png"
//                 className=" xl:h-[210px]  lg:h-[210px] absolute xl:left-[-100px] lg:left-[-300px] top-[55px] z-0 hidden lg:block"
//                 alt="Disc"
//               />
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -60 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                 >
//                   <p className="font-marketing-1 xl:w-[500px] text-[50px] lg:text-[60px] text-white leading-[60px]">
//                     {title}
//                   </p>
//                   <p className="font-light text-[17px] lg:text-[20px] xl:text-[14px] text-[#E2E2E2] mt-6 w-[300px] md:w-[500px] lg:w-[700px] xl:w-[550px]">
//                     {description}
//                   </p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={imageRight}
//                   src={imageRight}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -60 }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                   className="w-full h-full object-cover"
//                   alt={title}
//                 />
//               </AnimatePresence>
//             </div>
//           </div>

//           <div className="flex space-x-3 mt-8 mx-auto">
//             {sections.map((_, index) => (
//               <motion.div
//                 key={index}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === step ? 'bg-white w-8' : 'bg-gray-600 w-2'
//                 }`}
//                 animate={{ scale: index === step ? 1.2 : 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             ))}
//           </div>

//           <AnimatePresence>
//             {!isScrolling && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm text-center"
//               >
//                 {step > 0 && step < sections.length - 1 && (
//                   <p>Scroll to navigate</p>
//                 )}
//                 {step === sections.length - 1 && <p>Scroll down to continue</p>}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HowWeWork;
