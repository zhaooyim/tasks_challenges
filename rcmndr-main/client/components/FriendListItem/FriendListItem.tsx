import { Friend } from '../../../types/User'
import SongList from '../SongList/SongList'
import Icon from '../UI/Icon/Icon'

interface Props {
  friend: Friend
  selectedId: string
  setSelect: React.Dispatch<React.SetStateAction<string>>
}
export default function FriendListItem({
  friend,
  selectedId,
  setSelect,
}: Props) {
  function handleSelect(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    if (selectedId === friend.id) {
      setSelect('')
    } else {
      setSelect(friend.id)
    }
  }

  return (
    <div>
      <button
        name={friend.nickname}
        data-testid={`${friend.firstName}-button`}
        onClick={(e) => handleSelect(e)}
      >
        <li className="list-none flex gap-2 ">
          <div className="self-center flex-none ">
            <Icon className="size-8">
              <i className=" self-center fa-solid fa-user text-black size-4" />
            </Icon>
          </div>
          <div className="flex text-left flex-col w-36 leading-none flex-auto ">
            <h2 className="text-white  ">{friend.nickname}</h2>
            <h3 className="text-xs text-lightPurple ">{friend.firstName}</h3>
          </div>
        </li>
      </button>
      {selectedId == friend.id && (
        <div className="container overflow-auto overscroll-contain my-4 w-80 h-36 px-4">
          <SongList userId={friend.id} />
        </div>
      )}
    </div>
  )
}
