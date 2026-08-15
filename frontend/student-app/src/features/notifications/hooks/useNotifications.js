import { useEffect, useState } from 'react'
import { listNotifications, markAsRead } from '../services/notificationsService.js'

export function useNotifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listNotifications().then((res) => { setNotifications(res); setLoading(false) })
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const readOne = async (id) => {
    await markAsRead(id)
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return { notifications, unreadCount, loading, readOne }
}
