import React from 'react';

const NewsLetter = () => {
  return (
    <div className=" bg-black xl:pl-[200px] xl:py-20 ">
      <p className="text-[#A35DFF] font-marketing-1 text-[45px] ">
        Subscribe to Our Newsletter
      </p>
      <p className="text-[14px] font-light text-white mt-5 ">
        Join the PixelBoho Circle — where creativity meets strategy. <br />
        Get exclusive insights, design trends, and digital inspiration delivered
        straight to your inbox.
      </p>
      <div className="flex gap-4 items-center ">
        <input
          type="email"
          placeholder="name@email.com"
          className="xl:w-[500px] bg-white rounded-[2px] mt-6 p-2 "
        />
        <div className="text-black bg-[#FFBA3A] font-semibold text-[16px] p-[8px] rounded-[2px] mt-6  ">
          <p>Subscribe</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
