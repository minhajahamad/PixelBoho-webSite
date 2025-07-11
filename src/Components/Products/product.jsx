// import React from 'react';

// const Product = () => {
//   return (
//     <div className="bg-black xl:pl-[200px] flex flex-col gap-5 py-30 px-10">
//       <div className="text-white xl:w-[1000px]">
//         <p className="font-semibold text-[60px] text-center leading-[60px] ">
//           Products That Inspire
//         </p>
//         <p className="w-full text-center font-light text-[#E2E2E2] xl:text-[17px] mt-7 xl:mt-4">
//           Conducting a comprehensive review and establishing a solid online
//           strategy for transforming your business's digital marketing, Software
//           Development, Web Desgining and more. An initiative that highlights the
//           accomplishments by offering digital advertising, website development,
//           and other IT services that achieve result.
//         </p>
//       </div>

//       <div className="p-[.7px] xl:h-[200px] xl:w-[920px] xl:ml-12 mt-9 xl:mt-8 rounded-[22px] animated-gradient-border-1">
//         <div className="bg-[#101010] rounded-[22px] h-full w-full  flex items-center gap-1  text-white px-15  ">
//           <div className="xl:w-[300px] xl:h-45 xl:mr-6  flex flex-col items-center justify-center px-2 ">
//             <p className="xl:text-[50px] font-semibold mx-auto">200+</p>
//             <p className="mx-auto font-light text-[14px]">Creative Concepts</p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               Nourishing creatives which{' '}
//             </p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               prospects your brand identity
//             </p>
//           </div>
//           <div className="xl:w-[300px] xl:h-45  flex flex-col items-center justify-center px-2 ">
//             <p className="xl:text-[50px] font-semibold mx-auto">150+</p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               Product Solutions
//             </p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               Best in class industrial
//             </p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               level software solutions
//             </p>
//           </div>
//           <div className="xl:w-[300px] xl:h-45  flex flex-col items-center  px-2 pt-5">
//             <p className="xl:text-[50px] font-semibold">15+</p>
//             <p className="mx-auto font-light text-[14px] text-[#E2E2E2]">
//               {' '}
//               Happy Customers
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    setCount(0);
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const value = Math.floor(end * easeOutCubic(progress));
      setCount(value);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, end]);

  const easeOutCubic = t => --t * t * t + 1;

  return <span ref={ref}>{count}+</span>;
};

const Product = () => {
  return (
    <div className="w-full bg-black     flex flex-col  2xl:items-center 2xl:justify-center gap-5 py-30">
      <div className="text-white  xl:w-[1000px] 2xl:w-[1300px] flex flex-col items-center justify-center ">
        <p className="font-semibold text-[60px] 2xl:text-[100px] text-center leading-[60px] 2xl:leading-[85px] ">
          Products That Inspire
        </p>
        <p className="w-full text-center font-light text-[#E2E2E2] xl:text-[17px] 2xl:text-[24px] mt-7 xl:mt-4 2xl:mt-10 2xl:w-[1200px]">
          Conducting a comprehensive review and establishing a solid online
          strategy for transforming your business's digital marketing, Software
          Development, Web Desgining and more. An initiative that highlights the
          accomplishments by offering digital advertising, website development,
          and other IT services that achieve result.
        </p>
      </div>

      <div className="p-[.7px] xl:h-[200px] 2xl:h-[500px]  xl:w-[920px] 2xl:w-[1400px] xl:ml-12 mt-9 xl:mt-8 rounded-[22px] animated-gradient-border-1">
        <div className="bg-[#101010] rounded-[22px] h-full w-full  flex flex-col xl:flex-row  items-center 2xl:justify-around xl:gap-10 gap-10  text-white px-15 py-10 ">
          <div className="  2xl:h-[400px]   flex flex-col items-center justify-center p-5 ">
            <p className="text-[60px] md:text-[80px]  xl:text-[50px] 2xl:text-[100px] font-semibold text-center ">
              <Counter end={200} />
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Creative Concepts
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[22px] text-[#E2E2E2]">
              Nourishing creatives which{' '}
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[22px] text-[#E2E2E2]">
              prospects your brand identity
            </p>
          </div>
          <div className=" 2xl:h-[400px]  flex flex-col items-center justify-center p-5 ">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px] 2xl:text-[100px] font-semibold text-center ">
              <Counter end={150} />
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Product Solutions
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Best in class industrial
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              level software solutions
            </p>
          </div>
          <div className=" 2xl:h-[400px]  flex flex-col items-center  p-5 2xl:pt-18">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px] 2xl:text-[100px] font-semibold text-center">
              <Counter end={15} />
            </p>
            <p className="mx-auto font-light text-[16px] md:text-[22px] xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
