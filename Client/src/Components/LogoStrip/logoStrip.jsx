import React, { useState } from 'react';

const LogoStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const logos = [
    '/images/Prep-Academy.png',
    '/images/RLFC.png',
    '/images/Crowd-Works.png',
    '/images/Career-Launching.png',
    '/images/Godrej.png',
    '/images/Orchids.png',
    '/images/Godrej.png',
    '/images/Puravankara.png',
    '/images/Kannattu.png',
    '/images/Dr-Scent.png',
  ];

  const firstRow = logos.slice(0, 5);
  const secondRow = logos.slice(5, 10);

  const handleMouseEnter = (index, row) => {
    setHoveredIndex(index);
    setHoveredRow(row);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredRow(null);
  };

  return (
    <div className="overflow-x-hidden bg-black py-20 relative">
      <div
        className={`marquee-row mx-auto fade-effect ${
          hoveredIndex !== null ? 'paused' : ''
        }`}
      >
        <div className="marquee-track">
          {/* Triple the logos to ensure smooth looping */}
          {[...firstRow, ...firstRow, ...firstRow].map((logo, idx) => (
            <div
              key={idx}
              className={`marquee-item ${
                hoveredIndex !== null
                  ? hoveredRow === 1 && hoveredIndex === idx % firstRow.length
                    ? 'highlighted'
                    : 'faded'
                  : ''
              }`}
              onMouseEnter={() => handleMouseEnter(idx % firstRow.length, 1)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>
      <div
        className={`marquee-row mx-auto fade-effect ${
          hoveredIndex !== null ? 'paused' : ''
        }`}
      >
        <div className="marquee-track">
          {/* Triple the logos to ensure smooth looping */}
          {[...secondRow, ...secondRow, ...secondRow].map((logo, idx) => (
            <div
              key={idx}
              className={`marquee-item ${
                hoveredIndex !== null
                  ? hoveredRow === 2 && hoveredIndex === idx % secondRow.length
                    ? 'highlighted'
                    : 'faded'
                  : ''
              }`}
              onMouseEnter={() => handleMouseEnter(idx % secondRow.length, 2)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={logo} alt="logo" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-row {
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          margin-bottom: 1rem;
        }

        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scrollLeft 15s linear infinite;
          transition: animation-play-state .5s ease-in-out;
        }

        .marquee-row.paused .marquee-track {
          animation-play-state: paused;
        }

        .marquee-item {
          flex: 0 0 auto;
          width: 150px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 2rem;
          transition: all 0.3s ease-in-out;
          opacity: 1;
        }

        .marquee-item img {
          max-height: 80px;
          max-width: 100%;
          object-fit: contain;
          cursor: pointer;
          transition: transform 0.3s ease-in-out;
        }

        .marquee-item.highlighted {
          opacity: 1;
        }

        .marquee-item.highlighted img {
          transform: scale(1.1);
        }

        .marquee-item.faded {
          opacity: 0.3;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .fade-effect {
          mask-image: linear-gradient(
            to right,
            rgba(219, 148, 255, 0),
            rgb(81, 0, 100) 20%,
            rgb(68, 0, 73) 80%,
            rgba(216, 108, 255, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default LogoStrip;
