'use client'

import { useState } from 'react'
import api from '../../api/axios'
import { Image, Sparkles, CheckCircle2, XCircle } from 'lucide-react'

const LANGS = [
  { code: 'uz', label: "O'zbek 🇺🇿" },
  { code: 'ru', label: 'Русский 🇷🇺' },
  { code: 'en', label: 'English 🇬🇧' },
]

export default function CreatePost() {
  const [activeLang, setActiveLang] = useState('uz')
  const [form, setForm] = useState({
    title_uz: '', title_ru: '', title_en: '',
    content_uz: '', content_ru: '', content_en: '',
    date: '',
    image: null,
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setForm({ ...form, image: e.target.files[0] })
    } else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('title_uz', form.title_uz)
      formData.append('title_ru', form.title_ru)
      formData.append('title_en', form.title_en)
      formData.append('content_uz', form.content_uz)
      formData.append('content_ru', form.content_ru)
      formData.append('content_en', form.content_en)
      formData.append('date', form.date)
      if (form.image) formData.append('image', form.image)
      await api.post('/api/posts', formData)
      setStatus('success')
      setForm({
        title_uz: '', title_ru: '', title_en: '',
        content_uz: '', content_ru: '', content_en: '',
        date: '', image: null,
      })
    } catch (err) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `
    w-full bg-transparent border border-white/10 rounded-xl 
    px-4 py-3 text-sm outline-none placeholder-zinc-600
    focus:border-amber-400/50 focus:bg-white/[0.01] focus:ring-1 focus:ring-amber-400/25
    transition-all duration-300
  `

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-amber-400" size={18} />
        <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase">Post yozish shakli</p>
      </div>

      {/* Language Tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-xl border border-white/10 w-fit">
        {LANGS.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            onClick={() => setActiveLang(code)}
            className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
              activeLang === code
                ? 'bg-amber-400 text-black shadow-md'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* MULTILINGUAL TITLE */}
        {LANGS.map(({ code, label }) => (
          <div key={code} className={activeLang === code ? 'block' : 'hidden'}>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Sarlavha ({label})
            </label>
            <input
              type="text"
              name={`title_${code}`}
              value={form[`title_${code}`]}
              onChange={handleChange}
              placeholder={`Sarlavhani ${label} tilida kiriting...`}
              className={inputClass}
            />
          </div>
        ))}

        {/* MULTILINGUAL CONTENT */}
        {LANGS.map(({ code, label }) => (
          <div key={code} className={activeLang === code ? 'block' : 'hidden'}>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Batafsil matni ({label})
            </label>
            <textarea
              name={`content_${code}`}
              rows="7"
              value={form[`content_${code}`]}
              onChange={handleChange}
              placeholder={`Post matnini ${label} tilida batafsil yozing...`}
              className={`${inputClass} resize-none`}
            />
          </div>
        ))}

        {/* Fill indicator */}
        <div className="flex gap-2 text-xs text-zinc-500">
          {LANGS.map(({ code, label }) => {
            const filled = form[`title_${code}`] && form[`content_${code}`]
            return (
              <span key={code} className={`px-2 py-1 rounded-lg font-semibold border ${filled ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' : 'border-white/10 text-zinc-600'}`}>
                {label} {filled ? '✓' : '○'}
              </span>
            )
          })}
        </div>

        {/* DATE & IMAGE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Nashr etilgan sana
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-zinc-400 tracking-wider uppercase mb-2">
              Rasm biriktirish
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="w-full flex items-center justify-center gap-2 border border-dashed border-white/10 hover:border-amber-400/40 bg-white/[0.01] hover:bg-white/[0.02] rounded-xl px-4 py-3.5 text-sm cursor-pointer text-zinc-400 hover:text-amber-300 transition-all duration-300"
              >
                <Image size={16} />
                <span className="truncate max-w-[150px]">
                  {form.image ? form.image.name : 'Rasm tanlash...'}
                </span>
              </label>
            </div>
          </div>
        </div>

        {status === 'success' && (
          <div className="flex items-center gap-2.5 text-xs text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3.5">
            <CheckCircle2 size={16} />
            <span className="font-semibold">Post muvaffaqiyatli chop etildi!</span>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-center gap-2.5 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3.5">
            <XCircle size={16} />
            <span className="font-semibold">Chop etishda xatolik yuz berdi.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold text-sm tracking-widest uppercase mt-2 hover:bg-amber-300 active:scale-[0.99] transition-all duration-300 disabled:opacity-50 shadow-lg shadow-amber-400/10"
        >
          {loading ? 'Nashr qilinmoqda...' : 'Chop etish'}
        </button>
      </form>
    </div>
  )
}
