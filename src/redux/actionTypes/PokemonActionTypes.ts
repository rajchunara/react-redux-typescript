export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_ERROR = 'FETCH_POKEMON_ERROR';

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export interface PokemonRequest {
  type: typeof FETCH_POKEMON_REQUEST;
}

export interface PokemonSuccess {
  type: typeof FETCH_POKEMON_SUCCESS;
  payload: PokemonType;
}

export interface PokemonError {
  type: typeof FETCH_POKEMON_ERROR;
  payload: string;
}

export type PokemonDispatchTypes =
  | PokemonRequest
  | PokemonSuccess
  | PokemonError;
