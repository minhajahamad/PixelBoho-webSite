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
    <div className="w-full bg-black  overflow-x-hidden  flex flex-col  gap-20 xl:gap-20  py-30 xl:py-15 ">
      <div className=" text-white w-[330px] md:w-[630px] lg:w-[850px]  xl:w-[990px]  mx-auto flex flex-col gap-10 xl:gap-7 ">
        <p className="font-semibold text-[60px]  text-center leading-[60px]  ">
          Products That Inspire
        </p>
        <p className=" text-center desc-text  ">
          Conducting a comprehensive review and establishing a solid online
          strategy for transforming your business's digital marketing, Software
          Development, Web Desgining and more. An initiative that highlights the
          accomplishments by offering digital advertising, website development,
          and other IT services that achieve result.
        </p>
      </div>

      <div className="p-[.7px] h-[600px] md:h-[900px]  xl:h-[200px]  w-[330px] md:w-[630px] lg:w-[850px]  xl:w-[990px]  mx-auto    rounded-[22px] animated-gradient-border-1">
        <div className="bg-[#101010] rounded-[22px] h-full w-full  flex flex-col xl:flex-row items-center justify-around     text-white  ">
          <div className="     flex flex-col items-center text-center justify-center  ">
            <p className="text-[60px] md:text-[80px]  xl:text-[50px]  font-semibold  ">
              <Counter end={1000} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              Creative Concepts
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              Nourishing creatives which{' '}
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              prospects your brand identity
            </p>
          </div>
          <div className=" flex flex-col items-center text-center justify-center  ">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px]  font-semibold text-center ">
              <Counter end={500} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              Product Solutions
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              Best in class industrial
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px]  xl:text-[14px]  text-[#E2E2E2]">
              level software solutions
            </p>
          </div>
          <div className="  flex flex-col items-center text-center  xl:h-[139px]    ">
            <p className=" text-[60px] md:text-[80px] xl:text-[50px]  font-semibold text-center">
              <Counter end={250} />
            </p>
            <p className="mx-auto font-light text-[14px] md:text-[22px] xl:text-[14px]  text-[#E2E2E2]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
