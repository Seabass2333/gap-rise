'use client'

import React from 'react'
import SkillGapCard from './SkillGapCard'
import BottomNavigation from '../common/BottomNavigation'

const Dashboard = () => {
  const userName = 'Mike'
  const skillGaps = [
    {
      skillName: 'React Development',
      currentLevel: 'intermediate' as const,
      targetLevel: 'advanced' as const,
      progress: 65
    },
    {
      skillName: 'Data Analysis',
      currentLevel: 'beginner' as const,
      targetLevel: 'intermediate' as const,
      progress: 30
    },
    {
      skillName: 'UX Design',
      currentLevel: 'intermediate' as const,
      targetLevel: 'expert' as const,
      progress: 45
    }
  ]

  const recommendedResources = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      type: 'Course',
      source: 'Frontend Masters',
      duration: '6 hours',
      completed: false
    },
    {
      id: 2,
      title: 'Introduction to Data Analysis with Python',
      type: 'Workshop',
      source: 'Coursera',
      duration: '4 weeks',
      completed: false
    },
    {
      id: 3,
      title: 'UX Design Principles',
      type: 'Book',
      source: "O'Reilly",
      duration: '376 pages',
      completed: true
    }
  ]

  return (
    <div className='pb-20'>
      {/* Header */}
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-xl font-[600]'>Hello, {userName}</h1>
            <p className='text-gray-600 text-sm'>What will you learn today?</p>
          </div>
          <div className='w-10 h-10 bg-[#D1D5DB] rounded-full overflow-hidden'>
            {/* User avatar would go here */}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='px-4 py-6'>
        <div className='mb-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-[600]'>Your Skill Gaps</h2>
            <button className='text-[#1F78E9] text-sm'>View All</button>
          </div>

          <div className='space-y-4'>
            {skillGaps.map((skill, index) => (
              <SkillGapCard
                key={index}
                skillName={skill.skillName}
                currentLevel={skill.currentLevel}
                targetLevel={skill.targetLevel}
                progress={skill.progress}
              />
            ))}
          </div>
        </div>

        <div>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-[600]'>Recommended Resources</h2>
            <button className='text-[#1F78E9] text-sm'>View All</button>
          </div>

          <div className='space-y-3'>
            {recommendedResources.map((resource) => (
              <div
                key={resource.id}
                className='bg-white rounded-lg shadow p-4 flex items-center'
              >
                <div className='bg-[#F0F5FF] p-3 rounded-lg mr-3'>
                  {resource.type === 'Course' && (
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 6H3C2.45 6 2 6.45 2 7V17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17V7C22 6.45 21.55 6 21 6ZM11 11H8V9H11V11ZM11 14H8V12H11V14ZM16 14H13V12H16V14ZM16 11H13V9H16V11Z'
                        fill='#1F78E9'
                      />
                    </svg>
                  )}
                  {resource.type === 'Workshop' && (
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z'
                        fill='#1F78E9'
                      />
                    </svg>
                  )}
                  {resource.type === 'Book' && (
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z'
                        fill='#1F78E9'
                      />
                    </svg>
                  )}
                </div>

                <div className='flex-1'>
                  <h3 className='font-[500]'>{resource.title}</h3>
                  <div className='flex justify-between'>
                    <p className='text-sm text-gray-500'>{resource.source}</p>
                    <p className='text-sm text-gray-500'>{resource.duration}</p>
                  </div>
                </div>

                {resource.completed ? (
                  <div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-2'>
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                ) : (
                  <div className='w-6 h-6 rounded-full border-2 border-gray-300 ml-2'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default Dashboard
