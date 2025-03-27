'use client'

import React from 'react'
import Link from 'next/link'

interface SkillGapProps {
  id: number
  title: string
  currentLevel: number
  targetLevel: number
  progress: number
}

const SkillGapCard: React.FC<SkillGapProps> = ({
  id,
  title,
  currentLevel,
  targetLevel,
  progress
}) => {
  // Function to get the appropriate label based on level
  const getLevelLabel = (level: number) => {
    switch (level) {
      case 0:
        return 'Beginner'
      case 1:
        return 'Intermediate'
      case 2:
        return 'Advanced'
      case 3:
        return 'Expert'
      default:
        return 'Unknown'
    }
  }

  // Function to get the color based on the level
  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return 'bg-[#F97316]' // Orange
      case 1:
        return 'bg-[#FACC15]' // Yellow
      case 2:
        return 'bg-[#4ADE80]' // Green
      case 3:
        return 'bg-[#2563EB]' // Blue
      default:
        return 'bg-[#6B7280]' // Gray
    }
  }

  return (
    <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
      <div className='flex justify-between items-start mb-3'>
        <div>
          <h3 className='font-[500] text-lg mb-1'>{title}</h3>
          <div className='flex items-center text-sm text-gray-600 mb-2'>
            <span>Current: {getLevelLabel(currentLevel)}</span>
            <span className='mx-2'>→</span>
            <span>Target: {getLevelLabel(targetLevel)}</span>
          </div>
        </div>
        <span className='text-xl font-[500]'>{progress}%</span>
      </div>

      <div className='h-2 bg-[#E5E7EB] rounded-full mt-3'>
        <div
          className={`h-2 rounded-full ${getLevelColor(targetLevel)}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className='mt-4'>
        <Link
          href={`/skill/${id}`}
          className='text-[#1F78E9] text-sm hover:underline'
        >
          View Details →
        </Link>
      </div>
    </div>
  )
}

export default SkillGapCard
