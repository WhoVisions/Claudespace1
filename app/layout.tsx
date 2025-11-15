import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Blerd - Blerdcon Hub',
  description: 'Official hub for all Blerdcon news, guest announcements, event schedules, and Blerd culture',
  keywords: ['blerdcon', 'blerd', 'convention', 'gaming', 'anime', 'cosplay', 'culture'],
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
