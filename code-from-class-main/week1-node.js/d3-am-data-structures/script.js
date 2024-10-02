import fs from 'node:fs/promises'
import { faker } from '@faker-js/faker'

async function main() {
  const data = []
  for (let i = 0; i < 10; i++) {
    const vehicle = {
      vehicle: faker.vehicle.vehicle(),
      vin: faker.vehicle.vin(),
      fuel: faker.vehicle.fuel(),
      color: faker.vehicle.color(),
      price: faker.number.float({ min: 1000, max: 50000, precision: 2 }),
      owner: {
        name: faker.person.firstName(),
        phone: faker.phone.imei(),
      },
    }
    data.push(vehicle)
  }

  await fs.writeFile(`data.json`, JSON.stringify(data, null, 2)) // Learning more about the filesystem in week 4.
}

main()
