import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://endgloryhotel.com'),
  title: {
    default: 'End Glory Hotel - Luxury Accommodation',
    template: '%s | End Glory Hotel',
  },
  description: 'Experience luxury and comfort at End Glory Hotel. Modern rooms, excellent service, and unforgettable moments.',
  keywords: ['hotel', 'luxury', 'accommodation', 'booking', 'resort', 'vacation'],
  authors: [{ name: 'End Glory Hotel' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US'],
    url: 'https://endgloryhotel.com',
    siteName: 'End Glory Hotel',
    title: 'End Glory Hotel - Luxury Accommodation',
    description: 'Experience luxury and comfort at End Glory Hotel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'End Glory Hotel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'End Glory Hotel',
    description: 'Experience luxury and comfort',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  )
}
