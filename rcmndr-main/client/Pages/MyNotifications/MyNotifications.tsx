import NotificationItem from '../../components/NotificationItem/NotificationItem'

import useNotifications from '../../hooks/useNotifications'

export default function MyNotifications() {
  const { data: notifications, isLoading, isError } = useNotifications()

  if (isLoading) {
    return <p> Waiting....</p>
  }

  if (isError) {
    return <p> Too many notifs....</p>
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">My Notifications</h1>

      <ul className="space-y-4 p-4">
        {notifications &&
          notifications?.map((notification) => (
            <li
              key={notification.notificationId}
              className="list-none flex gap-2 "
            >
              <NotificationItem notification={notification} />
            </li>
          ))}
      </ul>
    </div>
  )
}

// export interface Notification {
//   notificationId: number
//   notificationTimestamp: string
//   message: string
//   nickname: string
// }
