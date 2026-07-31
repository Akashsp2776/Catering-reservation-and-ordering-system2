import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CaterEase - Modern Catering & Restaurant Management',
  description: 'Advanced catering reservation and ordering system with AI-powered recommendations, real-time tracking, and seamless payment processing.',
  keywords: [
    'catering',
    'restaurant',
    'food ordering',
    'reservations',
    'event planning',
    'AI recommendations',
    'contactless ordering',
    'food delivery'
  ],
  authors: [{ name: 'CaterEase Team' }],
  creator: 'CaterEase',
  publisher: 'CaterEase',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'CaterEase - Modern Catering & Restaurant Management',
    description: 'Advanced catering reservation and ordering system with AI-powered recommendations',
    url: '/',
    siteName: 'CaterEase',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CaterEase - Modern Catering System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaterEase - Modern Catering & Restaurant Management',
    description: 'Advanced catering reservation and ordering system with AI-powered recommendations',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 font-sans antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
