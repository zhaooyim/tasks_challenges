import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>Hack the Airlines</h1>
      <Link to="/add">Add Passenger</Link>
      <Outlet />
    </div>
  )
}

export default Layout
