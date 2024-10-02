import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

import { getFriends } from '../apis/user'

export default function useFriends() {
  const { user, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['friends'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getFriends(accessToken)
        return response
      }
    },
  })

  return { data, isLoading, isError }
}
