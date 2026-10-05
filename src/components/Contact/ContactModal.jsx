'use client'

import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../ThemeContext'
import { HiOutlinePhone, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { HiOutlineMail } from "react-icons/hi"
import '../../i18n'

export default function ContactModal({ open, onClose }) {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const sendEmail = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send('service_fhubtfj', 'template_xsqncwa', form, '82yaYlHvi7sjqcXzI')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-sm font-medium border outline-none transition-all duration-200
    ${dark
      ? 'bg-white/5 border-white/10 text-white placeholder-zinc-600 focus:border-amber-400/60 focus:bg-white/8'
      : 'bg-zinc-50 border-zinc-200 text-zinc-800 placeholder-zinc-400 focus:border-amber-400 focus:bg-white'
    }`

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/75 backdrop-blur-md"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl overflow-hidden border transition-colors duration-300
          ${dark
            ? 'bg-[#0f0f16] border-white/10 shadow-2xl shadow-black/60'
            : 'bg-white border-zinc-200 shadow-2xl shadow-zinc-300/50'
          }`}
        onClick={e => e.stopPropagation()}
      >
        {/* TOP ACCENT */}
        <div className={`h-1 w-full ${dark ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500' : 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600'}`} />

        <div className="p-7 md:p-8">
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
              ${dark ? 'text-zinc-500 hover:bg-white/10 hover:text-white' : 'text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700'}`}
          >
            <FiX size={18} />
          </button>

          {/* HEADER */}
          <div className="mb-7">
            <div className={`inline-flex items-center gap-2 w-10 h-10 rounded-xl justify-center mb-4
              ${dark ? 'bg-amber-400/10' : 'bg-amber-100'}`}>
              <HiOutlineChatBubbleLeftRight size={20} className={dark ? 'text-amber-400' : 'text-amber-700'} />
            </div>
            <h3 className={`text-xl font-black tracking-tight
              ${dark ? 'text-white' : 'text-zinc-900'}`}>
              {t('contact.formTitle')}
            </h3>
          </div>

          {/* FORM */}
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={form.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder={t('contact.email')}
                value={form.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder={t('contact.message')}
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
              required
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 mt-1
                ${dark
                  ? 'bg-amber-400 text-zinc-900 hover:bg-amber-300 shadow-lg shadow-amber-400/15'
                  : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-200'
                }`}
            >
              {status === 'loading' ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t('contact.sending')}
                </span>
              ) : t('contact.send')}
            </button>

            {status === 'success' && (
              <div className={`flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl
                ${dark ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                <span className="text-base">✓</span>
                {t('contact.success')}
              </div>
            )}

            {status === 'error' && (
              <div className={`flex items-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl
                ${dark ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                <span className="text-base">✕</span>
                {t('contact.error')}
              </div>
            )}
          </form>

          {/* FOOTER ROW */}
          <div className={`flex flex-col sm:flex-row gap-3 mt-6 pt-5 border-t
            ${dark ? 'border-white/8' : 'border-zinc-100'}`}>
            <a
              href="tel:+998881470081"
              className={`flex items-center gap-2 text-xs font-semibold transition-colors
                ${dark ? 'text-zinc-600 hover:text-amber-400' : 'text-zinc-400 hover:text-amber-700'}`}
            >
              <HiOutlinePhone size={14} />
              +998-88-147-00-81
            </a>
            <a
              href="mailto:patentlextashkent@gmail.com"
              className={`flex items-center gap-2 text-xs font-semibold transition-colors
                ${dark ? 'text-zinc-600 hover:text-amber-400' : 'text-zinc-400 hover:text-amber-700'}`}
            >
              <HiOutlineMail size={14} />
              patentlextashkent@gmail.com
            </a>
          </div>

          <p className={`text-[11px] mt-3 leading-relaxed ${dark ? 'text-zinc-700' : 'text-zinc-400'}`}>
            {t('contact.policy')}
          </p>
        </div>
      </div>
    </div>
  )
}
