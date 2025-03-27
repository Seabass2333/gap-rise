'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../common/Button'
import Image from 'next/image'

const Welcome = () => {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/auth/register')
  }

  const handleSignIn = () => {
    router.push('/auth/login')
  }

  return (
    <div className='w-full max-w-md mx-auto px-4 py-8 flex flex-col min-h-[80vh] justify-between'>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='w-full max-w-sm mb-8'>
          <Image
            src='/images/onboarding.jpg'
            alt='Career mentoring'
            width={400}
            height={300}
            className='w-full h-auto rounded-lg'
          />
        </div>

        <div className='text-center mb-8'>
          <h1 className='text-2xl font-[700] mb-2'>Welcome to GapRise</h1>
          <p className='text-gray-600 max-w-xs mx-auto'>
            We help you identify your career gaps and connect you with resources
            to bridge them
          </p>
        </div>
      </div>

      <div className='w-full space-y-3'>
        <Button
          fullWidth
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
        <Button
          variant='outline'
          fullWidth
          onClick={handleSignIn}
        >
          I already have an account
        </Button>
      </div>
    </div>
  )
}

export default Welcome
