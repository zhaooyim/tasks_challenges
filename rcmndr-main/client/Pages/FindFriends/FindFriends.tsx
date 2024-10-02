import { ChangeEvent, useEffect, useState } from 'react'
import { getTopTenRecs, searchFriends } from '../../apis/user'
import { useAuth0 } from '@auth0/auth0-react'
import { QueryResult } from '../../../types/User'
import Icon from '../../components/UI/Icon/Icon'
import { Song } from '../../../types/Song'
import FindFriendsSearch from '../../components/UI/TextBox/FindFriendsSearch'

function FindFriends() {
  const { getAccessTokenSilently } = useAuth0()
  const [queryResult, setQueryResult] = useState([] as QueryResult[])
  const [queryState, setQueryState] = useState('')
  const [userClicked, setUserClicked] = useState(false)
  const [userIdClicked, setUserIdClicked] = useState('')
  const [tenRecs, setTenRecs] = useState<Song[]>()
  const [activeIndex, setActiveIndex] = useState<null | number>(null)

  useEffect(() => {
    const getData = async () => {
      const token = await getAccessTokenSilently()
      const search = searchFriends(token, queryState).then((response) => {
        setQueryResult(response)
      })

      return search
    }
    getData()
  }, [queryState, getAccessTokenSilently, tenRecs])

  // display top ten recommendations
  async function handleUserClick(id: string, idx: number) {
    setUserClicked(!userClicked)
    setUserIdClicked(id)
    setActiveIndex(idx)

    if (!userClicked) {
      return await getTopTenRecs(id).then((response) => {
        setTenRecs(response)
      })
    } else {
      setTenRecs([])
      setActiveIndex(null)
    }
  }

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value
    setQueryState(value)
  }

  return (
    <div className="p-4 mt-10 space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold">My friends</h1>
        <h2 className="text-xl font-semibold">Follow a new friend</h2>
        <div className="flex items-baseline gap-2">
          <FindFriendsSearch
            queryState={queryState}
            handleChange={handleChange}
          />
        </div>
      </div>
      {queryState !== '' && queryResult.length === 0 && (
        <p className="pl-10 text-sm text-purple-400 text-center">
          No rcmndrs match your criteria
        </p>
      )}
      <ul>
        {queryState === ''
          ? null
          : queryResult.map((user, idx) => {
              return (
                <div key={user.auth0_id}>
                  <li
                    id={`list-item-${idx}`}
                    className="hover:bg-[#301453] px-4 rounded-md"
                  >
                    <div
                      key={`list-${idx}`}
                      className="flex gap-4 py-2 content-center"
                    >
                      <div className="justify-center content-center">
                        <button
                          onClick={() => handleUserClick(user.auth0_id, idx)}
                        >
                          <Icon
                            className={`size-9 hover:bg-purple-500 ease-in duration- 150 ${
                              activeIndex === idx
                                ? 'bg-purple-500'
                                : 'bg-extraLightPurple'
                            }`}
                          >
                            <i className={`fa-solid fa-music text-black`} />
                          </Icon>
                        </button>
                      </div>
                      <div className="justify-center content-center w-full ">
                        <h3 className="text-xl">{user.nickname}</h3>
                        <p className="text-sm text-purple-400">
                          {user.first_name}
                        </p>
                      </div>
                      <div className="justify-start content-center">
                        <Icon className="size-9 hover:bg-primary ease-in duration-200">
                          <i className="fa-solid fa-heart text-black" />
                        </Icon>
                      </div>
                    </div>
                  </li>
                  <div key={user.nickname}>
                    {userClicked &&
                      userIdClicked === user.auth0_id &&
                      tenRecs &&
                      tenRecs.map((song: Song) => (
                        <div
                          key={song.id}
                          className="pl-10 py-2 gap-4 flex flex-row hover:bg-[#301453] last:mb-8"
                        >
                          <div className="justify-center content-center">
                            <Icon className="size-9">
                              <i className="fa-solid fa-music text-black" />
                            </Icon>
                          </div>
                          <div>
                            <div>{song.title}</div>
                            <div className="text-purple-400 text-sm">
                              {song.artist}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            })}
      </ul>
    </div>
  )
}

export default FindFriends
