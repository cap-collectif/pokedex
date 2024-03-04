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

  return (
    <div className="p-4">
      <h1 className="mb-5">Pokemons :</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for a pokemon"
        />
        <button type="submit">Search</button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {data.pokemons.map(pokemon => {
          console.log(pokemon)
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
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Pokemons
