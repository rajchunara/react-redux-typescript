import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../redux/store';
import { GetPokemon } from '../redux/actions/PokemonActions';

export default function Pokemon() {
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const { loading, pokemon, error } = pokemonState;
  const [pokemonName, setpokemonName] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpokemonName(e.target.value);
  };

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  const pokemonFetchingResult = loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <img src={pokemon?.sprites.front_default} alt="" />
      {pokemon?.abilities.map((ability, index) => {
        return <p key={index}>{ability.ability.name}</p>;
      })}
    </div>
  );

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {pokemonFetchingResult}
    </div>
  );
}
