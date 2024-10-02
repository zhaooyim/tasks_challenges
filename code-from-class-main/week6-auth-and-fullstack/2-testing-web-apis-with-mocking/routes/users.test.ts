import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'

import server from '../server'
import { getUsers, addNewUser, UserData } from '../db'

// return undefined in each and every exported
// function inside the module
vi.mock('../db')

describe('GET /api/v1/users', () => {
  it('OK-200 should return a list of users', async () => {
    vi.mocked(getUsers).mockResolvedValue([{ id: 123, name: 'banana' }])
    // OR
    vi.mocked(getUsers).mockReturnValue(
      Promise.resolve([{ id: 123, name: 'banana' }])
    )
    const res = await request(server).get('/api/v1/users/')

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({ users: [{ id: 123, name: 'banana' }] })
    // OR
    // expect(res.body.users[0].id).toBe(123)
    // expect(res.body.users[0].name).toBe('banana')
  })

  it('500 should return an error', async () => {
    vi.mocked(getUsers).mockRejectedValue(new Error('banana'))
    const res = await request(server).get('/api/v1/users')

    expect(res.status).toBe(500)
    expect(res.body.error).toBe('banana')
  })
})

describe('POST /api/v1/users', () => {
  it('it should accept a json body', async () => {
    vi.mocked(addNewUser).mockImplementation(() => Promise.resolve(507))

    const newUser = {
      name: 'mango',
      email: 'tasty_mango@example.com',
    }
    const res = await request(server).post('/api/v1/users/').send(newUser)
    expect(res.status).toBe(201)
  })
})
