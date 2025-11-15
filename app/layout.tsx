import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theblerd.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Blerd - Blerdcon Hub',
    template: '%s | The Blerd',
  },
  description: 'Your ultimate hub for Blerdcon 2026: Geek Nik. Stay updated with news, guest announcements, event schedules, gaming tournaments, and Blerd culture.',
  keywords: [
    'blerdcon',
    'blerd',
    'convention',
    'gaming',
    'anime',
    'cosplay',
    'culture',
    'blerdcon 2026',
    'geek nik',
    'black nerds',
    'nerd culture',
    'gaming tournaments',
  ],
  authors: [{ name: 'The Blerd Team' }],
  creator: 'The Blerd',
  publisher: 'The Blerd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'The Blerd - Blerdcon Hub',
    description: 'Your ultimate hub for Blerdcon 2026: Geek Nik. News, guests, events, and culture.',
    siteName: 'The Blerd',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Blerd - Blerdcon Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Blerd - Blerdcon Hub',
    description: 'Your ultimate hub for Blerdcon 2026: Geek Nik',
    images: ['/og-image.png'],
    creator: '@theblerd',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
