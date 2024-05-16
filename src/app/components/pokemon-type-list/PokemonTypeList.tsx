import Link from 'next/link';

export type PokemonType = {
  id: string;
  name: string;
  href: string;
};

export type PokemonTypeListProps = {
  listId: string;
  types: PokemonType[];
};

export const PokemonTypeList = async ({
  listId,
  types,
}: PokemonTypeListProps) => {
  return (
    <ul className="flex">
      {types?.map(({ id, name, href }) => {
        return (
          <li key={`${listId}-${id}`}>
            <Link
              href={href}
              className={`bg-pokemonTypes-${name}-500 hover:bg-pokemonTypes-${name}-400 text-white p-2 rounded-xl inline-block transition-colors uppercase m-1`}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
