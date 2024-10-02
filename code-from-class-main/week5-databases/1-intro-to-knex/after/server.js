import express from 'express'
import albums from './routes/albums.js'

// Import your router here

const server = express()

// Server configuration
server.use(express.json())

// Your routes/router(s) should go here
server.use('/api/v1/albums/', albums)

export default server
