import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/home';
import About from './Pages/About/about';
import CareerPage from './Pages/Career/careerPage';
import ContactPage from './Pages/Contact/contact';
import ScrollToTop from './Components/ScrollToTop/scrollToTop';
import PrivacyPolicy from './Pages/Privacy Policy/privacyPolicy';
import TermsConditions from './Pages/Terms and Condition/terms-condition';
import Blogs from './Pages/Blogs/blogs';
import BlogDetail from './Pages/Blogs/blogDetail';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
};

export default App;
