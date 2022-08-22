import { NamedAPIResource, PokemonSprites } from "pokenode-ts";

export interface PokemonProps extends NamedAPIResource {
  sprites: PokemonSprites;
}