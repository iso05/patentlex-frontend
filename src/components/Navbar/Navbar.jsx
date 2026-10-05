'use client'

import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../../assets/images/logo.jpg'
import { MdOutlineLanguage } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../../i18n'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [openLang, setOpenLang] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { i18n, t } = useTranslation()
  const pathname = usePathname()

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ]
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      setOpenLang(false)
      setOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menu = [
    { key: 'home', link: '/' },
    { key: 'services', link: '/services' },
    { key: 'team', link: '/team' },
    { key: 'portfolio', link: '/blog' },
    { key: 'reviews', link: '/reviews' },
    { key: 'contact', link: '/contact' },
  ]

  const logoSrc = typeof logo === 'object' ? logo.src : logo

  return (
    <>
      {/* DESKTOP NAV WRAPPER */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6">
          <nav className={`transition-all duration-500 rounded-2xl px-3 sm:px-5 lg:px-6 flex items-center justify-between h-16 lg:h-18 border backdrop-blur-xl ${
            scrolled
              ? 'bg-[#0a0b12]/85 border-white/15 shadow-2xl shadow-black/80'
              : 'bg-[#0d0e17]/60 border-white/10 shadow-xl shadow-black/40'
          }`}>
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative">
                <img
                  src={logoSrc}
                  alt="PatentLex"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition-all duration-300 shadow-md group-hover:shadow-[0_0_12px_#fbbf24]"
                />
              </div>
              <span className="font-extrabold text-base sm:text-lg tracking-widest hidden sm:block text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
                PATENT<span className="text-white">LEX</span>
              </span>
            </Link>

            {/* CENTER MENU - DESKTOP */}
            <ul className="hidden lg:flex items-center gap-1 bg-white/4 p-1 rounded-xl border border-white/6 backdrop-blur-md">
              {menu.map((item) => {
                const isActive = pathname === item.link
                return (
                  <li key={item.key}>
                    <Link
                      href={item.link}
                      className={`relative px-2.5 xl:px-3.5 py-1.5 rounded-lg text-[11px] xl:text-[12px] font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                        isActive
                          ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30 shadow-md'
                          : 'text-zinc-300 hover:text-white hover:bg-white/8'
                      }`}
                    >
                      {t(`menu.${item.key}`)}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#fbbf24] animate-pulse" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-3">
              {/* LANGUAGE SELECTOR */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setOpenLang(p => !p)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold tracking-widest text-zinc-200 hover:text-amber-300 bg-white/5 hover:bg-white/10 border border-white/8 transition-all duration-300"
                >
                  <MdOutlineLanguage size={16} className="text-amber-400" />
                  {currentLang.label}
                </button>
                {openLang && (
                  <div className="absolute top-full mt-2 right-0 rounded-2xl shadow-2xl overflow-hidden border border-white/15 bg-[#12131d]/95 backdrop-blur-xl z-50 min-w-[100px] p-1.5 flex flex-col gap-1">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setOpenLang(false) }}
                        className={`w-full px-4 py-2 rounded-xl text-[12px] font-bold tracking-widest text-left transition-all ${
                          currentLang.code === lang.code
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* CONTACT CTA - DESKTOP */}
              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl text-[12px] font-extrabold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('menu.contact')}
              </Link>

              {/* HAMBURGER */}
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <FiMenu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#07070d]/95 backdrop-blur-2xl transition-all duration-300">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="font-extrabold text-xl tracking-widest text-amber-400">PATENTLEX</span>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white bg-white/5"
            >
              <FiX size={22} />
            </button>
          </div>
          <div className="flex flex-col items-start px-8 pt-8 gap-2">
            {menu.map((item) => {
              const isActive = pathname === item.link
              return (
                <Link
                  key={item.key}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xl font-bold tracking-wide transition-all ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                      : 'text-zinc-200 hover:text-amber-300 hover:bg-white/5'
                  }`}
                >
                  {t(`menu.${item.key}`)}
                </Link>
              )
            })}
          </div>
          {/* Mobile lang */}
          <div className="flex gap-3 px-8 pt-8 mt-auto pb-10 border-t border-white/10">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => { i18n.changeLanguage(lang.code); setOpen(false) }}
                className={`flex-1 py-3 rounded-xl text-sm font-bold tracking-widest transition-all ${
                  currentLang.code === lang.code
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-zinc-400 border border-white/10'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
