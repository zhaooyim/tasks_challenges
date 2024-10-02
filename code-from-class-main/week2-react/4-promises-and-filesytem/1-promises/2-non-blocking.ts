import * as tickets from './utils.js'

console.log('1')
console.log('2')

tickets.getTicketPriceNonBlocking('Beyonce March-2023').then((price) => {
  console.log({ price })
})

console.log('3')
console.log('4')

// Pause the video and think what's going to happen
