import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { editSong, getSongById, getSongs, addSong } from '../apis/songs'
import { Song, SongDraft } from '../../types/Song'
import { useNavigate } from 'react-router-dom'

function useSongs(userId: string) {
  const { user, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['songs'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getSongs(accessToken, userId)
        return response
      }
    },
  })

  const addMutation = useMutation({
    mutationFn: ({ form, token }: { form: SongDraft; token: string }) => {
      return addSong(token, userId, form)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      navigate('/my-songs')
    },
  })

  return { data, isLoading, isError, addMutation }
}

export function useEditSong() {
  const { getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['songs'],
    mutationFn: async (updatedSong: Song) => {
      const accessToken = await getAccessTokenSilently()
      return await editSong(accessToken, updatedSong)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })
}

export function useSongById(songId: string | undefined) {
  const { getAccessTokenSilently } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['song', songId],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const response = await getSongById(accessToken, songId)
      return response
    },
  })
  return { data, isLoading, isError }
}

export default useSongs
