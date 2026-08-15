import { useEffect, useState } from 'react'
import { getProfileByUsername } from '../services/profileService.js'

export function useProfile(username) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProfileByUsername(username).then((res) => { setProfile(res); setLoading(false) })
  }, [username])

  return { profile, loading }
}
