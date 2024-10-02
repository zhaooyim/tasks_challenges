import getDb from './db.js'
import * as pathik from './db.js'

const connectonString = getDb()

console.log(connectonString)
console.log(pathik.getCustomers())
console.log(pathik.pageLimit)
console.log(pathik.add(1, 5))
