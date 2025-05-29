'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth'; // Impor useAuth sebagai default export

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { login } = useAuth(); // Gunakan hook useAuth

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      console.log('Submitting login data:', data); // Log data yang dikirim
      await login(data.email, data.password);
      router.push('/cms-dashboard'); // Arahkan ke halaman dashboard setelah login berhasil
    } catch (error) {
      console.error('Login error:', error); // Log error untuk debugging
      setErrorMessage('Login failed. Please check your Account.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 w-full max-w-sm space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            {...register('password', { required: 'Password is required' })}
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 w-full ${
            isLoading ? 'cursor-not-allowed opacity-75' : ''
          }`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        {/* <div className="mt-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <button
              onClick={() => router.push('/auth/register')}
              className="text-indigo-500 hover:text-indigo-600 underline"
            >
              Register here
            </button>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default LoginPage;