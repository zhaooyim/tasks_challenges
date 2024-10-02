import express from 'express'
// import type { Movie } from '../../models/Movie.ts'
import request from 'superagent'

const router = express.Router()

// GET /api/v1/affirmations
router.get('/', async (req, res) => {
  try {
    const apiResponse = await request.get(`https://www.affirmations.dev`)
    res.json(apiResponse.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
