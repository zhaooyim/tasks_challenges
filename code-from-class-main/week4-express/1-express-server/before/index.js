import {server} from './server.js'

// Open a port for the server - 3000 is a convention
server.listen(3000, () => {
  console.log('server is listening on port 3000')
})

// Write one route,
// then split routes into another module
// server.js

