'use client'

import React from 'react'
import BottomNavigation from '../common/BottomNavigation'
import Button from '../common/Button'

const Profile = () => {
  const profileData = {
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    occupation: 'UX Designer',
    company: 'Design Co.',
    bio: 'Passionate about creating beautiful and functional digital experiences. Looking to improve my skills in frontend development.',
    skills: [
      'UX Design',
      'User Research',
      'Wireframing',
      'Prototyping',
      'HTML/CSS'
    ],
    interests: ['UI Animation', 'React Development', 'Data Visualization']
  }

  return (
    <div className='pb-20'>
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-[600]'>My Profile</h1>
          <button>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z'
                fill='#6C7680'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='px-4 py-6'>
        <div className='flex flex-col items-center mb-6'>
          <div className='w-24 h-24 bg-[#D1D5DB] rounded-full overflow-hidden mb-4'>
            {/* Avatar image would go here */}
          </div>
          <h2 className='text-xl font-[600]'>{profileData.name}</h2>
          <p className='text-gray-600'>
            {profileData.occupation} at {profileData.company}
          </p>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-[500] mb-2'>About Me</h3>
          <p className='text-gray-700'>{profileData.bio}</p>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-[500] mb-2'>Contact Information</h3>
          <div className='bg-white rounded-lg shadow p-4'>
            <div className='mb-3'>
              <p className='text-sm text-gray-500'>Email</p>
              <p>{profileData.email}</p>
            </div>
            <div>
              <p className='text-sm text-gray-500'>Company</p>
              <p>{profileData.company}</p>
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-[500] mb-2'>Skills</h3>
          <div className='bg-white rounded-lg shadow p-4'>
            <div className='flex flex-wrap gap-2'>
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className='bg-[#F0F5FF] text-[#1F78E9] px-3 py-1 rounded-full text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <h3 className='text-lg font-[500] mb-2'>Interests</h3>
          <div className='bg-white rounded-lg shadow p-4'>
            <div className='flex flex-wrap gap-2'>
              {profileData.interests.map((interest, index) => (
                <span
                  key={index}
                  className='bg-[#F3F4F6] text-gray-700 px-3 py-1 rounded-full text-sm'
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Button
          variant='outline'
          fullWidth
        >
          Edit Profile
        </Button>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default Profile
