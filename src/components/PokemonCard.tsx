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
  const { name, weight, height, color, pokemonId } = pokemon

  return (
    <div
      className="border-8 w-64 h-96 rounded-2xl border-yellow-200 p-2"
      style={{ background: 'rgba(255, 0, 0, 0.3)' }}
    >
      <h2>{name}</h2>
      <div className=" w-full  bg-white h-36 overflow-hidden flex justify-center items-center">
        <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt="" className=" w-full h-full object-contain" />
      </div>
      <p>Weight: {weight ?? 'N/A'}</p>
      <p>Height: {height ?? 'N/A'}</p>
    </div>
  )
}

export default PokemonCard
