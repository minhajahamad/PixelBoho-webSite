import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

import HelmetSEO from '../../Components/SEO/HelmetSeo';
import useSeoData from '../../Hooks/useSeoData';

const Blogs = () => {
  const seoData = useSeoData('blogs');
  return (
    <>
      <HelmetSEO seo={seoData} />
      <Header />
      <div className="min-h-screen bg-black text-white pt-[100px] font-poppins flex flex-col">
        {/* Blog Header */}
        <section className="flex flex-col items-center xl:items-start py-16 w-full px-6 xl:px-20 2xl:px-48">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#8528FF] mb-2 text-center xl:text-left w-full max-w-full">
            <span className="text-white">Why First Impressions Matter:</span>{' '}
            <span className="text-[#a259ff] block md:inline">
              The Psychology Behind Good Web Design
            </span>
          </h1>
          <p className="font-light text-[#E2E2E2] xl:text-[18px] text-center xl:text-left max-w-full mt-4 w-full">
            In a world where attention spans are shorter than ever, your website
            has only a few seconds to make a lasting impression. At PixelBoho,
            we believe that great design isn’t just about looking good — it’s
            about creating an emotional connection, building trust, and guiding
            users toward action. That all starts with a powerful first
            impression.
          </p>
        </section>

        {/* Blog Content */}
        <section className="pb-16 w-full px-6 xl:px-20 2xl:px-48">
          <p className="font-light text-[#E2E2E2] xl:text-[18px] mb-8 text-center xl:text-left">
            In this blog, we’ll explore the psychology behind why first
            impressions matter so much in web design, and how your business can
            benefit from getting it right.
          </p>

          {/* 0.05-second Rule */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A259FF] mb-2 text-center xl:text-left">
              The 0.05-Second Rule
            </h2>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] mb-3 text-center xl:text-left">
              Studies show that users form an opinion about your website in just
              50 milliseconds — that's faster than a blink. This split-second
              judgment is mostly visual, meaning the layout, colors, images, and
              spacing all influence how trustworthy or appealing your brand
              appears. A clean, professional design immediately communicates:
            </p>
            <ul className="list-disc ml-6 font-light text-[#E2E2E2] xl:text-[16px] mb-2 text-left max-w-full">
              <li>Credibility</li>
              <li>Trustworthiness</li>
              <li>Relevance</li>
              <li>Attention to detail</li>
            </ul>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] text-center xl:text-left">
              Meanwhile, a cluttered or outdated layout can instantly turn
              visitors away — even if your products or services are top-tier.
            </p>
          </div>

          {/* Psychology Behind Design Elements */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A259FF] mb-2 text-center xl:text-left">
              The Psychology Behind Design Elements
            </h2>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] mb-3 text-center xl:text-left">
              Let’s break down how different visual choices impact perception:
            </p>
            {/* Color Psychology */}
            <div className="mb-3">
              <span className="font-semibold text-[#A259FF] block text-left">
                1. Color Psychology
              </span>
              <p className="font-light text-[#E2E2E2] xl:text-[16px] text-left">
                Colors evoke emotion. For example:
              </p>
              <ul className="list-disc ml-6 font-light text-[#E2E2E2] xl:text-[16px] text-left max-w-full">
                <li>Blue = Trust, Security (common for tech and finance)</li>
                <li>Red = Urgency, Passion (often used for sales)</li>
                <li>
                  Green = Growth, Health (ideal for wellness or eco brands)
                </li>
              </ul>
              <p className="text-[#E2E2E2] xl:text-[16px] italic mt-1 text-left">
                Choosing the right color palette reinforces your brand’s message
                and connects with your audience on a subconscious level.
              </p>
            </div>
            {/* Typography */}
            <div className="mb-3">
              <span className="font-semibold text-[#A259FF] block text-left">
                2. Typography
              </span>
              <p className="font-light text-[#E2E2E2] xl:text-[16px] text-left">
                Fonts aren’t just about style — they signal tone. Serif fonts
                may convey professionalism, while modern sans-serifs feel clean
                and tech-savvy. The wrong font can make your brand seem off or
                untrustworthy.
              </p>
            </div>
            {/* Whitespace */}
            <div>
              <span className="font-semibold text-[#A259FF] block text-left">
                3. Whitespace & Layout
              </span>
              <p className="font-light text-[#E2E2E2] xl:text-[16px] text-left">
                Whitespace (aka negative space) helps avoid clutter and gives
                the user room to breathe. A well-structured layout improves
                navigation, makes content easier to scan, and reduces cognitive
                overload — keeping users engaged longer.
              </p>
            </div>
          </div>

          {/* First Impressions Drive Behavior */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A259FF] mb-2 text-center xl:text-left">
              First Impressions Drive Behavior
            </h2>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] mb-3 text-center xl:text-left">
              Psychologically, people seek cognitive ease — they’re more likely
              to trust and engage with things that are familiar, intuitive, and
              visually pleasing. A confusing, ugly, or slow site creates
              friction, which often leads to:
            </p>
            <ul className="list-disc ml-6 font-light text-[#E2E2E2] xl:text-[16px] text-left mb-2 max-w-full">
              <li>High bounce rates</li>
              <li>Low conversions</li>
              <li>Poor user reviews</li>
            </ul>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] text-center xl:text-left">
              On the other hand, a site that’s beautifully designed and easy to
              use encourages visitors to stay, explore, and ultimately take
              action (like making a purchase or sending an inquiry).
            </p>
          </div>

          {/* PixelBoho Strategy */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#A259FF] mb-2 text-center xl:text-left">
              At PixelBoho, Design Is Strategy
            </h2>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] mb-3 text-center xl:text-left">
              We don’t just design websites — we craft first impressions that
              help brands grow. Our team combines design psychology, user
              experience best practices, and a deep understanding of your
              audience to build websites that:
            </p>
            <ul className="list-disc ml-6 font-light text-[#E2E2E2] xl:text-[16px] mb-2 text-left max-w-full">
              <li>Convert visitors into customers</li>
              <li>Reflect your brand’s personality</li>
              <li>Perform well across all devices</li>
            </ul>
            <p className="font-light text-[#E2E2E2] xl:text-[16px] text-center xl:text-left">
              Whether you're launching a new site or revamping an old one,
              PixelBoho is here to turn those 50 milliseconds into something
              unforgettable.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
