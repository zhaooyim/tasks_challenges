import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'

import { deleteSong, getSongs, insertSong } from './songs'
import { SongDraft, SongId } from '../../types/Song'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getSongs', () => {
  it('only return non-explicit songs', async () => {
    const mock_song = {
      id: '12',
      userId: '1',
      title: 'Dark All Day',
      artist: 'Gunship',
      genre: 'Synthwave',
      link: 'https://open.spotify.com/track/4GBJomKlZNRnODfpL299pw?si=6dc5f4da63e74507',
    }
    const userId = 'auth0|6478f3fd75374ee3d7bc4d94'
    const songs = await getSongs(userId)
    expect(songs.includes(mock_song)).toBe(false)
  })
})

describe('deleteSong', () => {
  it('should delete a song', async () => {
    const deleted_song = {
      id: '10',
      userId: '1',
      title: 'Gods',
      artist: 'Sleep Token',
      genre: 'Metal',
      link: null,
    }
    const id = 10
    const userId = 'auth0|6478f3fd75374ee3d7bc4d94'
    await deleteSong(id)
    const remainingSongs = await getSongs(userId)
    expect(remainingSongs.includes(deleted_song)).toBe(false)
  })
})

describe('addSong', () => {
  it('should add a new song', async () => {
    const userId = 'auth0|6478f3fd75374ee3d7bc4d94'
    const draft: SongDraft = {
      userId: userId,
      title: 'Test Track',
      artist: 'Test Artist',
      genre: 'Test Genre',
      link: 'http://test.link',
      description: 'This is a test',
    }

    const results: SongId[] = await insertSong(draft)

    const newSongId = results[0].id

    const expected = {
      id: newSongId,
      title: draft.title,
      artist: draft.artist,
      genre: draft.genre,
      link: draft.link,
    }

    const allSongs = await getSongs(userId)
    expect(allSongs).toContainEqual(expected)
  })
})
