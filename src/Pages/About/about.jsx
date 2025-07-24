import React from 'react';
import Header from '../../Components/Header/header';
import AboutHeroSection from '../../Components/About HeroSection/aboutHeroSection';
import AboutVision from '../../Components/AboutVision/aboutVision';
import AboutJourney from '../../Components/AboutJourney/aboutJourney';
import AboutMembers from '../../Components/AboutMembers/aboutMembers';
import AboutWhyChoose from '../../Components/AboutWhyChoose/aboutWhyChoose';
import AboutReadyToJoin from '../../Components/AboutReadyToJoin/aboutReadyToJoin';

const About = () => {
  return (
    <div>
      <Header />
      <AboutHeroSection />
      <AboutVision />
      <AboutJourney />
      <AboutMembers />
      <AboutWhyChoose />
      <AboutReadyToJoin />
    </div>
  );
};

export default About;
