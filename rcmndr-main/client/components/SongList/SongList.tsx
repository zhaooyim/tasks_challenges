/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from '@auth0/auth0-react'
import useDeleteSong from '../../hooks/useDeleteSong'
import useSongs from '../../hooks/useSongs'
import SongListItem from '../SongListItem/SongListItem'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

interface Props {
  userId: string
}
export default function SongList(props: Props) {
  const { userId } = props
  const navigate = useNavigate()
  const { data: songs, isLoading } = useSongs(userId)

  const { data: token } = useQuery({
    queryKey: ['token'],
  })
  const mySongs = ((token as any).sub as string) === userId
  const { getAccessTokenSilently } = useAuth0()
  const deleteSong = useDeleteSong()

  async function handleDeleteSong(songId: string) {
    const token: string = await getAccessTokenSilently()
    deleteSong.mutate({ token, songId })
  }

  function handleEditSong(songId: string) {
    navigate(`/edit-song/${songId}`)
  }

  if (isLoading) return <p>Loading...</p> // TODO Implement loading spinner
  if (songs)
    return (
      <>
        <h1>Song List</h1>
        {songs.map((song) => {
          return (
            <SongListItem
              key={`${userId}${song.id}`}
              {...{ song, handleDeleteSong, handleEditSong, mySongs }}
            />
          )
        })}
      </>
    )
}
