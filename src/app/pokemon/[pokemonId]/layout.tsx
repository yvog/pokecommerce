import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Pokecommerce | Your go-to Pokémon market place',
    description:
        'Your go-to Pokémon market place. Choose your Pokémon & battle within one day!',
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <div>
            {children}
            {modal}
            <div id="modal-root" />
        </div>
    );
}
