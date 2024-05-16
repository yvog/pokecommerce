'use client';

import {
  Breadcrumb,
  Breadcrumbs as RACBreadcrumbs,
  Link as RACLink,
} from '@/app/lib/RACClient';
import Link from 'next/link';

export type BreadcrumbItem = {
  text: string;
  href?: string;
  current?: boolean;
};

export type BreadcrumbsProps = {
  links: BreadcrumbItem[];
};

export const Breadcrumbs = ({ links }: BreadcrumbsProps): JSX.Element => {
  return (
    <RACBreadcrumbs className="flex mb-8 gap-2 items-center">
      {links?.map(({ current, text, href }) => (
        <Breadcrumb
          key={`breadcrumb-${text}`}
          className="[&:not(:last-child)::after]:content-['›'] after:pl-2"
        >
          {current || !href ? (
            <RACLink className="data-[current=true]:font-bold">{text}</RACLink>
          ) : (
            <Link href="/" className="hover:underline">
              {text}
            </Link>
          )}
        </Breadcrumb>
      ))}
    </RACBreadcrumbs>
  );
};
