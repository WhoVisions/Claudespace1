import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Modern Landing Page - Next.js 16 & React 19',
  description:
    'A modern, high-performance landing page built with Next.js 16, React 19, and shadcn/ui',
  keywords: ['Next.js', 'React', 'Landing Page', 'shadcn/ui', 'Tailwind CSS'],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Modern Landing Page',
    description: 'A modern, high-performance landing page built with the latest web technologies',
    siteName: 'Modern Landing Page',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Landing Page',
    description: 'A modern, high-performance landing page built with the latest web technologies',
    creator: '@yourhandle',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
