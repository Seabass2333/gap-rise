'use client'

import React from 'react'
import BottomNavigation from '../common/BottomNavigation'
import Link from 'next/link'

const Tools = () => {
  const toolCategories = [
    {
      title: 'Skill Assessment',
      description: 'Identify your current skill levels and gaps',
      tools: [
        {
          id: 'skill-test',
          name: 'Skill Gap Analyzer',
          description:
            'Take a comprehensive assessment to identify your skill gaps',
          icon: '📊'
        },
        {
          id: 'industry-benchmark',
          name: 'Industry Benchmark',
          description: 'Compare your skills with industry standards',
          icon: '📈'
        }
      ]
    },
    {
      title: 'Learning Resources',
      description: 'Curated resources to help you upskill',
      tools: [
        {
          id: 'course-finder',
          name: 'Course Finder',
          description: 'Find courses tailored to your skill gaps',
          icon: '🔍'
        },
        {
          id: 'learning-paths',
          name: 'Learning Paths',
          description: 'Structured learning paths for your career goals',
          icon: '🛤️'
        },
        {
          id: 'resource-library',
          name: 'Resource Library',
          description: 'Access free and premium learning resources',
          icon: '📚'
        }
      ]
    },
    {
      title: 'Career Tools',
      description: 'Tools to help with your career development',
      tools: [
        {
          id: 'resume-builder',
          name: 'Resume Builder',
          description: 'Create and optimize your resume',
          icon: '📝'
        },
        {
          id: 'interview-prep',
          name: 'Interview Preparation',
          description: 'Practice interviews and get feedback',
          icon: '🎯'
        },
        {
          id: 'mentor-connect',
          name: 'Mentor Connect',
          description: 'Find mentors in your field',
          icon: '👥'
        }
      ]
    }
  ]

  return (
    <div className='pb-20'>
      <div className='bg-white p-4 border-b border-gray-200'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-[600]'>Tools & Resources</h1>
        </div>
      </div>

      <div className='px-4 py-6'>
        <div className='bg-[#F0F5FF] rounded-lg p-4 mb-6'>
          <h2 className='font-[500] mb-1'>New to GapRise?</h2>
          <p className='text-sm text-gray-600 mb-3'>
            Start with our skill assessment to identify your career gaps and get
            personalized recommendations.
          </p>
          <Link
            href='/tools/skill-assessment'
            className='inline-block bg-[#1F78E9] text-[#FFFFFF] text-sm font-[500] px-4 py-2 rounded-lg'
          >
            Take Assessment
          </Link>
        </div>

        <div className='space-y-6'>
          {toolCategories.map((category, index) => (
            <div key={index}>
              <div className='mb-3'>
                <h2 className='text-lg font-[600]'>{category.title}</h2>
                <p className='text-sm text-gray-600'>{category.description}</p>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                {category.tools.map((tool) => (
                  <Link
                    href={`/tools/${tool.id}`}
                    key={tool.id}
                  >
                    <div className='bg-white rounded-lg shadow p-4 h-full flex flex-col'>
                      <div className='text-2xl mb-2'>{tool.icon}</div>
                      <h3 className='font-[500] mb-1'>{tool.name}</h3>
                      <p className='text-xs text-gray-600 flex-grow'>
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}

export default Tools
