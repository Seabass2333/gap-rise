'use client'

import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className='w-full max-w-md mx-auto px-4 py-8'>
      <div className='flex flex-col items-center mb-8'>
        <div className='w-16 h-16 bg-[#F0F5FF] rounded-full flex items-center justify-center mb-4'>
          <svg
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z'
              fill='#1F78E9'
            />
          </svg>
        </div>
        <h1 className='text-2xl font-[700] text-center'>Reset Password</h1>
        <p className='text-gray-500 text-center mt-1 max-w-sm'>
          Enter your email address and we'll send you a link to reset your
          password
        </p>
      </div>

      <form>
        <Input
          type='email'
          label='Email'
          placeholder='Enter your email'
          required
        />

        <Button
          fullWidth
          className='mt-6'
        >
          Reset Password
        </Button>

        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            Remembered your password?{' '}
            <Link
              href='/login'
              className='text-[#1F78E9] font-[500] hover:underline'
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
