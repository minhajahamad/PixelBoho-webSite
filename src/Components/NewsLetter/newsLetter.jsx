import React from 'react';

const NewsLetter = () => {
  return (
    <div className=" bg-black px-10 py-5 lg:px-20 lg:py-10 xl:px-25 xl:py-20 2xl:px-50 2xl:py-30 flex flex-col gap-5 ">
      <p className="text-[#A35DFF] font-marketing-1 text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[80px] ">
        Subscribe to Our Newsletter
      </p>
      <p className="desc-text ">
        Join the PixelBoho Circle — where creativity meets strategy.{' '}
        <br className="hidden lg:block" />
        Get exclusive insights, design trends, and digital inspiration delivered
        straight to your inbox.
      </p>
      <div className="flex gap-4 items-center ">
        <input
          type="email"
          placeholder="name@email.com"
          className="md:w-[450px] lg:w-[650px] xl:w-[550px] 2xl:w-[800px] bg-white rounded-[2px] mt-6 p-2 "
        />
        <div className="text-black bg-[#FFBA3A] font-semibold text-[16px] p-[8px] rounded-[2px] mt-6  cursor-pointer hover:bg-[#ffac12] transition-colors duration-300  ">
          <p>Subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
