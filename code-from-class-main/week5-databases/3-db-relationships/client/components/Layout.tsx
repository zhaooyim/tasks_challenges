import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="flex items-start">
      <Outlet />
    </div>
  )
}

export default Layout
