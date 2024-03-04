/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import PokemonType from './atoms/PokemonType';

export const Card = ({ pokemon }: any) => {
  // Some pokemons have several types. We use the first one to style the Card background with its color.
  const firstType = pokemon?.type[0].pokemon_v2_type?.name;

  return (
    <Link className="group " href={`/pokemon?id=${pokemon.pokemonId}`}>
      {/* @TODO: page NOT FOUND */}
      <div
        className={` flex flex-col justify-between gap-1 group-hover:cursor-pointer bg-${firstType}-500 rounded-xl p-4 h-full scale-75 group-hover:scale-100 transition-all`}
      >
        <span className="relative flex flex-row items-center justify-start gap-1 text-lg w-full">
          <p>{pokemon.pokemon_v2_pokemonspecy?.is_legendary && '★ '}</p>
          <p className="capitalize font-pokemon tracking-wider">{pokemon.name}</p>
          <p className="absolute -top-3 -right-3 font-pokemon rounded-full w-fit min-w-[2.5rem] h-[2.5rem] px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            #{pokemon.pokemonId}
          </p>
        </span>
        {pokemon.sprites && (
          <img
            className="saturate-50 scale-75 group-hover:saturate-100 group-hover:scale-125"
            src={pokemon?.sprites[0]?.sprites?.front_default}
            alt={pokemon.name}
          />
        )}
        <span className="flex flex-row gap-1 self-end">
          {/* @TODO: typage */}
          {pokemon.type.map((type: any, index: number) => (
            <PokemonType key={index} pokemonType={type.pokemon_v2_type.name}></PokemonType>
          ))}
        </span>
      </div>
    </Link>
  );
};
export default Card;
