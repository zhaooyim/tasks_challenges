// TODO: import request from superagent
import request from 'superagent'

// TODO: Make some TS interfaces for our data

interface Geo {
  lat: string, 
  lng: string
}

interface Company {
    name: string,
    catchPhrase: string,
    bs: string

}

interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
  }

export interface User{
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address
  phone: string,
  website: string,
  company: Company
}

export interface UserDetails {
  name: string, 
  city: string, 
  id: string | undefined, 
  catchphrase: string
}

export async function fetchUsers() {
  // TODO: Make a GET request for an array of user objects
  // contact the API endpoint 
  const response = await request.get('https://jsonplaceholder.typicode.com/users/')
  // await that contact 
  return response.body as User[]
  //return our data as a response  
}

export async function fetchUser(id: string) {
  // TODO: Make a get request for a single user by id
  const response = await request.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  // TODO: Return only some data, as UserProfile
  return {
    name: response.body.name, 
    city: response.body.address.city, 
    id: response.body.id, 
    catchphrase: response.body.company.catchPhrase
  } as UserDetails

}
