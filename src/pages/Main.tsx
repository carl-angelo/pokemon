import React, { useEffect, useState } from 'react';
import { PokemonClient } from 'pokenode-ts';
import { PokemonProps } from '../interfaces/pokemon-props';
import PokemonCardList from '../components/PokemonCard';


const Main: React.FC<{}> = () => {

  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);
  const api = new PokemonClient();

  const getPokemon = async () => {
    const data = await api.listPokemons(0, 30);
    data.results.map(async pokemon => {
      const thumb = await getPokemonThumb(pokemon.name);
      setPokemonList((prev) => [
        ...prev,
        {
          ...pokemon,
          sprites: thumb
        }
      ])
    });
  };

  const getPokemonThumb = async (name: string) => {
    const data = await api.getPokemonByName(name);
    return data.sprites;
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <PokemonCardList list={pokemonList} />
  );
};
export default Main;