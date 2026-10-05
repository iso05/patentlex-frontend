'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { 
  FiShield, 
  FiCalendar, 
  FiPrinter, 
  FiShare2, 
  FiCheck, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiArrowRight, 
  FiFileText,
  FiLock,
  FiExternalLink
} from 'react-icons/fi'
import { legalContent } from './legalContent'
import '../../i18n'

export default function LegalPageLayout({ docType }) {
  const { i18n } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Determine current language: fallback to 'uz' if not uz/ru/en
  const currentLang = ['uz', 'ru', 'en'].includes(i18n.language) ? i18n.language : 'uz'
  
  const docData = legalContent[docType]?.[currentLang] || legalContent[docType]?.uz

  const languages = [
    { code: 'uz', label: 'O‘zbekcha', short: 'UZ' },
    { code: 'ru', label: 'Русский', short: 'RU' },
    { code: 'en', label: 'English', short: 'EN' },
  ]

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code)
  }

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  // Scroll spy to highlight active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      if (!docData?.sections) return
      const scrollPosition = window.scrollY + 180

      for (const section of docData.sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [docData])

  const formatText = (text) => {
    // Check if line is a table row
    if (text.startsWith('|') && text.endsWith('|')) {
      return null // Will be handled in table parser
    }

    // Bold highlight for labels like "• Name:" or "Company:"
    const parts = text.split(/(https?:\/\/[^\s]+)/g)
    return parts.map((part, index) => {
      if (part.match(/^https?:\/\//)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 underline underline-offset-2 break-all inline-flex items-center gap-1 font-medium transition-colors"
          >
            <span>{part}</span>
            <FiExternalLink size={12} className="inline shrink-0" />
          </a>
        )
      }
      return part
    })
  }

  // Helper to render content blocks including tables
  const renderContentBlocks = (contentList) => {
    const blocks = []
    let currentTableRows = []

    contentList.forEach((line, idx) => {
      if (line.startsWith('|') && line.endsWith('|')) {
        currentTableRows.push(line)
      } else {
        if (currentTableRows.length > 0) {
          blocks.push(renderTable(currentTableRows, `table-${idx}`))
          currentTableRows = []
        }

        const isBullet = line.startsWith('• ')
        const cleanLine = isBullet ? line.replace('• ', '') : line

        blocks.push(
          <div 
            key={idx} 
            className={`flex items-start gap-3 text-sm sm:text-base leading-relaxed ${
              isBullet ? 'text-zinc-300 pl-2' : 'text-zinc-300'
            }`}
          >
            {isBullet ? (
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-2.5 shadow-sm shadow-amber-400/50" />
            ) : null}
            <p className="flex-1">{formatText(cleanLine)}</p>
          </div>
        )
      }
    })

    if (currentTableRows.length > 0) {
      blocks.push(renderTable(currentTableRows, `table-last`))
    }

    return blocks
  }

  const renderTable = (rows, key) => {
    // Filter out separator rows like | :--- | :--- |
    const contentRows = rows.filter(r => !r.includes(':---') && !r.includes('---:'))
    if (contentRows.length === 0) return null

    const header = contentRows[0].split('|').map(c => c.trim()).filter(Boolean)
    const bodyRows = contentRows.slice(1).map(r => r.split('|').map(c => c.trim()).filter(Boolean))

    return (
      <div key={key} className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
        <table className="w-full text-left text-xs sm:text-sm text-zinc-300">
          <thead className="bg-white/5 border-b border-white/10 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              {header.map((col, hIdx) => (
                <th key={hIdx} className="px-4 py-3.5 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono sm:font-sans">
            {bodyRows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-3">
                    {cell.startsWith('`') && cell.endsWith('`') ? (
                      <span className="px-2 py-0.5 rounded-md bg-amber-400/10 text-amber-300 text-xs font-mono border border-amber-400/20">
                        {cell.replace(/`/g, '')}
                      </span>
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-[#060814] text-zinc-100 selection:bg-amber-400 selection:text-black pt-24 pb-20 overflow-hidden">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none select-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* HEADER HERO */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md">
            <FiShield size={14} />
            <span>{docData.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            {docData.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            {docData.subtitle}
          </p>

          {/* CONTROLS BAR: LANG TABS + UTILITY BUTTONS */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-3xl mx-auto">
            {/* IN-PAGE LANGUAGE SWITCHER TABS */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-extrabold tracking-wider transition-all duration-300 ${
                    currentLang === lang.code
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md shadow-amber-400/20'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                >
                  <span className="hidden sm:inline">{lang.label}</span>
                  <span className="sm:hidden">{lang.short}</span>
                </button>
              ))}
            </div>

            {/* METADATA & ACTIONS */}
            <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium ml-auto">
              <div className="hidden md:flex items-center gap-1.5">
                <FiCalendar size={13} className="text-amber-400" />
                <span>{docData.lastUpdated}</span>
              </div>

              <div className="h-4 w-px bg-white/10 hidden md:block" />

              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-amber-300 transition-colors text-xs font-semibold"
                title="Copy link"
              >
                {copied ? <FiCheck size={13} className="text-emerald-400" /> : <FiShare2 size={13} />}
                <span>{copied ? (currentLang === 'uz' ? 'Nusxa olindi!' : currentLang === 'ru' ? 'Скопировано!' : 'Copied!') : (currentLang === 'uz' ? 'Ulashish' : currentLang === 'ru' ? 'Поделиться' : 'Share')}</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-amber-300 transition-colors text-xs font-semibold"
                title="Print document"
              >
                <FiPrinter size={13} />
                <span>{currentLang === 'uz' ? 'Chop etish' : currentLang === 'ru' ? 'Печать' : 'Print'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* MAIN BODY: 2-COLUMN WITH STICKY TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* STICKY TOC (LEFT/DESKTOP) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-amber-400">
                <FiFileText size={14} />
                <span>{currentLang === 'uz' ? 'Mundarija' : currentLang === 'ru' ? 'Содержание' : 'Table of Contents'}</span>
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-250px)] overflow-y-auto custom-scrollbar pr-2">
                {docData.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block px-3 py-2 rounded-xl text-xs leading-snug transition-all ${
                      activeSection === section.id
                        ? 'bg-amber-400/10 text-amber-300 font-bold border-l-2 border-amber-400 pl-3'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 font-medium'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-amber-400/5 border border-amber-400/20 text-xs">
                  <p className="text-zinc-300 font-medium mb-2">
                    {currentLang === 'uz'
                      ? 'Patentlash va tovar belgilari bo‘yicha konsultatsiya kerakmi?'
                      : currentLang === 'ru'
                      ? 'Нужна консультация по патентованию и товарным знакам?'
                      : 'Need assistance with patents or trademark registration?'}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors"
                  >
                    <span>{currentLang === 'uz' ? 'Bepul konsultatsiya' : currentLang === 'ru' ? 'Бесплатная консультация' : 'Free consultation'}</span>
                    <FiArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* DOCUMENT SECTIONS (RIGHT/MAIN) */}
          <main className="lg:col-span-8 space-y-8">
            {docData.sections.map((section, idx) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-3xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl backdrop-blur-xl group relative overflow-hidden"
              >
                {/* SUBTLE CARD ACCENT */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-400 via-amber-500/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2">
                  <span className="text-amber-400 text-sm sm:text-base font-black font-mono">
                    §{idx + 1}
                  </span>
                  <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
                </h2>

                <div className="space-y-3.5">
                  {renderContentBlocks(section.content)}
                </div>
              </section>
            ))}

            {/* OFFICIAL CONTACT & CREDENTIALS BOX */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-black/40 to-black/60 border border-amber-400/30 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/20 text-amber-400 text-xs font-bold mb-2">
                    <FiLock size={12} />
                    <span>PatentLex IP Law Firm</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {currentLang === 'uz' ? 'Rasmiy Patent Vakili va Yuridik Markaz' : currentLang === 'ru' ? 'Официальный Патентный Поверенный и Юридический Центр' : 'Registered Patent Attorney & IP Law Office'}
                  </h3>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-400/20 shrink-0"
                >
                  {currentLang === 'uz' ? 'Bog‘lanish' : currentLang === 'ru' ? 'Связаться' : 'Get in Touch'}
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-zinc-300">
                  <FiPhone className="text-amber-400 mt-1 shrink-0" size={16} />
                  <div>
                    <span className="block text-[11px] text-zinc-500 font-bold uppercase">Telefon</span>
                    <a href="tel:+998881470081" className="font-bold hover:text-amber-400 transition-colors">
                      +998 88 147-00-81
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <FiMail className="text-amber-400 mt-1 shrink-0" size={16} />
                  <div>
                    <span className="block text-[11px] text-zinc-500 font-bold uppercase">Email</span>
                    <a href="mailto:patentlextashkent@gmail.com" className="font-medium hover:text-amber-400 transition-colors break-all">
                      patentlextashkent@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <FiMapPin className="text-amber-400 mt-1 shrink-0" size={16} />
                  <div>
                    <span className="block text-[11px] text-zinc-500 font-bold uppercase">Manzil</span>
                    <span>Toshkent sh., Alisher Navoiy ko‘chasi, 2-uy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* OTHER LEGAL POLICIES NAVIGATION LINKS */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-zinc-400 font-medium">
                {currentLang === 'uz' ? 'Boshqa huquqiy sahifalar:' : currentLang === 'ru' ? 'Другие правовые разделы:' : 'Other legal documents:'}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {docType !== 'privacy' && (
                  <Link href="/privacy-policy" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                    {currentLang === 'uz' ? 'Maxfiylik Siyosati' : currentLang === 'ru' ? 'Политика Конфиденциальности' : 'Privacy Policy'}
                  </Link>
                )}
                {docType !== 'terms' && (
                  <Link href="/terms" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                    {currentLang === 'uz' ? 'Foydalanish Shartlari' : currentLang === 'ru' ? 'Условия Использования' : 'Terms of Service'}
                  </Link>
                )}
                {docType !== 'cookies' && (
                  <Link href="/cookie-policy" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                    {currentLang === 'uz' ? 'Cookie Siyosati' : currentLang === 'ru' ? 'Политика Cookie' : 'Cookie Policy'}
                  </Link>
                )}
              </div>
            </div>

          </main>

        </div>

      </div>
    </div>
  )
}
