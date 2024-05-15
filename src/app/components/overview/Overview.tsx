import { graphQLClient } from '@/app/client';
import { PAGE_CACHE_REVALIDATE_SECONDS } from '@/consts';
import Link from 'next/link';
import { Suspense, cache } from 'react';
import { Card, CardProps } from '../card/Card';
import {
  PokemonOverviewDocument,
  PokemonOverviewQuery,
} from './Overview.generated';

export const revalidate = PAGE_CACHE_REVALIDATE_SECONDS;

export const getAllGen1Pokemons = cache(
  async (limit: number, offset: number) => {
    const results: PokemonOverviewQuery = await graphQLClient.request(
      PokemonOverviewDocument,
      {
        limit,
        offset,
      }
    );

    return results.gen1_species as CardProps[];
  }
);

export default async function Overview(): Promise<JSX.Element> {
  const results = await getAllGen1Pokemons(12, 0);

  return (
    <div className="grid grid-cols-1 gap-4 p-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
      <Suspense fallback={<div>Loading...</div>}>
        {results?.map((cardProps) => (
          <Link
            href={`/pokemon/${cardProps.id}`}
            className="self-stretch hover:shadow hover:shadow-xl hover:scale-105 transition-shadow transition-transform"
          >
            <Card {...cardProps} />
          </Link>
        ))}
      </Suspense>
    </div>
  );
}
