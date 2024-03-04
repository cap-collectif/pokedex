/* eslint-disable @next/next/no-img-element */
import { graphql, useLazyLoadQuery } from 'react-relay';
import { PokemonsQuery } from '../../__generated__/PokemonsQuery.graphql';
import Card from './Card';
import { IPokemon } from '@/interfaces/Pokemon.interface';
import { useState } from 'react';

const GRAPHQL = graphql`
  query PokemonsQuery {
    pokemons: pokemon_v2_pokemon(limit: 151) {
      pokemonId: id
      name
      pokemon_v2_pokemonspecy {
        is_legendary
      }
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      type: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export const Pokemons = () => {
  const data = useLazyLoadQuery<PokemonsQuery>(GRAPHQL, {});

  const [pokemonsData, setPokemonsData] = useState(data.pokemons);

  const [filteredPokemon, setFilteredPokemon] = useState(data.pokemons);

  const searchPokemons = (value: string) => {
    setFilteredPokemon(pokemonsData.filter((pokemon: IPokemon) => pokemon.name.includes(value)));
  };

  return (
    <div className="p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="mb-5 text-[2rem]">Pokedex</h1>
        <input
          type="text"
          placeholder="search pokemons..."
          className="mx-4 px-4 py-1 rounded-full border border-1 border-neutral-800 grow h-fit text-neutral-800 bg-neutral-200"
          onChange={e => {
            searchPokemons(e.target.value);
          }}
        />
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 m-4">
        {filteredPokemon.map((item: IPokemon) => {
          return <Card pokemon={item} key={item.pokemonId}></Card>;
        })}
      </div>
    </div>
  );
};

export default Pokemons;
