import React from 'react';
import Header from '../../Components/Header/header';
import CareerHeroSection from '../../Components/careerHeroSection/careerHeroSection';
import CareerOpenings from '../../Components/CareerOpenings/careerOpenings';
import AboutContact from '../../Components/ABOUTContact/aboutContact';
import Footer from '../../Components/Footer/footer';
const CareerPage = () => {
  return (
    <div>
      <Header />
      <CareerHeroSection />
      <CareerOpenings />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default CareerPage;
