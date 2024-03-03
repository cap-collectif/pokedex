import React from 'react'

interface Pokemon {
  pokemonId: number | null | undefined
  name: string | null | undefined
  weight: number | null | undefined
  height: number | null | undefined
  color: string | null | undefined
}

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, weight, height, color } = pokemon

  return (
    <div>
      <h2>{name}</h2>
      <p>Weight: {weight ?? 'N/A'}</p>
      <p>Height: {height ?? 'N/A'}</p>
      <p>Color: {color ?? 'white'}</p>
    </div>
  )
}

export default PokemonCard
