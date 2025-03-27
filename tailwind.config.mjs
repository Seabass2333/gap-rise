import { createPlugin } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F78E9',
        secondary: '#F0F5FF',
        success: '#27AE60',
        warning: '#F2C94C',
        danger: '#EB5757'
      }
    }
  },
  plugins: [
    createPlugin(({ addBase }) => {
      addBase({
        html: {
          '--primary-color': '#1F78E9',
          '--secondary-color': '#F0F5FF',
          '--success-color': '#27AE60',
          '--warning-color': '#F2C94C',
          '--danger-color': '#EB5757'
        }
      })
    })
  ]
}
