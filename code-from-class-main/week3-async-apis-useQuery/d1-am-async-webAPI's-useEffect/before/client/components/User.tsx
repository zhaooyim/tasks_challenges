import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchUser } from '../apis/users'

interface UserInterface {
  name: string
  catchphrase: string
  city: string
}

function User() {
  const { id } = useParams()
  const [user, setUser] = useState({
    name: 'Boss 1',
    city: 'Tāmaki Makaurau',
    id: 7,
    catchphrase: 'I love to be a boss',
  } as UserInterface)

  // TODO: useEffect to loadUser(id) on page load.

  async function loadUser(id: string) {
    // TODO: create a variable that uses our API function
    // *** remember to handle the async operation:
    // TODO: Set the state with our "fetchUser(id)"
  }
  return (
    <>
      <h1>Name: {user.name}</h1>
      <p>{`Corporate catchphrase: "${user.catchphrase}"`}</p>
      <p>City: {user.city}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

export default User
