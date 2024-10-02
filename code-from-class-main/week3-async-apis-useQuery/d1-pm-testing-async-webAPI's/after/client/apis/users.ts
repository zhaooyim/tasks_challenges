// TODO: import request from superagent
import request from 'superagent'

interface Geo {
  lat: string
  lng: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface SanitisedUser {
  name: string
  city: string
  id: number
  catchphrase: string
}

export async function fetchUsers() {
  // TODO: Make a GET request for an array of user objects
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/'
  )
  // from the JSON PLACEHOLDER api:
  // 'https://jsonplaceholder.typicode.com/users'
  // return the res.body as the correct type.
  return response.body
}

export async function fetchUser(id: string) {
  // TODO: Make a get request for a single user by id
  const response = await request.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  // from the JSON PLACEHOLDER api:
  // `https://jsonplaceholder.typicode.com/users/${id}`
  //   return the res.body
  return {
    name: response.body.name,
    city: response.body.address.city,
    id: response.body.id,
    catchphrase: response.body.company.catchPhrase,
  } as SanitisedUser
}
