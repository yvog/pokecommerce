import { PAGE_CACHE_REVALIDATE_SECONDS } from '@/consts';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokecommerce | Your go-to Pokémon market place',
  description:
    'Your go-to Pokémon market place. Choose your Pokémon & battle within one day!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
