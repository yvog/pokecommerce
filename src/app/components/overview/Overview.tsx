import { CACHE_REVALIDATE_SECONDS } from '@/app/consts';
import { graphQLClient } from '@/app/util/shared/graphQLClient';
import Link from 'next/link';
import { cache } from 'react';
import { PokemonCard, PokemonCardProps } from '../pokemonCard/PokemonCard';
import {
  PokemonOverviewDocument,
  PokemonOverviewQuery,
} from './Overview.generated';

export const revalidate = CACHE_REVALIDATE_SECONDS;

export const getAllGen1Pokemons = cache(
  async (limit: number, offset: number) => {
    const results: PokemonOverviewQuery = await graphQLClient.request(
      PokemonOverviewDocument,
      {
        limit,
        offset,
      }
    );

    return results.gen1_species as PokemonCardProps[];
  }
);

export const Overview = async () => {
  const limit = 12;
  const offset = 0;
  const results = await getAllGen1Pokemons(limit, offset);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4 pt-12">
      {results?.map((cardProps) => (
        <Link
          key={`pokemon-card-${cardProps?.id}`}
          href={`/pokemon/${cardProps.id}`}
          className="text-center block self-stretch rounded-xl hover:shadow-xl hover:scale-105 transition-transform"
        >
          <PokemonCard {...cardProps} />
        </Link>
      ))}
    </div>
  );
};
