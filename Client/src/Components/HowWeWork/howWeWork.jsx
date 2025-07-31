import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoEyeOutline } from 'react-icons/io5'; //1
import { MdZoomOutMap } from 'react-icons/md';
import { LuPenTool } from 'react-icons/lu'; //3
import { FaCodeBranch } from 'react-icons/fa'; //4
import { IoRocketOutline } from 'react-icons/io5'; //5

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
      'Our design process isn’t just about looking good—it’s about building visual systems that convert. Think bold aesthetics, crisp layouts, and storytelling that moves people. You’re involved at every key step.',
    imageRight: '/images/Image 3.png',
  },
  {
    title: 'Build & Elevate',
    description:
      'Once approved, our developers bring everything to life—with precision code, smooth animations, and tech that scales. We don’t just develop—we engineer ',
    imageRight: '/images/Image 4.png',
  },
  {
    title: 'Launch, Learn, and Grow',
    description:
      'Your brand doesn’t stop at launch. We monitor, analyze, and optimize. From post-launch support to campaign integration, we ensure your digital presence stays sharp, relevant, and growth-driven.',
    imageRight: '/images/Image 5.png',
  },
];

const AUTO_PLAY_DELAY = 3000;

const slideVariants = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sections.length);
    }, AUTO_PLAY_DELAY);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = index => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    startAutoPlay();
  };

  return (
    <div className="flex flex-col items-center text-white px-6 lg:px-15 overflow-hidden py-10 relative">
      {/* <div className="absolute left-[-110px] top-[100px] h-[220px] z-10 hidden md:block w-[220px]">
        <img src="/images/Disc.png" className="w-full h-full" />

        <div className="absolute top-0 left-[130px] h-full w-[90px] z-20 text-black ">
          <IoEyeOutline
            size={30}
            className="absolute"
            style={{ top: '100px', right: '20px' }}
          />
          <MdZoomOutMap
            size={30}
            className="absolute rotate-20"
            style={{ top: '155px', right: '38px' }}
          />
          <LuPenTool
            size={30}
            className="absolute rotate-40"
            style={{ bottom: '10px', right: '85px' }}
          />
          <FaCodeBranch
            size={30}
            className="absolute"
            style={{ bottom: '20px', left: '-75' }}
          />
          <IoRocketOutline
            size={30}
            className="absolute"
            style={{ bottom: '60px', left: '-110px' }}
          />
        </div>
      </div> */}
      <p className="text-center font-semibold text-[30px] sm:text-[40px] md:text-[50px] lg:text-[65px] xl:text-[65px] font-poppins mb-6">
        How We Work
      </p>

      <div className="relative w-full min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 text-center lg:text-left">
              <h2 className="font-marketing-1 text-[22px] sm:text-[30px] md:text-[36px] lg:text-[48px] xl:text-[50px] font-normal leading-tight whitespace-nowrap truncate">
                {sections[activeIndex].title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] md:w-[500px] xl:w-[550px] mx-auto lg:mx-0 font-marketing-1">
                {sections[activeIndex].description}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={sections[activeIndex].imageRight}
                alt={`Section ${activeIndex + 1}`}
                className="w-full max-w-[600px] object-contain rounded-md"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-6 flex gap-3 z-30">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === activeIndex ? 'bg-white w-6' : 'bg-gray-600 w-2'
            }`}
            style={{ height: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
