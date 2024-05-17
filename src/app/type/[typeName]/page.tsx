import { BreadcrumbItem } from '@/app/components/breadcrumbs/Breadcrumbs';
import { Card } from '@/app/components/card/Card';
import { PokemonTypeAttackEfficacies } from '@/app/components/pokemonTypeAttackEfficacies/PokemonTypeAttackEfficacies';
import { Root } from '@/app/components/root/Root';
import { CACHE_REVALIDATE_SECONDS, PAGE_DESCRIPTION } from '@/app/consts';
import { getPokemonById } from '@/app/util/shared/queries/pokemonById';
import { capitalizeFirstChar } from '@/app/util/text';

export type PokemonTypesDetailsPageProps = {
  params: {
    typeName: string;
    pokemonId?: string;
  };
};

export const revalidate = CACHE_REVALIDATE_SECONDS;

export async function generateMetadata({
  params,
}: PokemonTypesDetailsPageProps) {
  const typeName = params?.typeName ?? '';
  const capitalizedTypeName = capitalizeFirstChar(typeName);

  return {
    title: `${capitalizedTypeName} Type | Pokecommerce`,
    description: PAGE_DESCRIPTION,
  };
}

export default async function PokemonTypesDetailsPage({
  params,
}: PokemonTypesDetailsPageProps) {
  const typeName = params?.typeName ?? '';
  const pokemonId = Number(params?.pokemonId ?? 0);
  const pokemon = await getPokemonById(pokemonId);
  const pokemonName = pokemon?.pokemon_v2_pokemon?.[0]?.name ?? '';

  const capitalizedTypeName = capitalizeFirstChar(typeName);

  const breadcrumbs = [
    {
      text: 'Overview',
      href: '/',
    },
    pokemonName && {
      text: capitalizeFirstChar(pokemonName),
      href: `/pokemon/${pokemonId}`,
    },
    {
      text: capitalizedTypeName,
      current: true,
    },
  ].filter((bc) => !!bc) as BreadcrumbItem[];

  return (
    <Root title={`${capitalizedTypeName} Type`} breadcrumbs={breadcrumbs}>
      <Card>
        <h2 className="text-1xl font-bold sm:text-2xl mb-8">
          {capitalizedTypeName}
        </h2>
        <PokemonTypeAttackEfficacies typeName={capitalizedTypeName} />
      </Card>
    </Root>
  );
}
