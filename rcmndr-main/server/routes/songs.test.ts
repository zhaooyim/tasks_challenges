import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/songs'
import { getMockToken } from './mockToken'
import { Song } from '../../types/Song'

vi.mock('../db/songs')
vi.mock('../logger.ts')

describe('PATCH /api/v1/songs/:id', () => {
  it('takes updated song data & song ID to update the songs db', async () => {
    //ARRANGE
    const id = 1
    const song = { genre: 'Indie Rock' } as Song
    //ACT
    vi.mocked(db.updateSong).mockResolvedValue(200)
    const response = await request(server)
      .patch(`/api/v1/songs/${id}`)
      .send({ song })
      .set('authorization', `Bearer ${getMockToken()}`)
    //ASSERT
    expect(response.status).toBe(200)
  })

  it('should return 401 when no access token is passed', async () => {
    vi.mocked(db.updateSong).mockRejectedValue(new Error('test'))

    const song = { genre: 'Indie Rock' } as Song
    const response = await request(server)
      .patch('/api/v1/songs/1')
      .send({ song })

    expect(response.status).toBe(401)
  })
})
const user_id = 'auth0|6478f3fd75374ee3d7bc4d94'

describe('GET /api/v1/songs', () => {
  it('should return 200 with all the users non-banned songs', async () => {
    const MOCK_SONGS: Song[] = [
      {
        id: '2',
        title: 'By Design',
        artist: 'Tigercub',
        genre: 'Indie Rock',
        link: 'https://open.spotify.com/track/6ICdz2wvVMDC4u801OwHA2?si=8e214d39012c4685',
      },
      {
        id: '3',
        title: 'Computers',
        artist: 'Clown Core',
        genre: 'Jazz Metal',
        link: 'https://open.spotify.com/track/6izX4jKOXNfHHIsOL7YkzF?si=c03b5e5889374a62',
      },
      {
        id: '4',
        title: 'I look to you (feat. Kimbra)',
        artist: 'Miami Horror',
        genre: 'Funky House',
        link: 'https://open.spotify.com/track/0L0GeZL4lyx34nYDzsNuG4?si=a89fdafe24d74899',
      },
      {
        id: '5',
        title: 'I WIll Be Okay Everything',
        artist: 'The World Is A Beautiful Place & I Am No Longer Afraid To Die',
        genre: 'Emo',
        link: 'https://open.spotify.com/track/6OGIl9BPa2H6UVyC0FxHM5?si=c07d49a7c1e54371',
      },
      {
        id: '6',
        title: "You Know That Aint Them Dogs' Real Voices",
        artist: 'iwrestledabearonce',
        genre: 'Mathcore',
        link: 'https://open.spotify.com/track/0NWxL0fO7j8pUSgKncipY6?si=8ed18a0ed3894793',
      },
      {
        id: '7',
        title: 'Rule The Beast',
        artist: 'Torche',
        genre: 'Stoner Rock',
        link: 'https://open.spotify.com/track/0RzryWDVHhsziHkXsT2HqV?si=b42fc552b8ff497d',
      },
      {
        id: '8',
        title: 'From Liquid',
        artist: 'Mr Kitty',
        genre: 'Synthwave',
        link: 'https://open.spotify.com/track/4jQdD7SuEB9evpBL3brmbC?si=276ce37528b94b81',
      },
      {
        id: '9',
        title: 'Cat Fantastic',
        artist: 'TTNG',
        genre: 'Math Rock',
        link: 'https://open.spotify.com/track/1kaWnMc0ryiFtPwWVKmZtb?si=aea1f12a4bdc4eef',
      },
      {
        id: '10',
        title: 'Gods',
        artist: 'Sleep Token',
        genre: 'Metal',
        link: null,
      },
      {
        id: '11',
        title: 'Clairvoyant',
        artist: 'BRNS',
        genre: 'Alt Rock',
        link: 'https://open.spotify.com/track/0XDxLlLqhuqsig4cat7aa1?si=08132d96cdae4436',
      },
      {
        id: '13',
        title: 'Escape From Midwich Valley',
        artist: 'Carpenter Brut',
        genre: 'Synthwave',
        link: 'https://open.spotify.com/track/1jBP9dV1MJhVcNh75yCT6I?si=6a89028c425949d3',
      },
    ]

    vi.mocked(db.getSongs).mockResolvedValue(MOCK_SONGS)
    const response = await request(server)
      .get(`/api/v1/songs/${user_id}`)
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual(MOCK_SONGS)
  })

  it('should return 404 when no access token is passed', async () => {
    vi.mocked(db.getSongs).mockRejectedValue(new Error('test'))
    const response = await request(server)
      .get('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(404)
  })
})

describe('POST /api/v1/songs', () => {
  it('should return 201 when creating a new song', async () => {
    const draft = {
      userId: 'auth0|6478f3fd75374ee3d7bc4d94',
      title: 'Smooth Criminal',
      artist: 'MJ',
      genre: 'Pop',
      link: 'https://soundcloud.com/umarkx/michael-jackson-smooth-criminal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      description: 'This is a great song',
    }

    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(draft)
    expect(response.status).toBe(201)
  })

  it('should return 400 if invalid song draft was given', async () => {
    const draft = {
      userId: 'auth0_id_test',
      title: 'Sad path test',
      artist: 999, // Wrong data type
      genre: 'Pop',
      link: 'https://soundcloud.com/umarkx/michael-jackson-smooth-criminal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      description: 'This is a sad song',
    }

    const response = await request(server)
      .post('/api/v1/songs')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(draft)
    expect(response.status).toBe(400)
  })
})
