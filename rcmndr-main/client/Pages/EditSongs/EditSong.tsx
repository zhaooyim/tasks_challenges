import { Song } from '../../../types/Song'
import { useEditSong, useSongById } from '../../hooks/useSongs'
import { useNavigate, useParams } from 'react-router-dom'
import EditSongForm from '../../components/EditSongForm/EditSongForm'

export default function EditSong() {
  const updateSong = useEditSong()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: formData, isLoading } = useSongById(id)

  if (isLoading) {
    return <p>Loading</p>
  }

  function handleEditSong(updatedSong: Song) {
    updateSong.mutate(updatedSong)
    navigate('/my-songs')
  }

  if (formData) return <EditSongForm {...{ formData, handleEditSong }} />
}
