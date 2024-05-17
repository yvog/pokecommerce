import { Card } from '@/app/components/card/Card';
import { PokemonDetails } from '@/app/components/pokemonDetails/PokemonDetails';
import { Root } from '@/app/components/root/Root';
import { CACHE_REVALIDATE_SECONDS, PAGE_DESCRIPTION } from '@/app/consts';
import { getPokemonById } from '@/app/util/shared/queries/pokemonById';
import { capitalizeFirstChar } from '@/app/util/text';
import { notFound } from 'next/navigation';

type PokemonDetailPageProps = {
  params: {
    pokemonId: string;
  };
};

export const revalidate = CACHE_REVALIDATE_SECONDS;

export async function generateMetadata({ params }: PokemonDetailPageProps) {
  const pokemonId = Number(params?.pokemonId ?? 0);
  const data = await getPokemonById(pokemonId);
  const pokemon = data?.pokemon_v2_pokemon?.[0];

  return {
    title: pokemon
      ? `${capitalizeFirstChar(pokemon?.name ?? '')} details | Pokecommerce`
      : 'Details | Pokecommerce',
    description: PAGE_DESCRIPTION,
  };
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const pokemonId = Number(params?.pokemonId ?? 0);
  const data = await getPokemonById(pokemonId);

  if (!data) {
    return notFound();
  }

  const pokemon = data?.pokemon_v2_pokemon?.[0];
  const capitalizedName = capitalizeFirstChar(pokemon?.name ?? '');

  return (
    <Root
      title={`View ${capitalizedName} Details`}
      breadcrumbs={[
        {
          text: 'Overview',
          href: '/',
        },
        {
          text: capitalizedName,
          current: true,
        },
      ]}
    >
      <Card>
        <PokemonDetails pokemonId={pokemonId} />
      </Card>
    </Root>
  );
}
