import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

// GET /api/v1/movies/
router.get('/', async (req, res) => {
  console.log(process.env.MOVIEDB_API_TOKEN);
  
  // const response = await request
  //   .get('https://api.themoviedb.org/3/trending/movie/day')
  //   .set('Authorization', `Bearer ${process.env.MOVIEDB_API_TOKEN}`)

  // res.json(response.body.results)
  res.send("shhhhh-top-secret")
})

export default router
