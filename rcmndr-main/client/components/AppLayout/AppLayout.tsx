import { Outlet, useMatches } from 'react-router-dom'

import Header from '../Header/Header'
import { Toaster } from 'react-hot-toast'

import useDocumentTitle from '../../hooks/useDocumentTitle'

function AppLayout() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'rcmndr.')

  return (
    <div className="bg-darkPurple max-h-full min-h-screen text-white">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
