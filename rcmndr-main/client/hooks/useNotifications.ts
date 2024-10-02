import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '../apis/notifications'

export default function useNotifications() {
  const { getAccessTokenSilently } = useAuth0()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (accessToken) {
        const response = await getNotifications(accessToken)
        return response
      }
    },
  })

  return { data, isLoading, isError }
}
