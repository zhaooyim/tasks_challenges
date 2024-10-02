import db from '../connection.js'

export async function getAllAlbums() {
  console.log('you have hit the getAll function in the db!')
  return await db('albums').select()
}

export async function getAlbumById(id) {
  return await db('albums').where('id', id).select()
}

export async function getInStockAlbums() {
  return await db('albums').select().where('stock_level', '>', 0)
}

export async function getAlbumsForReStock() {
  return await db('albums')
    .select('id', 'stock_level')
    .where('stock_level', '<=', 1)
}

export async function deleteAlbum(id) {
  console.log('you have hit the delete function in the db!')
  return await db('albums').del().where('id', id)
}

export async function addAlbum(data) {
  console.log('you have hit the add function in the db!')
  return await db('albums').insert(data)
}

export async function updateAlbum(data, id) {
  console.log('you have hit the update function in the db!')
  return await db('albums').update(data).where('id', id)
}

// console.log(await updateAlbum(5, { stock_level: '10' }))
// console.log(await getAllAlbums())
