import { cache } from 'react';
import { graphQLClient } from '../../../shared/graphQLClient';
import {
  TypeEfficaciesDocument,
  TypeEfficaciesQuery,
} from './TypeEfficacies.generated';

export const getPokemonTypeEfficacies = cache(async (typeName: string) => {
  const result: TypeEfficaciesQuery = await graphQLClient.request(
    TypeEfficaciesDocument,
    {
      typeName,
    }
  );

  return result;
});
