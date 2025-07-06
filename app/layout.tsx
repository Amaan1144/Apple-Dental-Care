import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apple Dental Care',
  description: 'Developed By Solo Developer',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
