import express from 'express'
import Path from 'node:path'
import url from 'node:url'

// create a new web server
export const server = express()

// boilerplate stuff
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)
// express will now expose the public/ folder to be accessible for any web requests
server.use(express.static(Path.join(__dirname, 'public')))
// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

// this is the homepage and users can view it by typing localhost:3000/
// GET '/'
server.get('/', (req, res) => {
  res.sendFile(Path.join(__dirname, 'index.html'))
})

// A route that accepts a dynamic param
// GET '/artworks/:id/:style'
server.get('/artworks/:id/:style', (req, res) => {
  const style = req.params.style // <===== dynamic param
  const artistId = req.params.id // <===== dynamic param

  // const {style, artistId} = req.params // <==== you can destructure those params like this too

  // query params are added by using the ? character and then key/value pairs
  // e.g.  localhost:3000/artworks/5/cubist?color=blue
  const color = req.query.color // <=== query param
  res.send(
    `You are viewing artwork with style: ${style}, with artist id: ${artistId} and color: ${color}`,
  )
})

// GET '/customer'
server.get('/customer', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public/customer.html'))
})

// POST '/customer'
server.post('/customer', (req, res) => {
  res.redirect('/thankyou')
})

// GET '/thankyou'
server.get('/thankyou', (req, res) => {
  res.send('Thank you for your submission')
})
