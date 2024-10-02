import { error } from 'node:console'
import {readFile} from 'node:fs/promises'
import * as Path from 'node:path'

try {
  const filePath= './secret-stuff.txt'
  const results = await readFile(Path.resolve(filePath), {encoding: 'UTF-8'})
  console.log(results)
} catch (err){
  console.error(err.message)
}


//fsPromises.readFile(file, data [ , options])

// fsPromises
//   .readFile('./secret-stuff.txt', 'utf-8')
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log(error)
//   })

// //fsPromises.writeFile(path, data [, options])

// fsPromises.writeFile('./secret-stuff.txt', 'I said I had two cups of coffee but I drank 3')

console.log('End!')
