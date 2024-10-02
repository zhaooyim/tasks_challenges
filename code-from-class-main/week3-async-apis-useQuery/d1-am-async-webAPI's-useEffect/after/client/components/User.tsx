import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchUser, UserDetails } from '../apis/users'

function User() {
  const { id } = useParams()
  const [user, setUser] = useState({
    name: 'Boss 1',
    city: 'Tāmaki Makaurau',
    id: id,
    catchphrase: 'I love to be a boss',
  } as UserDetails)

  // TODO: useEffect to loadUser(id) on page load.
  useEffect(() => {
    loadUser(id as string)
  }, [id])

  async function loadUser(id: string) {
    // TODO: create a variable that uses our API function
    // *** remember to handle the async operation:
    const response = await fetchUser(id)
    // TODO: Set the state with our "fetchUser(id)"
    setUser(response)
  }
  return (
    <>
      <h1>Name: {user.name}</h1>
      <p>{`Corporate catchphrase: "${user.catchphrase}"`}</p>
      <p>City: {user.city}</p>
      <p>ID: {user.id}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

export default User
