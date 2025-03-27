'use client'

import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='w-full max-w-md mx-auto px-4 py-8'>
      <div className='flex flex-col items-center mb-8'>
        <h1 className='text-2xl font-[700] text-center'>Create Account</h1>
        <p className='text-gray-500 text-center mt-1'>
          Please fill in the details to create an account
        </p>
      </div>

      <form>
        <Input
          type='text'
          label='Full Name'
          placeholder='Enter your full name'
          required
        />
        <Input
          type='email'
          label='Email'
          placeholder='Enter your email'
          required
        />
        <Input
          type='password'
          label='Password'
          placeholder='Create a password'
          required
        />
        <Input
          type='password'
          label='Confirm Password'
          placeholder='Confirm your password'
          required
        />

        <div className='flex items-center mb-6 mt-2'>
          <input
            type='checkbox'
            id='terms'
            className='h-4 w-4 text-[#1F78E9] border-gray-300 rounded focus:ring-[#1F78E9]'
          />
          <label
            htmlFor='terms'
            className='ml-2 block text-sm text-gray-700'
          >
            I agree to the{' '}
            <Link
              href='/terms'
              className='text-[#1F78E9] hover:underline'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy-policy'
              className='text-[#1F78E9] hover:underline'
            >
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button fullWidth>Sign Up</Button>

        <div className='mt-8 text-center'>
          <p className='text-gray-600'>
            Already have an account?{' '}
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

export default Register
