import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
   title: {
     template: '%s | Acme',
     default: 'Acme',
   },
   description: 'Next.js Dashboard for educational purposes.',
   metadataBase: new URL('https://next-dashboard-learning.vercel.app/'),
 };