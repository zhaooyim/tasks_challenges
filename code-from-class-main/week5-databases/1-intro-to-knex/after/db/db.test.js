import { beforeAll, beforeEach, expect, describe, it } from 'vitest'
// - import db functions
import {
  deleteAlbum,
  getAllAlbums,
  getInStockAlbums,
  addAlbum,
  updateAlbum,
} from 'db.js'
// - add knexfile config for 'test' in :memory:
// - import db-config from connection
import db from '../connection.js'

// - beforeAll and beforeEach to reset the migrations and seeds
beforeAll(async () => {
  // console.log('before all')
  await db.migrate.latest()
})
beforeEach(async () => {
  // console.log('before each ')
  await db.seed.run()
})

describe('getAllAlbums', () => {
  it('returns an array of all albums', async () => {
    //ARRANGE
    const exampleObj = {
      id: 1,
      title: 'Purple Rain',
      artist: 'Prince',
      stock_level: 2,
      is_favorite: 0,
    }
    //ACT
    const albums = await getAllAlbums()
    //ASSERT
    expect(albums).toHaveLength(5)
    expect(albums[0]).toStrictEqual(exampleObj)
    expect(albums[albums.length - 1].artist).toBe('Olivia Rodrigo')
  })
})

describe('getInStockAlbums', () => {
  it('returns an array of all albums with a stock level of more than 0', async () => {
    //ARRANGE
    //ACT
    const albums = await getInStockAlbums()
    //ASSERT
    expect(albums).toHaveLength(4)
  })
})

describe('deleteAlbum', () => {
  it('deletes the record from the database', async () => {
    //ARRANGE
    const id = 1
    //ACT
    await deleteAlbum(id)
    const albums = await getAllAlbums()
    //ASSERT
    expect(albums.find((album) => album.id === id)).toBe(undefined)
  })

  it('returns the number of deleted records', async () => {
    //ARRANGE
    const id = 1
    //ACT
    const result = await deleteAlbum(id)
    //ASSERT
    expect(result).toBe(1)
  })

  it('throws an error if no id passed in', async () => {
    //ARRANGE
    let error = ''
    //ACT
    try {
      await deleteAlbum()
    } catch (e) {
      error = e.message
    }
    //ASSERT
    expect(error).toBe(
      'Undefined binding(s) detected when compiling DEL. Undefined column(s): [id] query: delete from `albums` where `id` = ?',
    )
  })
})

describe('addAlbum', () => {
  it('adds a new album to the database', async () => {
    //ARRANGE
    const album = {
      title: 'Sundowning',
      artist: 'Sleep Token',
      stock_level: '10',
      is_favorite: true,
    }
    //ACT
    await addAlbum(album)
    const albums = await getAllAlbums()
    //ASSERT
    expect(albums).toHaveLength(6)
    expect(albums[5].title).toBe('Sundowning')
  })
  it('throws an error if no album data is passed in', async () => {
    //ARRANGE
    let error = ''
    //ACT
    try {
      await addAlbum()
    } catch (e) {
      error = e.message
    }
    //ASSERT
    expect(error).toBe('The query is empty')
  })
})

describe('updateAlbum', () => {
  const updateData = {
    title: 'Take Me Back to Eden',
    artist: 'sleep Token',
  }
  it('returns the number of deleted records', async () => {
    //ARRANGE
    const id = 2
    const expected = 1
    //ACT
    const result = await updateAlbum(updateData, id)
    //ASSERT
    expect(result).toBe(expected)
  })
  it('updates the record in the database', async () => {
    //ARRANGE
    const id = 1
    //ACT
    await updateAlbum(updateData, id)
    const albums = await getAllAlbums()
    //ASSERT
    expect(albums).toHaveLength(5)
    expect(albums.find((album) => album.id === 1).title).toBe(
      'Take Me Back to Eden',
    )
  })
  it('throws an error if no id passed in', async () => {
    //ARRANGE
    let error = ''
    //ACT
    try {
      await deleteAlbum()
    } catch (e) {
      error = e.message
    }
    //ASSERT
    expect(error).toBe(
      'Undefined binding(s) detected when compiling DEL. Undefined column(s): [id] query: delete from `albums` where `id` = ?',
    )
  })
})
