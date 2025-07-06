import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apple Dental Care - Expert Dental Solutions | Dr. M.S. Ansari",
  description:
    "Complete dental care solutions in Nawabganj (West). Expert treatment by Dr. M.S. Ansari with modern equipment. Book your appointment today!",
  keywords: "dental care, dentist, Nawabganj, teeth cleaning, root canal, dental clinic, Dr M.S. Ansari",
  authors: [{ name: "Apple Dental Care" }],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🦷</text></svg>",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🦷</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Apple Dental Care - Expert Dental Solutions",
    description: "Complete dental care solutions with modern equipment and experienced professionals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Apple Dental Care - Expert Dental Solutions",
    description: "Complete dental care solutions with modern equipment and experienced professionals.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' fontSize='90'>🦷</text></svg>"
          type="image/svg+xml"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
