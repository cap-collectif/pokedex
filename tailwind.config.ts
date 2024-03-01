import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pokemon: ['"Pokemon Hollow"'],
        roboto: ['Roboto'],
      },
      colors: {
        grass: '#78C850',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        normal: '#A8A878',
        flying: '#A890F0',
        poison: '#A040A0',
        electric: '#F8D030',
        ground: '#E0C068',
        fighting: '#C03028',
        psychic: '#F85888',
        rock: '#B8A038',
        ghost: '#705898',
        ice: '#98D8D8',
        steel: '#B8B8D0',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
        'dark-bg': '#192227',
        'light-bg': '#E5ECFD',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-grass',
    'bg-fire',
    'bg-water',
    'bg-bug',
    'bg-normal',
    'bg-flying',
    'bg-poison',
    'bg-electric',
    'bg-ground',
    'bg-fighting',
    'bg-psychic',
    'bg-rock',
    'bg-ghost',
    'bg-ice',
    'bg-steel',
    'bg-dragon',
    'bg-dark',
    'bg-fairy',
  ],
};
export default config;
