import { graphQLClient } from '@/app/util/graphQLClient';
import { cache } from 'react';
import {
  PokemonDetailsByIdDocument,
  PokemonDetailsByIdQuery,
} from './PokemonDetails.generated';

export const getPokemonById = cache(async (id: number) => {
  if (isNaN(id)) return undefined;

  const result: PokemonDetailsByIdQuery = await graphQLClient.request(
    PokemonDetailsByIdDocument,
    {
      id,
    }
  );

  return result;
});
