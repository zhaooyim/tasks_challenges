import express from 'express'

import users from './routes/users'

const server = express()

// Middleware
server.use(express.json())
// Previously we've used:
// server.use(express.urlencoded({ extended: false }))

// Routes
server.use('/api/v1/users', users)

export default server
