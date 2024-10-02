function delayFor(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export function getTicketPriceBlocking(concertName: string, slow = false) {
  if (slow) {
    for (let index = 0; index < 10000000000; index++) {}
  }
  const randomPrice = Math.random() * 100
  return randomPrice
}

export async function getTicketPriceNonBlocking(
  concertName: string,
  succeed = true
) {
  if (!succeed) {
    return Promise.reject(
      `Unable to get price information for ${concertName} 😦`
    )
  }

  await delayFor(1000)
  const price = Math.random() * 1000
  return Promise.resolve(price)
}
