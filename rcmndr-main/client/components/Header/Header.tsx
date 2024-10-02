import WaitingSpinner from '../UI/WaitingSpinner/WaitingSpinner'
import { useIsFetching } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

import NotifBubble from '../UI/NotifBubble/NotifBubble'
import { useMatches } from 'react-router-dom'

function Header() {
  const [notifActive, setNotifActive] = useState(false)
  const [navOpened, setNavOpened] = useState(false)
  const isFetching = useIsFetching()

  function toggleMenu() {
    setNavOpened(() => !navOpened)
  }

  const matches = useMatches()
  const pageTitle = matches[1].handle

  useEffect(() => {
    pageTitle === undefined ? setNotifActive(false) : setNotifActive(true)
  }, [pageTitle])

  return (
    <div className="pl-4 pt-3 pr-4 flex justify-between items-center">
      <Logo />
      {Boolean(isFetching) && <WaitingSpinner />}
      {!navOpened && (
        <div>
          <button onClick={toggleMenu}>
            <i className="fa-solid fa-bars text-4xl"></i>
          </button>
          {/** Add Notif Button**/}

          {notifActive ? (
            <span
              id="notifBubble"
              className="absolute top-1 right-1 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
            >
              <NotifBubble />{' '}
            </span>
          ) : (
            ''
          )}
        </div>
      )}
      {navOpened && (
        <button onClick={toggleMenu}>
          <i
            className={`fa-solid fa-times text-3xl transition ease-in-out focus:-rotate-45 duration-300`}
          ></i>
        </button>
      )}
      <nav
        className={`fixed left-0 top-12 h-full w-full backdrop-filter backdrop-blur-md bg-opacity-5 shadow-transparent transition-all ease-in-out duration-200 ${
          navOpened ? 'opacity-100' : 'hidden'
        } z-10`}
      >
        <Nav toggleMenu={toggleMenu} notifActive={notifActive} />
      </nav>
    </div>
  )
}

export default Header
