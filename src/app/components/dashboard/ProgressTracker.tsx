'use client'

import React from 'react'
import BottomNavigation from '../common/BottomNavigation'

const ProgressTracker = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  // Sample data - would be fetched from API in real application
  const activityData = [
    // Mapping of dates to activity levels
    { date: '2023-05-01', activity: 3 },
    { date: '2023-05-02', activity: 2 },
    { date: '2023-05-03', activity: 4 },
    { date: '2023-05-04', activity: 1 },
    { date: '2023-05-05', activity: 0 },
    { date: '2023-05-06', activity: 2 },
    { date: '2023-05-07', activity: 3 },
    { date: '2023-05-08', activity: 4 },
    { date: '2023-05-09', activity: 2 },
    { date: '2023-05-10', activity: 1 },
    { date: '2023-05-11', activity: 0 },
    { date: '2023-05-12', activity: 3 },
    { date: '2023-05-13', activity: 4 },
    { date: '2023-05-14', activity: 2 }
  ]

  const progressStats = {
    skillsImproved: 3,
    completion: 68,
    learningHours: 24
  }

  const achievements = [
    { id: 1, title: 'First Skill Mastered', completed: true },
    { id: 2, title: '10 Hours of Learning', completed: true },
    { id: 3, title: 'Complete a Learning Path', completed: false },
    { id: 4, title: 'Share Progress with Community', completed: false }
  ]

  // Function to get the color class based on activity level
  const getActivityColor = (level: number) => {
    const activityColors = [
      { level: 0, color: 'bg-[#E5E7EB]' },
      { level: 1, color: 'bg-[#93C5FD]' },
      { level: 2, color: 'bg-[#60A5FA]' },
      { level: 3, color: 'bg-[#3B82F6]' },
      { level: 4, color: 'bg-[#2563EB]' }
    ]

    const colorMapping = activityColors.find((item) => item.level === level)
    return colorMapping ? colorMapping.color : 'bg-[#E5E7EB]'
  }

  return (
    <div className='pb-20'>
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-[600]'>Progress</h1>
        </div>
      </div>

      <div className='px-4 py-6'>
        <div className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-[600]'>Activity Graph</h2>
            <select className='text-sm border border-gray-300 rounded-md px-2 py-1'>
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>

          <div className='bg-white rounded-lg shadow p-4'>
            <div className='grid grid-cols-7 gap-1 mb-2'>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div
                  key={index}
                  className='text-xs text-gray-400 text-center'
                >
                  {day}
                </div>
              ))}
            </div>

            <div className='grid grid-cols-7 gap-1'>
              {activityData.map((day, index) => (
                <div
                  key={index}
                  className={`h-8 ${getActivityColor(
                    day.activity
                  )} rounded hover:opacity-80 cursor-pointer`}
                  title={`${day.date}: ${day.activity} activities`}
                ></div>
              ))}
            </div>

            <div className='mt-4 flex items-center justify-end'>
              <div className='text-xs text-gray-500 mr-2'>Less</div>
              <div className='flex space-x-1'>
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded ${getActivityColor(level)}`}
                  ></div>
                ))}
              </div>
              <div className='text-xs text-gray-500 ml-2'>More</div>
            </div>
          </div>
        </div>

        <div className='mb-8'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-[600]'>Overall Progress</h2>
          </div>

          <div className='bg-white rounded-lg shadow p-4'>
            <div className='grid grid-cols-3 gap-4 mb-4'>
              <div className='text-center'>
                <p className='text-gray-500 text-sm mb-1'>Skills Improved</p>
                <p className='text-xl font-[600]'>
                  {progressStats.skillsImproved}
                </p>
              </div>
              <div className='text-center'>
                <p className='text-gray-500 text-sm mb-1'>Completion</p>
                <p className='text-xl font-[600]'>
                  {progressStats.completion}%
                </p>
              </div>
              <div className='text-center'>
                <p className='text-gray-500 text-sm mb-1'>Learning Hours</p>
                <p className='text-xl font-[600]'>
                  {progressStats.learningHours}
                </p>
              </div>
            </div>

            <div>
              <div className='flex justify-between items-center mb-1'>
                <span className='text-sm text-gray-500'>Total Progress</span>
                <span className='text-sm font-[500]'>
                  {progressStats.completion}%
                </span>
              </div>
              <div className='h-2 bg-[#E5E7EB] rounded-full mt-3'>
                <div
                  className='h-2 bg-[#3B82F6] rounded-full'
                  style={{ width: `${progressStats.completion}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-lg font-[600]'>Achievements</h2>
            <button className='text-[#1F78E9] text-sm'>View All</button>
          </div>

          <div className='space-y-3'>
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className='bg-white rounded-lg shadow p-4 flex items-center'
              >
                <div
                  className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                    achievement.completed
                      ? 'bg-[#4ADE80] text-white'
                      : 'bg-[#E5E7EB] text-gray-400'
                  }`}
                >
                  {achievement.completed ? (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z'
                        fill='currentColor'
                      />
                    </svg>
                  ) : (
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 6V18M6 12H18'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`${
                    achievement.completed ? 'text-gray-800' : 'text-gray-400'
                  }`}
                >
                  {achievement.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default ProgressTracker
