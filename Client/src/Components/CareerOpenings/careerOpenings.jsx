import React, { useEffect, useState } from 'react';
import CareerJobCard from '../CareerJobCard/careerJobCard';
import axiosInstance from '../apiconfig/axios';
import { API_URL } from '../apiconfig/api_url';

const CareerOpenings = () => {
  const [jobs, setJobs] = useState([]);

  const getOpenings = async () => {
    try {
      const response = await axiosInstance.get(
        API_URL.JOB_OPENINGS.GET_JOB_OPENINGS
      );
      setJobs(response.data.openings || []); // Make sure response.data is an array of jobs
    } catch (error) {
      console.error('Error fetching openings:', error);
    }
  };

  useEffect(() => {
    getOpenings();
  }, []);

  return (
    <section className="py-30 bg-black text-white font-poppins overflow-hidden ">
      <div className="text-center mb-8">
        <h2 className="text-[50px] font-semibold mb-2">Current Openings</h2>
        <p className=" text-[#E2E2E2]  xl:text-[16px]">
          Find your perfect role and join our growing team
        </p>
      </div>
      <div className="space-y-8  mx-auto ">
        {jobs.length === 0 ? (
          <p className="text-center">No openings found.</p>
        ) : (
          jobs.map(job => <CareerJobCard key={job._id} job={job} />)
        )}
      </div>
    </section>
  );
};

export default CareerOpenings;
