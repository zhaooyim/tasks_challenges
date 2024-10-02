const prices = [11, 200, 300]

const total = invoices.reduce((total, price) => total + price)
console.log(total)

const invoices = [{ price: 100 }, { price: 200 }, { price: 300 }]

const sum = invoices.reduce((total, invoice) => total + invoice.price, 0)
console.log(sum)
