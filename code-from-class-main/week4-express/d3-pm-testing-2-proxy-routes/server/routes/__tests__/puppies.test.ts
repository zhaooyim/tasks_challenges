import { describe, it, expect, vi } from 'vitest'
import request from 'supertest'
import * as fs from 'node:fs/promises'

import server from '../../server.ts'

vi.mock('node:fs/promises')

const mockData = {
  id: 1,
  name: 'Scooby',
  owner: 'Mystery',
  breed: 'Doobee',
  image: '/images/dog1.jpg',
}

describe('Listing a puppy', () => {
  it('return the puppy in the data file', async () => {
    // ARRANGE
    vi.mocked(fs.readFile).mockImplementation(async () =>
      JSON.stringify(mockData, null, 2),
    )
    // ACT
    const res = await request(server).get('/api/v1/puppies')
    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(mockData)
    // expect(res.body).toMatchInlineSnapshot(`
    //   {
    //     "breed": "Doobee",
    //     "id": 1,
    //     "image": "/images/dog1.jpg",
    //     "name": "Scooby",
    //     "owner": "Mystery",
    //   }
    // `)
  })
  it('shows an error if loading the puppy fails', async () => {
    // ARRANGE
    vi.mocked(fs.readFile).mockImplementation(async () => {
      throw new Error('no puppies!')
    })
    // ACT
    const res = await request(server).get('/api/v1/puppies')
    // ASSERT
    expect(res.statusCode).toBe(500)
    expect(res.text).toBe('no puppies!')
  })
})
