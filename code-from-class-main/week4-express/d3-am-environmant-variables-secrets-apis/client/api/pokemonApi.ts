import request from 'superagent'
import { Pokemon } from '../../models/pokemon'

export async function getPokemon(): Promise<Pokemon> {
  const response = await request.get(
    'https://pokeapi.co/api/v2/pokemon/pikachu'
  )
  return response.body
}
