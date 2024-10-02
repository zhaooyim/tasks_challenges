import express from 'express'
import * as db from '../db/songs'
import { validateAccessToken } from '../auth0'
import { songDraftSchema } from '../../types/Song'
import { logError } from '../logger'

const router = express.Router()

// GET /api/v1/songs/:id where id = USER ID
router.get('/:id', validateAccessToken, async (req, res) => {
  const id = req.params.id
  const songs = await db.getSongs(id)
  res.status(200).json(songs)
})

// GET /api/v1/songs/song/:id WHERE id = SONG ID
router.get('/song/:id', validateAccessToken, async (req, res) => {
  const songId = req.params.id
  const song = await db.getSongById(songId)
  res.status(200).json(song)
})

// POST /api/v1/songs
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const form = req.body

  let resStatus = undefined
  let resErrorMessage = ''

  if (!auth0Id) {
    resStatus = 400 // Bad request
    resErrorMessage = 'Missing auth0 id'
    throw Error('Failed authentication check')
  }

  try {
    const validationResult = songDraftSchema.safeParse(form)

    if (!validationResult.success) {
      resStatus = 400 // Bad request
      resErrorMessage = 'Invalid song draft form'
      throw Error('Failed song draft schema check')
    }
    const { userId, title, genre, artist, link, description } = form
    const newSongId = await db.insertSong({
      userId,
      title,
      genre,
      artist,
      link,
      description,
    })
    resStatus = 201 // Success
    res.status(resStatus).json(newSongId)
  } catch (error) {
    if (!resStatus) {
      resStatus = 500 // Any other error
    }
    logError(error)
    res.status(resStatus).json({ message: resErrorMessage })
  }
})

//PATCH /api/v1/songs/
router.patch('/:id', validateAccessToken, async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = req.body
    await db.updateSong(data, id)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

// DEL /api/v1/songs/:id
router.delete('/:id', validateAccessToken, async (req, res) => {
  const id = req.params.id
  const songs = await db.deleteSong(Number(id))
  res.status(204).json(songs)
})

export default router
