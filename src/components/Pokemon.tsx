/* eslint-disable @next/next/no-img-element */
import { graphql, useLazyLoadQuery } from 'react-relay'
import { PokemonQuery } from '../../__generated__/PokemonQuery.graphql'
import ArrowIcon from '@/assets/ArrowIcon'
import Link from 'next/link'
import { useState } from 'react'
import { convertDecimeterToCmAndMeter } from '@/utils/convertDecimeterToCmAndMeter'
import { convertHectogramToKg } from '@/utils/convertHectogramToKg'

const GRAPHQL = graphql`
  query PokemonQuery($pokemonId: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $pokemonId) {
      name
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemoncries {
        cries
      }
      specy: pokemon_v2_pokemonspecy {
        is_legendary
        habitat: pokemon_v2_pokemonhabitat {
          name
        }
        capture_rate
        pokemon_v2_generation {
          name
        }
        evolutionChain: pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
            pokeId: id
            pokemon_v2_pokemoncolor {
              name
            }
          }
        }
      }
    }
  }
`

// TODO : Display the informations you want about the Pokemon, add a bit of styling
export const Pokemon = ({ pokemonId }: { pokemonId: number }) => {
  const data = useLazyLoadQuery<PokemonQuery>(GRAPHQL, { pokemonId })
  // To help
  console.log(data)
  const [displayFront, setDisplayFront] = useState(true)
  const pokemonTypes = data?.pokemon?.pokemon_v2_pokemontypes
  const habitat = data?.pokemon?.specy?.habitat
  const evolutionChain = data?.pokemon?.specy?.evolutionChain
  const cries = data?.pokemon?.pokemon_v2_pokemoncries
  const generation = data?.pokemon?.specy?.pokemon_v2_generation
  const captureRate = data?.pokemon?.specy?.capture_rate

  // Play the audio sound of the pokemon
  const playCry = () => {
    if (cries && cries.length > 0) {
      const audioUrl = cries[0]?.cries?.latest
      if (audioUrl) {
        const audio = new Audio(audioUrl)
        audio.play()
      }
    }
  }

  const togglePicture = () => {
    setDisplayFront(!displayFront)
  }

  return (
    <body className="px-4 md:px-28 lg:px-48 py-6">
      <header className=" flex justify-between items-center mb-11">
        <Link
          href="/"
          className="flex justify-center items-center font-bold text-sm  pr-2 bg-white shadow-[2px_2px_2px_2px_#2d3748] border  rounded ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base "
        >
          <ArrowIcon size={40} /> Back
        </Link>
        <h1 className="uppercase font-bold text-xl md:text-2xl lg:text-3xl">{data?.pokemon?.name}</h1>
      </header>
      <main>
        <section className="flex items-center md:items-start flex-col-reverse md:flex-row justify-between sm:border sm:shadow-lg p-5">
          <div className="text-base sm:text-xl lg:text-2xl flex flex-col justify-around py-3">
            <span className=" uppercase font-semibold pb-3">{generation?.name}</span>
            <span className="font-semibold ">
              {data?.pokemon?.name} {data.pokemon?.specy?.is_legendary ? 'is legendary !' : 'is not legendary'}
            </span>
            <span>{`Capture rate : ${captureRate}`}</span>
            <span>Height : {convertDecimeterToCmAndMeter(data?.pokemon?.height)}</span>
            <span>Weight : {convertHectogramToKg(data?.pokemon?.weight)}</span>
            <div className="mt-4 flex items-center">
              <span className="font-bold">Pokemon {pokemonTypes && pokemonTypes?.length > 1 ? 'Types' : 'Type'}:</span>
              <div className="flex ">
                {pokemonTypes?.map((type, index) => {
                  return (
                    <span className="bg-slate-200 rounded-md p-2 ml-2 " key={index}>
                      {type?.pokemon_v2_type?.name}
                    </span>
                  )
                })}
              </div>
            </div>
            <div className="mt-4">
              Habitat: <span className="font-bold">{habitat?.name ?? 'Unknown'}</span>
            </div>
          </div>

          <div className="border-8 w-64 h-80 rounded-2xl border-yellow-200 p-2 ease-out shadow-lg ">
            <img
              src={
                displayFront
                  ? data.pokemon?.sprites[0].sprites.front_default
                  : data.pokemon?.sprites[0].sprites.back_default
              }
              alt={data.pokemon?.name}
              className="w-full h-52 object-contain "
            />
            <div className=" flex justify-evenly pb-3">
              <button
                className="font-bold text-sm w-20 h-16 rounded-full bg-white shadow-[2px_2px_2px_2px_#2d3748] border rounded ease-out duration-300 sm:hover:translate-x-1 sm:hover:translate-y-1 sm:hover:shadow-none md:text-base"
                onClick={togglePicture}
              >
                {displayFront ? 'Back' : 'Front'}
              </button>

              <button
                className="font-bold text-sm  w-20 h-16 rounded-full bg-white shadow-[2px_2px_2px_2px_#2d3748] border ease-out duration-300 sm:hover:translate-x-1 sm:hover:translate-y-1 sm:hover:shadow-none md:text-base"
                onClick={playCry}
              >
                Sound
              </button>
            </div>
          </div>
        </section>
        <section className="my-7 flex flex-col items-center">
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-7">Evolution of the pokemon</h3>
          <div className="flex">
            {evolutionChain?.pokemon_v2_pokemonspecies?.map((pokemon, index) => (
              <Link href={`pokemon?id=${pokemon.pokeId}`} key={index} className="flex items-center">
                <button className="font-bold text-sm px-3 h-12 sm:h-16 rounded-full bg-yellow-200 shadow-md border ease-out duration-300 sm:hover:translate-x-1 sm:hover:translate-y-1 sm:hover:shadow-none md:text-base">
                  {pokemon.name}
                </button>
                {index !== evolutionChain?.pokemon_v2_pokemonspecies?.length - 1 && <ArrowIcon size={24} flip />}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </body>
  )
}

export default Pokemon
