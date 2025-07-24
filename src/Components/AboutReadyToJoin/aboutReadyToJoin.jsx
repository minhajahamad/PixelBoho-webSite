import React from 'react';

const AboutReadyToJoin = () => (
  <section className="py-16 px-4 bg-black flex flex-col items-center">
    <h2 className="text-[35px] xl:text-[50px] font-semibold text-white mb-4">
      Ready to Join <span className="text-[#552199]">PixelBoho?</span>
    </h2>
    <p className="text-gray-300 mb-6 text-center max-w-md">
      Be a part of a team that's passionate, innovative, and committed to making
      a difference in the digital world.
    </p>
    <a
      href="/contact"
      className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-semibold transition"
    >
      Get in Touch
    </a>
  </section>
);

export default AboutReadyToJoin;
