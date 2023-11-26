"use client"
import type { Metadata } from 'next'
import Splash from '@/components/SplashScreen';

import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Entropy Colors',
//   description: 'Beautiful gradients and palettes.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className='bg-white dark:bg-gradient-to-br from-black to-zinc-800'>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isLoading ? <Splash finishLoading={() => setIsLoading(false)} /> :    <>
            <Navbar />
            {children}
            <Footer/>
          </> }
      



        </ThemeProvider>


      </body>
    </html>
  )
}


