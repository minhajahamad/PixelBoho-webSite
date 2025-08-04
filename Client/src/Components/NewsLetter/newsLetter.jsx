import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsLetter = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = () => {
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 3000);
  };

  return (
    <div className=" bg-black px-10 py-5 overflow-x-hidden lg:px-20 lg:py-10 xl:px-25 xl:py-20  flex flex-col gap-5 ">
      <p className="text-[#A35DFF] font-marketing-1 text-[30px] lg:text-[40px] xl:text-[50px]  ">
        Subscribe to Our Newsletter
      </p>
      <p className="desc-text ">
        Join the PixelBoho Circle — where creativity meets strategy.
        <br className="hidden lg:block" />
        Get exclusive insights, design trends, and digital inspiration delivered
        straight to your inbox.
      </p>
      <div className="flex gap-4 items-center ">
        <input
          type="email"
          placeholder="name@email.com"
          className="w-[200px] md:w-[450px] lg:w-[650px] xl:w-[550px]  bg-white rounded-[2px] mt-6 p-2 "
        />
        <button
          onClick={handleSubmit}
          className="text-black bg-[#FFBA3A] font-semibold text-[13px] lg:text-[16px] p-[8px] rounded-[2px] mt-6  cursor-pointer hover:bg-[#ffac12] transition-colors duration-300  "
        >
          <p>Subscribe</p>
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed h-[100vh] inset-0 z-50 backdrop-blur-md bg-black/20 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="text-[50px] sm:text-[80px] lg:text-[100px] text-slate-100 text-center  "
            >
              <h1>Coming Soon....</h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsLetter;
