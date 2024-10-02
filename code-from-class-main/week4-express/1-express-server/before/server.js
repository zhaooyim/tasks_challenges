import express from 'express'
import Path from 'node:path'
import url from 'node:url'

// create a new web server and export it
export const server = express()

// boilerplate stuff
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// express will now expose the public/ folder to be accessible for any web requests
server.use(express.static(Path.join(__dirname, 'public')))
// express can handle POST requests with forms
server.use(express.urlencoded({ extended: false }))

// REQUESTS GO HERE:

server.get('/new', (req, res) => {
  res.sendFile(Path.join(__dirname, 'public', 'new.html'))
})

//query params
// /cool?clothing=hat&color=red
server.get('/cool', (req, res) => {
  const {clothing, color} = req.query
  res.send(`Hey, cool ${color} ${clothing}, pal`)
})

server.get('/art/:medium/:artist', (req, res) => {
  const {medium, artist} = req.params
  res.send(`Hey, cool art using ${medium} by ${artist}, pal`)

})

server.get('/json', (req, res) => {
  res.json({name: "Jared", isTeacher: true})
})

server.post('/new', (req, res) => {
  const {newUser} = req.body
  // create a new db entry
  // res.json({name: newUser, id: 5})
  res.redirect('/cool?clothing=sweater&color=yellow')
})