import React, { forwardRef } from 'react';

const ContactForm = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="overflow-x-hidden bg-[url('/images/Contact-Form-img.png')] bg-no-repeat bg-cover bg-center py-20 flex items-center justify-center md:justify-end overflow-x-hidden md:pr-20   xl:pr-40  xl:pt-25 "
    >
      <div className="text-white   flex flex-col gap-2 w-[300px] md:w-[350px] lg:w-[400px]  ">
        <div>
          <p className="font-medium text-center lg:text-left text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] ">
            Say Hi!
          </p>
          <p className=" text-[12px] text-center lg:text-left lg:text-[14px] xl:text-[16px]  font-light xl:w-[380px] font-poppins ">
            Book an appointment with us to get started on your{' '}
            <br className="md:hidden" />
            <span className="text-[#9747FF] text-[16px] lg:text-[18px] xl:text-[20px]  xl:ml-2 font-medium ">
              Journey of Success
            </span>
          </p>
        </div>

        <div className="p-[.7px] w-[300px] md:w-[350px] lg:w-[400px]  h-[330px] lg:h-[350px] xl:w-[380px] xl:h-[370px] rounded-[10px]  bg-[linear-gradient(to_bottom_right,#808080,#1A1A1A)] animated-gradient-border-2   ">
          <div className="p-4 xl:p-5  w-full h-full  bg-[#101010] rounded-[10px]  ">
            <form className="flex flex-col ">
              <div className="flex flex-col gap-1 ">
                <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                  Name
                </label>
                <input
                  placeholder="Your Name"
                  className=" border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                  Email
                </label>
                <input
                  placeholder="email"
                  className=" border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                  Phone Number
                </label>
                <input
                  placeholder="Phone No "
                  className=" border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                />
              </div>
              <div className="flex flex-col gap-1 mt-3 ">
                <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                  Requirement
                </label>
                <select className=" border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  " />
              </div>
              <div className="px-6 py-2 w-fit mx-auto mt-4 bg-[#FFBA3A]  text-black font-semibold text-[13px] lg:text-[16px] rounded-[5px]  text-center cursor-pointer hover:bg-[#ffac12] transition-colors duration-300 ">
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
