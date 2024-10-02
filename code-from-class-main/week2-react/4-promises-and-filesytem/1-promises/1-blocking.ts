import * as tickets from './utils.js'

console.log('1')
console.log('2')

const makeItSlow = true
const price = tickets.getTicketPriceBlocking('Beyonce March-2023', makeItSlow)
console.log({ price })

console.log('3')
console.log('4')
console.log('5')

// Pause the video and think about what gets printed in the terminal
