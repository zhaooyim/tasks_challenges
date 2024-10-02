import express from 'express'
import * as store from '../store'

const router = express.Router()

// GET /api/v1/puppies
router.get('/', async (req, res) => {
  try {
    const puppy = await store.getPuppy()
    res.json(puppy)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
