import request from 'superagent'
import { useQuery } from '@tanstack/react-query'
// import * as Models from '../../models/Movie.ts'
import { Movie as MovieModel } from '../../models/Movie.ts'

function useMovie() {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const res = await request.get('/api/v1/movies/11')

      return res.body as MovieModel
    },
  })
}

export default function Movie() {
  const { data, isPending, isError } = useMovie()

  if (isPending || isError) {
    return <p>NO</p>
  }

  return (
    <>
      <h2>Facts about Movies</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
