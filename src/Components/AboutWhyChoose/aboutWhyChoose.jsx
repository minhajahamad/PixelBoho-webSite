import React from 'react';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { IoBulbOutline } from 'react-icons/io5';
import { SiTicktick } from 'react-icons/si';
import { TbUsers } from 'react-icons/tb';

const features = [
  {
    icon: <HiMiniArrowTrendingUp className="text-white text-[45px]" />,
    title: 'Data Driven',
    desc: 'Every decision backed by comprehensive analytics, market insights, and measurable performance data.',
  },
  {
    icon: <IoBulbOutline className="text-white text-[40px]" />,
    title: 'Creative Excellence',
    desc: 'Innovative designs that capture attention and drive engagement.',
  },
  {
    icon: <SiTicktick className="text-white text-[40px]" />,
    title: 'Proven Results',
    desc: 'Track record of successful campaigns with measurable ROI.',
  },
  {
    icon: <TbUsers className="text-white text-[40px]" />,
    title: 'Client-Centric',
    desc: 'Dedicated support and personalized strategies for every client.',
  },
];

const AboutWhyChoose = () => (
  <section className="py-16 px-20 bg-black font-poppins">
    <h2 className="text-[35px] xl:text-[50px] font-semibold text-center mb-10 text-white ">
      Why Choose <span className="text-[#552199]">PixelBoho?</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mx-auto">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-[#101010] border border-[#dedede33] rounded-xl p-6 text-center shadow-2xl min-h-[200px] min-w-[300px] flex flex-col  "
        >
          <div className="flex gap-3 items-center justify-start">
            <div className="text-4xl mb-2">{f.icon}</div>
            <div className="font-semibold text-[20px] mb-1 text-[#E2E2E2]">
              {f.title}
            </div>
          </div>
          <p className="font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik  text-left">
            {f.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutWhyChoose;
