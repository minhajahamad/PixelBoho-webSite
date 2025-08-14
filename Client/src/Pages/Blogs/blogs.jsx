import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

import HelmetSEO from '../../Components/SEO/HelmetSeo';
import useSeoData from '../../Hooks/useSeoData';

import { FaArrowRight } from 'react-icons/fa';

import 'react-quill/dist/quill.snow.css';

import { useNavigate } from 'react-router-dom';

import axiosInstance from '../../Components/apiconfig/axios';
import { API_URL } from '../../Components/apiconfig/api_url';

const Blogs = () => {
  const navigate = useNavigate();

  const seoData = useSeoData('blogs');

  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await axiosInstance.get(API_URL.BLOG.GET_BLOG);
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
      <div className="min-h-screen bg-black text-white pt-[140px] font-poppins px-5 sm:px-10 py-10">
        <p className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white mb-10">
          Latest Blogs :
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {blogs.length > 0 &&
            blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => navigate(`/blogs/${blog._id}`)}
                className="bg-[#101010] border border-[#dedede33] rounded-md flex flex-col cursor-pointer group overflow-hidden h-[450px]"
              >
                <div className="w-full h-[250px] overflow-hidden flex-shrink-0">
                  <img
                    src={blog.image}
                    alt={blog.title || 'Blog image'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between min-h-0">
                  <div className="flex-1">
                    <p className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#8528FF] transition-all duration-300 ease-in-out mb-3 leading-tight">
                      {blog.title}
                    </p>
                    <p className="font-light text-[#E2E2E2] text-sm sm:text-base xl:text-[18px] line-clamp-3 leading-relaxed">
                      {blog.description}
                    </p>
                  </div>

                  <div className="mt-5 flex gap-2 items-center justify-end group-hover:text-[#8528FF] transition-all duration-300 ease-in-out flex-shrink-0">
                    <p className="text-white font-light cursor-pointer group-hover:text-[#8528FF] transition-all duration-300 ease-in-out">
                      Read More
                    </p>
                    <FaArrowRight className="text-white group-hover:text-[#8528FF] transition-all duration-300 ease-in-out" />
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
