/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query'
import SongList from '../../components/SongList/SongList'
function MySongs() {
  const {
    data: accessToken,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['token'],
  })
  if (isLoading) return <p>loading...</p> //TODO ticket: implement loading component
  if (isError) return <p>Error</p> //TODOticket: implement error redirect
  if ((accessToken as any).sub)
    return (
      <div>
        <h1>My Songs</h1>
        <SongList {...{ userId: (accessToken as any).sub as string }} />
      </div>
    )
  return <></>
}

export default MySongs
