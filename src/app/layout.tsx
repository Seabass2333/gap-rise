import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GapRise - Identify & Bridge Your Skill Gaps',
  description:
    'Identify your skill gaps, track your progress, and connect with others on similar learning journeys.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='min-h-screen bg-[#F9FAFB]'>{children}</main>
      </body>
    </html>
  )
}
