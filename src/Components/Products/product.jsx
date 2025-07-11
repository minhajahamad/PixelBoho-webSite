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
    <div className="w-full bg-black    flex flex-col  gap-20 xl:gap-20 py-30 xl:py-15">
      <div className=" text-white w-[330px]  xl:w-[990px] mx-auto 2xl:w-[1300px] flex flex-col gap-10 xl:gap-7 ">
        <p className="font-semibold text-[60px] 2xl:text-[100px] text-center leading-[60px]  ">
          Products That Inspire
        </p>
        <p className=" text-center font-light text-[14px] text-[#E2E2E2] xl:text-[14px] 2xl:text-[24px]  ">
          Conducting a comprehensive review and establishing a solid online
          strategy for transforming your business's digital marketing, Software
          Development, Web Desgining and more. An initiative that highlights the
          accomplishments by offering digital advertising, website development,
          and other IT services that achieve result.
        </p>
      </div>

      <div className="p-[.7px] h-[600px]  xl:h-[200px] 2xl:h-[500px] w-[330px]  xl:w-[990px] 2xl:w-[1400px] mx-auto    rounded-[22px] animated-gradient-border-1">
        <div className="bg-[#101010] rounded-[22px] h-full w-full  flex flex-col xl:flex-row items-center justify-around     text-white  ">
          <div className="     flex flex-col items-center text-center justify-center  ">
            <p className="text-[60px] md:text-[80px]  xl:text-[50px] 2xl:text-[100px] font-semibold  ">
              <Counter end={200} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Creative Concepts
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[22px] text-[#E2E2E2]">
              Nourishing creatives which{' '}
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[22px] text-[#E2E2E2]">
              prospects your brand identity
            </p>
          </div>
          <div className=" flex flex-col items-center text-center justify-center  ">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px] 2xl:text-[100px] font-semibold text-center ">
              <Counter end={150} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Product Solutions
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Best in class industrial
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              level software solutions
            </p>
          </div>
          <div className="  flex flex-col items-center text-center justify-between  xl:h-[139px]">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px] 2xl:text-[100px] font-semibold text-center">
              <Counter end={15} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px] xl:text-[14px] 2xl:text-[24px] text-[#E2E2E2]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
