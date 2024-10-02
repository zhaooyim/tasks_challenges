import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SanitisedUser, fetchUser } from '../apis/users'

function User() {
  const { id } = useParams()
  const [user, setUser] = useState({
    name: 'Boss 1',
    city: 'Tāmaki Makaurau',
    id: 7,
    catchphrase: 'I love to be a boss',
  } as SanitisedUser)

  // TODO: useEffect to loadUser(id) on page load.
  useEffect(() => {
    loadUser(id as string)
  }, [])

  async function loadUser(id: string) {
    // TODO: create a variable that uses our API function
    // *** remember to handle the async operation:
    const user = await fetchUser(id)
    // TODO: Set the state with our "fetchUser(id)"
    setUser(user)
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
