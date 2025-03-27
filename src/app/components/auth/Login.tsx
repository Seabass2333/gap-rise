'use client'

import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='w-full max-w-md mx-auto px-4 py-8'>
      <div className='flex flex-col items-center mb-8'>
        <div className='w-16 h-16 bg-[#1F78E9] rounded-full flex items-center justify-center mb-4'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z'
              fill='white'
            />
          </svg>
        </div>
        <h1 className='text-2xl font-[700] text-center'>Welcome Back</h1>
        <p className='text-gray-500 text-center mt-1'>
          Please sign in to continue
        </p>
      </div>

      <form>
        <Input
          type='email'
          label='Email'
          placeholder='Enter your email'
          required
        />
        <Input
          type='password'
          label='Password'
          placeholder='Enter your password'
          required
        />

        <div className='flex justify-end mb-6'>
          <Link
            href='/forgot-password'
            className='text-sm text-[#1F78E9] hover:underline'
          >
            Forgot Password?
          </Link>
        </div>

        <Button fullWidth>Sign In</Button>

        <div className='mt-8'>
          <div className='relative flex items-center justify-center'>
            <div className='border-t border-gray-300 w-full absolute'></div>
            <div className='bg-white px-4 z-10 text-sm text-gray-500'>
              Or continue with
            </div>
          </div>

          <div className='grid grid-cols-3 gap-3 mt-4'>
            <button className='flex justify-center items-center border border-gray-300 rounded-md py-2 hover:bg-[#F9FAFB]'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.77 15.68 17.52V20.25H19.27C21.3 18.37 22.56 15.54 22.56 12.25Z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23C14.97 23 17.46 22.02 19.27 20.25L15.68 17.52C14.74 18.13 13.53 18.5 12 18.5C9.11 18.5 6.69 16.56 5.82 13.95H2.11V16.77C3.91 20.43 7.67 23 12 23Z'
                  fill='#34A853'
                />
                <path
                  d='M5.82 13.95C5.6 13.32 5.48 12.64 5.48 11.95C5.48 11.26 5.6 10.58 5.82 9.95V7.13H2.11C1.3 8.88 0.81 10.86 0.81 12.95C0.81 15.04 1.3 17.02 2.11 18.77L5.82 13.95Z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.4C13.57 5.4 14.97 5.94 16.1 7.02L19.26 3.86C17.46 2.18 14.97 1 12 1C7.67 1 3.91 3.57 2.11 7.23L5.82 10.05C6.69 7.44 9.11 5.4 12 5.4Z'
                  fill='#EA4335'
                />
              </svg>
              <span className='ml-2'>Continue with Google</span>
            </button>
            <button className='flex justify-center items-center border border-gray-300 rounded-md py-2 hover:bg-[#F9FAFB]'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z'
                  fill='#1877F2'
                />
              </svg>
              <span className='ml-2'>Continue with GitHub</span>
            </button>
            <button className='flex justify-center items-center border border-gray-300 rounded-md py-2 hover:bg-[#F9FAFB]'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M17.98 22.66C17.15 23.49 16.15 23.31 15.2 22.96C14.18 22.59 13.24 22.57 12.16 22.96C10.8 23.46 10.07 23.25 9.35 22.66C4.81 18.11 5.52 10.75 10.65 10.43C11.87 10.5 12.74 11.11 13.46 11.18C14.56 10.93 15.59 10.3 16.7 10.42C18.13 10.57 19.16 11.16 19.85 12.19C16.8 13.95 17.71 18.04 20.5 19.08C19.96 20.56 19.26 21.96 17.98 22.66ZM13.3 10.37C13.11 8.26 14.78 6.53 16.76 6.36C17.08 8.78 14.54 10.59 13.3 10.37Z'
                  fill='black'
                />
              </svg>
              <span className='ml-2'>Continue with X</span>
            </button>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            Don't have an account?{' '}
            <Link
              href='/register'
              className='text-[#1F78E9] font-[500] hover:underline'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
