import { getPokemonTypeEfficacies } from '@/app/util/queries/typeEfficacies';
import { EfficacyFragment } from '@/app/util/queries/typeEfficacies/Efficacy.generated';
import { notFound } from 'next/navigation';
import {
  PokemonType,
  PokemonTypeList,
} from '../pokemonTypeList/PokemonTypeList';

type PokemonTypeAttackEfficaciesProps = {
  typeName: string;
};

type Efficacy = EfficacyFragment;

function mapEfficacyToPokemonType(efficacy: Efficacy): PokemonType {
  const name = efficacy.pokemonV2TypeByTargetTypeId?.name ?? '';

  return {
    id: `${efficacy.id}`,
    href: `/type/${name}`,
    name,
  } as PokemonType;
}

type PokemonTypeEfficacyProps = {
  text: string;
  efficacies: Efficacy[];
};

const PokemonTypeEfficacy = ({
  text,
  efficacies,
}: PokemonTypeEfficacyProps) => {
  return (
    <div className="mb-4">
      <span className="block mb-2">{text}</span>

      <PokemonTypeList
        listId="effective-efficacy"
        types={efficacies?.map(mapEfficacyToPokemonType)}
      />
    </div>
  );
};

export const PokemonTypeAttackEfficacies = async ({
  typeName,
}: PokemonTypeAttackEfficaciesProps) => {
  const data = await getPokemonTypeEfficacies(typeName.toLowerCase());
  const efficacies = data?.pokemon_v2_typeefficacy;

  if (!efficacies?.length) {
    return notFound();
  }

  const veryEffectiveEfficacies = efficacies?.filter(
    (efficacy) => efficacy.damage_factor === 200
  );

  const weakEfficacies = efficacies?.filter(
    (efficacy) => efficacy.damage_factor === 50
  );

  const noEfficacies = efficacies?.filter(
    (efficacy) => efficacy.damage_factor === 0
  );

  return (
    <div>
      <h3 className="text-lg font-bold sm:text-1xl mb-4">
        Attack effectiveness against other types
      </h3>

      {!!veryEffectiveEfficacies?.length && (
        <PokemonTypeEfficacy
          text={`${typeName} moves are very effective against:`}
          efficacies={veryEffectiveEfficacies}
        />
      )}

      {!!weakEfficacies?.length && (
        <PokemonTypeEfficacy
          text={`${typeName} moves are weak against:`}
          efficacies={weakEfficacies}
        />
      )}

      {!!noEfficacies?.length && (
        <PokemonTypeEfficacy
          text={`${typeName} moves have no effect on:`}
          efficacies={noEfficacies}
        />
      )}
    </div>
  );
};
