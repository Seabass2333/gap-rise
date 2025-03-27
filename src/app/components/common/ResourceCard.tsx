'use client'

import React from 'react'
import Image from 'next/image'

interface ResourceCardProps {
  title: string
  source: string
  type: 'Video' | 'Article' | 'Course'
  thumbnail: string
  durationOrLength: string
  onClick?: () => void
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  source,
  type,
  thumbnail,
  durationOrLength,
  onClick
}) => {
  // Icon mapping based on resource type
  const typeIcons = {
    Video: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM6.4 11.2V4.8L11.2 8L6.4 11.2Z'
          fill='#E53935'
        />
      </svg>
    ),
    Article: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H14C15.1 16 16 15.1 16 14V2C16 0.9 15.1 0 14 0ZM2 2H7V8H2V2ZM2 14V10H7V14H2ZM14 14H9V8H14V14ZM14 6H9V2H14V6Z'
          fill='#2196F3'
        />
      </svg>
    ),
    Course: (
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 0L0 3V12L8 16L16 12V3L8 0ZM8 14.5L2 11.5V5.5L8 8.5L14 5.5V11.5L8 14.5ZM8 7L2 4L8 1L14 4L8 7Z'
          fill='#4CAF50'
        />
      </svg>
    )
  }

  return (
    <div
      className='flex bg-white rounded-lg shadow overflow-hidden'
      onClick={onClick}
    >
      <div className='relative w-20 h-20 flex-shrink-0'>
        <Image
          src={thumbnail}
          alt={title}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='p-3 flex-grow'>
        <h3 className='text-sm font-[500] line-clamp-2 mb-1'>{title}</h3>
        <p className='text-xs text-gray-500 mb-1'>{source}</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <span className='mr-1'>{typeIcons[type]}</span>
            <span className='text-xs'>{type}</span>
          </div>
          <span className='text-xs text-gray-600'>{durationOrLength}</span>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard
