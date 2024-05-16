import React from 'react';

type SummaryItemProps = {
  title: string;
  value: React.ReactNode;
};

type SummaryProps = {
  details: SummaryItemProps[];
};

const SummaryItem = ({ title, value }: SummaryItemProps) => {
  return (
    <>
      <dt className="pt-0 pl-0 p-2 font-bold">{title}</dt>
      <dd className="pt-0 pl-0 p-2 mb-8">{value}</dd>
    </>
  );
};

export const Summary = ({ details }: SummaryProps) => {
  return (
    <dl className="">
      {details.map((item) => (
        <SummaryItem key={item.title} {...item} />
      ))}
    </dl>
  );
};
