import db from './connection'
import { Notification } from '../../types/Notifications'

export async function getNotifications(userId: string) {
  return (await db('notifications')
    .join('users', 'notifications.sender_id', 'users.auth0_id')
    .where('notifications.receiver_id', userId)
    .andWhere('is_read', false)
    .orderBy('timestamp', 'desc')
    .select(
      'notifications.id as notificationId',
      'notifications.timestamp as notificationTimestamp',
      'notifications.message',
      'users.nickname'
    )) as Notification[]
}
