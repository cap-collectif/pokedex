/* eslint-disable @next/next/no-img-element */
import { graphql, useLazyLoadQuery } from 'react-relay'
import { PokemonsQuery } from '../../__generated__/PokemonsQuery.graphql'
import Link from 'next/link'
import { useState } from 'react'

// TODO : Add a bit of styling
export const Pokemons = () => {
  const [search, setSearch] = useState('')
  const searchapi = `${search}%`

  const GRAPHQL = graphql`
    query PokemonsQuery($searchapi: String!) {
      pokemons: pokemon_v2_pokemonspecies(limit: 11, where: { name: { _ilike: $searchapi } }) {
        name
        pokemonId: id
        pokemon_v2_pokemons {
          weight
          height
        }
        pokemonColor: pokemon_v2_pokemoncolor {
          pokemonId: id
          name
        }
      }
    }
  `

  const data = useLazyLoadQuery<PokemonsQuery>(GRAPHQL, { searchapi })

  // To help
  console.log(data)

  return (
    <div className="p-4">
      <h1 className="mb-5">Pokemons :</h1>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a pokemon" />
      <div className="grid grid-cols-4 gap-4">
        {data.pokemons.map(pokemon => (
          <div key={pokemon.pokemonId}>
            <h2>{pokemon.name}</h2>
            <p>Weight: {pokemon.pokemon_v2_pokemons[0].weight}</p>
            <p>Height: {pokemon.pokemon_v2_pokemons[0].height}</p>
            <p>Color: {pokemon.pokemonColor.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokemons
