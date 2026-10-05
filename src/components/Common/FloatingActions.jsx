'use client'

import { useState, useEffect } from 'react'
import { FiPhone, FiChevronUp, FiCpu } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import AiBrandAssistantModal from './AiBrandAssistantModal'

export default function FloatingActions() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [openAiModal, setOpenAiModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── SCROLL TO TOP (LEFT BOTTOM CORNER — NEVER COLLIDES) ── */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Yuqoriga qaytish"
          className="fixed bottom-20 sm:bottom-6 left-6 z-50 w-12 h-12 rounded-2xl bg-[#090d22]/95 border border-white/20 hover:border-amber-400 text-zinc-300 hover:text-amber-400 shadow-2xl backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
        >
          <FiChevronUp size={22} className="group-hover:-translate-y-0.5 transition-transform" />
          <span className="sr-only">Yuqoriga qaytish</span>
        </button>
      )}

      {/* ── DESKTOP & TABLET FLOATING RIGHT DOCK ── */}
      <aside aria-label="Tezkor aloqa paneli" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col gap-4 items-end">
        {/* 🤖 AI BRAND ASSISTANT BUTTON */}
        <button
          onClick={() => setOpenAiModal(true)}
          aria-label="AI Brend Tekshiruvchi"
          className="group relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-indigo-600 text-black shadow-2xl shadow-amber-400/40 flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-amber-400/60 ring-2 ring-amber-400/40 hover:ring-amber-400"
        >
          <HiSparkles size={26} className="text-black group-hover:rotate-12 transition-transform" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 px-4 py-2 rounded-2xl bg-black/95 text-amber-300 border border-amber-400/40 text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-2xl flex items-center gap-2">
            <FiCpu className="text-amber-400" />
            <span>{isRu ? 'AI Проверка & Генерация Бренда' : isEn ? 'AI Brand Radar & Suggestion' : 'AI Brend Tekshiruvchi & Takliflar'}</span>
          </span>
        </button>

        {/* TELEGRAM CTA */}
        <a
          href="https://t.me/copyrightsuz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram orqali bog'lanish"
          className="group relative w-13 h-13 rounded-2xl bg-[#0088cc] hover:bg-[#0077b5] text-white shadow-2xl shadow-[#0088cc]/40 flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <FaTelegram size={24} />
          <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-black/90 text-white border border-white/10 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            {isRu ? 'Telegram Консультация' : isEn ? 'Telegram Support' : 'Telegram Maslahat'}
          </span>
        </a>

        {/* PHONE CALL */}
        <a
          href="tel:+998881470081"
          aria-label="Qo'ng'iroq qilish"
          className="group relative w-13 h-13 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black shadow-2xl shadow-amber-400/40 flex items-center justify-center transition-all duration-300 hover:scale-105"
        >
          <FiPhone size={22} className="animate-pulse" />
          <span className="absolute right-16 px-3.5 py-1.5 rounded-xl bg-black/90 text-amber-400 border border-amber-400/30 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            +998 88 147-00-81
          </span>
        </a>
      </aside>

      {/* ── MOBILE STICKY BOTTOM ACTION BAR ── */}
      <nav aria-label="Mobil tezkor navigatsiya" className="sm:hidden fixed bottom-0 left-0 w-full z-40 bg-[#070914]/95 border-t border-white/10 backdrop-blur-xl px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        {/* PHONE */}
        <a
          href="tel:+998881470081"
          className="flex-1 py-2.5 px-2.5 rounded-xl bg-amber-400 text-black font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <FiPhone size={14} />
          <span>{isRu ? 'Звонок' : isEn ? 'Call' : "Qo'ng'iroq"}</span>
        </a>

        {/* TELEGRAM */}
        <a
          href="https://t.me/copyrightsuz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2.5 rounded-xl bg-[#0088cc] text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
        >
          <FaTelegram size={14} />
          <span>Telegram</span>
        </a>

        {/* 🤖 MOBILE AI BUTTON */}
        <button
          onClick={() => setOpenAiModal(true)}
          className="flex-1 py-2.5 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-orange-500 to-indigo-600 text-black font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 shadow-lg"
        >
          <HiSparkles size={14} />
          <span>AI Check</span>
        </button>
      </nav>

      {/* AI BRAND ASSISTANT MODAL */}
      <AiBrandAssistantModal
        isOpen={openAiModal}
        onClose={() => setOpenAiModal(false)}
      />
    </>
  )
}
