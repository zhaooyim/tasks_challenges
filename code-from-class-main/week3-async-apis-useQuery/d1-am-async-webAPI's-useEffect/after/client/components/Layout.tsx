import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <header>
        <h1>My deadbeat bosses</h1>
      </header>
      <Outlet />
    </>
  )
}
