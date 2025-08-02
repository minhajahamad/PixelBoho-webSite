import React, { useState, useEffect } from 'react';

import { IoIosClose } from 'react-icons/io';

import axios from 'axios';

const CareerJobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!job._id) {
      console.error('Missing job._id!');
      alert('Application failed: Job ID missing');
      return;
    }
  
    try {
      const submissionData = new FormData();
      submissionData.append('jobId', job._id);
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('phone', formData.phone);
      submissionData.append('message', formData.message);
      if (formData.resume) {
        submissionData.append('resume', formData.resume);
      }
  
      const res = await axios.post('http://localhost:9000/applications', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log(res.data);
      alert('Application Submitted');
      setShowModal(false);
      setFormData({ name: '', email: '', phone: '', message: '', resume: null });
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };
  

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal]);

  //State For Posting
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleFileChange = e => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <>
      <div
        className="bg-[#101010] border border-[#dedede33] rounded-xl shadow-2xl p-5 md:p-10 relative 
        w-[90vw] md:w-[90vw] mx-auto transition-all duration-300 font-poppins"
      >
        <div className="flex flex-col items-start gap-2 text-xs mb-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[30px] font-semibold text-white">
              {job.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <span className="bg-gray-800 px-2 py-1 rounded">
              {job.category}
            </span>
            <span className="bg-gray-800 px-2 py-1 rounded">Full Time</span>
            <span className="bg-gray-800 px-2 py-1 rounded">
              {job.experience}
            </span>
          </div>
        </div>

        <p className="mb-3 text-[#E2E2E2] xl:text-[16px] font-rubik">
          {job.subtitle}
        </p>

        <div>
          <span className="text-[25px] font-medium text-white">
            Requirements:
          </span>
          {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
            <ul className="list-disc list-inside text-[#E2E2E2] xl:text-[16px] font-rubik mt-1 mb-3">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[#E2E2E2] mt-1 mb-3">No requirements listed.</p>
          )}
        </div>

        <div
          onClick={() => setShowModal(true)}
          className="px-8 py-3 border border-transparent bg-[#8528FF] w-fit text-white rounded-lg font-semibold cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
        >
          Apply!
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed h-[100vh] inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 px-4">
          <div className="bg-[#101010] max-w-lg w-full p-6 md:p-10 rounded-xl border border-[#dedede33] relative text-white shadow-2xl transition-all">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl text-gray-400 hover:text-white transition hover:bg-[#7d7d7d33] rounded-md"
            >
              <IoIosClose className="text-2xl lg:text-3xl cursor-pointer" />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Apply for {job.title}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block mb-1 text-sm font-medium ">Name:</label>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-[#dedede33] p-3 text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4d4c4c33]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium ">
                  Email:
                </label>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-md border border-[#dedede33] p-3 text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4d4c4c33]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-1 text-sm font-medium ">
                  Phone No:
                </label>
                <input
                  onChange={handleChange}
                  value={formData.phone}
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-md border border-[#dedede33] p-3 text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4d4c4c33]"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block mb-1 text-sm font-medium ">
                  Upload Resume:
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full cursor-pointer rounded-md border border-[#dedede33] p-2 file:bg-[#393939] file:text-white file:border-0 file:py-2 file:px-4 file:rounded-sm bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#4d4c4c33]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium ">
                  Message:
                </label>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full rounded-md border border-[#dedede33] p-3 text-white placeholder-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-[#4d4c4c33]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#8528FF] text-white rounded-md font-semibold border border-transparent hover:bg-black hover:text-[#8528FF] hover:border-[#999999] transition-all duration-400 ease-in-out cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerJobCard;
