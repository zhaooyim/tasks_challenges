import request from 'superagent'
import { Movie } from '../../models/movie'

// export async function getMovies(): Promise<Movie[]> {
//   const response = await request.get(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=lolshame'
//   )
//   return response.body.results
// }

// export async function getMovies(): Promise<Movie[]> {
//   const response = await request
//     .get('https://api.themoviedb.org/3/trending/movie/day')
//     .set(
//       'Authorization',
//       'Bearer lolshame'
//     )
//   return response.body.results
// }

export async function getMovies(): Promise<Movie[]> {
  const response = await request.get('/api/v1/movies')
  return response.body
}
