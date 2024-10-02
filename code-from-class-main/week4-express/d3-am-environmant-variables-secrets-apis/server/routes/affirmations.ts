import express from 'express'
import request from 'superagent'

const router = express.Router()
// GET /api/v1/affirmation
router.get('/', async (req, res) => {
  const response = await request.get('https://www.affirmations.dev/')
  console.log('server-proxy', response.body);

  res.json(response.body)
})

export default router
