import Link from 'next/link'
import React from 'react'
import colorToRgba from 'color-to-rgba'
import { convertHectogramToKg } from '@/utils/convertHectogramToKg'
import { convertDecimeterToCmAndMeter } from '@/utils/convertDecimeterToCmAndMeter'

interface Pokemon {
  pokemonId: number | null | undefined
  name: string | null | undefined
  weight: number | null | undefined
  height: number | null | undefined
  color: string
  abilities: Array
  types: Array
}

interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, weight, height, color, pokemonId, abilities, types } = pokemon
  const backgroundColorCard = colorToRgba(color ?? 'white', 0.5)
  const backgroundColorImage = colorToRgba(color ?? 'white', 0.7)
  console.log(types)
  return (
    <Link
      href={`/pokemon?id=${pokemonId}`}
      className="border-8 w-64 h-96 rounded-2xl border-yellow-200 p-2 ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.30)]"
      style={{ backgroundColor: backgroundColorCard }}
    >
      <h2 className=" font-bold mb-2">{name}</h2>
      <div
        className=" shadow-md w-full bg-white h-36 overflow-hidden flex justify-center items-center border-2 rounded"
        style={{ borderColor: backgroundColorImage }}
      >
        <img
          src={`https://img.pokemondb.net/artwork/${name}.jpg`}
          alt={name}
          className=" w-full h-full object-contain"
        />
      </div>
      <div className="flex justify-evenly">
        <p className="text-xs">Weight: {convertHectogramToKg(weight) ?? 'N/A'}</p>
        <p className="text-xs">Height: {convertDecimeterToCmAndMeter(height) ?? 'N/A'}</p>
      </div>

      <h3 className=" my-3 font-semibold">Abilities</h3>
      <div className="flex flex-col h-20 justify-around">
        {abilities.map(ability => (
          <span key={ability.name} className="text-sm font-light rounded px-2 bg-slate-200 mb-2">
            {ability.pokemon_v2_ability.name}
          </span>
        ))}
      </div>
      <div className=" mt-3 flex justify-center">
        {types.map(type => (
          <span key={type.name} className="text-sm bg-white rounded px-1 mx-2">
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>
    </Link>
  )
}

export default PokemonCard
