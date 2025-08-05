import React, { useEffect } from 'react';
import Header from '../../Components/Header/header';
import AboutHeroSection from '../../Components/About HeroSection/aboutHeroSection';
import AboutVision from '../../Components/AboutVision/aboutVision';
import AboutJourney from '../../Components/AboutJourney/aboutJourney';
import AboutMembers from '../../Components/AboutMembers/aboutMembers';
import AboutWhyChoose from '../../Components/AboutWhyChoose/aboutWhyChoose';
import AboutReadyToJoin from '../../Components/AboutReadyToJoin/aboutReadyToJoin';
import Footer from '../../Components/Footer/footer';

import HelmetSEO from '../../Components/SEO/HelmetSeo';
import useSeoData from '../../Hooks/useSeoData';

const About = () => {
  console.log('About component rendering...');
  const seoData = useSeoData('about');
  console.log('About Page SEO Data:', seoData);

  if (!seoData) {
    // return <div>Loading...</div>;
  }


  return (
    <>
      {/* Inject SEO metadata */}
      <HelmetSEO seo={seoData} />

      <Header />
      <AboutHeroSection />
      <AboutVision />
      <AboutJourney />
      <AboutMembers />
      <AboutWhyChoose />
      <AboutReadyToJoin />
      <Footer />
    </>
  );
};

export default About;
