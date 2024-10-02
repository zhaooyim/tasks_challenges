import express from 'express'
import * as vehiclesDb from './db/index.ts'
const server = express()
export default server

server.use(express.json())

server.get('/api/v1/vehicles', async (req, res) => {
  try {
    // replace with a DB function call
    const data = await vehiclesDb.getVehiclesWithOwners()
    res.json(data)
  } catch (err) {
    console.error(err)
  }
})

server.get('/api/v1/vehicles/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await vehiclesDb.getVehicleWithOwnerById(id)

    res.json(data)
  } catch (err) {
    console.error(err)
  }
})
