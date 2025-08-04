'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:9000/admin/login',
        formData
      );
      localStorage.setItem('token', res.data.token);
      router.push('/');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/');
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9FAFB] px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded text-sm sm:text-base"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password *
            </label>
            <input
              value={formData.password}
              onChange={handleChange}
              id="password"
              //   type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded text-sm sm:text-base mb-1"
              required
            />
            <p className="cursor-pointer text-xs sm:text-sm text-blue-500 hover:text-blue-300 transition-all duration-300 text-right">
              Forgot Password?
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 cursor-pointer transition-all duration-300 text-sm sm:text-base"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
