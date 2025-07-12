import React, { forwardRef } from 'react';

const ContactForm = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('/images/Contact-Form-img.png')] bg-no-repeat bg-cover bg-center h-[700px] relative "
    >
      <div className="text-white absolute top-[110px] left-[130px] md:left-[430px] lg:left-[650px]  xl:left-[800px] xl:top-[100px] 2xl:left-[1500px] flex flex-col gap-2 w-[250px] md:w-[300px] lg:w-[350px] 2xl:w-[400px] ">
        <div>
          <p className="font-medium text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px]">
            Say Hi!
          </p>
          <p className=" text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] font-light xl:w-[380px] 2xl:w-[450px] ">
            Book an appointment with us to get started on your{' '}
            <br className="md:hidden" />
            <span className="text-[#9747FF] text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] xl:ml-2 font-medium ">
              Journey of Success
            </span>
          </p>
        </div>

        <div className="p-[.7px] w-[230px] md:w-[300px] lg:w-[350px] 2xl:w-[450px] h-[330px] lg:h-[350px] xl:w-[380px] xl:h-[370px] rounded-[10px]  bg-[linear-gradient(to_bottom_right,#808080,#1A1A1A)] animated-gradient-border-2   ">
          <div className="p-4 xl:p-5  w-full h-full  bg-[#101010] rounded-[10px]  ">
            <form className="flex flex-col gap-4 xl:gap-1">
              <div className="flex flex-col gap-1 ">
                <label className="font-semibold text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] ">
                  Name
                </label>
                <input className=" border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3">
                <label className="font-semibold text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] ">
                  Email
                </label>
                <input className=" border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3">
                <label className="font-semibold text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] ">
                  Phone Number
                </label>
                <input className=" border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none " />
              </div>
              <div className="flex flex-col gap-1 xl:mt-3 ">
                <label className="font-semibold text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px] ">
                  Requirement
                </label>
                <select className=" border border-[#5B5B5B]  rounded-[6px] bg-[#353535] focus:border-[#E2E2E2] focus:outline-none  " />
              </div>
              <div className="w-[200px] xl:w-[330px] 2xl:w-[400px] bg-[#FFBA3A] mx-auto text-black font-semibold text-[16px] rounded-[10px] p-1 text-center mt-3 xl:mt-8 cursor-pointer hover:bg-[#ffac12] transition-colors duration-300 ">
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
