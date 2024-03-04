'use client';

import PokemonDetails from '@/components/PokemonDetails';
import { useSearchParams } from 'next/navigation';

export default function PokemonView() {
  const searchParams = useSearchParams();

  const pokemonId = Number(searchParams.get('id'));
  return <PokemonDetails pokemonId={pokemonId} />;
}
