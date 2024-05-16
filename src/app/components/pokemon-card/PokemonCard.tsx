import { capitalizeFirstChar } from '@/app/util';
import Image from 'next/image';
import { Card } from '../card/Card';
import { PokemonCardFragment } from './PokemonCard.generated';

export type PokemonCardProps = PokemonCardFragment;

export const PokemonCard = ({
  name,
  pokemon_v2_pokemons,
}: PokemonCardProps): JSX.Element => {
  const capitalizedName = capitalizeFirstChar(name);
  const imageUrl =
    pokemon_v2_pokemons?.[0].pokemon_v2_pokemonsprites?.[0]?.sprites;

  return (
    <Card>
      <Image
        src={imageUrl ?? ''}
        alt={capitalizedName}
        title={capitalizedName}
        width={256}
        height={256}
        className="mx-auto"
      />

      <h2 className="text-1xl font-bold sm:text-2xl mt-16">
        {capitalizedName}
      </h2>
    </Card>
  );
};
