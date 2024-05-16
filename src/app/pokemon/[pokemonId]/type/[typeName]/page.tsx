import PokemonTypesDetailsPage, {
  PokemonTypesDetailsPageProps,
} from '@/app/type/[typeName]/page';

export { generateMetadata } from '@/app/type/[typeName]/page';

export default async function Page({ params }: PokemonTypesDetailsPageProps) {
  return <PokemonTypesDetailsPage params={params} />;
}
