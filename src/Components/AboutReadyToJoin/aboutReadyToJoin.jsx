import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutReadyToJoin = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-black flex flex-col items-center">
      <h2 className="text-[35px] xl:text-[50px] font-semibold text-white mb-4">
        Ready to Join <span className="text-[#8528FF]">PixelBoho?</span>
      </h2>
      <p className="font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik mb-6 text-center max-w-xl">
        Be a part of a team that's passionate, innovative, and committed to
        making a difference in the digital world.
      </p>
      <div className="flex gap-5">
        <div
          onClick={() => setTimeout(() => navigate('/career'), 250)}
          className="px-8 py-3 border border-transparent bg-[#8528FF] text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
        >
          Join Our Team
        </div>

        {/* Company Profile button as link */}
        <a
          href="https://www.canva.com/design/DAGsSlYJiQ4/fQ3V8h60t8Q4ExsZkrQTlQ/view?utm_content=DAGsSlYJiQ4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbc4b07541a"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-[#999999] text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
        >
          Company Profile
        </a>
      </div>
    </section>
  );
};

export default AboutReadyToJoin;
