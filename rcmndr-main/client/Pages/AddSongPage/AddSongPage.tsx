import { AddSong } from '../../components/AddSong/AddSong'
import { useAuth0 } from '@auth0/auth0-react'
import { SongDraft } from '../../../types/Song'
import useProfile from '../../hooks/useProfile'
import useSongs from '../../hooks/useSongs'

export default function AddSongPage() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const profile = useProfile()

  let userAuthId = ''
  if (profile.data) {
    userAuthId = profile.data.auth0Id
  }

  const songs = useSongs(userAuthId)

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(songInfo: SongDraft) {
    const token = await getAccessTokenSilently()
    songs.addMutation.mutate({ form: songInfo, token: token })
  }

  return (
    <div>
      <AddSong handleSubmit={handleSubmit} />
    </div>
  )
}
