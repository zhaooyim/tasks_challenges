import { describe, it, expect } from 'vitest'
import request from 'supertest'
import nock from 'nock'
import 'dotenv/config'
import server from '../../server.ts'
import mockMovie from './mockMovie.ts'

const BEARER_ACCESS_TOKEN = process.env.TMDB_BEARER_ACCESS_TOKEN

describe('movies', () => {
  it('gives the movie I expect', async () => {
    // ARRANGE
    const id = 13
    const scope = nock('https://api.themoviedb.org', {
      reqheaders: {
        authorization: `Bearer ${BEARER_ACCESS_TOKEN}`,
      },
    })
      .get(`/3/movie/${id}`)
      .reply(200, mockMovie)

    // ACT
    const res = await request(server).get(`/api/v1/movies/${id}`)
    // ASSERT
    expect(res.status).toBe(200)
    expect(res.body).toStrictEqual(mockMovie)
    expect(scope.isDone()).toBe(true)
  })

  it('shows an error when the external api fails', async () => {
    // ARRANGE
    const id = 13
    const scope = nock('https://api.themoviedb.org', {
      reqheaders: {
        authorization: `Bearer ${BEARER_ACCESS_TOKEN}`,
      },
    })
      .get(`/3/movie/${id}`)
      .reply(500)

    // ACT
    const res = await request(server).get(`/api/v1/movies/${id}`)

    // ASSERT
    expect(res.status).toBe(500)
    expect(scope.isDone()).toBe(true)
  })
})
