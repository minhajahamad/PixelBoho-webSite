import React from 'react';

const details = [
  {
    image: '/images/Image 1.png',
    Name: 'Name ',
    title: 'Position',
    desc: '  Passionate about creating digital experiences that make a difference.  ',
  },
  {
    image: '',
    Name: 'Name ',
    title: 'Position',
    desc: '  Passionate about creating digital experiences that make a difference.  ',
  },
  {
    image: '',
    Name: 'Name ',
    title: 'Position',
    desc: '  Passionate about creating digital experiences that make a difference.  ',
  },
];

const AboutMembers = () => (
  <section className="py-16 px-4 bg-black">
    <h2 className="text-[35px] xl:text-[50px] font-semibold text-center mb-8 text-white font-poppins ">
      The Minds Behind <span className="text-[#552199]">PixelBoho</span>
    </h2>
    <p className="text-center font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik leading-tight max-w-xl mx-auto mb-8">
      Our diverse team of creative strategists, developers, and digital
      marketers brings together years of experience and fresh perspectives to
      deliver exceptional results.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
      {details.map((detail, index) => (
        <div
          key={index}
          className="bg-black   rounded-xl border border-[#d9d9d933] shadow-xl min-h-[300px] max-w-[340px] py-5 px-5 flex flex-col justify-start items-center"
        >
          <img
            src={detail.image}
            className="mx-auto mb-4 w-76 h-76     flex items-center justify-center text-3xl text-white bg-white"
          />

          <p className="text-[#552199] font-regular font-poppins text-[30px] ">
            {detail.Name}
          </p>
          <p className="text-[#c2c2c2] font-medium font-poppins text-[25px] ">
            {detail.title}
          </p>
          {/* <p className="text-center font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik leading-tight">
            {detail.desc}
          </p> */}
        </div>
      ))}
    </div>
  </section>
);

export default AboutMembers;
