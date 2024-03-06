import { graphql, useLazyLoadQuery } from 'react-relay'
import { PokemonsQuery } from '../../__generated__/PokemonsQuery.graphql'
import { useState } from 'react'
import PokemonCard from './PokemonCard'

export const Pokemons = () => {
  const [search, setSearch] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const searchapi = `${searchQuery}%`

  const GRAPHQL = graphql`
    query PokemonsQuery($searchapi: String!) {
      pokemons: pokemon_v2_pokemonspecies(limit: 150, where: { name: { _ilike: $searchapi } }) {
        name
        pokemonId: id
        pokemon_v2_pokemons {
          weight
          height
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
        }

        pokemonColor: pokemon_v2_pokemoncolor {
          pokemonId: id
          name
        }
      }
    }
  `

  const data = useLazyLoadQuery<PokemonsQuery>(GRAPHQL, { searchapi })

  console.log(data)

  const handleSubmit = e => {
    e.preventDefault()
    setSearchQuery(search)
  }

  const handleClear = () => {
    setSearchQuery('')
    setSearch('')
  }

  return (
    <div className="p-4 ">
      <h1 className="mb-5 text-2xl font-extrabold">POKEDEX</h1>
      <form
        role="search"
        aria-label="Search for a pokemon"
        onSubmit={handleSubmit}
        className=" bg-red-400 p-6 rounded-xl shadow-lg flex-nowrap flex"
      >
        <label htmlFor="search-input" className="sr-only">
          Search for a pokemon
        </label>
        <input
          id="search-input"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a pokemon"
          className=" text-lg p-4 rounded-lg w-full uppercase "
        />
        <button
          type="submit"
          aria-label="Search"
          className="font-bold text-sm py-4 px-3 bg-white shadow-[2px_2px_2px_2px_#2d3748] border  rounded ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base mx-4"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => handleClear()}
          aria-label="Clear"
          className="font-bold text-sm  w-20 h-16 rounded-full bg-white shadow-[2px_2px_2px_2px_#2d3748] border rounded ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base"
        >
          Clear
        </button>
      </form>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-5 place-items-center">
        {data.pokemons.map(pokemon => {
          const { pokemonId, name, pokemon_v2_pokemons, pokemonColor } = pokemon

          return (
            <PokemonCard
              key={pokemon.pokemonId}
              pokemon={{
                pokemonId: pokemonId,
                name: name,
                weight: pokemon_v2_pokemons[0]?.weight,
                height: pokemon_v2_pokemons[0]?.height,
                color: pokemonColor?.name,
                abilities: pokemon_v2_pokemons[0]?.pokemon_v2_pokemonabilities,
                types: pokemon_v2_pokemons[0]?.pokemon_v2_pokemontypes,
              }}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Pokemons
