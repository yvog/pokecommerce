import { capitalizeFirstChar } from '@/app/util';
import Image from 'next/image';
import { CardFragment } from './Card.generated';

export type CardProps = CardFragment;

export const Card = ({ id, name }: CardProps): JSX.Element => {
  const capitalizedName = capitalizeFirstChar(name);

  return (
    <div className="relative bg-slate-100 border-2 p-8 rounded-xl text-center h-full">
      <Image
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        alt={capitalizedName}
        title={capitalizedName}
        width={300}
        height={500}
        className="aspect-square"
      />
      <h2 className="text-1xl font-bold sm:text-2xl mt-16">
        {capitalizedName}
      </h2>
    </div>
  );
};
