import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import request from 'supertest'

import connection from '../db/connection.ts'
import server from '../server.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('Adds a Todo on the server', () => {
  it('serves existing data', async () => {
    const res = await request(server).get('/api/v1/todos/')
    expect(res.body).toStrictEqual([
      {
        id: 1,
        task: 'vaccuum the driveway',
        completed: 1,
      },
      {
        id: 2,
        task: 'remove bugs from garage',
        completed: 0,
      },
      {
        id: 3,
        task: 'ask insects to leave',
        completed: 0,
      },
    ])
  })
  it('POST updates data', async () => {
    // ACT
    const postRes = await request(server).post('/api/v1/todos/').send({
      task: 'sleep again',
      completed: true,
    })

    // ASSERT
    expect(postRes.statusCode).toBe(201)
    const getRes = await request(server).get('/api/v1/todos/4')
    expect(getRes.body).toStrictEqual({
      id: 4,
      task: 'sleep again',
      completed: 1,
    })
  })
})
