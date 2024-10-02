import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from './connection'
import { getFriends, searchFriends } from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('getFriends', () => {
  it('should return friends', async () => {
    const friends = await getFriends('auth0|6478f3fd75374ee3d7bc4d94')
    expect(friends).toHaveLength(2)
    expect(friends[0]).toHaveProperty('id')
    expect(friends[0]).toHaveProperty('nickname')
    expect(friends[0]).toHaveProperty('firstName')
  })
})

describe('searchFriends', () => {
  it('added friends should not be suggested', async () => {
    const friends = await searchFriends('auth0|6478f3fd75374ee3d7bc4d94', 'Ger')
    expect(friends).toHaveLength(0)
  })

  it('non added friends should be suggested', async () => {
    const friends = await searchFriends(
      'auth0|6478f3fd75374ee3d7bc4d94',
      'ones'
    )
    expect(friends).toHaveLength(1)
  })
})
