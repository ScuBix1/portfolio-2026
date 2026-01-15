import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bastian Monnin - Développeur Web',
  description: "Portfolio pour une recherche d'alternance en master (bac+5)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body>{children}</body>
    </html>
  );
}
