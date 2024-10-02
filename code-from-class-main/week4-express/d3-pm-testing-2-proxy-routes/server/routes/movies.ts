import express from 'express'
// import type { Movie } from '../../models/Movie.ts'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/movies/:id
router.get('/:id', async (req, res) => {
  const TMDB_BEARER_ACCESS_TOKEN = process.env.TMDB_BEARER_ACCESS_TOKEN
  const { id } = req.params
  try {
    if (TMDB_BEARER_ACCESS_TOKEN == undefined) {
      throw new Error('Missing BEARER_ACCESS_TOKEN environment variable')
    }

    const apiResponse = await request
      .get(`https://api.themoviedb.org/3/movie/${id}`)
      // .set('Authorization', `Bearer ${process.env.TMDB_BEARER_ACCESS_TOKEN}`)
      .auth(TMDB_BEARER_ACCESS_TOKEN, { type: 'bearer' })
      .set('accept', 'application/json')
    res.json(apiResponse.body)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message)
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
