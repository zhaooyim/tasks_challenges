import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <>
      <h1>Todo-lator 🐊</h1>
      <Outlet />
    </>
  )
}
