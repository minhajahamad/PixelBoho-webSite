// Pages/Blogs/BlogDetail.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/blog/${id}`);
        setBlog(res.data.data);
      } catch (err) {
        console.error("Error fetching blog detail", err);
      }
    };
    getBlog();
  }, [id]);

  if (!blog) return <p className="text-white p-10">Loading...</p>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-[140px] px-5 sm:px-10 py-10 font-poppins">
        <h1 className="text-3xl font-bold mb-5">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full mb-5 rounded-lg" />
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
