import { useQuery } from '@tanstack/react-query'

export function Moderation() {
  interface Token {
    aud: string[]
    azp: string
    exp: number
    iat: number
    iss: string
    permissions: string[]
    scope: string
    sub: string
  }

  const { data: accessToken } = useQuery({
    queryKey: ['token'],
  })
  const perms = (accessToken as Token)?.permissions
  return perms[1] == 'moderate:songs' ? (
    <>
      <h1>Moderation</h1>
      <p>Reports</p>
      <p>Visualisations</p>
    </>
  ) : (
    <p>Not Authorised</p>
  )
}
