import { useState } from 'react'
import FriendListItem from '../../components/FriendListItem/FriendListItem'

import useFriends from '../../hooks/useFriends'

function MyFriends() {
  const { data: friends, isLoading, isError } = useFriends()
  const [selectedId, setSelectedId] = useState('')

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">My existing friends</h1>
        <p> Fetching your friends...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">My existing friends</h1>
        <p>
          There was an error fetching your friends.. or maybe there are none
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My existing friends</h1>
      <ul className="space-y-4">
        {friends &&
          friends?.map((friend) => (
            <li
              key={`${friend.id}${friend.nickname}`}
              data-testid={`friend-card`}
            >
              <FriendListItem
                friend={friend}
                selectedId={selectedId}
                setSelect={setSelectedId}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MyFriends
