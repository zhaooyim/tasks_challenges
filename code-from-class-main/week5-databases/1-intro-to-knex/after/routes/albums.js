import express from 'express'
import {
  getAllAlbums,
  deleteAlbum,
  addAlbum,
  updateAlbum,
  getAlbumById,
} from '../db.js'

const router = express.Router()

// GET ALL ALBUMS
router.get('/', async (req, res) => {
  try {
    const data = await getAllAlbums()
    res.json(data)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// GET ALBUM BY ID
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await getAlbumById(id)
    res.json(data)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// DELETE AN ALBUM
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const album = await getAlbumById(id)
    if (!album[0]) {
      // Album with the given ID was not found
      return res.status(404).json({ message: 'Album not found' })
    } else {
      await deleteAlbum(id)
      res.sendStatus(200)
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// ADD A NEW ALBUM
router.post('/', async (req, res) => {
  try {
    const data = req.body
    await addAlbum(data)
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// UPDATE AN EXISTING ALBUM
router.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    await updateAlbum(data, id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

export default router
