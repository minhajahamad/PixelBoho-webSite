import React, { useEffect, useRef, useState } from 'react';

const AboutHeroSection = () => {
  //   const paragraphRef = useRef(null);
  //   const [gradientProgress, setGradientProgress] = useState(0);
  //   const [isGradientComplete, setIsGradientComplete] = useState(false);

  //   useEffect(() => {
  //     const paragraph = paragraphRef.current;
  //     if (!paragraph) return;

  //     let scrollAccumulator = 0;
  //     const scrollThreshold = 600;
  //     let hasCompletedOnce = false;

  //     // Split text into spans for line-by-line control
  //     const setupTextSpans = () => {
  //       const text = paragraph.textContent;
  //       const words = text.split(' ');

  //       // Clear existing content
  //       paragraph.innerHTML = '';

  //       // Create spans for each word
  //       words.forEach((word, index) => {
  //         const span = document.createElement('span');
  //         span.textContent = word;
  //         span.className = 'word-span';
  //         span.style.color = '#E2E2E2'; // Default color
  //         paragraph.appendChild(span);

  //         // Add space after each word except the last
  //         if (index < words.length - 1) {
  //           paragraph.appendChild(document.createTextNode(' '));
  //         }
  //       });
  //     };

  //     // Update colors based on progress
  //     const updateWordColors = progress => {
  //       const wordSpans = paragraph.querySelectorAll('.word-span');
  //       const totalWords = wordSpans.length;
  //       const wordsToColor = Math.floor((progress / 100) * totalWords);

  //       wordSpans.forEach((span, index) => {
  //         if (index < wordsToColor) {
  //           span.style.color = '#8528FF';
  //         } else if (index === wordsToColor && progress > 0) {
  //           // Partial coloring for current word
  //           const wordProgress = (progress / 100) * totalWords - wordsToColor;
  //           if (wordProgress > 0.3) {
  //             // Threshold to color the word
  //             span.style.color = '#8528FF';
  //           } else {
  //             span.style.color = '#E2E2E2';
  //           }
  //         } else {
  //           span.style.color = '#E2E2E2';
  //         }
  //       });
  //     };

  //     const handleScroll = e => {
  //       const rect = paragraph.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       if (rect.top < windowHeight && rect.bottom > 0) {
  //         // Always prevent default until animation is complete
  //         if (!hasCompletedOnce) {
  //           e.preventDefault();
  //         }

  //         const scrollDirection = e.deltaY > 0 ? 1 : -1;
  //         scrollAccumulator += scrollDirection * Math.abs(e.deltaY || 1);
  //         scrollAccumulator = Math.max(
  //           0,
  //           Math.min(scrollThreshold, scrollAccumulator)
  //         );

  //         const progress = (scrollAccumulator / scrollThreshold) * 100;
  //         setGradientProgress(progress);
  //         updateWordColors(progress);

  //         const isComplete = progress >= 100;
  //         if (isComplete) {
  //           hasCompletedOnce = true;
  //         }
  //         setIsGradientComplete(isComplete);
  //       }
  //     };

  //     const handleWheel = e => {
  //       const rect = paragraph.getBoundingClientRect();
  //       const windowHeight = window.innerHeight;

  //       if (rect.top < windowHeight && rect.bottom > 0) {
  //         // Always prevent default until animation is complete
  //         if (!hasCompletedOnce) {
  //           e.preventDefault();
  //         }

  //         const scrollDirection = e.deltaY > 0 ? 1 : -1;
  //         scrollAccumulator += scrollDirection * Math.abs(e.deltaY || 1);
  //         scrollAccumulator = Math.max(
  //           0,
  //           Math.min(scrollThreshold, scrollAccumulator)
  //         );

  //         const progress = (scrollAccumulator / scrollThreshold) * 100;
  //         setGradientProgress(progress);
  //         updateWordColors(progress);

  //         const isComplete = progress >= 100;
  //         if (isComplete) {
  //           hasCompletedOnce = true;
  //         }
  //         setIsGradientComplete(isComplete);
  //       }
  //     };

  //     const handleKeyDown = e => {
  //       if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
  //         const rect = paragraph.getBoundingClientRect();
  //         const windowHeight = window.innerHeight;

  //         if (rect.top < windowHeight && rect.bottom > 0) {
  //           // Always prevent default until animation is complete
  //           if (!hasCompletedOnce) {
  //             e.preventDefault();
  //           }

  //           const scrollDirection = e.key === 'ArrowDown' ? 1 : -1;
  //           const keyScrollAmount = 50; // Amount to scroll per key press

  //           scrollAccumulator += scrollDirection * keyScrollAmount;
  //           scrollAccumulator = Math.max(
  //             0,
  //             Math.min(scrollThreshold, scrollAccumulator)
  //           );

  //           const progress = (scrollAccumulator / scrollThreshold) * 100;
  //           setGradientProgress(progress);
  //           updateWordColors(progress);

  //           const isComplete = progress >= 100;
  //           if (isComplete) {
  //             hasCompletedOnce = true;
  //           }
  //           setIsGradientComplete(isComplete);
  //         }
  //       }
  //     };

  //     const observer = new IntersectionObserver(
  //       entries => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             setupTextSpans(); // Setup spans when element comes into view
  //             document.addEventListener('wheel', handleWheel, { passive: false });
  //             document.addEventListener('keydown', handleKeyDown);
  //           } else {
  //             document.removeEventListener('wheel', handleWheel);
  //             document.removeEventListener('keydown', handleKeyDown);
  //           }
  //         });
  //       },
  //       {
  //         rootMargin: '0px',
  //         threshold: 0.1,
  //       }
  //     );

  //     observer.observe(paragraph);

  //     return () => {
  //       observer.disconnect();
  //       document.removeEventListener('wheel', handleWheel);
  //       document.removeEventListener('keydown', handleKeyDown);
  //     };
  //   }, []);

  return (
    <div className="xl:h-screen bg-black flex flex-col justify-center gap-10  xl:flex-row items-center text-white pt-[100px] xl:pt-[100px] px-10 lg:px-20 lg:py-30 py-20 xl:px-20 ">
      <div className="xl:w-[45%] leading-tight  ">
        <p className="text-[55px] xl:text-[100px]  font-poppins text-gradient  ">
          PixelBoho
        </p>
        {/* <p className="font-light  text-[20px] font-rubik  ">
          We're Creative Digital Agency
        </p> */}
      </div>
      <div className="xl:w-[55%] hidden xl:block font-light text-[#E2E2E2]  xl:text-[18px] text-center xl:text-left  ">
        <p className="scroll-gradient-text">
          We are a full-service digital agency dedicated to transforming brands
          through the perfect blend of creative innovation and data-driven
          strategies. At PixelBoho, we don't just build digital solutions—we
          create meaningful experiences that resonate with your audience and
          drive measurable impact. Our team of designers, strategists, and
          developers work together to craft engaging websites, intuitive user
          interfaces, and compelling brand narratives that not only look
          beautiful but also convert and perform. Guided by insights and powered
          by creativity, we help businesses of all sizes stand out in an
          increasingly digital world. Whether it's launching a new product,
          rebranding an existing business, or optimizing digital presence, our
          mission is to turn your ideas into experiences that inspire, engage,
          and grow your brand.
        </p>
      </div>

      <div className="font-light text-[#E2E2E2] text-center text-[16px] xl:hidden">
        <p>
          We build digital experiences that blend creativity and strategy. From
          branding to websites, we help your business stand out in a digital
          world. Our team crafts user-focused designs and impactful solutions
          that not only look great but also deliver real results. Let us turn
          your vision into a digital experience that inspires and connects.
        </p>
      </div>

      <style jsx>{`
        .scroll-gradient-text {
          line-height: 1.6;
        }

        .word-span {
          transition: color 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default AboutHeroSection;
