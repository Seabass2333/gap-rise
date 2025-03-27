'use client'

import React from 'react'
import BottomNavigation from '../common/BottomNavigation'
import Button from '../common/Button'

const Community = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Kim',
        avatar: '/images/avatar1.jpg',
        role: 'Product Designer'
      },
      content:
        'Just completed the "Advanced UI Animation" course and it was fantastic! Has anyone else taken it? Would love to connect with fellow designers to discuss some techniques.',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
      saved: false
    },
    {
      id: 2,
      author: {
        name: 'David Chen',
        avatar: '/images/avatar2.jpg',
        role: 'Frontend Developer'
      },
      content:
        'Looking for recommendations on resources for improving React skills, specifically state management patterns beyond just Redux. Any suggestions?',
      timestamp: '5 hours ago',
      likes: 18,
      comments: 12,
      saved: true
    },
    {
      id: 3,
      author: {
        name: 'Emma Johnson',
        avatar: '/images/avatar3.jpg',
        role: 'UX Researcher'
      },
      content:
        'I just shared a new article on effective user interviewing techniques after a career gap. Check it out on my profile and let me know your thoughts!',
      timestamp: '1 day ago',
      likes: 45,
      comments: 8,
      saved: false
    }
  ]

  return (
    <div className='pb-20'>
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-[600]'>Community</h1>
          <button>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
                fill='#6C7680'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='px-4 py-4'>
        <div className='flex space-x-2 mb-6 overflow-x-auto py-1'>
          <Button
            variant='primary'
            size='small'
          >
            All Posts
          </Button>
          <Button
            variant='outline'
            size='small'
          >
            Career Gaps
          </Button>
          <Button
            variant='outline'
            size='small'
          >
            Learning Paths
          </Button>
          <Button
            variant='outline'
            size='small'
          >
            Job Search
          </Button>
          <Button
            variant='outline'
            size='small'
          >
            Networking
          </Button>
        </div>

        <div className='bg-white rounded-lg shadow p-4 mb-6'>
          <div className='flex items-center space-x-3 mb-3'>
            <div className='w-10 h-10 bg-[#D1D5DB] rounded-full overflow-hidden'></div>
            <div className='flex-1'>
              <input
                type='text'
                placeholder='Share something with the community...'
                className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F78E9]'
              />
            </div>
          </div>

          <div className='flex justify-between'>
            <button className='flex items-center text-gray-600 text-sm'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-1'
              >
                <path
                  d='M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z'
                  fill='currentColor'
                />
              </svg>
              Photo
            </button>

            <button className='flex items-center text-gray-600 text-sm'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-1'
              >
                <path
                  d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15 6.5V13H10.5V15H15V16.5H9V10H13.5V8H9V6.5H15Z'
                  fill='currentColor'
                />
              </svg>
              Poll
            </button>

            <button className='flex items-center text-gray-600 text-sm'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-1'
              >
                <path
                  d='M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 14H8V12H16V14ZM14 18H8V16H14V18ZM13 9V3.5L18.5 9H13Z'
                  fill='currentColor'
                />
              </svg>
              Resource
            </button>

            <Button
              variant='primary'
              size='small'
            >
              Post
            </Button>
          </div>
        </div>

        <div className='space-y-4'>
          {posts.map((post) => (
            <div
              key={post.id}
              className='bg-white rounded-lg shadow p-4'
            >
              <div className='flex items-start mb-3'>
                <div className='w-10 h-10 bg-[#D1D5DB] rounded-full overflow-hidden mr-3'>
                  {/* Avatar would go here */}
                </div>

                <div>
                  <h3 className='font-[500]'>{post.author.name}</h3>
                  <p className='text-sm text-gray-500'>
                    {post.author.role} · {post.timestamp}
                  </p>
                </div>
              </div>

              <p className='mb-4'>{post.content}</p>

              <div className='flex justify-between'>
                <div className='flex space-x-4'>
                  <button className='flex items-center text-gray-600 text-sm'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-1'
                    >
                      <path
                        d='M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z'
                        fill={post.likes > 0 ? '#EB5757' : 'currentColor'}
                      />
                    </svg>
                    {post.likes}
                  </button>

                  <button className='flex items-center text-gray-600 text-sm'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='mr-1'
                    >
                      <path
                        d='M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z'
                        fill='currentColor'
                      />
                    </svg>
                    {post.comments}
                  </button>
                </div>

                <button className='flex items-center text-gray-600 text-sm'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z'
                      fill={post.saved ? '#1F78E9' : 'currentColor'}
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default Community
