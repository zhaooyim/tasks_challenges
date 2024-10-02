import server from './server'
import dotenv from 'dotenv'
import path from 'path'

const __dirname = new URL('.', import.meta.url).pathname

dotenv.config({ path: path.join(__dirname, '../.env')})

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
