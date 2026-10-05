'use client'

import api from '../../api/axios'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton({ isMobileHeader }) {
  const router = useRouter()

  const logout = async () => {
    try {
      await api.post('/api/auth/logout')
    } catch (err) {
      console.error('Logout error', err)
    }
    router.push('/admin/login')
  }

  if (isMobileHeader) {
    return (
      <button
        onClick={logout}
        className="
          flex items-center justify-center w-9 h-9 rounded-xl 
          border border-red-500/20 bg-red-500/10 text-red-400 
          hover:bg-red-600 hover:text-white hover:border-transparent 
          transition-all duration-300
        "
        aria-label="Chiqish"
      >
        <LogOut size={15} />
      </button>
    )
  }

  return (
    <button
      onClick={logout}
      className="
        w-full flex items-center justify-center gap-2 px-4.5 py-3 rounded-xl 
        border border-red-500/20 bg-red-500/10 text-red-400 
        hover:bg-red-600 hover:text-white hover:border-transparent 
        transition-all duration-300 text-xs font-bold tracking-wider uppercase
      "
    >
      <LogOut size={14} />
      <span>Chiqish</span>
    </button>
  )
}
