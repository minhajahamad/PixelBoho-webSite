import React, { forwardRef, useState } from 'react';
import { Select } from 'antd';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

const ContactForm = forwardRef((props, ref) => {
  // State For posting messages
  const [messages, setMessages] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: undefined,
  });

  const handleChange = e => {
    setMessages({ ...messages, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleRequirementChange = value => {
    setMessages({ ...messages, requirement: value });
    console.log(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Sending data:', messages);

    try {
      const res = await axios.post('http://localhost:9000/messages', messages);
      console.log('Response:', res.data);

      // ✅ Show toast instead of alert
      toast.success('Form submitted successfully!', {
        position: 'bottom-right',
        autoClose: 3000, // close after 3 seconds
      });

      setMessages({
        name: '',
        email: '',
        phone: '',
        requirement: undefined,
      });
      // setRequirement(undefined);
    } catch (err) {
      console.error('Error submitting form:', err);

      toast.error('Something went wrong. Please try again.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="overflow-x-hidden bg-[url('/images/Contact-Form-img.png')] bg-no-repeat bg-cover bg-center py-20 flex items-center justify-center md:justify-end  md:pr-20   xl:pr-40  xl:pt-25 "
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
              <form onSubmit={handleSubmit} className="flex flex-col ">
                <div className="flex flex-col gap-1 ">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                    Name
                  </label>
                  <input
                    name="name"
                    value={messages.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                    Email
                  </label>
                  <input
                    value={messages.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    className=" placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={messages.phone}
                    onChange={handleChange}
                    placeholder="Phone No "
                    className=" placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33]  rounded-md p-1 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33]  focus:outline-none  "
                  />
                </div>
                <div className="flex flex-col gap-1 mt-3 ">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px]  ">
                    Requirement
                  </label>
                  <Select
                    value={messages.requirement}
                    onChange={handleRequirementChange}
                    showSearch
                    className="custom-select"
                    dropdownStyle={{
                      backgroundColor: '#101010',
                      color: 'white',
                    }}
                    placeholder="Select a requirement"
                  >
                    <Option value="Web & App">Web & App</Option>
                    <Option value="Mobile Solutions">Mobile Solutions</Option>
                    <Option value="Brand Strategy">Brand Strategy</Option>
                    <Option value="SEO Services">SEO Services</Option>
                    <Option value="Cloud Migration">Cloud Migration</Option>
                    <Option value="Enterprise Cloud'">Enterprise Cloud</Option>
                    <Option value="Tender Systems">Tender Systems</Option>
                    <Option value="ID Verification APIs">
                      ID Verification APIs
                    </Option>
                  </Select>
                </div>
                <button className="px-6 py-2 w-fit mx-auto mt-4 bg-[#FFBA3A]  text-black font-semibold text-[13px] lg:text-[16px] rounded-[5px]  text-center cursor-pointer hover:bg-[#ffac12] transition-colors duration-300 ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
});

export default ContactForm;
