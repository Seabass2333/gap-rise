'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import BottomNavigation from '../common/BottomNavigation'

const LearnProgress = () => {
  const router = useRouter()

  // Sample data - would come from API in real application
  const courseProgress = {
    title: 'Advanced React Development',
    progress: 65,
    sections: [
      {
        id: 1,
        title: 'Course Introduction',
        completed: true,
        totalItems: 3,
        completedItems: 3
      },
      {
        id: 2,
        title: 'React Fundamentals Review',
        completed: true,
        totalItems: 5,
        completedItems: 5
      },
      {
        id: 3,
        title: 'State Management with Redux',
        completed: false,
        totalItems: 8,
        completedItems: 6
      },
      {
        id: 4,
        title: 'Advanced Hooks',
        completed: false,
        totalItems: 6,
        completedItems: 0
      },
      {
        id: 5,
        title: 'Performance Optimization',
        completed: false,
        totalItems: 4,
        completedItems: 0
      },
      {
        id: 6,
        title: 'Testing React Applications',
        completed: false,
        totalItems: 7,
        completedItems: 0
      }
    ],
    quizzesTaken: 2,
    totalQuizzes: 4
  }

  return (
    <div className='pb-20'>
      {/* Header */}
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center'>
          <button
            onClick={() => router.back()}
            className='mr-2'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z'
                fill='#6C7680'
              />
            </svg>
          </button>
          <h1 className='text-xl font-[600]'>Course Progress</h1>
        </div>
      </div>

      {/* Course Title and Progress */}
      <div className='p-4'>
        <h2 className='text-lg font-[600] mb-2'>{courseProgress.title}</h2>

        <div className='mb-6'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-sm text-gray-600'>Progress</span>
            <span className='text-sm font-[500]'>
              {courseProgress.progress}%
            </span>
          </div>
          <div className='w-full bg-[#E5E7EB] rounded-full h-2'>
            <div
              className='bg-blue-600 h-2 rounded-full'
              style={{ width: `${courseProgress.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Section List */}
        <div className='mb-6'>
          <h3 className='text-md font-[500] mb-3'>Course Sections</h3>

          <div className='space-y-3'>
            {courseProgress.sections.map((section) => (
              <div
                key={section.id}
                className='bg-white p-4 rounded-lg shadow'
              >
                <div className='flex justify-between items-center mb-2'>
                  <h4 className='font-[500]'>{section.title}</h4>
                  {section.completed ? (
                    <span className='text-green-600 text-sm font-[500]'>
                      Completed
                    </span>
                  ) : (
                    <span className='text-gray-500 text-sm'>
                      {section.completedItems}/{section.totalItems} completed
                    </span>
                  )}
                </div>

                <div className='w-full bg-[#E5E7EB] rounded-full h-1'>
                  <div
                    className={`h-1 rounded-full ${
                      section.completed ? 'bg-green-600' : 'bg-blue-600'
                    }`}
                    style={{
                      width: `${
                        (section.completedItems / section.totalItems) * 100
                      }%`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quizzes */}
        <div className='mb-6'>
          <h3 className='text-md font-[500] mb-3'>Assessments</h3>
          <div className='bg-white p-4 rounded-lg shadow'>
            <div className='flex justify-between items-center'>
              <span>Quizzes Completed</span>
              <span className='font-[500]'>
                {courseProgress.quizzesTaken}/{courseProgress.totalQuizzes}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className='space-y-3'>
          <button className='w-full bg-blue-600 text-white rounded-lg py-3 font-[500]'>
            Continue Learning
          </button>
          <button className='w-full bg-white border border-gray-300 text-gray-700 rounded-lg py-3 font-[500]'>
            View Course Details
          </button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default LearnProgress
