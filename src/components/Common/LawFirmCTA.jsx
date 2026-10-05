'use client'

import { FiShield, FiPhoneCall, FiArrowRight, FiCheckCircle, FiClock, FiAward } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../../ThemeContext'

export default function LawFirmCTA({
  title,
  subtitle,
  badge,
  buttonText,
  phoneText = "+998 88 147-00-81",
  phoneNumber = "+998881470081"
}) {
  const { t, i18n } = useTranslation()
  const { dark } = useTheme() || { dark: true }
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  const displayBadge = badge || (
    isRu
      ? 'ОФИЦИАЛЬНАЯ ПАТЕНТНАЯ И ЮРИДИЧЕСКАЯ ЗАЩИТА • OFFICIAL IP LEGAL COUNSEL'
      : isEn
      ? 'OFFICIAL IP LEGAL COUNSEL & PATENT PROTECTION'
      : 'RASMIY PATENT HUQUQI MUHOFAZASI • OFFICIAL IP LEGAL COUNSEL'
  )

  const displayTitle = title || (
    isRu
      ? 'Хотите превратить свой бренд в 100% законную монополию?'
      : isEn
      ? 'Ready to Turn Your Brand into a 100% Legal Monopoly?'
      : 'Siz Ham O‘z Brendingizni 100% Qonuniy Monopoliyaga Aylantirmoqchimisiz?'
  )

  const displaySubtitle = subtitle || (
    isRu
      ? 'Получите объективный аудит и стратегию защиты от патентного поверенного Минюста и PhD Мухаммадали Турдиалиева за 15 минут.'
      : isEn
      ? 'Get an objective audit and monopolistic IP protection strategy from licensed patent attorney & PhD Muhammad Ali Turdialiyev in 15 minutes.'
      : 'Adliya vazirligi litsenziyasiga ega patent vakili va PhD Muhammad Ali Turdialiyevdan 15 daqiqada xolis ekspertiza va to‘liq himoya strategiyasini oling.'
  )

  const displayButton = buttonText || (
    isRu ? 'Бесплатная Консультация в Telegram' : isEn ? 'Free Telegram Consultation' : 'Telegramda Bepul Maslahat Olish'
  )

  const telegramText = encodeURIComponent(
    isRu
      ? 'Здравствуйте! Хочу получить бесплатную консультацию ведущего патентного поверенного PatentLex.'
      : isEn
      ? 'Hello! I would like to request a free consultation with the Managing Patent Attorney at PatentLex.'
      : "Assalomu alaykum! PatentLex yuridik kompaniyasi orqali brend/patent masalasi bo'yicha boshqaruvchi patent vakilidan bepul maslahat olmoqchiman."
  )

  return (
    <div className="relative my-10 rounded-3xl overflow-hidden border border-amber-400/40 shadow-2xl shadow-black/80">
      
      {/* LUXURY LAW FIRM BACKGROUND WITH GOLD WATERMARK */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden bg-[#0a0d24]">
        <img
          src="/patent_card_bg.png"
          alt="PatentLex Law Firm"
          className="w-full h-full object-cover opacity-15 mix-blend-luminosity filter contrast-150 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07091a] via-[#0b0e2a]/95 to-[#07091a]" />
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] bg-amber-500/15" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[130px] bg-indigo-900/30" />
        
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      </div>

      {/* BANNER CONTENT */}
      <div className="relative z-10 p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* LEFT COLUMN */}
        <div className="max-w-2xl text-center lg:text-left space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest bg-amber-400/15 text-amber-300 border border-amber-400/40 shadow-lg backdrop-blur-md">
            <FiShield className="text-amber-400 text-xs" />
            <span>{displayBadge}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {displayTitle}
          </h3>

          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed font-normal">
            {displaySubtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-300 font-semibold">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400 shrink-0 text-base" />
              <span>{isRu ? '100% Конфиденциальность & NDA' : isEn ? '100% Confidentiality & NDA' : '100% Maxfiylik & NDA'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-amber-400 shrink-0 text-base" />
              <span>{isRu ? 'Дата приоритета за 24 часа' : isEn ? '24-Hour Priority Filing' : '24 Soatda Ustuvorlik Sanasi'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiAward className="text-blue-400 shrink-0 text-base" />
              <span>{isRu ? '1,200+ Успешных Кейсов' : isEn ? '1,200+ Success Cases' : '1,200+ Muvaffaqiyatli Keyslar'}</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-3.5 w-full lg:w-auto shrink-0">
          
          <a
            href={`https://t.me/copyrightsuz?text=${telegramText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto lg:w-72 py-4 px-7 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black transition-all flex items-center justify-center gap-2.5 shadow-2xl shadow-amber-400/30 hover:scale-[1.02] border border-amber-300"
          >
            <FaTelegram size={18} className="shrink-0" />
            <span>{displayButton}</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-auto lg:w-72 py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-amber-400/60 transition-all flex items-center justify-center gap-2.5 shadow-lg backdrop-blur-md"
          >
            <FiPhoneCall size={16} className="text-amber-400 shrink-0" />
            <span>{phoneText}</span>
          </a>

          <div className="text-[11px] text-zinc-400 font-medium text-center">
            🔒 {isRu ? 'Бесплатный аудит и гарантия NDA' : isEn ? 'Free preliminary audit & strict NDA' : 'Bepul dastlabki tekshiruv va maxfiylik kafolati'}
          </div>

        </div>

      </div>

    </div>
  )
}
