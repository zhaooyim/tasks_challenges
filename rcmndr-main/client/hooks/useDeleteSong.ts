import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteSong } from '../apis/songs'

export default function useDeleteSong() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })
}
