import { useState } from 'react'
import { Boss } from '../apis/users'
import { Link } from 'react-router-dom'

function Fire() {
  const [users, setUsers] = useState([
    {
      name: 'Boss 1',
      email: 'bossy-boots-1@example.org',
      username: 'CEO-007',
      id: 7,
    },
    {
      name: 'Boss 2',
      email: 'bossy-boots-2@example.org',
      username: 'CEO-008',
      id: 8,
    },
  ] as Boss[])

  // TODO: useEffect to loadUsers() on page load.

  async function loadUsers() {
    // TODO: create a variable that uses our API function
    // *** remember to handle the async operation:
    // TODO: Set the state with our "fetchUsers()"
  }

  async function handleClick() {
    // TODO: call our loadUsers() function
  }

  // TODO: use this function once you have users from the API
  // function fireThem(id: number){
  //   setUsers(users.filter(user => user.id !== id))
  // }

  return (
    <>
      <div>
        <button onClick={handleClick}>Load More Bosses</button>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              style={{ display: 'flex', gap: '3px', alignItems: 'center' }}
            >
              {/* TODO: Make this button call the fireThem(id) function */}
              <button>{`Fire 'em`}</button>
              <strong>
                <Link to={`user/${user.id}`}>{user.name}</Link>
              </strong>
              <em>{user.email}</em>
              <p>{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Fire
