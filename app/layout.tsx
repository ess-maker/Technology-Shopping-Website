import type { Metadata } from 'next'
import { Poppins as PoppinsFont } from 'next/font/google'
import './globals.css'

const Poppins = PoppinsFont({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Emprise',
  description: 'travel website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Poppins.className}>{children}</body>
    </html>
  )
}