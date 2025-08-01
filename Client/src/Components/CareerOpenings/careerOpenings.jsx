import React, { useEffect, useState } from 'react';
import CareerJobCard from '../CareerJobCard/careerJobCard';
import axios from 'axios';
// const jobs = [
//   {
//     title: 'Graphic Designer',
//     category: 'Design',
//     type: 'Internship',
//     experience: '0-1 year',
//     subtitle:
//       'Assist in crafting compelling visual assets for digital and print. Collaborate on brand visuals, social media graphics, and creative design concepts.',
//     requirements: [
//       'Proficiency in Adobe Photoshop, Illustrator, and Canva',
//       'Basic understanding of layout, typography, and branding',
//       'Creative mindset with attention to detail',
//       'Ability to meet deadlines and take design feedback constructively',
//     ],
//   },
//   {
//     "title": 'Full Stack Developer',
//     "category": 'Development',
//     type: 'Internship',
//     "experience": '0-1 year',
//     "subtitle":
//       'Support development of scalable web applications. Work on both frontend and backend tasks using modern technologies and collaborative workflows.',
//     "requirements": [
//       'Familiarity with front-end (HTML, CSS, JavaScript, React/Vue)',
//       'Basic knowledge of back-end (Node.js/PHP, Express, MongoDB/MySQL)',
//       'Understanding of RESTful APIs and Git version control',
//       'Problem-solving mindset and eagerness to learn new tech',
//     ],
//   },
//   {
//     title: 'Video Editor',
//     category: 'Media Production',
//     type: 'Internship',
//     experience: '0-1 year',
//     subtitle:
//       'Edit and enhance video content for various platforms. Add effects, transitions, and sound design to deliver engaging visual storytelling.',
//     requirements: [
//       'Experience with Adobe Premiere Pro, After Effects, or similar tools',
//       'Basic knowledge of color grading, transitions, and audio syncing',
//       'Creative storytelling and attention to pacing',
//       'Portfolio or sample videos showcasing editing work',
//     ],
//   },
//   {
//     title: 'Sales',
//     category: 'Sales & Marketing',
//     type: 'Internship',
//     experience: '0-1 year',
//     subtitle:
//       'Assist the sales team in lead generation and outreach. Learn and contribute to client communication, pipeline management, and strategy execution.',
//     requirements: [
//       'Excellent communication and interpersonal skills',
//       'Basic understanding of sales funnels and CRM tools',
//       'Ability to handle client queries and follow up effectively',
//       'Passion for learning and growing in sales-driven environments',
//     ],
//   },
// ];

const CareerOpenings = () => {
  const [jobs, setJobs] = useState([]);

  const getOpenings = async () => {
    try {
      const response = await axios.get('http://localhost:9000/openings');
      setJobs(response.data); // Make sure response.data is an array of jobs
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
          jobs.map((job) => <CareerJobCard key={job._id} job={job} />)
        )}
      </div>
    </section>
  );
};

export default CareerOpenings;
