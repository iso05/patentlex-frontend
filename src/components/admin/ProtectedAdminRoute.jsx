'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import api from '../../api/axios'

export default function ProtectedAdminRoute({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    api
      .get('/api/auth/me')
      .then(() => {
        setAuthorized(true)
        setLoading(false)
      })
      .catch(() => {
        setAuthorized(false)
        setLoading(false)
        router.push('/admin/login')
      })
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#08080c]">
        Tekshirilmoqda...
      </div>
    )
  }

  if (!authorized) return null

  return children
}
