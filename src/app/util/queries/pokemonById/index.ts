import { graphQLClient } from '@/app/util/graphQLClient';
import { cache } from 'react';
import { PokemonByIdDocument, PokemonByIdQuery } from './PokemonById.generated';

export const getPokemonById = cache(async (id: number) => {
  if (isNaN(id)) return undefined;

  const result: PokemonByIdQuery = await graphQLClient.request(
    PokemonByIdDocument,
    {
      id,
    }
  );

  return result;
});
