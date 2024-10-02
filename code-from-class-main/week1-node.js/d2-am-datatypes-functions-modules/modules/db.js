export function getCustomers() {
  const customers = ['Alice', 'Dave', 'Charlie']
  return customers
}

export const pageLimit = 100

export default function getDbConnection() {
  return 'connection established'
}

function calculateTax() {
  console.log('calculateing tax now')
}

export const add = (a, b) => a + b
