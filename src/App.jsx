import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/home';
import About from './Pages/About/about';
import CareerPage from './Pages/Career/careerPage';
import ContactPage from './Pages/Contact/contact';
import ScrollToTop from './Components/ScrollToTop/scrollToTop';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
