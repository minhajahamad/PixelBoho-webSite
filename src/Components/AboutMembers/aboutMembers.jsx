import React from 'react';

const details = [
  {
    image: '/images/MD.jpg',
    Name: 'Chickoo Mattackal Philip ',
    title: 'Managing Director',
  },
  {
    image: '/images/CEO.png',
    Name: 'Allen Thomas ',
    title: 'FOUNDER',
  },
  {
    image: '/images/DANISH.webp',
    Name: 'Danish KM ',
    title: 'Chief Growth Officer',
  },
  {
    image: '/images/MERAJ.webp',
    Name: 'Meraj Ahmed ',
    title: 'Head of Marketing',
  },
  {
    image: '/images/GISHA.png',
    Name: 'Gisha Chandran ',
    title: 'Asst. Manager',
  },
  {
    image: '/images/CHINCHU.png',
    Name: 'Chinchu D ',
    title: 'DIgital Marketing Head',
  },
  {
    image: '/images/SOURAV.png',
    Name: 'Sourav Dileep ',
    title: 'UI/UX Designer',
  },
  {
    image: '/images/SHERIN.png',
    Name: 'Sherin Wilson',
    title: 'Graphic Designer',
  },
  {
    image: '/images/AYUSH.png',
    Name: 'Ayush Sharma ',
    title: 'Vedio Editor',
  },
  {
    image: '/images/THEERTHA.png',
    Name: 'Theertha KK ',
    title: 'Software Developer',
  },
  {
    image: '/images/RAIHAN.png',
    Name: 'Mohamad Raihan  ',
    title: 'Software Developer',
  },
  {
    image: '/images/ANAGHA.png',
    Name: 'Anagha VM',
    title: 'Software Developer',
  },
  {
    image: '/images/BASIL.png',
    Name: 'Basil Sabu ',
    title: 'Software Developer',
  },
  {
    image: '/images/MINHAJ.png',
    Name: 'Minhaj Ahamad',
    title: 'Software Developer',
  },
  {
    image: '/images/SAI.png',
    Name: 'Sai Krishna',
    title: 'Digital Marketer',
  },
  {
    image: '/images/NASMA.png',
    Name: 'Khadeeja Nasma',
    title: 'QA',
  },
];

const AboutMembers = () => (
  <section className="py-16 px-10 bg-black">
    <h2 className="text-[35px] xl:text-[50px] font-semibold text-center mb-8 text-white font-poppins ">
      The Minds Behind <span className="text-[#8528FF]">PixelBoho</span>
    </h2>
    <p className="text-center font-light text-[#e7e7e7] text-[16px] xl:text-[16px] font-rubik leading-tight max-w-xl mx-auto mb-8">
      Our diverse team of creative strategists, developers, and digital
      marketers brings together years of experience and fresh perspectives to
      deliver exceptional results.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-5">
      {details.map((detail, index) => (
        <div
          key={index}
          className="bg-black   rounded-xl border border-[#d9d9d955] shadow-xl min-w-[300px] min-h-[350px] xl:min-w-[250px] xl:min-h-[350px]  py-5 px-5 flex flex-col justify-around items-center cursor-pointer group  "
        >
          <div>
            <img
              src={detail.image}
              className={`mx-auto mb-4 w-36 h-46 rounded-full object-cover object-top border-5 border-[#E5DEFF] group-hover:border-[#A392FF] group-hover:scale-105  flex items-center justify-center text-3xl text-white bg-white transition-all duration-400 ease-in-out`}
            />

            <p className="text-white group-hover:text-[#8528FF] group-hover:scale-105 font-semibold font-poppins text-[26px] text-center leading-snug break-words max-w-[260px] transition-all duration-400 ease-in-out">
              {detail.Name}
            </p>
          </div>

          <p className="text-[#c2c2c2]  font-poppins text-[17px] mt-2 uppercase">
            {detail.title}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default AboutMembers;
