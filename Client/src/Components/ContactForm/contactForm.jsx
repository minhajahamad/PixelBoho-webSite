import React, { forwardRef, useState } from 'react';
import { Select } from 'antd';
import { API_URL } from '../apiconfig/api_url';
import axiosInstance from '../apiconfig/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

const ContactForm = forwardRef((props, ref) => {
  const [messages, setMessages] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: undefined,
  });

  const [errors, setErrors] = useState({}); // store field errors
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setMessages({ ...messages, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error as user types
  };

  const handleRequirementChange = value => {
    setMessages({ ...messages, requirement: value });
    setErrors({ ...errors, requirement: '' });
  };

  // Simple validation
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!messages.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!messages.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(messages.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!messages.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(messages.phone)) {
      tempErrors.phone = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!messages.requirement) {
      tempErrors.requirement = 'Please select a requirement';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) return; // stop if validation fails
    setLoading(true);

    try {
      const res = await axiosInstance.post(
        API_URL.MESSAGES.POST_MESSAGE,
        messages
      );

      toast.success('Form submitted successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
      });

      setMessages({
        name: '',
        email: '',
        phone: '',
        requirement: undefined,
      });
      setErrors({});
    } catch (err) {
      console.error('Error submitting form:', err);
      toast.error('Something went wrong. Please try again.', {
        position: 'bottom-right',
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        ref={ref}
        className="overflow-x-hidden bg-[url('/images/Contact-Form-img.png')] bg-no-repeat bg-cover bg-center py-20 flex items-center justify-center md:justify-end md:pr-20 xl:pr-40 xl:pt-25"
      >
        <div className="text-white flex flex-col gap-2 w-[300px] md:w-[350px] lg:w-[400px]">
          <div>
            <p className="font-medium text-center lg:text-left text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
              Say Hi!
            </p>
            <p className="text-[12px] text-center lg:text-left lg:text-[14px] xl:text-[16px] font-light xl:w-[380px] font-poppins">
              Book an appointment with us to get started on your{' '}
              <br className="md:hidden" />
              <span className="text-[#9747FF] text-[16px] lg:text-[18px] xl:text-[20px] xl:ml-2 font-medium">
                Journey of Success
              </span>
            </p>
          </div>

          <div className="p-[.7px] w-[300px] md:w-[350px] lg:w-[400px] h-auto min-h-[450px] lg:min-h-[480px] xl:w-[380px] xl:min-h-[480px] rounded-[10px] bg-[linear-gradient(to_bottom_right,#808080,#1A1A1A)] animated-gradient-border-2">
            <div className="p-4 xl:p-5 w-full h-full bg-[#101010] rounded-[10px]">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px] mb-1">
                    Name
                  </label>
                  <input
                    name="name"
                    value={messages.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className={`placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33] rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33] focus:outline-none transition-all duration-200`}
                  />
                  <div className="h-4 mt-1">
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px] mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    value={messages.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33] rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33] focus:outline-none transition-all duration-200`}
                  />
                  <div className="h-4 mt-1">
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px] mb-1">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={messages.phone}
                    onChange={handleChange}
                    placeholder="Enter your  phone No"
                    className={`placeholder:text-[#888] placeholder:text-[14px] border border-[#dedede33]
                     rounded-md p-2 bg-transparent focus:ring-2 focus:ring-[#4d4c4c33] focus:outline-none transition-all duration-200`}
                  />
                  <div className="h-4 mt-1">
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Requirement */}
                <div className="flex flex-col">
                  <label className="font-medium text-[12px] lg:text-[14px] xl:text-[15px] mb-1">
                    Requirement
                  </label>
                  <Select
                    value={messages.requirement}
                    onChange={handleRequirementChange}
                    showSearch
                    className={`custom-select ${
                      errors.requirement ? 'error-select' : ''
                    }`}
                    dropdownStyle={{
                      backgroundColor: '#101010',
                      color: 'white',
                    }}
                    placeholder="Select a requirement"
                    style={{ height: '40px' }}
                  >
                    <Option value="Web & App">Web & App</Option>
                    <Option value="Mobile Solutions">Mobile Solutions</Option>
                    <Option value="Brand Strategy">Brand Strategy</Option>
                    <Option value="SEO Services">SEO Services</Option>
                    <Option value="Cloud Migration">Cloud Migration</Option>
                    <Option value="Enterprise Cloud">Enterprise Cloud</Option>
                    <Option value="Tender Systems">Tender Systems</Option>
                    <Option value="ID Verification APIs">
                      ID Verification APIs
                    </Option>
                  </Select>
                  <div className="h-4 mt-1">
                    {errors.requirement && (
                      <span className="text-red-500 text-xs">
                        {errors.requirement}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#FFBA3A] text-black font-semibold text-[13px] lg:text-[16px] rounded-[5px] cursor-pointer hover:bg-[#ffac12] transition-colors duration-300 flex items-center justify-center"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin"></div> // ✅ Loader spinner
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
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

      {/* <style jsx>{`
        .custom-select .ant-select-selector {
          background-color: transparent !important;
          border: 1px solid #dedede33 !important;
          color: white !important;
          height: 40px !important;
        }
        
        .custom-select.error-select .ant-select-selector {
          border-color: #ef4444 !important;
        }
        
        .custom-select .ant-select-selection-placeholder {
          color: #888 !important;
          font-size: 14px !important;
        }
        
        .custom-select .ant-select-selection-item {
          color: white !important;
        }
        
        .custom-select:hover .ant-select-selector {
          border-color: #4d4c4c33 !important;
        }
        
        .custom-select.ant-select-focused .ant-select-selector {
          border-color: #4d4c4c33 !important;
          box-shadow: 0 0 0 2px rgba(77, 76, 76, 0.2) !important;
        }
        
        .custom-select.error-select:hover .ant-select-selector,
        .custom-select.error-select.ant-select-focused .ant-select-selector {
          border-color: #ef4444 !important;
        }
      `}</style> */}
    </>
  );
});

export default ContactForm;
