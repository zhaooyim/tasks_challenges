import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
import { PokemonSpecies } from '../../models/Pokemon.ts'

function usePokemonSpecies(id: number) {
  return useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: async () => {
      const res = await request.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`,
      )

      return res.body as PokemonSpecies
    },
  })
}

export default function PokemonPage() {
  const { data, isPending, isError, error } = usePokemonSpecies(23)

  if (isPending) {
    return <p> Loading... </p>
  }

  if (isError) {
    return <p>Something went awry: {String(error)}</p>
  }

  return (
    <>
      <h2>Pokemon informantio</h2>
      <ul>
        {data.varieties.map((variety) => (
          <li key={variety.pokemon.url}>{variety.pokemon.name}</li>
        ))}
      </ul>
      <p>color: {data.color.name}</p>
    </>
  )
}
