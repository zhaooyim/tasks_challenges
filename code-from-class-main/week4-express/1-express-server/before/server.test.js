import request from 'supertest'
import { server } from './server.js'
import { test, expect } from 'vitest'

// test an html or text response
test("GET '/' res with index.html", async () => {
  //ARRANGE
  const expected = "It's servin' time, y'all"
  //ACT
  const response = await request(server).get('/')
  //ASSERT
  expect(response.text).toContain(expected)
})

// test an html or text response using params
test("GET '/art/:medium/:artist' res with params in text", async () => {
    //ARRANGE
    const expected = "Hey, cool art using paint by dave, pal"
    //ACT
    const response = await request(server).get('/art/paint/dave')
    //ASSERT
    expect(response.text).toContain(expected)
})

// test an html or text response using a query
test("GET '/cool' res with query params in text", async () => {
    //ARRANGE
    const expected = "Hey, cool brown cloak, pal"
    //ACT
    const response = await request(server).get('/cool?color=brown&clothing=cloak')
    //ASSERT
    expect(response.text).toContain(expected)
})

// test a JSON response
test("GET '/json' res with json", async () => {
    //ARRANGE
    const expected = {name: "Jared", isTeacher: true}
    //ACT
    const response = await request(server).get('/json')
    //ASSERT
    expect(response.body).toStrictEqual(expected)
})

// test a redirect response
test("POST '/new' with form data res with redirect", async () => {
    //ARRANGE
    //ACT
    const response = await request(server)
      .post('/new')
      .send({newUser: "Jared"})
    //ASSERT
    expect(response.redirect).toBe(true)
})