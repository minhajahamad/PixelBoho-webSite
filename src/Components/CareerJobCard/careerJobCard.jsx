import React from 'react';
import { useNavigate } from 'react-router-dom';

const CareerJobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#101010] border border-[#dedede33] rounded-xl shadow-2xl p-5 md:p-10 relative 
    w-[90vw] md:w-[90vw] mx-auto transition-all duration-300 font-poppins"
    >
      <div className="flex flex-col items-start gap-2 text-xs mb-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[30px] font-semibold  text-white  ">
            {job.title}
          </h3>
        </div>
        <div className="flex gap-3">
          <span className="bg-gray-800 px-2 py-1 rounded">{job.category}</span>
          <span className="bg-gray-800 px-2 py-1 rounded">{job.type}</span>
          <span className="bg-gray-800 px-2 py-1 rounded">
            {job.experience}
          </span>
        </div>
      </div>
      <p className="mb-3 text-[#E2E2E2]  xl:text-[16px] font-rubik">
        {job.subtitle}
      </p>
      <div>
        <span className="text-[25px] font-medium text-white">
          Requirements:
        </span>
        <ul className="list-disc list-inside text-[#E2E2E2]  xl:text-[16px] font-rubik mt-1 mb-3">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setTimeout(() => navigate('/contact'), 250)}
        className="px-8 py-3 border border-transparent bg-[#8528FF] w-fit    text-white rounded-lg font-semibold  cursor-pointer active:scale-95 transition-all duration-300 ease-in-out "
      >
        Apply!
      </div>{' '}
    </div>
  );
};

export default CareerJobCard;
