import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bastian Monnin - Développeur Web',
  description: "Portfolio pour une recherche d'alternance en master (bac+5)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body>
        <div className='fixed inset-0 w-full h-full z-10'>
          <div className='absolute inset-0 backdrop-blur-xl'></div>
          <video
            preload='metadata'
            autoPlay
            loop
            muted
            className='w-full h-full object-cover object-center'
            src='/background2.mp4'
          >
            <source src='/background2.mp4' type='video/mp4' />
          </video>
        </div>

        {children}
      </body>
    </html>
  );
}
