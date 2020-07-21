import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
} from './../actionTypes/PokemonActionTypes';
import {
  PokemonType,
  PokemonDispatchTypes,
  FETCH_POKEMON_ERROR,
} from '../actionTypes/PokemonActionTypes';

interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
  error?: string;
}

const defaultState: DefaultStateI = {
  loading: false,
  error: '',
};

const pokemonReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case FETCH_POKEMON_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case FETCH_POKEMON_REQUEST:
      return {
        loading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
