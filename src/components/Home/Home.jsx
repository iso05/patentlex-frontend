'use client'

import { FaFacebook, FaInstagram, FaCalculator } from 'react-icons/fa6'
import { FiPhoneCall, FiSearch, FiShield, FiAward, FiCheckCircle } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import ContactModal from '../Contact/ContactModal'
import { useState } from 'react'
import { useTheme } from '../../ThemeContext'
import Link from 'next/link'
import '../../i18n'

const socialLinks = {
  instagram: 'https://www.instagram.com/patent_lex?igsh=MTg1ZjhudXNrcmEzMw%3D%3D',
  facebook: 'https://www.facebook.com/profile.php?id=61552680388002',
  telegram: 'https://t.me/copyrightsuz',
}

function Home() {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const { dark } = useTheme() || { dark: true }

  return (
    <section
      id="home"
      className={`relative w-full min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-[#060814]' : 'bg-[#faf9f6]'
      }`}
    >
      {/* ── THEMATIC BACKGROUND IMAGE & OVERLAYS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0">
          <img
            src="/hero_bg.png"
            alt="PatentLex Intellectual Property Background"
            className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
              dark ? 'opacity-30 mix-blend-luminosity filter contrast-125' : 'opacity-15 mix-blend-multiply'
            }`}
          />
          <div className={`absolute inset-0 ${
            dark
              ? 'bg-gradient-to-b from-[#060814]/75 via-[#060814]/85 to-[#060814]'
              : 'bg-gradient-to-b from-[#faf9f6]/80 via-[#faf9f6]/90 to-[#faf9f6]'
          }`} />
        </div>

        {/* Glowing accent circles */}
        <div className={`absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border ${
          dark ? 'border-amber-400/10' : 'border-amber-400/20'
        }`} />
        <div className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] ${
          dark ? 'bg-amber-500/10' : 'bg-amber-300/20'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full blur-[140px] ${
          dark ? 'bg-indigo-900/20' : 'bg-amber-100/60'
        }`} />

        {/* Blueprint grid lines */}
        <div
          className={`absolute inset-0 ${dark ? 'opacity-[0.05]' : 'opacity-[0.07]'}`}
          style={{
            backgroundImage: `linear-gradient(${dark ? 'rgba(251,191,36,0.3)' : 'rgba(180,120,20,0.4)'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? 'rgba(251,191,36,0.3)' : 'rgba(180,120,20,0.4)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 container mx-auto px-6 lg:px-16 pt-10 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* LEFT HERO CONTENT — 7 cols */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            {/* OFFICIAL TRUST BADGE */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-widest uppercase backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30 shadow-lg">
                <FiShield className="text-amber-400" />
                {t('heroEyebrow')}
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <FiCheckCircle size={14} />
                <span>PhD Darajasi & Rasmiy Litsenziya</span>
              </div>
            </div>

            {/* MAIN H1 TITLE */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight ${
              dark ? 'text-white drop-shadow-md' : 'text-zinc-900'
            }`}>
              {t('heroTitle')}
            </h1>

            {/* SUBTITLE */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
              dark ? 'text-zinc-300' : 'text-zinc-600'
            }`}>
              {t('heroText')}
            </p>

            {/* HIGH CONVERTING CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href="#checker"
                className="group flex items-center justify-center gap-3 px-7 py-4.5 rounded-2xl font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 hover:scale-[1.02]"
              >
                <FiSearch size={18} />
                {t('brandChecker.title')}
              </a>

              <a
                href="#services"
                className={`group flex items-center justify-center gap-3 px-6 py-4.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border-2 backdrop-blur-md ${
                  dark
                    ? 'border-white/15 text-zinc-200 hover:border-amber-400/50 hover:text-amber-300 bg-white/5'
                    : 'border-zinc-300 text-zinc-700 hover:border-amber-500 hover:text-amber-700 bg-white/80'
                }`}
              >
                <FiShield size={18} />
                {t('menu.services')}
              </a>

              <a
                href="tel:+998881470081"
                className={`hidden md:flex items-center justify-center gap-2 px-5 py-4.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border ${
                  dark
                    ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20'
                    : 'border-emerald-300 text-emerald-700 bg-emerald-50 hover:bg-emerald-100'
                }`}
              >
                <FiPhoneCall size={16} />
                {t('freeConsultationShort')}
              </a>
            </div>

            {/* LIVE TRUST STATS ROW */}
            <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${
              dark ? 'border-white/10' : 'border-zinc-200'
            }`}>
              <div>
                <div className={`text-2xl sm:text-3xl font-black ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
                  1,200+
                </div>
                <div className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1 ${
                  dark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  {t('statProjects')}
                </div>
              </div>

              <div>
                <div className={`text-2xl sm:text-3xl font-black ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
                  99.4%
                </div>
                <div className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1 ${
                  dark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  {t('statSuccessRate')}
                </div>
              </div>

              <div>
                <div className={`text-2xl sm:text-3xl font-black ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
                  10+ Yil
                </div>
                <div className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase mt-1 ${
                  dark ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                  {t('statYears')}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — INTERACTIVE LUXURY CARD STACK — 5 cols */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[480px]">
            {/* Decorative background cards */}
            <div className={`absolute top-6 right-6 w-72 sm:w-80 h-96 rounded-3xl rotate-6 border overflow-hidden transition-all duration-500 pointer-events-none ${
              dark ? 'border-amber-400/20 shadow-2xl shadow-black/90' : 'border-amber-300 shadow-xl'
            }`}>
              <img
                src="/patent_gears_bg.png"
                alt="Patent Lex Gears"
                className="w-full h-full object-cover filter contrast-125 brightness-90 opacity-60 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-black/70" />
            </div>

            {/* Front Interactive Card */}
            <div className={`group relative w-80 sm:w-92 h-[460px] rounded-3xl border flex flex-col justify-between p-7 transition-all duration-500 overflow-hidden shadow-2xl ${
              dark ? 'border-white/15 shadow-black/90 bg-[#0b0e20]' : 'border-zinc-300 shadow-xl bg-white'
            }`}>
              {/* Full Background Image */}
              <img
                src="/patent_card_bg.png"
                alt="Patent Lex Official Protection"
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

              {/* Top Verified Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase backdrop-blur-md bg-black/70 text-amber-400 border border-amber-400/40 shadow-lg">
                  <span className="w-2 h-2 rounded-full animate-pulse bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                  {t('availableNow')}
                </div>
                <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center">
                  <FiAward size={16} />
                </div>
              </div>

              {/* Middle Patent Authority Proof */}
              <div className="relative z-10 my-auto text-center px-2">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 text-3xl shadow-xl">
                  <FiShield />
                </div>
                <div className="text-xl font-black text-white tracking-wide">
                  PATENTLEX LAW FIRM
                </div>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mt-1">
                  100% Rasmiy Huquqiy Himoya
                </p>
                <p className="text-[11px] text-zinc-400 mt-2 line-clamp-2">
                  Adliya vazirligi ro'yxatidan o'tgan rasmiy patent vakili guvohnomasi
                </p>
              </div>

              {/* Bottom Direct Interactive Elements */}
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['Tovar Belgisi', 'Ixtiro Patenti', 'Mualliflik', 'Bojxona Reestri'].map(tag => (
                    <Link
                      href="/services"
                      key={tag}
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wide transition-all duration-300 bg-black/60 hover:bg-amber-400/20 text-zinc-200 hover:text-amber-300 border border-white/20 hover:border-amber-400/50 backdrop-blur-md"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <a
                  href="tel:+998881470081"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl transition-all duration-300 border bg-black/60 hover:bg-black/80 border-white/15 hover:border-amber-400/40 backdrop-blur-md text-zinc-200 shadow-xl group/btn"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-400 text-black font-bold transition-all duration-300">
                    <FiPhoneCall size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider uppercase text-zinc-400">
                      {t('freeConsultationShort')}
                    </div>
                    <div className="text-sm font-black text-white tracking-wide">
                      +998 88 147-00-81
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social sidebar */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
              {[
                { href: socialLinks.instagram, icon: <FaInstagram size={15} /> },
                { href: socialLinks.facebook, icon: <FaFacebook size={15} /> },
                { href: socialLinks.telegram, icon: <FaTelegram size={15} /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 border bg-white/5 border-white/10 text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 backdrop-blur-md"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  )
}

export default Home
