import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  PokemonDispatchTypes,
  PokemonType,
  PokemonRequest,
  PokemonSuccess,
  PokemonError,
  FETCH_POKEMON_ERROR,
} from './../actionTypes/PokemonActionTypes';
import { Dispatch } from 'redux';
import axios from 'axios';

const fetchPokemon = (): PokemonRequest => {
  return {
    type: FETCH_POKEMON_REQUEST,
  };
};

const fetchPokemonSuccess = (pokemon: PokemonType): PokemonSuccess => {
  return {
    type: FETCH_POKEMON_SUCCESS,
    payload: pokemon,
  };
};

const fetchPokemonFailure = (err: string): PokemonError => {
  return {
    type: FETCH_POKEMON_ERROR,
    payload: err,
  };
};

//Get Pokemon
export const GetPokemon = (pokemon: string) => {
  return async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch(fetchPokemon());
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      dispatch(fetchPokemonSuccess(res.data));
    } catch (err) {
      dispatch(fetchPokemonFailure(err.message));
    }
  };
};
