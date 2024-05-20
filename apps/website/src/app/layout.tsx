import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from './themeProvider';
import './global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Michał Cesarczyk homepage',
  description: 'Welcome to my portfolio app. Please, take a look around :)',
  metadataBase: new URL('https://cesarczyk.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'pl-PL': '/pl-PL',
    },
  },
  openGraph: {
    images: '/ogimage.webp',
  },
};

const ThemeSwitcher = dynamic(() => import('./NextThemeSwitcher'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="h-full min-h-screen py-12 px-2 md:px-4 max-w-5xl my-0 mx-auto bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <SpeedInsights />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSwitcher />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
