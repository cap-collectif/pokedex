import Image from 'next/image';

export const PokemonType = ({ pokemonType }: { pokemonType: string }): JSX.Element | null => {
  const icons = [
    { key: 'grass', src: '/img/pokemon-types/grass.png' },
    { key: 'fire', src: '/img/pokemon-types/fire.png' },
    { key: 'water', src: '/img/pokemon-types/water.png' },
    { key: 'bug', src: '/img/pokemon-types/bug.png' },
    { key: 'normal', src: '/img/pokemon-types/normal.png' },
    { key: 'flying', src: '/img/pokemon-types/flying.png' },
    { key: 'poison', src: '/img/pokemon-types/poison.png' },
    { key: 'electric', src: '/img/pokemon-types/electric.png' },
    { key: 'ground', src: '/img/pokemon-types/ground.png' },
    { key: 'fighting', src: '/img/pokemon-types/fighting.png' },
    { key: 'psychic', src: '/img/pokemon-types/psychic.png' },
    { key: 'rock', src: '/img/pokemon-types/rock.png' },
    { key: 'ghost', src: '/img/pokemon-types/ghost.png' },
    { key: 'ice', src: '/img/pokemon-types/ice.png' },
    { key: 'steel', src: '/img/pokemon-types/steel.png' },
    { key: 'dragon', src: '/img/pokemon-types/dragon.png' },
    { key: 'dark', src: '/img/pokemon-types/dark.png' },
    { key: 'fairy', src: '/img/pokemon-types/fairy.png' },
  ];

  const currentType = icons.find((obj: { key: string; src: string }) => obj.key === pokemonType);
  if (currentType) {
    return (
      // @todo: add a tooltip with the type on it (in letters, for clarity :))
      <span className="bg-neutral-200 dark:bg-neutral-800 rounded-full w-fit p-1">
        <Image src={currentType.src} alt={pokemonType + ' type'} width={20} height={20}></Image>
      </span>
    );
  }
  return null;
};
export default PokemonType;
