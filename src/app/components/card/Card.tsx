import React from 'react';

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps): JSX.Element => {
  return (
    <div className="relative bg-slate-100 border-2 p-8 rounded-xl h-full">
      {children}
    </div>
  );
};
