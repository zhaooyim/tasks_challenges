import express from 'express'
import data from './initial-data.ts'
// Import your router here
import puppies from './routes/puppies.ts'

const server = express()

// Server configuration
server.use(express.json())

// make sure you have this line to set up the JSON middleware
server.use(express.json())
server.use('/api/v1/puppies', puppies)
// Your routes/router(s) should go here

export default server
