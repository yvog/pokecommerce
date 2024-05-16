import { CACHE_REVALIDATE_SECONDS } from '@/app/consts';
import { capitalizeFirstChar } from '@/app/util';
import { clamp } from '@/app/util/math';
import { getPokemonById } from '@/app/util/queries/pokemonById';
import Image from 'next/image';
import {
  PokemonType,
  PokemonTypeList,
} from '../pokemonTypeList/PokemonTypeList';
import { Summary } from '../summary/Summary';

export const revalidate = CACHE_REVALIDATE_SECONDS;

type PokemonDetailsProps = {
  pokemonId: number;
};

export const PokemonDetails = async ({ pokemonId }: PokemonDetailsProps) => {
  const data = await getPokemonById(pokemonId);

  const pokemon = data?.pokemon_v2_pokemon?.[0];

  const capitalizedName = capitalizeFirstChar(pokemon?.name ?? '');

  const imageUrl = pokemon?.pokemon_v2_pokemonsprites[0]?.sprites;

  const flavorTexts = data?.species?.[0]?.flavortexts;
  const totalFlavorTexts = flavorTexts?.length ?? 0;
  const flavorTextIndex = Math.floor(
    clamp(Math.random() * totalFlavorTexts, 0, totalFlavorTexts - 1)
  );
  const pokemonFlavorText =
    data?.species?.[0]?.flavortexts?.[flavorTextIndex]?.flavor_text ?? '';

  const pokemonTypeList = (
    <PokemonTypeList
      listId="effective-efficacy"
      types={(pokemon?.pokemon_v2_pokemontypes ?? []).map(
        (type) =>
          ({
            id: `${type.pokemon_v2_type?.id}`,
            name: type.pokemon_v2_type?.name,
            href: `/pokemon/${pokemonId}/type/${type.pokemon_v2_type?.name}`,
          } as PokemonType)
      )}
    />
  );

  return (
    <div className="flex xl:gap-32 sm:gap-16 flex-wrap">
      <div className="flex-1">
        <h2 className="text-1xl font-bold sm:text-2xl">{capitalizedName}</h2>
        <Image
          src={imageUrl}
          alt={capitalizedName}
          title={capitalizedName}
          width={300}
          height={500}
          className="aspect-square"
        />
        <p className="mt-20">{pokemonFlavorText}</p>
      </div>
      <div className="flex-1">
        <Summary
          details={[
            {
              title: 'Type',
              value: pokemonTypeList,
            },
            {
              title: 'Height',
              value: `${(pokemon?.height ?? 0) / 10} m`,
            },
            {
              title: 'Weight',
              value: `${(pokemon?.weight ?? 0) / 10} kg`,
            },
          ]}
        />
      </div>
    </div>
  );
};
