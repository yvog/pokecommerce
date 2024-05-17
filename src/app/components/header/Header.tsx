import React from 'react';

type HeaderProps = {
  title: React.ReactNode;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl text-center font-bold sm:text-6xl sm:leading-tight bg-gradient-to-r from-primary to-primaryLight text-transparent bg-clip-text">
        {title}
      </h1>
    </header>
  );
};
