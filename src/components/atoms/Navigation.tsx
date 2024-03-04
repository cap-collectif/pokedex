import Link from 'next/link';

// @TODO: typage
export const Navigation = ({ pokemonId }: { pokemonId: number }): JSX.Element | null => {
  const nextPokemonId = pokemonId === 151 ? 1 : pokemonId + 1;
  const previousPokemonId = pokemonId === 1 ? 151 : pokemonId - 1;

  return (
    <div className="flex flex-row items-center justify-between w-full text-pokemon text-6xl h-0">
      <Link className="-ml-12 scale-75 hover:scale-100 transition-all" href={`/pokemon?id=${previousPokemonId}`}>
        {'<'}
      </Link>
      <Link className="-mr-12 scale-75 hover:scale-100 transition-all" href={`/pokemon?id=${nextPokemonId}`}>
        {'>'}
      </Link>
    </div>
  );
};

export default Navigation;
