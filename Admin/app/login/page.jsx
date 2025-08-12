'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

import axiosInstance from '../../components/apiconfig/axios';
import { API_URL } from '../../components/apiconfig/api_url';

export default function LoginPage() {
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState('login');
  const [slideDirection, setSlideDirection] = useState('right');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async data => {
    try {
      const res = await axiosInstance.post(API_URL.ADMIN.LOGIN_ADMIN, data);
      localStorage.setItem('token', res.data.token);
      toast.success('Login successful!');
      setTimeout(() => router.push('/'), 250);
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) router.push('/');
  }, []);

  const slideVariants = {
    initial: direction => ({
      opacity: 0,
      x: direction === 'right' ? 100 : -100,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: direction => ({
      opacity: 0,
      x: direction === 'right' ? -100 : 100,
    }),
  };

  const handleModeChange = (newMode, direction) => {
    setSlideDirection(direction);
    setMode(newMode);
    setError('');
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] px-4 sm:px-6">
        <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md relative overflow-hidden h-[400px] sm:h-[420px]">
          <h2 className="text-2xl font-bold text-center mb-4">
            {mode === 'login'
              ? 'Admin Login'
              : mode === 'forgot'
              ? 'Verify Email'
              : 'Reset Password'}
          </h2>

          <AnimatePresence mode="wait" initial={false} custom={slideDirection}>
            <motion.div
              key={mode}
              custom={slideDirection}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="relative h-full flex flex-col justify-center"
            >
              {mode === 'login' && (
                <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border rounded text-sm"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email format',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-1 text-sm font-medium"
                    >
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="w-full p-2 pr-10 border rounded text-sm mb-1"
                        {...register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters',
                          },
                        })}
                      />
                      <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowPassword(prev => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password.message}
                      </p>
                    )}
                    <p
                      className="cursor-pointer text-xs text-blue-500 hover:text-blue-400 text-right"
                      onClick={() => handleModeChange('forgot', 'right')}
                    >
                      Forgot Password?
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300 text-sm"
                  >
                    Login
                  </Button>
                </form>
              )}

              {/* Forgot and Reset remain unchanged */}
              {mode === 'forgot' && (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={e => setForgotEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full p-2 border rounded text-sm"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    onClick={async () => {
                      try {
                        const res = await axiosInstance.post(
                          API_URL.ADMIN.ADMIN_CHECK_EMAIL,
                          { email: forgotEmail }
                        );
                        if (res.data.exists) {
                          handleModeChange('reset', 'right');
                        } else {
                          setError('Email not found');
                        }
                      } catch {
                        setError('Error verifying email');
                      }
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
                  >
                    Verify Email
                  </Button>
                  <p
                    className="text-xs text-gray-500 hover:text-black text-center cursor-pointer"
                    onClick={() => {
                      handleModeChange('login', 'left');
                      setForgotEmail('');
                    }}
                  >
                    ← Back to Login
                  </p>
                </div>
              )}

              {mode === 'reset' && (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-2 pr-10 border rounded text-sm mb-1"
                        required
                      />
                      <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowNewPassword(prev => !prev)}
                      >
                        {showNewPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-2 pr-10 border rounded text-sm mb-1"
                        required
                      />
                      <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setShowConfirmPassword(prev => !prev)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </div>
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    onClick={async () => {
                      if (newPassword !== confirmPassword) {
                        setError('Passwords do not match');
                        return;
                      }
                      try {
                        await axiosInstance.patch(
                          API_URL.ADMIN.ADMIN_UPDATE_PASSWORD,
                          {
                            email: forgotEmail,
                            password: newPassword,
                          }
                        );
                        toast.success('Password updated successfully!');
                        setTimeout(
                          () => handleModeChange('login', 'right'),
                          250
                        );
                        setForgotEmail('');
                        setNewPassword('');
                        setConfirmPassword('');
                      } catch {
                        setError('Something went wrong. Try again.');
                      }
                    }}
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm"
                  >
                    Update Password
                  </Button>
                  <p
                    className="text-xs text-gray-500 hover:text-black text-center cursor-pointer"
                    onClick={() => {
                      handleModeChange('login', 'left');
                      setForgotEmail('');
                      setNewPassword('');
                      setConfirmPassword('');
                    }}
                  >
                    ← Back to Login
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
