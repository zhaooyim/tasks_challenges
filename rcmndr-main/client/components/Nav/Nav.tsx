/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import * as jose from 'jose'
import { useQuery } from '@tanstack/react-query'
import NotifBubble from '../UI/NotifBubble/NotifBubble'

interface Props {
  toggleMenu: () => void
  notifActive: boolean
}

function Nav(props: Props) {
  const { isAuthenticated, logout, loginWithRedirect, getAccessTokenSilently } =
    useAuth0()
  const navigate = useNavigate()

  const { data: accessToken } = useQuery({
    queryKey: ['token'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      const decoded = jose.decodeJwt(accessToken) as { permissions: string[] }
      return decoded
    },
  })

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/my-songs`,
      },
    })
  }

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }

  function goTo(link: string) {
    props.toggleMenu()
    navigate(link)
  }

  return (
    <nav className="pt-16 pl-4 flex">
      <ul className="text-3xl">
        {accessToken?.permissions.length ? (
          <li>
            <button onClick={() => goTo('/moderation')}>
              Moderation Dashboard
            </button>
          </li>
        ) : (
          <>
            <li>
              {/* Create this API client, a custom hook and client side route */}
              <button
                className="flex gap-2"
                onClick={() => goTo('/my-notifications')}
              >
                {props.notifActive ? (
                  <div className="bg-primary rounded-full w-7 h-7 text-lg">
                    <NotifBubble />
                  </div>
                ) : (
                  ''
                )}
                Notifications
              </button>
            </li>
            <li>
              <button onClick={() => goTo('/my-songs')}>My songs</button>
            </li>
            <li>
              <button onClick={() => goTo('/add-song')}>Add song</button>
            </li>
            <li>
              <button onClick={() => goTo('/my-friends')}>My friends</button>
            </li>
            <li>
              <button onClick={() => goTo('/find-friends')}>
                Find friends
              </button>
            </li>
            <li>
              <button onClick={() => goTo('/profile')}>Edit Profile</button>
            </li>
            <li>
              <button onClick={() => goTo('/scan')}>Scan QR code</button>
            </li>
            <li>
              <button onClick={() => goTo('/show-qr')}>Share QR code</button>
            </li>
          </>
        )}
        <li>
          {!isAuthenticated && <button onClick={handleLogin}>Log in</button>}
        </li>
        <li>
          {isAuthenticated && <button onClick={handleLogout}>Log out</button>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
