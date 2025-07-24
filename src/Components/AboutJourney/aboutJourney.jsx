import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { IoRocketOutline } from 'react-icons/io5';
import { PiMedal } from 'react-icons/pi';

const journey = [
  {
    year: '2019',
    title: 'Foundation',
    desc: 'PixelBoho was born with a vision to revolutionize digital marketing through creative excellence.',
    icon: (
      <div className="bg-gradient-blue w-[45px] h-[45px] flex items-center justify-center rounded-full">
        <CiCalendarDate className="text-white text-[30px]   " />
      </div>
    ),
  },
  {
    year: '2020',
    title: 'Growth',
    desc: 'Expanded our team and services, helping 100+ brands establish their digital presence.',
    icon: (
      <div className="bg-gradient-green w-[45px] h-[45px] flex items-center justify-center rounded-full">
        <HiMiniArrowTrendingUp className="text-white text-[30px]  " />
      </div>
    ),
  },
  {
    year: '2022',
    title: 'Innovation',
    desc: 'Introduced new digital strategies and tools to help brands grow and stay ahead of the curve.',
    icon: (
      <div className="bg-gradient-purple w-[45px] h-[45px] flex items-center justify-center rounded-full">
        <IoRocketOutline className="text-white  text-[25px]  " />
      </div>
    ),
  },
  {
    year: '2024',
    title: 'Excellence',
    desc: 'Recognized as a leading digital agency with 500+ successful projects and growing.',
    icon: (
      <div className="bg-gradient-yellow w-[45px] h-[45px] flex items-center justify-center rounded-full">
        <PiMedal className="text-white  text-[25px] " />
      </div>
    ),
  },
];

const AboutJourney = () => (
  <section className="px-4 py-16 bg-black">
    <h2 className="text-[35px] xl:text-[50px] font-poppins font-semibold text-center mb-10 ">
      <span className="text-white">Our</span>{' '}
      <span className="text-[#552199]   ">Journey</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {journey.map(j => (
        <div
          key={j.year}
          className="bg-black border border-[#d9d9d933] rounded-xl p-6  shadow-xl flex flex-col gap-2"
        >
          <div className="flex gap-5 items-center justify-start ">
            <div>{j.icon}</div>
            <div className="text-[#8528FF] font-bold font-poppins text-[28px]">
              {j.year}
            </div>
          </div>
          <div className="font-semibold font-poppins text-white text-[24px] mt-2 mb-2">
            {j.title}
          </div>
          <p className="font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik leading-tight">
            {j.desc}
          </p>
          <div className="w-full h-2 rounded-xl bg-gray-600"></div>
        </div>
      ))}
    </div>
  </section>
);

export default AboutJourney;
