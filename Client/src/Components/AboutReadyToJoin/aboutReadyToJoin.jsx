import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutReadyToJoin = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 xl:py-16 px-4 bg-black flex flex-col items-center text-center">
      <h2 className="text-[30px] sm:text-[35px] xl:text-[50px] font-semibold text-white mb-4 leading-snug">
        Ready to Join <span className="text-[#8528FF]">PixelBoho?</span>
      </h2>

      <p className="font-light text-[#e7e7e7] text-[15px] sm:text-[16px] font-rubik mb-6 max-w-xl">
        Be a part of a team that's passionate, innovative, and committed to
        making a difference in the digital world.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto justify-center items-center">
        <div
          onClick={() => setTimeout(() => navigate('/career'), 250)}
          className="w-fit sm:w-auto px-10 py-3 border border-transparent bg-[#8528FF] text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all duration-300 ease-in-out text-center"
        >
          Join Our Team
        </div>

        <a
          href="https://www.canva.com/design/DAGsSlYJiQ4/fQ3V8h60t8Q4ExsZkrQTlQ/view?utm_content=DAGsSlYJiQ4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc4b07541a"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit sm:w-auto px-8 py-3 border border-[#999999] text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all duration-300 ease-in-out text-center"
        >
          Company Profile
        </a>
      </div>
    </section>
  );
};

export default AboutReadyToJoin;
