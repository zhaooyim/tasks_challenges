import express from 'express'
import welcome from './routes/welcome.ts'
import movies from './routes/movies.ts'
import affirmations from './routes/affirmations.ts'
import puppies from './routes/puppies.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/welcome', welcome)
server.use('/api/v1/movies', movies)
server.use('/api/v1/affirmations', affirmations)
server.use('/api/v1/puppies', puppies)

export default server
