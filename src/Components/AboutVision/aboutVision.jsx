import React from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { IoBulbOutline } from 'react-icons/io5';

const AboutVision = () => (
  <section className="flex flex-col md:flex-row gap-10 justify-between items-start px-8 py-16 md:px-25 md:py-20 lg:px-30 xl:px-20 xl:py-30 gradient-div font-poppins">
    <div className="flex flex-col lg:flex-row gap-12 w-full">
      <div className="flex-1 flex flex-col justify-between bg-black shadow-[0_0_10px_#1a1a1a] rounded-[16px] p-6  xl:p-10">
        <div className="flex items-center gap-5 mb-3">
          <div className="relative flex items-center justify-center">
            {/* Pulsing circles for drum effect */}
            <span className="absolute rounded-full w-[70px] h-[70px] bg-purple-200 opacity-50 animate-pulseDrum"></span>
            <span className="absolute rounded-full w-[90px] h-[90px] bg-purple-200 opacity-30 animate-pulseDrum delay-300"></span>

            {/* Main circle with icon */}
            <div className="relative flex items-center justify-center bg-purple-400 rounded-full w-[50px] h-[50px] z-10">
              <TbTargetArrow className="text-white text-[35px] font-light" />
            </div>
          </div>

          <h2 className="text-[25px] font-semibold text-[#8528FF]">
            Our Vision
          </h2>
        </div>
        <p className="font-light text-[#e7e7e7] text-[16px] xl:text-[18px] font-rubik">
          To become the leading digital agency that empowers brands to thrive in
          the digital landscape through innovative solutions and exceptional
          user experiences.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-between bg-black shadow-[0_0_10px_#1a1a1a] rounded-[16px] p-6 xl:p-10">
        <div className="flex items-center gap-5 mb-3">
          <div className="relative flex items-center justify-center">
            {/* Pulsing circles for drum effect */}
            <span className="absolute rounded-full w-[70px] h-[70px] bg-purple-300 opacity-50 animate-pulseDrum"></span>
            <span className="absolute rounded-full w-[90px] h-[90px] bg-purple-300 opacity-30 animate-pulseDrum delay-300"></span>

            {/* Main circle with icon */}
            <div className="relative flex items-center justify-center bg-purple-400 rounded-full w-[50px] h-[50px] z-10">
              <IoBulbOutline className="text-white text-[30px] font-light" />
            </div>
          </div>

          <h2 className="text-[25px] font-semibold text-[#8528FF]">
            Our Mission
          </h2>
        </div>
        <p className="font-light text-[#e7e7e7] text-[16px] xl:text-[18px] font-rubik">
          We craft digital solutions that blend creativity with strategy,
          delivering measurable results that drive growth and build lasting
          connections between brands and their audiences.
        </p>
      </div>
    </div>
  </section>
);

export default AboutVision;
