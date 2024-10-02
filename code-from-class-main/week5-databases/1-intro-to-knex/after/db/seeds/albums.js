export const albumSeeds = [
  {
    id: 1,
    title: 'Purple Rain',
    artist: 'Prince',
    stock_level: '2',
    is_favorite: false,
  },
  {
    id: 2,
    title: 'SOS',
    artist: 'SZA',
    stock_level: '1',
    is_favorite: false,
  },
  {
    id: 3,
    title: 'Are We There Yet?',
    artist: 'Dizzy Fae',
    stock_level: '3',
    is_favorite: false,
  },
  {
    id: 4,
    title: 'Come Get It!',
    artist: 'Rick James',
    stock_level: '2',
    is_favorite: false,
  },
  {
    id: 5,
    title: 'GUTS (spilled)',
    artist: 'Olivia Rodrigo',
    stock_level: '0',
    is_favorite: false,
  },
]

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert(albumSeeds)
}
