import { Notification } from '../../../types/Notifications'
import Icon from '../UI/Icon/Icon'

interface Props {
  notification: Notification
}
export default function NotificationItem({ notification }: Props) {
  return (
    <>
      <div className="self-center flex-none ">
        <Icon className="size-8">
          <i className=" self-center fa-solid fa-user text-black size-4" />
        </Icon>
      </div>
      <div className="flex text-left flex-col w-36 leading-none flex-auto ">
        <h2 className="text-white  ">{notification.message}</h2>
        <h3 className="text-xs text-lightPurple ">{notification.nickname}</h3>
      </div>
    </>
  )
}
