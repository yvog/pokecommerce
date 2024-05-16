import React from 'react';
import { BreadcrumbItem, Breadcrumbs } from '../breadcrumbs/Breadcrumbs';
import { Container } from '../container/Container';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

type RootProps = {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  children: React.ReactNode;
};

export const Root = async ({ title, breadcrumbs, children }: RootProps) => {
  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <Header title={title} />
      <Container>
        {breadcrumbs && <Breadcrumbs links={breadcrumbs} />}
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
};
