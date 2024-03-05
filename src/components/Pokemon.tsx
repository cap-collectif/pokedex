/* eslint-disable @next/next/no-img-element */
import { graphql, useLazyLoadQuery } from 'react-relay'
import { PokemonQuery } from '../../__generated__/PokemonQuery.graphql'

const GRAPHQL = graphql`
  query PokemonQuery($pokemonId: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $pokemonId) {
      name
      weight
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
        pokemon_v2_pokemonhabitat {
          name
        }
        pokemon_v2_evolutionchain {
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

  return (
    <div>
      Legendary : {data.pokemon?.specy?.is_legendary ? 'Yes' : 'No'}
      <img src={data.pokemon?.sprites[0].sprites.front_default} alt={data.pokemon?.name} />
    </div>
  )
}

export default Pokemon
