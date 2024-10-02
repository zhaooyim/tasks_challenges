import { useEffect, useState } from 'react'
import { fetchUsers } from '../apis/users'
import { Link } from 'react-router-dom'

function Fire() {
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([
    {
      name: 'Boss 1',
      id: 1,
      email: 'boss@example.com',
      username: 'CEO-007',
    },
    {
      name: 'Boss 2',
      id: 2,
      email: 'boss2@example.com',
      username: 'CEO-008',
    },
  ])

  // TODO: useEffect to loadUsers() on page load.
  useEffect(() => {
    fetchUsers().then((users) => setUsers(users)).catch((error) => {
      console.log(error)
      setError(true)
    })
  }, [])

  async function loadUsers() {
    // TODO: create a variable that uses our API function
    const response = await fetchUsers()
    // *** remember to handle the async operation:
    // TODO: Set the state with our "fetchUsers()"
    setUsers(response)
  }

  async function handleClick() {
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
        {users ? (
          <ul>
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
        ) : error ? (
          <p>Error!</p>
        ) : (
          <p>loading</p>
        )}
      </div>
    </>
  )
}

export default Fire
