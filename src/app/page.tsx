import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOMEPAGE
      <Link href={`/ability/electric123`}>View ability page (opens modal)</Link>
    </main>
  );
}

// todo: server side data fetching
/*
query PokemonGen1OverviewQuery {
  # Gets all the pokemon belonging to generation 1
  gen1_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_generation: {name: {_eq: "generation-i"}}}, order_by: {id: asc}) {
    name
    id
  }
}
*/

// images:
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
// caching via next/image

// svg: https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/2.svg
