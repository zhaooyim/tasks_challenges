import request from 'supertest'
import { server } from './server.js'
import { test, expect } from 'vitest'

test("GET '/' res with index.html", async () => {
  //ARRANGE
  const expected = '<h1>Welcome to the matai Art Shop</h1>'
  //ACT
  const response = await request(server).get('/')
  // console.log(response.text)
  //ASSERT
  expect(response.text).toContain(expected)
})

test("GET '/artworks/:id/:style?color=color res with appropriate text based on params", async () => {
  //ARRANGE
  const expected = "You are viewing artwork with style: cubist, with artist id: 2 and color: red"
  //ACT
  const response = await request(server).get('/artworks/2/cubist?color=red')
  //ASSERT
  expect(response.text).toContain(expected)
})

test("GET '/artworks/:id/:style?color=color res with appropriate text based on params", async () => {
  //ARRANGE
  const expected = "You are viewing artwork with style: cubist, with artist id: 2 and color: undefined"
  //ACT
  const response = await request(server).get('/artworks/2/cubist')
  //ASSERT
  expect(response.text).toContain(expected)
})

// POST '/customer' route responds with a redirect
test("POST '/customer' redirects", async () => {
  //ARRANGE
  //ACT
  const response = await request(server)
  .post('/customer')
  .send({customerName: "Jared"})
  .type('form')
  //ASSERT
  expect(response.redirect).toBe(true)
})

test("GET '/thankyou' res with 'Thank you for your submission'", async () => {
  //ARRANGE
  //ACT
  const response = await request(server).get('/thankyou')

  //ASSERT
  expect(response.text).toContain('Thank you for your submission')
})
