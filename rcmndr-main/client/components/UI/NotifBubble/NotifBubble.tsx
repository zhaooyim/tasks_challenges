import { useEffect, useState } from 'react'
import useNotifications from '../../../hooks/useNotifications'

export default function NotifBubble() {
  const { data: notifications, isLoading, isError } = useNotifications()
  const [notifTotal, setNotifTotal] = useState(0)

  useEffect(() => {
    if (notifications && !isError && !isLoading) {
      setNotifTotal(notifications.length)
    }
  }, [notifications, isLoading, isError])
  return notifTotal
}
