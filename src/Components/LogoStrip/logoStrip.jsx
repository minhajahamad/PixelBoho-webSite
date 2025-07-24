import React from 'react';

const LogoStrip = () => {
  const firstRowLogos = [
    '/images/Prep-Academy.png',
    '/images/RLFC.png',
    '/images/Crowd-Works.png',
    '/images/Career-Launching.png',
    '/images/JCI.png',
  ];

  const secondRowLogos = [
    '/images/Orchids.png',
    '/images/Godrej.png',
    '/images/Puravankara.png',
    '/images/Kannattu.png',
    '/images/Dr-Scent.png',
  ];

  const columns = firstRowLogos.map((top, i) => ({
    top,
    bottom: secondRowLogos[i],
  }));

  return (
    <div className="overflow-x-hidden bg-black py-20    relative overflow-hidden  ">
      <div className="w-[90%] md:w-[90%] lg:w-[90%] xl:w-[90%]   overflow-hidden mx-auto">
        <div className="marquee-container fade-effect cursor-pointer group">
          <div className="marquee-track flex">
            {columns.map((pair, i) => (
              <div
                key={`set1-${i}`}
                className="logo-column flex flex-col items-center gap-10  flex-shrink-0 w-[160px] "
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-1-${idx}`}
                    src={src}
                    alt={`Top Logo ${i}-${idx}`}
                    className=" xl:h-20 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}

            {columns.map((pair, i) => (
              <div
                key={`set2-${i}`}
                className="logo-column flex flex-col items-center gap-10 xl:gap-10  flex-shrink-0 w-[160px] "
              >
                {[pair.top, pair.bottom].map((src, idx) => (
                  <img
                    key={`${i}-2-${idx}`}
                    src={src}
                    alt={`Bottom Logo ${i}-${idx}`}
                    className=" xl:h-20 h-10 md:h-19 lg:h-22 object-contain transition-all duration-300 transform group-hover:opacity-40 hover:opacity-100 hover:scale-105"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/eclipse-right-1.png"
        className="absolute w-[400px] h-[500px] top-[-900px] right-[-150px] xl:top-[-495px] xl:right-[-150px]"
        alt="Eclipse decoration"
      />
    </div>
  );
};

export default LogoStrip;
