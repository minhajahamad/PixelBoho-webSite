import React, { forwardRef } from 'react';

const ContactForm = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('/images/Contact-Form-img.png')] bg-no-repeat bg-cover bg-center h-[700px] relative "
    >
      <div className="text-white absolute right-[50px] top-[50px] xl:right-[252px] xl:top-[100px] ">
        <p className="font-medium text-[60px]">Say Hi!</p>
        <p className="text-[16px] font-light xl:w-[380px] ">
          Book an appointment with us to get started on your
          <span className="text-[#9747FF] text-[20px] font-medium ">
            Journey of Success
          </span>{' '}
        </p>
        <div className="p-[.7px] xl:w-[380px] rounded-[10px]  bg-[linear-gradient(to_bottom_right,#808080,#1A1A1A)] animated-gradient-border-2 xl:mt-3  ">
          <div className="p-5 w-full h-full   bg-[#101010] rounded-[10px]  ">
            <form>
              <div className="flex flex-col gap-1 ">
                <label className="font-semibold text-[16px] ">Name</label>
                <input className="xl:w-[330px] border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3">
                <label className="font-semibold text-[16px] ">Email</label>
                <input className="xl:w-[330px] border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3">
                <label className="font-semibold text-[16px] ">
                  Phone Number
                </label>
                <input className="xl:w-[330px] border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3 ">
                <label className="font-semibold text-[16px] ">
                  Requirement
                </label>
                <select className="xl:w-[330px] border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="xl:w-[330px] bg-[#FFBA3A] text-black font-semibold text-[16px] rounded-[10px] p-1 text-center xl:mt-8 cursor-pointer hover:bg-[#ffac12] transition-colors duration-300 ">
                Book a Meeting
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContactForm;
