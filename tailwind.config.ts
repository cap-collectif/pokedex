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
        pokemon: ['"Pokemon Solid"'],
        'pokemon-hollow': ['"Pokemon Hollow"'],
        roboto: ['Roboto'],
      },
      colors: {
        // Brighter Versions
        'grass-500': '#4caF50',
        'fire-500': '#FF6D3E',
        'water-500': '#3A8BFF',
        'bug-500': '#A2D149',
        'normal-500': '#A0A0A0',
        'flying-500': '#00BFFF',
        'poison-500': '#8A4EBF',
        'electric-500': '#FFD700',
        'ground-500': '#8B6E5E',
        'fighting-500': '#E53935',
        'psychic-500': '#FF4081',
        'rock-500': '#8B6E5E',
        'ghost-500': '#6C7D8B',
        'ice-500': '#00CED1',
        'steel-500': '#6C7D8B',
        'dragon-500': '#536DFE',
        'dark-500': '#1E1E1E',
        'fairy-500': '#FF9ACD',

        // Pastel Versions
        'grass-300': '#A7DAA7',
        'fire-300': '#FFC4A1',
        'water-300': '#AED4FF',
        'bug-300': '#DFF0C5',
        'normal-300': '#E4E9EC',
        'flying-300': '#A7DFFD',
        'poison-300': '#BFA3D1',
        'electric-300': '#FFE08A',
        'ground-300': '#C7AFA3',
        'fighting-300': '#F18C89',
        'psychic-300': '#F8B3C1',
        'rock-300': '#D3C2B8',
        'ghost-300': '#B0BEC5',
        'ice-300': '#AEEEEE',
        'steel-300': '#CDD8DC',
        'dragon-300': '#B1BDEE',
        'dark-300': '#6B6B6B',
        'fairy-300': '#FFD1E0',

        // neutrals
        'neutral-800': '#192227',
        'neutral-200': '#E5ECFD',

        // brand colors
        'brand-blue': '#2A75BB',
        'brand-blue-dark': '#3C5AA6',
        'brand-yellow': '#FFCB05',
        'brand-yellow-dark': '#C7A008',
      },
      screens: {
        sm: '576px', // Small screens
        md: '768px', // Medium screens
        lg: '1200px', // Large screens
        xl: '1600px', // Extra-large screens
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-grass-500',
    'bg-grass-300',
    'bg-fire-500',
    'bg-fire-300',
    'bg-water-500',
    'bg-water-300',
    'bg-bug-500',
    'bg-bug-300',
    'bg-normal-500',
    'bg-normal-300',
    'bg-flying-500',
    'bg-flying-300',
    'bg-poison-500',
    'bg-poison-300',
    'bg-electric-500',
    'bg-electric-300',
    'bg-ground-500',
    'bg-ground-300',
    'bg-fighting-500',
    'bg-fighting-300',
    'bg-psychic-500',
    'bg-psychic-300',
    'bg-rock-500',
    'bg-rock-300',
    'bg-ghost-500',
    'bg-ghost-300',
    'bg-ice-500',
    'bg-ice-300',
    'bg-steel-500',
    'bg-steel-300',
    'bg-dragon-500',
    'bg-dragon-300',
    'bg-dark-500',
    'bg-dark-300',
    'bg-fairy-500',
    'bg-fairy-300',
  ],
};
export default config;
