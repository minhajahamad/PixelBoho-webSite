import React from 'react';
import Header from '../../Components/Header/header';
import HeroSection from '../../Components/HeroSection/heroSection';
import LogoStrip from '../../Components/LogoStrip/logoStrip';
import ServiceCard from '../../Components/ServicesCard/serviceCard';
import Product from '../../Components/Products/product';
import HowWeWork from '../../Components/HowWeWork/howWeWork';
import ContactForm from '../../Components/ContactForm/contactForm';
import NewsLetter from '../../Components/NewsLetter/newsLetter';
import Footer from '../../Components/Footer/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <LogoStrip />
      <ServiceCard />
      <Product />
      <HowWeWork />
      {/* <ContactForm /> */}
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
