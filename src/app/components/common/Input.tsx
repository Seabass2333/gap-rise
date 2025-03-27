'use client'

import React from 'react'

type InputProps = {
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  label?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  error?: string
  id?: string
  name?: string
}

const Input = ({
  type = 'text',
  placeholder = '',
  label,
  value,
  onChange,
  required = false,
  error,
  id,
  name
}: InputProps) => {
  return (
    <div className='mb-4'>
      {label && (
        <label
          htmlFor={id}
          className='block text-sm font-[500] text-gray-700 mb-1'
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F78E9] focus:border-transparent text-gray-800`}
      />
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </div>
  )
}

export default Input
