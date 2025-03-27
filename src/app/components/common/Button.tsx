'use client'

import React from 'react'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
  fullWidth?: boolean
  disabled?: boolean
  className?: string
}

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  fullWidth = false,
  disabled = false,
  className = ''
}: ButtonProps) => {
  const baseStyles =
    'rounded-lg font-[500] transition-colors flex items-center justify-center'

  const variantStyles = {
    primary: 'bg-[#1F78E9] text-[#FFFFFF] hover:bg-[#1a6acf]',
    secondary: 'bg-[#F0F5FF] text-[#1F78E9] hover:bg-[#e0ecff]',
    outline: 'border border-[#1F78E9] text-[#1F78E9] hover:bg-[#F0F5FF]'
  }

  const sizeStyles = {
    small: 'text-sm py-1 px-3',
    medium: 'py-2 px-4',
    large: 'text-lg py-3 px-5'
  }

  const widthStyle = fullWidth ? 'w-full' : ''
  const disabledStyle = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer'

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
