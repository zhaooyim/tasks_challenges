import { describe, expect, it, vi } from 'vitest'
import request from 'supertest'
import * as fs from 'node:fs/promises'

import server from '../server.ts'

vi.mock('node:fs/promises')

const testData = {
  puppies: [
    {
      id: 1,
      name: 'Coco',
      owner: 'James',
      breed: 'Pug',
      image: '/images/dog1.jpg',
    },
    {
      id: 2,
      name: 'Fido',
      owner: 'Jimmy',
      breed: 'Dog',
      image: '/images/dog2.jpg',
    },
    {
      id: 3,
      name: 'Kermit',
      owner: 'Jerm',
      breed: 'Frog',
      image: '/images/dog3.jpg',
    },
  ],
}

describe.skip('Listing all puppies', () => {
  // Happy Path:
  it('response with all puppies from the data file', async () => {
    vi.mocked(fs.readFile).mockImplementation(async () =>
      JSON.stringify(testData, null, 2)
    )
    const res = await request(server).get('/api/v1/puppies')
    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(testData)
  })

  // Sad Path: no puppies :( 
  it('responds with an empty array if there are no puppies', async () => {
    vi.mocked(fs.readFile).mockImplementation(async () =>  
      JSON.stringify({ puppies: [] } )) 
    const res = await request(server).get('/api/v1/puppies')
    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual({ puppies: [] })
  })
})

describe('Reading a specific puppy', () => {
  // Happy Path:
  it('response with a puppy from the data file', async () => {
    vi.mocked(fs.readFile).mockImplementation(async () =>
      JSON.stringify(testData, null, 2)
    )

    const res = await request(server).get('/api/v1/puppies/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toStrictEqual(testData.puppies[0])
  })

  // Sad Path: Lost puppy! 
  it('responds with 404 if the puppy does not exist', async () => {
    vi.mocked(fs.readFile).mockImplementation(async () =>
      JSON.stringify({ puppies: [] } )
    )
    const res = await request(server).get('/api/v1/puppies/1')
    // we expect a 404 status AKA "not found"
    expect(res.statusCode).toBe(404)
  })
})

describe.skip('Deleting/ adopting a puppy', () => {
  it('deletes the correct puppy', async () => {
    const data = {
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
        {
          id: 2,
          name: 'Coco',
          owner: 'Chloe',
          image: '/images/puppy2.jpg',
          breed: 'Labrador',
        },
      ],
    }
    // simulate a data file with only two puppies... a sad state
    let fileContents = JSON.stringify(data, null, 2)

    vi.mocked(fs.readFile).mockImplementation(async () => {
      return fileContents
    })

    vi.mocked(fs.writeFile).mockImplementation(async (filePath, data) => {
      if (typeof data === 'string') {
        fileContents = data
      }
    })

    await request(server).delete('/api/v1/puppies/2')

    const res = await request(server).get('/api/v1/puppies')

    expect(res.statusCode).toBe(200)

    // this is what should be written back to the data file
    expect(res.body).toEqual({
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
      ],
    })
  })
})

describe.skip('Adds a puppy', () => {
  it('adds a new puppy to the json data', async () => {
    const data = {
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
        {
          id: 2,
          name: 'Coco',
          owner: 'Chloe',
          image: '/images/puppy2.jpg',
          breed: 'Labrador',
        },
      ],
    }
    // simulate a data file with only two puppies... a sad state
    let fileContents = JSON.stringify(data, null, 2)

    vi.mocked(fs.readFile).mockImplementation(async () => {
      return fileContents
    })

    vi.mocked(fs.writeFile).mockImplementation(async (filePath, data) => {
      if (typeof data === 'string') {
        fileContents = data
      }
    })

    await request(server).post('/api/v1/puppies/').send({
//  NOTE: there is no id in the req.body because it will be generated in the db function
      name: 'Sam',
      breed: 'Pug',
      owner: 'Fred',
      image: '/images/puppy3.jpg',
    })

    const res = await request(server).get('/api/v1/puppies')
    expect(res.statusCode).toBe(200)

    // this is what should be written back to the data file
    expect(res.body).toEqual({
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
        {
          id: 2,
          name: 'Coco',
          owner: 'Chloe',
          image: '/images/puppy2.jpg',
          breed: 'Labrador',
        },
        {
          id: 3,
          name: 'Sam',
          breed: 'Pug',
          owner: 'Fred',
          image: '/images/puppy3.jpg',
        },
      ],
    })
  })
})

describe.skip('editing a puppy', () => {
  it('updates the correct puppy', async () => {
    const data = {
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
        {
          id: 2,
          name: 'Coco',
          owner: 'Chloe',
          image: '/images/puppy2.jpg',
          breed: 'Labrador',
        },
      ],
    }

    let fileContents = JSON.stringify(data, null, 2)

    vi.mocked(fs.readFile).mockImplementation(async () => {
      return fileContents
    })

    vi.mocked(fs.writeFile).mockImplementation(async (filePath, data) => {
      if (typeof data === 'string') {
        fileContents = data
      }
    })

    await request(server).patch('/api/v1/puppies/2').send({
      id: 2,
      name: 'Sam',
      breed: 'Pug',
      owner: 'Fred',
      image: '/images/puppy3.jpg',
    })

    const res = await request(server).get('/api/v1/puppies')
    expect(res.statusCode).toBe(200)

    // this is what should be written back to the data file
    expect(res.body).toEqual({
      puppies: [
        {
          id: 1,
          name: 'Fido',
          owner: 'Fred',
          image: '/images/puppy1.jpg',
          breed: 'Labrador',
        },
        {
          id: 2,
          name: 'Sam',
          breed: 'Pug',
          owner: 'Fred',
          image: '/images/puppy3.jpg',
        },
      ],
    })
  })
})