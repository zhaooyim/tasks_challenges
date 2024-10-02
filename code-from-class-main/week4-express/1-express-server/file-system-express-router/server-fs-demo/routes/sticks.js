import express from 'express'
import * as fs from 'node:fs/promises'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const json = await fs.readFile('./data.json', 'utf-8')
    const data = JSON.parse(json)
    res.json(data)
  } catch (e) {
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const json = await fs.readFile('./data.json', 'utf-8')
    const data = JSON.parse(json)
    const id = parseInt(req.params.id)

    if (isNaN(id) || data.length <= id) {
      res.sendStatus(404)
      return
    }

    res.json(data[id - 1])
  } catch (e) {
    res.sendStatus(500)
    console.log(e)
  }
})

router.post('/', async (req, res) => {
  try {
    const newStick = req.body
    const json = await fs.readFile('./data.json', 'utf-8')
    const data = JSON.parse(json)
    const newData = [...data, newStick]
    const newJson = JSON.stringify(newData, null, 2)
    await fs.writeFile('./data.json', newJson, 'utf-8')

    res.sendStatus(201)
  } catch (e) {
    res.sendStatus(500)
    console.log(e)
  }
})


export default router