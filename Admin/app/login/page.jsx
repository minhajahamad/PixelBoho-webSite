'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: Email verify, 2: Reset password

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
            <p
              className="cursor-pointer text-xs sm:text-sm text-blue-500 hover:text-blue-300 transition-all duration-300 text-right"
              onClick={() => setShowForgot(true)}
            >
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
        {showForgot && (
          <div className="mt-6 border-t pt-4">
            {step === 1 && (
              <>
                <label className="block mb-1 text-sm font-medium">
                  Verify Email
                </label>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={e => setForgotEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded text-sm sm:text-base mb-2"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        'http://localhost:9000/admin/check-email',
                        {
                          email: forgotEmail,
                        }
                      );

                      if (res.data.exists) {
                        setStep(2);
                        setError('');
                      } else {
                        setError('Email not found');
                      }
                    } catch (err) {
                      setError('Error verifying email');
                    }
                  }}
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
                >
                  Verify Email
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <label className="block mt-4 mb-1 text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="w-full p-2 border rounded text-sm sm:text-base"
                />

                <label className="block mt-4 mb-1 text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border rounded text-sm sm:text-base mb-2"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  onClick={async () => {
                    if (newPassword !== confirmPassword) {
                      setError('Passwords do not match');
                      return;
                    }

                    try {
                      // Replace this with your real API call
                      await axios.patch(
                        'http://localhost:9000/admin/update-password',
                        {
                          email: forgotEmail,
                          password: newPassword,
                        }
                      );
                      alert('Password updated successfully');
                      setShowForgot(false);
                      setStep(1);
                      setNewPassword('');
                      setConfirmPassword('');
                      setForgotEmail('');
                      setError('');
                    } catch (err) {
                      setError('Something went wrong. Try again.');
                    }
                  }}
                  type="button"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm sm:text-base"
                >
                  Update Password
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
