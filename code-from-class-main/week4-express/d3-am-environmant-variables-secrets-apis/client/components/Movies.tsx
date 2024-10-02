import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../api/moviesApi'

export default function Movies() {
  const { data } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getMovies(),
  })

  return (
    <>
      <h2>Movies!</h2>
      {data?.map((movie) => {
        return (
          <li key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.budget}</p>
            <p>{movie.overview}</p>
          </li>
        )
      })}
    </>
  )
}
