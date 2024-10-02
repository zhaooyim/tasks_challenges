import express from 'express'
import movies from './routes/movies'
import affirmation from './routes/affirmations'

const server = express()

server.use(express.json())
server.use('/api/v1/movies', movies)
server.use('/api/v1/affirmation', affirmation)

//router/routes

export default server
