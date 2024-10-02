// TODO: import request from superagent
// TODO: write interface for Boss objects

//// ---- THE PLAN ----/////

// 1. Test our API endpoints in Thunderclient
// 2. Create a typescript interface for the data coming from our API
// 3. Make a GET request to the API for some data - using superagent
// 4. Return the response.body object from that API request
// 5. Render the data from our response.body object in our React components

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
