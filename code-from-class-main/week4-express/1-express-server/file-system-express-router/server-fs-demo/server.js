import express from 'express'
import sticks from './routes/sticks.js'
import goblins from './routes/goblins.js'

const server = express()

// Server configuration
server.use(express.json())

// Your routes/router(s) should go here
server.use('/api/v1/sticks', sticks)
server.use('/api/v1/goblins', goblins)

export default server

server.listen(3000, () => {
  console.log('listening at localhost:3000')
})
