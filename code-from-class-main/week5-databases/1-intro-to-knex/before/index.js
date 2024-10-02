/* eslint-disable @typescript-eslint/no-unused-vars */
import db from './connection.js'
import { newAlbum, twoAlbums } from './seedData.js'



// TODO: Get all the albums from the database: *look up .select()
async function getAllAlbums () {
  return await db('albums').select('title', 'artist')
}
// TODO: Get my favourite album: *look up .where()
async function getFavoriteAlbum() {
  return await db('albums').where('is_favorite', 1)
}

// TODO: Get all the albums that are in stock: *look up .where()
async function inStock () {
  return await db('albums').where('stock_level', '>', 0)
}

// TODO: Delete an album: *look up .del()
async function deleteAlbum(id) {
  // return await db('albums').where('id', id)
  return await db('albums').where({id}).del()
}

// TODO: Add an album: *look up .insert()
async function addAlbums (alb) {
  return await db('albums').insert(alb)
}

// TODO: Update an album - update name: *look up .update() and .where()
async function updateAlbum (id, obj) {
  return await db('albums').where({id}).update(obj)
}

// TODO: Update an album - add stock: *look up .increment() and .where()
async function addStock (id, num) {
  return await db('albums').where({id}).increment('stock_level', num)
}

// CONSOLE out the db functions:
// console.log("all albums: ", await getAllAlbums())
// console.log("get favorite album: ", await getFavoriteAlbum())
// console.log("get in-stock albums: ", await inStock())
// console.log("delete an album: ", await deleteAlbum(4))
// console.log("add an album: ", await addAlbums(newAlbum))
// console.log("add 2 albums: ", await addAlbums(twoAlbums))
// console.log("update album name: ", await updateAlbum(7, {artist: "Sphinx"}))
console.log("add stock: ", await addStock(1, 5))

