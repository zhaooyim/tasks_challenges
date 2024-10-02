import * as tickets from './utils.js'

console.log('1')
console.log('2')

setInterval(() => {
  console.log('alive')
}, 1000)

const price = await tickets.getTicketPriceNonBlocking('Beyonce March-2023')
console.log({ price })

console.log('3')
console.log('4')

// Pause the video and think what's going to happen
