'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BottomNavigation = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4'>
      <div className='flex justify-around items-center'>
        <Link
          href='/dashboard'
          className={`flex flex-col items-center p-2 ${
            isActive('/dashboard') ? 'text-[#1F78E9]' : 'text-gray-500'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z'
              fill={isActive('/dashboard') ? '#1F78E9' : 'currentColor'}
            />
          </svg>
          <span className='text-xs mt-1'>Home</span>
        </Link>

        <Link
          href='/progress'
          className={`flex flex-col items-center p-2 ${
            isActive('/progress') ? 'text-[#1F78E9]' : 'text-gray-500'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z'
              fill={isActive('/progress') ? '#1F78E9' : 'currentColor'}
            />
          </svg>
          <span className='text-xs mt-1'>Progress</span>
        </Link>

        <Link
          href='/community'
          className={`flex flex-col items-center p-2 ${
            isActive('/community') ? 'text-[#1F78E9]' : 'text-gray-500'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z'
              fill={isActive('/community') ? '#1F78E9' : 'currentColor'}
            />
          </svg>
          <span className='text-xs mt-1'>Community</span>
        </Link>

        <Link
          href='/tools'
          className={`flex flex-col items-center p-2 ${
            isActive('/tools') ? 'text-[#1F78E9]' : 'text-gray-500'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.55C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.4 2.81C14.36 2.57 14.16 2.4 13.92 2.4H10.08C9.84 2.4 9.65 2.57 9.61 2.81L9.25 5.35C8.66 5.59 8.12 5.92 7.63 6.29L5.24 5.33C5.02 5.25 4.77 5.33 4.65 5.55L2.74 8.87C2.62 9.08 2.66 9.34 2.86 9.48L4.89 11.06C4.84 11.36 4.8 11.69 4.8 12C4.8 12.31 4.82 12.64 4.87 12.94L2.84 14.52C2.66 14.66 2.61 14.93 2.72 15.13L4.64 18.45C4.76 18.67 5.01 18.74 5.23 18.67L7.62 17.71C8.12 18.09 8.65 18.41 9.24 18.65L9.6 21.19C9.65 21.43 9.84 21.6 10.08 21.6H13.92C14.16 21.6 14.36 21.43 14.39 21.19L14.75 18.65C15.34 18.41 15.88 18.09 16.37 17.71L18.76 18.67C18.98 18.75 19.23 18.67 19.35 18.45L21.27 15.13C21.39 14.91 21.34 14.66 21.15 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.4 13.98 8.4 12C8.4 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z'
              fill={isActive('/tools') ? '#1F78E9' : 'currentColor'}
            />
          </svg>
          <span className='text-xs mt-1'>Tools</span>
        </Link>

        <Link
          href='/profile'
          className={`flex flex-col items-center p-2 ${
            isActive('/profile') ? 'text-[#1F78E9]' : 'text-gray-500'
          }`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z'
              fill={isActive('/profile') ? '#1F78E9' : 'currentColor'}
            />
          </svg>
          <span className='text-xs mt-1'>Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomNavigation
