import express from 'express'

import * as db from '../db'
import { UserData } from '../db'
import * as z from 'zod'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()
    res.json({ users: users })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.get('/:id', async (req, res) => {
  try {
    const userId = Number(req.params.id)
    const user = await db.getUser(userId)
    res.json({ user: user })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

const userSchema = z.object({
  name: z.string(),
  email: z.string(),
})
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newUser = userSchema.parse(data)
    await db.addNewUser(newUser)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id
    await db.deleteUser(Number(userId))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
