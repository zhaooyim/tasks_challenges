import { useAuth0 } from '@auth0/auth0-react'

import Button from '../UI/Button/Button'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}/profile`,
      },
    })
  }

  return (
    <Button className="bg-white text-primary" onClick={handleRegister}>
      Register
    </Button>
  )
}

export default RegisterButton
