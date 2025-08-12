import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

import HelmetSEO from '../../Components/SEO/HelmetSeo';
import useSeoData from '../../Hooks/useSeoData';

import { FaArrowRight } from 'react-icons/fa';

import axios from 'axios';

const Blogs = () => {
  const seoData = useSeoData('blogs');

  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:9000/blog');
      setBlogs(res.data.data || []);
    } catch (error) {
      console.error('Fetching blogs error', error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <HelmetSEO seo={seoData} />
      <Header />
      <div className="min-h-screen bg-black text-white pt-[120px] font-poppins px-5 sm:px-10 py-10">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-5">
          Latest Blogs :
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-[#101010] border border-[#dedede33] rounded-md flex flex-col cursor-pointer group overflow-hidden"
              >
                <div className="w-full h-[65%] aspect-video overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title || 'Blog image'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#8528FF] transition-all duration-300 ease-in-out line-clamp-2">
                    {blog.title}
                  </p>
                  <p className="font-light text-[#E2E2E2] text-sm sm:text-base xl:text-[18px] line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Spacer pushes "Read More" to bottom */}
                  <div className="flex-grow" />

                  <div className="flex gap-2 items-center justify-end hover:text-[#8528FF] transition-all duration-300 ease-in-out">
                    <p className="text-[#ffff] font-light cursor-pointer hover:text-[#8528FF] transition-all duration-300 ease-in-out ">
                      Read More
                    </p>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
