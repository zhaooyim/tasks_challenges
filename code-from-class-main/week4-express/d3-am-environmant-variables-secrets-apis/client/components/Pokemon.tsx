import { useEffect, useState } from 'react'
import { getPokemon } from '../api/pokemonApi'
import * as Models from '../../models/pokemon'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null as Models.Pokemon | null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fecthData = async () => {
      try {
        setIsLoading(true)
        const data = await getPokemon()
        setPokemon(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message)
        }
        console.error("API didn't work")
        setError('Something went wrong, come back soon!')
      } finally {
        setIsLoading(false)
      }
    }
    fecthData()
  }, [])

  console.log(pokemon)

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      {isLoading || pokemon === null ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Pokémon </h2>
          <h3>Name: {pokemon.name}</h3>
          <p>{pokemon.weight}</p>
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
        </>
      )}
    </>
  )
}
