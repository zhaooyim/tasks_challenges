import { beforeAll, beforeEach, describe, it, expect } from 'vitest'
import db from './connection'
import { searchFriends } from './users'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('FindFriends', () => {
  // Happy path for user/query search
  it('searching for a specific user returns a user', async () => {
    // Arrange
    const userAuthId = 'auth0|66d7a148109eb8cd0e553721'
    const nickname = 'DestroyOrbison'
    // Act
    const actual = await searchFriends(userAuthId, nickname)
    // Assert
    const output = [
      {
        auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
        first_name: 'Jared',
        last_name: 'Pinfold',
        nickname: 'DestroyOrbison',
      },
    ]

    expect(actual).toStrictEqual(output)
  })

  // Sad path for query search
  it('searching with a query that doesnt exist', async () => {
    // Arrange

    // Act

    // Input
    const actual = await searchFriends(
      'auth0|66d7a148109eb8cd0e553721',
      'sdfgusahdgkhsfkdl'
    )

    // Output
    const output = [] as unknown

    // Assert
    expect(actual).toStrictEqual(output)
  })

  // Potential Issue?:
  // A user and a genre can be included in the same search
  // e.g. If I search 'pop' but a user named 'poppy' exists with the current db function (searchFriends), which takes precedence
  // does this matter --> can/should this be refined?

  it('using a query that contains both nicknames/names and genre', async () => {
    // Arrange
    const userAuthId = 'auth0|66d7a148109eb8cd0e553721'
    const nickname = 'er'
    // Act
    const actual = await searchFriends(userAuthId, nickname)
    // Assert
    const output = [
      {
        auth0_id: 'auth0|6478f3fd75374ee3d7bc4d94',
        first_name: 'Jared',
        last_name: 'Pinfold',
        nickname: 'DestroyOrbison',
      },
      {
        auth0_id: 'auth0|649024f773375442becf3102',
        first_name: 'Prue',
        last_name: 'Singh',
        nickname: 'GertrudeDiamond',
      },
      {
        auth0_id: 'auth0|6490255b0c2119ef3db1e4aa',
        first_name: 'Hannah',
        last_name: 'Burgoyne',
        nickname: 'Xx~hannah_banana~xX',
      },
      {
        auth0_id: 'auth0|foo123',
        first_name: 'Gaby',
        last_name: 'Perez',
        nickname: 'GADstack',
      },
    ]

    expect(actual).toStrictEqual(output)
  })
})

// Happy path for query/genre search
// Search results include only nicknames and firstnames, but match against last names/hidden fields. SO weird UX when results return that don't obviously match query
// To the user the number is hidden
