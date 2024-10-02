import { useEffect, useState } from 'react'
import { User, fetchUsers } from '../apis/users'
import { Link } from 'react-router-dom'

function Fire() {
  useEffect(() => {
    fetchUsers()
      .then((users) => setUsers(users))
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }, [])
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([
  ] as User[])

  // TODO: useEffect to loadUsers() on page load.
  // Donezo
  async function loadUsers() {
    // TODO: create a variable that uses our API function

    // *** remember to handle the async operation:
    const users = await fetchUsers()

    // TODO: Set the state with our "fetchUsers()"
    setUsers(users)
  }

  async function handleClick() {
    // TODO: call our loadUsers() function
    await loadUsers()
  }

  // TODO: use this function once you have users from the API
  function fireThem(id: number) {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Load More Bosses</button>
        {users.length > 0 ? <ul>
          {users.map((user) => (
            <li
              key={user.id}
              style={{ display: 'flex', gap: '3px', alignItems: 'center' }}
            >
              {/* TODO: Make this button call the fireThem(id) function */}
              <button onClick={() => fireThem(user.id)}>{`Fire 'em`}</button>
              <strong>
                <Link to={`user/${user.id}`}>{user.name}</Link>
              </strong>
              <em>{user.email}</em>
              <p>{user.username}</p>
            </li>
          ))}
        </ul>
        : error ? <p>Error!</p> : <p>loading</p>}
      </div>
    </>
  )
}

export default Fire
