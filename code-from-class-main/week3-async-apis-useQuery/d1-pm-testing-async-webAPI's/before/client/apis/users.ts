// TODO: import request from superagent

export interface Boss {
  //  TODO: write interface for Boss objects
  name: string
  email: string
  username: string
  id: number
}

export async function fetchUsers() {
  // TODO: Make a GET request for an array of user objects
  // from the JSON PLACEHOLDER api:
  // 'https://jsonplaceholder.typicode.com/users'
  // return the res.body as the correct type.
}

export async function fetchUser(id: string) {
  // TODO: Make a get request for a single user by id
  // from the JSON PLACEHOLDER api:
  // `https://jsonplaceholder.typicode.com/users/${id}`
  //   return the res.body
}
