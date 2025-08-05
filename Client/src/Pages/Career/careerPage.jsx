import React from 'react';
import Header from '../../Components/Header/header';
import CareerHeroSection from '../../Components/careerHeroSection/careerHeroSection';
import CareerOpenings from '../../Components/CareerOpenings/careerOpenings';
import AboutContact from '../../Components/ABOUTContact/aboutContact';
import Footer from '../../Components/Footer/footer';


import HelmetSEO from '../../Components/SEO/HelmetSeo';
import useSeoData from '../../Hooks/useSeoData';


const CareerPage = () => {
  const seoData = useSeoData('career');

  return (
    <>
      <HelmetSEO seo={seoData} />

      <Header />
      <CareerHeroSection />
      <CareerOpenings />
      <AboutContact />
      <Footer />
    </>
  );
};

export default CareerPage;
