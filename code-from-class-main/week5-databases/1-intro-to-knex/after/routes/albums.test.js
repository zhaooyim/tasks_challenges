import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import connection from '../connection'
import request from 'supertest'
import server from '../server'

// These are our integration tests - we are testing both our routes and the db functions called by our routes

// THESE WILL RUN OUR DB MIGRATIONS AND SEEDS IN OUR TEMP MEMORY, AND THEN WIPE THE TEMP MEMORY WHEN THE TESTS FINISH
beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('getting all albums', () => {
  it('responds with an array of all albums', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/api/v1/albums')
    // ASSERT
    expect(res.body).toHaveLength(5)
    expect(res.body).toStrictEqual([
      {
        id: 1,
        title: 'Purple Rain',
        artist: 'Prince',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 2,
        title: 'SOS',
        artist: 'SZA',
        stock_level: 1,
        is_favorite: 0,
      },
      {
        id: 3,
        title: 'Are We There Yet?',
        artist: 'Dizzy Fae',
        stock_level: 3,
        is_favorite: 0,
      },
      {
        id: 4,
        title: 'Come Get It!',
        artist: 'Rick James',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 5,
        title: 'GUTS (spilled)',
        artist: 'Olivia Rodrigo',
        stock_level: 0,
        is_favorite: 0,
      },
    ])
  })
})

describe('deleting an album', () => {
  it('successfully deletes an album from the database when passed an id', async () => {
    // ARRANGE
    const id = 5
    // ACT
    await request(server).delete(`/api/v1/albums/${id}`)
    // ASSERT
    const res = await request(server).get('/api/v1/albums')

    expect(res.body).toHaveLength(4)
    expect(res.body).toStrictEqual([
      {
        id: 1,
        title: 'Purple Rain',
        artist: 'Prince',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 2,
        title: 'SOS',
        artist: 'SZA',
        stock_level: 1,
        is_favorite: 0,
      },
      {
        id: 3,
        title: 'Are We There Yet?',
        artist: 'Dizzy Fae',
        stock_level: 3,
        is_favorite: 0,
      },
      {
        id: 4,
        title: 'Come Get It!',
        artist: 'Rick James',
        stock_level: 2,
        is_favorite: 0,
      },
    ])
  })
})

describe('adding an album', () => {
  it('successfully adds a new album to the database', async () => {
    // ARRANGE
    const newAlbum = {
      title: 'My new album',
      artist: 'Agent Vitest',
      stock_level: 20,
      is_favorite: 1,
    }
    // ACT
    await request(server).post('/api/v1/albums').send(newAlbum)
    const res = await request(server).get('/api/v1/albums')
    // ASSERT
    expect(res.body).toHaveLength(6)
    expect(res.body).toStrictEqual([
      {
        id: 1,
        title: 'Purple Rain',
        artist: 'Prince',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 2,
        title: 'SOS',
        artist: 'SZA',
        stock_level: 1,
        is_favorite: 0,
      },
      {
        id: 3,
        title: 'Are We There Yet?',
        artist: 'Dizzy Fae',
        stock_level: 3,
        is_favorite: 0,
      },
      {
        id: 4,
        title: 'Come Get It!',
        artist: 'Rick James',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 5,
        title: 'GUTS (spilled)',
        artist: 'Olivia Rodrigo',
        stock_level: 0,
        is_favorite: 0,
      },
      {
        id: 6,
        title: 'My new album',
        artist: 'Agent Vitest',
        stock_level: 20,
        is_favorite: 1,
      },
    ])
  })
})

describe('updating an album', () => {
  it('successfully updates an existing album, given some updated data and an id', async () => {
    // ARRANGE
    const id = 1
    const updatedData = {
      stock_level: 10,
    }
    // ACT
    await request(server).patch(`/api/v1/albums/${id}`).send(updatedData)
    // ASSERT
    const res = await request(server).get('/api/v1/albums')

    expect(res.body).toStrictEqual([
      {
        id: 1,
        title: 'Purple Rain',
        artist: 'Prince',
        stock_level: 10,
        is_favorite: 0,
      },
      {
        id: 2,
        title: 'SOS',
        artist: 'SZA',
        stock_level: 1,
        is_favorite: 0,
      },
      {
        id: 3,
        title: 'Are We There Yet?',
        artist: 'Dizzy Fae',
        stock_level: 3,
        is_favorite: 0,
      },
      {
        id: 4,
        title: 'Come Get It!',
        artist: 'Rick James',
        stock_level: 2,
        is_favorite: 0,
      },
      {
        id: 5,
        title: 'GUTS (spilled)',
        artist: 'Olivia Rodrigo',
        stock_level: 0,
        is_favorite: 0,
      },
    ])
  })
})
