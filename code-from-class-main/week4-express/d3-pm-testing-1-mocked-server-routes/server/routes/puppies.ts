import express from 'express'
import { addPuppy, deletePuppy, getPuppies, getPuppyById, updatePuppy } from '../../store'

const router = express.Router()
export default router

router.get('/', async (req, res) => {
  try {
    const data = await getPuppies()
    res.json(data)
  } catch (err) {
    console.log('Getting puppies failed', err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = await getPuppyById(id)
    if (data === undefined) {
      res.sendStatus(404)
      return
    }
    res.json(data)
  } catch (err) {
    console.log('Getting single puppy failed', err)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await deletePuppy(id)
    res.sendStatus(204)
  } catch (err) {
    console.log('Deleting puppy failed', err)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newPuppy = req.body
    const id = await addPuppy(newPuppy)
    res.json({ id })
  } catch (err) {
    console.log('Adding a puppy failed', err)
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await updatePuppy(id, req.body)
    res.sendStatus(204)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})


