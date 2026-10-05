'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '../../api/axios'
import { User, Lock, ShieldCheck, AlertCircle } from 'lucide-react'

export default function AdminLogin() {
  const router = useRouter()

  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await api.post('/api/auth/login', form)
      router.push('/admin')
    } catch (err) {
      setError('Foydalanuvchi nomi yoki parol noto‘g‘ri')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="
        min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-[#06060a] via-[#0c0c12] to-[#06060a] 
        text-white px-4 font-sans relative overflow-hidden
      "
    >
      {/* Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-400/5 blur-[150px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/5 blur-[150px] rounded-full" />
      </div>

      <div
        className="
          w-full max-w-md bg-[#13131a]/60 backdrop-blur-2xl 
          border border-white/5 rounded-2xl shadow-2xl p-8 z-10
        "
      >
        {/* BRAND ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center border border-amber-400/20 shadow-lg shadow-amber-400/5">
            <ShieldCheck className="text-amber-400" size={24} />
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center text-white tracking-wide">
          Admin Panel
        </h2>
        <p className="text-center text-zinc-500 mt-1 mb-8 text-xs font-semibold tracking-wider uppercase">
          Faqat ruxsat etilgan xodimlar uchun
        </p>

        {error && (
          <div className="mb-6 flex items-start gap-2.5 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3.5">
            <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
            <span className="font-semibold">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* USERNAME */}
          <div>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Foydalanuvchi nomi
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 pointer-events-none">
                <User size={16} />
              </span>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                placeholder="Username"
                className="
                  w-full bg-transparent border border-white/10 rounded-xl 
                  pl-11 pr-4 py-3 text-sm outline-none placeholder-zinc-600
                  focus:border-amber-400/50 focus:bg-white/[0.02] focus:ring-1 focus:ring-amber-400/25
                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Maxfiy parol
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-500 pointer-events-none">
                <Lock size={16} />
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="
                  w-full bg-transparent border border-white/10 rounded-xl 
                  pl-11 pr-4 py-3 text-sm outline-none placeholder-zinc-600
                  focus:border-amber-400/50 focus:bg-white/[0.02] focus:ring-1 focus:ring-amber-400/25
                  transition-all duration-300
                "
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3.5 rounded-xl bg-amber-400 text-black 
              font-bold text-sm tracking-widest uppercase mt-4
              hover:bg-amber-300 active:scale-[0.99]
              transition-all duration-300 disabled:opacity-50
              shadow-lg shadow-amber-400/10
            "
          >
            {loading ? 'Kirilmoqda...' : 'Kirish'}
          </button>
        </form>
      </div>
    </div>
  )
}
