import express from 'express'

import * as db from '../db/users'
import { validateAccessToken } from '../auth0'
import { logError } from '../logger'
import { profileDraftSchema } from '../../types/Profile'

const router = express.Router()

// GET /api/v1/users/search?q="search_query"
router.get('/search', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub as string
  const searchQuery = req.query.q as string

  const result = await db.searchFriends(id, searchQuery)

  res.json(result)
})

// GET /api/v1/users/friends
router.get('/friends', validateAccessToken, async (req, res) => {
  const id = req.auth?.payload.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const friends = await db.getFriends(id)
    res.status(200).json(friends)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to retrieve friends' })
  }
})

// GET /api/v1/users/
router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// POST /api/v1/users
// this route is used for both creating and updating a user
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const form = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const profileResult = profileDraftSchema.safeParse(form)
    // safeParse is a feature from zod, which checks that the input meets the criteria in the schema.
    // it will return a result object which allows you to check for success or failure.
    if (!profileResult.success) {
      res.status(400).json({ message: 'Invalid form' })
      return
    }

    if (profileResult.success) {
      const profile = { ...profileResult.data, auth0Id }
      await db.upsertProfile(profile)
      res.sendStatus(201)
      return
    }
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// POST /api/v1/users/:userId/follow
router.post('/:userId/follow', validateAccessToken, async (req, res) => {
  const userId = req.params.userId

  if (!userId) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  // TODO: notify user when they get a new follower
  res.sendStatus(201)
})

router.get('/:userId/top-ten', async (req, res) => {
  const userId = req.params.userId

  if (!userId) {
    res.status(400).json({ message: 'Please provide an id' })
  }

  const recs = await db.getUserRecs(userId)
  res.json(recs)
})

export default router
