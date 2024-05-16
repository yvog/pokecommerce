import { cache } from 'react';
import { graphQLClient } from '../../graphQLClient';
import {
  TypeEfficacyDocument,
  TypeEfficacyQuery,
} from './TypeEfficacy.generated';

export const getPokemonTypeEfficacies = cache(async (typeName: string) => {
  const result: TypeEfficacyQuery = await graphQLClient.request(
    TypeEfficacyDocument,
    {
      typeName,
    }
  );

  return result;
});
