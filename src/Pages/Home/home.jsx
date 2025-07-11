import React, { useRef, useEffect } from 'react';
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
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const productRef = useRef(null);
  const heroRef = useRef(null);

  const smoothScrollTo = ref => {
    const element = ref.current;
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.pageYOffset;
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const duration = 800;
    let startTime = null;

    const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animateScroll = currentTime => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToServices = () => smoothScrollTo(servicesRef);
  const scrollToContact = () => smoothScrollTo(contactRef);
  const scrollToHowWeWork = () => smoothScrollTo(howWeWorkRef);
  const scrollToHero = () => smoothScrollTo(heroRef);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          scrollToHowWeWork();
        }
      },
      {
        root: null,
        threshold: 0, // trigger when product is out of viewport
      }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-[100px] bg-black">
      <Header
        onServiceClick={scrollToServices}
        onContactClick={scrollToContact}
        onLogoClick={scrollToHero}
      />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      {/* <LogoStrip /> */}
      {/* <ServiceCard ref={servicesRef} /> */}
      {/* <Product ref={productRef} /> */}
      {/* <HowWeWork ref={howWeWorkRef} /> */}
      {/* <ContactForm ref={contactRef} /> */}
      {/* <NewsLetter /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
