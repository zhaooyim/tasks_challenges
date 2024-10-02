import express from 'express'
import * as nodeFs from 'node:fs/promises'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const goblinsData = await nodeFs.readFile('./data.json', 'utf-8')
    // console.log(goblinsData)
    const parsedGoblins = JSON.parse(goblinsData)
    res.json(parsedGoblins)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})


export default router