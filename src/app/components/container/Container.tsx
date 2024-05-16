import React from 'react';

export type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-lg mx-auto px-12">{children}</div>;
};
