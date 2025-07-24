import React from 'react';
import JobCard from './JobCard';

const jobs = [
  {
    title: 'Senior UI/UX Designer',
    category: 'Design',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$60,000 - $80,000',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Adobe Creative Suite',
      'Strong portfolio showcasing web/mobile designs',
      'Understanding of responsive design principles',
    ],
    benefits: [
      'Health Insurance',
      'Remote Work',
      'Learning Budget',
      'Flexible Hours',
    ],
  },
  {
    title: 'Frontend React Developer',
    category: 'Development',
    location: 'Remote / On-site',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$55,000 - $75,000',
    requirements: [
      '2+ years with React, TypeScript',
      'Experience in modern frontend tech',
      'Strong problem-solving skills',
      'Component-based development',
    ],
    benefits: [
      'Health Insurance',
      'Remote Work',
      'Learning Budget',
      'Flexible Hours',
    ],
  },
];

const CareerOpenings = () => (
  <section className="py-14 bg-gradient-to-b from-gray-900 to-black text-white">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-2">Current Openings</h2>
      <p className="text-gray-300">
        Find your perfect role and join our growing team
      </p>
    </div>
    <div className="space-y-8 max-w-3xl mx-auto">
      {jobs.map((job, idx) => (
        <JobCard key={idx} job={job} />
      ))}
    </div>
  </section>
);

export default CareerOpenings;
