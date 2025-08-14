// Pages/Blogs/BlogDetail.jsx

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { FaArrowLeft, FaCalendarAlt, FaUser } from 'react-icons/fa';

import axiosInstance from '../../Components/apiconfig/axios';
import { API_URL } from '../../Components/apiconfig/api_url';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [visibleElements, setVisibleElements] = useState({});

  // Refs for each animated element
  const heroImageRef = useRef(null);
  const titleCardRef = useRef(null);
  const contentCardRef = useRef(null);
  const ctaCardRef = useRef(null);

  // Intersection Observer hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => ({
              ...prev,
              [entry.target.dataset.animate]: true,
            }));
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '50px 0px -50px 0px', // Start animation a bit early
      }
    );

    const elements = [
      heroImageRef.current,
      titleCardRef.current,
      contentCardRef.current,
      ctaCardRef.current,
    ].filter(Boolean);

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, [blog]); // Re-run when blog data loads

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axiosInstance.get(API_URL.BLOG.GET_BLOG_BY_ID(id));
        setBlog(res.data.data);
      } catch (err) {
        console.error('Error fetching blog detail', err);
      }
    };
    getBlog();
  }, [id]);

  if (!blog) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black text-white pt-[140px] px-4 sm:px-6 lg:px-8 py-10 font-poppins">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8528FF] mx-auto mb-6"></div>
              <p className="text-xl text-[#E2E2E2] animate-pulse">
                Loading amazing content...
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-[80px] lg:pt-[100px] font-poppins pb-5 relative overflow-hidden">
        {/* Minimal Background Animation - Entire Component */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-10 w-1 h-1 bg-[#8528FF] rounded-full animate-pulse opacity-30"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-[#8528FF] rounded-full animate-pulse opacity-25"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-[#8528FF] rounded-full animate-pulse opacity-30"
            style={{ animationDelay: '4s' }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#8528FF] rounded-full animate-pulse opacity-25"
            style={{ animationDelay: '6s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#8528FF] rounded-full animate-pulse opacity-20"
            style={{ animationDelay: '8s' }}
          ></div>
        </div>

        {/* Hero Section with Gradient Background */}
        <div className="relative bg-gradient-to-b from-[#8528FF]/10 via-black to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

          {/* Back Button - Fixed Position */}
          <div className="relative z-20 px-4 sm:px-6 lg:px-8 pt-6 pb-4">
            <button
              onClick={() => navigate('/blogs')}
              className="flex items-center gap-3 text-[#E2E2E2] hover:text-[#8528FF] transition-all duration-300 ease-in-out group bg-[#101010]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#dedede20]"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Blogs</span>
            </button>
          </div>

          {/* Featured Image - Full Width */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
            <div
              ref={heroImageRef}
              data-animate="heroImage"
              className={`relative rounded-2xl overflow-hidden shadow-2xl border border-[#dedede20] transition-all duration-1000 ease-out ${
                visibleElements.heroImage
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 -mt-20 relative z-20">
          <div className="max-w-5xl xl:max-w-7xl mx-auto">
            {/* Blog Header Card - Slide in from Left */}
            <div
              ref={titleCardRef}
              data-animate="titleCard"
              className={`bg-[#101010] border border-[#dedede20] rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-16 mb-8 backdrop-blur-sm shadow-xl relative transition-all duration-1000 ease-out ${
                visibleElements.titleCard
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white to-[#E2E2E2] bg-clip-text text-transparent">
                {blog.title}
              </h1>

              {/* Meta Info & Actions */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 text-[#E2E2E2]">
                  {blog.author && (
                    <div className="flex items-center gap-2 bg-[#0a0a0a] px-3 py-2 rounded-full border border-[#dedede10]">
                      <FaUser className="text-[#8528FF] text-sm" />
                      <span className="font-medium">{blog.author}</span>
                    </div>
                  )}
                  {blog.createdAt && (
                    <div className="flex items-center gap-2 bg-[#0a0a0a] px-3 py-2 rounded-full border border-[#dedede10]">
                      <FaCalendarAlt className="text-[#8528FF] text-sm" />
                      <span className="font-medium">
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                </div>

                {/* Visual Elements */}
                <div className="flex items-center gap-4">
                  {/* Reading Time */}
                  <div className="flex items-center gap-2 bg-[#0a0a0a] px-4 py-2 rounded-full border border-[#dedede10]">
                    <div className="w-2 h-2 bg-[#8528FF] rounded-full animate-pulse"></div>
                    <span className="font-medium text-[#E2E2E2]">
                      5 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content - Slide in from Right */}
            <div
              ref={contentCardRef}
              data-animate="contentCard"
              className={`bg-[#101010] border border-[#dedede20] rounded-2xl p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-20 mb-8 shadow-xl relative transition-all duration-1000 ease-out ${
                visibleElements.contentCard
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="max-w-4xl xl:max-w-6xl mx-auto relative z-10">
                <div className="text-[#E2E2E2] text-base sm:text-lg xl:text-xl leading-relaxed sm:leading-loose xl:leading-loose space-y-6">
                  <div className="first-letter:text-6xl xl:first-letter:text-8xl first-letter:font-bold first-letter:text-[#8528FF] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                    {blog.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section - Slide in from Left */}
            <div
              ref={ctaCardRef}
              data-animate="ctaCard"
              className={`bg-gradient-to-r from-[#8528FF]/10 via-[#101010] to-[#8528FF]/10 border border-[#dedede20] rounded-2xl p-6 sm:p-8 xl:p-12 2xl:p-16 shadow-xl transition-all duration-1000 ease-out ${
                visibleElements.ctaCard
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="text-center max-w-2xl xl:max-w-4xl mx-auto">
                <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white mb-4">
                  Ready for more insights?
                </h3>
                <p className="text-[#E2E2E2] mb-6 text-base sm:text-lg xl:text-xl">
                  Discover more engaging articles and stay updated with our
                  latest content
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <button
                    onClick={() => navigate('/blogs')}
                    className="bg-[#8528FF] hover:bg-[#7320E6] text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg font-semibold text-base sm:text-lg min-w-[200px]"
                  >
                    Explore More Blogs
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="border-2 border-[#8528FF] text-[#8528FF] hover:bg-[#8528FF] hover:text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out font-semibold text-base sm:text-lg min-w-[200px]"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
