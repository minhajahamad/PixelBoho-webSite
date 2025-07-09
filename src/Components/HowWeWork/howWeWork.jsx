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

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const NextSection = () => (
  <div className="bg-white h-screen flex items-center justify-center">
    <h1 className="text-black text-4xl font-bold">Next Section</h1>
  </div>
);

const sections = [
  {
    title: 'Discover & Decode',
    description:
      "We start by listening—closely. To your goals, your market, and your brand's unique DNA. Then we dig deep with research and insights to decode what your audience actually wants.",
    imageRight: '/images/Image 1.png',
  },
  {
    title: 'Map & Wireframe',
    description:
      'With clarity in hand, we structure intuitive flows and user journeys that put purpose first. Every click, scroll, and interaction is mapped to support your business objectives.',
    imageRight: '/images/Image 2.png',
  },
  {
    title: 'Design With Intent',
    description:
      "Our design process isn't just about looking good—it's about building visual systems that convert. Think bold aesthetics, crisp layouts, and storytelling that moves people. You're involved at every key step.",
    imageRight: '/images/Image 3.png',
  },
  {
    title: 'Build & Elevate',
    description:
      "Once approved, our developers bring everything to life—with precision code, smooth animations, and tech that scales. We don't just develop—we engineer ",
    imageRight: '/images/Image 4.png',
  },
  {
    title: 'Launch, Learn, and Grow',
    description:
      "Your brand doesn't stop at launch. We monitor, analyze, and optimize. From post-launch support to campaign integration, we ensure your digital presence stays sharp, relevant, and growth-driven.",
    imageRight: '/images/Image 5.png',
  },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const [step, setStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollCount = useRef(0);
  const scrollTimeout = useRef(null);
  const accumulatedDelta = useRef(0);

  useEffect(() => {
    const threshold = 30;
    const requiredAccumulation = 150; // Total scroll distance needed
    const maxScrollCount = 4; // Reduced for better responsiveness

    const onWheel = e => {
      if (!isInView || isScrolling) return;

      e.preventDefault(); // Prevent default scroll behavior when in view

      // Clear existing timeout to reset scroll accumulation
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Accumulate scroll delta
      accumulatedDelta.current += Math.abs(e.deltaY);

      // Only process if we have enough accumulated scroll
      if (accumulatedDelta.current < requiredAccumulation) {
        // Reset accumulation after 300ms of no scrolling
        scrollTimeout.current = setTimeout(() => {
          accumulatedDelta.current = 0;
          scrollCount.current = 0;
        }, 300);
        return;
      }

      // Check if scroll is significant enough
      if (Math.abs(e.deltaY) < threshold) return;

      scrollCount.current += 1;

      // Require multiple scroll events for intentional interaction
      if (scrollCount.current < maxScrollCount) {
        scrollTimeout.current = setTimeout(() => {
          scrollCount.current = 0;
          accumulatedDelta.current = 0;
        }, 400);
        return;
      }

      // Reset counters
      scrollCount.current = 0;
      accumulatedDelta.current = 0;

      setIsScrolling(true);

      setStep(prev => {
        let newStep = prev;
        if (e.deltaY > 0 && prev < sections.length - 1) {
          newStep = prev + 1;
        } else if (e.deltaY < 0 && prev > 0) {
          newStep = prev - 1;
        }
        return newStep;
      });

      // Longer timeout for smoother interaction
      setTimeout(() => setIsScrolling(false), 700);
    };

    const handleKeyDown = e => {
      if (!isInView || isScrolling) return;

      if (e.key === 'ArrowDown' && step < sections.length - 1) {
        setIsScrolling(true);
        setStep(prev => prev + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.key === 'ArrowUp' && step > 0) {
        setIsScrolling(true);
        setStep(prev => prev - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isInView, isScrolling, step]);

  const currentSection = sections[step] || {};
  const { title, description, imageRight } = currentSection;

  return (
    <div className="w-full">
      <div
        className="h-screen flex flex-col justify-center items-center bg-black sticky top-0 z-10"
        ref={ref}
      >
        <p className="text-center font-semibold text-[65px] text-white mb-4">
          How We Work
        </p>

        <div className="bg-black h-[500px] flex pl-[180px] relative overflow-x-hidden w-full">
          <div className="w-[1225px] h-[100px] absolute z-1 top-[-20px] left-[207px] pointer-events-none">
            <img
              src="/images/Blur Top.png"
              className="w-full h-full opacity-90 mix-blend-screen blur-sm"
              alt="Top Blur"
            />
          </div>
          <div className="absolute h-[110px] w-[1225px] bottom-0 z-1 left-[207px] pointer-events-none">
            <img
              src="/images/Blur Bottom.png"
              className="h-full w-full opacity-90 mix-blend-screen blur-sm"
              alt="Bottom Blur"
            />
          </div>

          <div className="h-full w-[55%] flex flex-col justify-center relative">
            <img
              src="/images/Disc.png"
              className="w-[200px] h-[210px] absolute left-[-274px] top-[55px] z-0"
              alt="Disc"
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                <p className="font-marketing-1 text-[60px] text-white">
                  {title}
                </p>
                <p className="font-light text-[17px] text-[#E2E2E2] mt-6 w-[600px]">
                  {description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-black w-[45%] h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageRight}
                src={imageRight}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -200 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full h-full object-cover relative z-0"
                alt="How We Work"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex space-x-2 mt-8">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === step ? 'bg-white w-6' : 'bg-gray-600'
              }`}
              animate={{
                scale: index === step ? 1.2 : 1,
              }}
            />
          ))}
        </div>

        {/* Scroll hint */}
        {step < sections.length - 1 && (
          <motion.div
            className="absolute bottom-8 text-gray-400 text-sm"
            animate={{ opacity: isScrolling ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Scroll to continue
          </motion.div>
        )}
      </div>

      <NextSection />
    </div>
  );
};

export default HowWeWork;
