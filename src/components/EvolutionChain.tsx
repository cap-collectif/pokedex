/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Sprites from './atoms/Sprites';

// @TODO: typage
export const EvolutionChain = ({ evolutionChain }: { evolutionChain: any }): JSX.Element | null => {
  return !evolutionChain ? null : (
    <div className="flex flex-col gap-8 w-full">
      <h2 className="mx-auto">Evolution chain - First Gen:</h2>
      <span className="flex flex-row items-baseline gap-12 mx-auto">
        {evolutionChain.map((evolution: any) => {
          const evol = evolution.pokemon_v2_pokemons[0];
          return (
            <Link
              key={evol.evolution_id}
              href={`/pokemon?id=${evol.evolution_id}`}
              className="flex flex-col gap-2 w-fit"
            >
              <Sprites sprites={evol.pokemon_v2_pokemonsprites[0].sprites.front_default} alt={evol.name} />

              <span className="flex flex-row items-center justify-between tracking-wide capitalize ">
                <p className="font-bold">{evol.name}</p>
                <p className="font-pokemon">#{evol.evolution_id}</p>
              </span>
            </Link>
          );
        })}
      </span>
    </div>
  );
};

export default EvolutionChain;
