'use client'

import { FiX, FiCheckCircle, FiShield, FiAward, FiPhoneCall, FiSend, FiBriefcase, FiBookOpen } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function MemberModal({ member, isOpen, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !member) return null

  const telegramText = encodeURIComponent(
    isRu
      ? `Здравствуйте! Ознакомился с профилем ${member.name} (${member.role}) на сайте PatentLex. Хочу получить прямую консультацию по защите интеллектуальной собственности.`
      : isEn
      ? `Hello! I viewed the profile of ${member.name} (${member.role}) on PatentLex. I would like to schedule a direct IP consultation.`
      : `Assalomu alaykum! PatentLex saytida ${member.name} (${member.role}) profili bilan tanishdim.\nIntellektual mulk masalasi bo'yicha to'g'ridan-to'g'ri maslahat olishni istayman.`
  )

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto custom-scrollbar bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* BACKGROUND DISMISSER */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-3xl my-auto rounded-3xl bg-[#090b1c] border-2 border-amber-400/40 text-zinc-100 shadow-2xl overflow-hidden z-10 animate-scaleUp">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label={isRu ? 'Закрыть' : isEn ? 'Close' : 'Yopish'}
          className="absolute top-4 right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-black/70 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 transition-all flex items-center justify-center shadow-xl backdrop-blur-md z-30"
        >
          <FiX size={20} />
        </button>

        {/* TOP HEADER */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-b from-[#121636] to-[#090b1c] border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-2">
            
            {/* FRAMED PORTRAIT */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl shrink-0 bg-[#060714]">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-top filter contrast-105 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* NAME, TITLE & BADGES */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-black shadow-lg">
                <FiShield />
                <span>{member.badge || (isRu ? 'Ведущий эксперт PatentLex' : isEn ? 'Lead Patent Attorney' : 'PatentLex Yetakchi Mutaxassisi')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-md">
                {member.name}
              </h3>

              <p className="text-xs sm:text-sm font-bold text-amber-400 leading-snug">
                {member.role}
              </p>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-1">
                <FiCheckCircle size={14} />
                <span>{isRu ? 'Лицензированный поверенный в реестре Минюста' : isEn ? 'Official Registered Patent Attorney (MoJ)' : 'Adliya vazirligi rasmiy reestridagi vakolatli mutaxassis'}</span>
              </div>
            </div>

          </div>
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto custom-scrollbar">

          {/* EXTENDED BIO */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-2">
              <FiBookOpen />
              {isRu ? 'Профессиональный Опыт и Квалификация' : isEn ? 'Professional Experience & Credentials' : 'Professional Tajriba & Malaka'}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {member.fullBio || member.info}
            </p>
          </div>

          {/* SPECIALIZATIONS */}
          {member.skills && (
            <div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <FiBriefcase className="text-amber-400" />
                {isRu ? 'Ключевые направления специализации:' : isEn ? 'Key Areas of Practice:' : "Asosiy Ixtisoslashuv Yo'nalishlari:"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* KEY ACHIEVEMENTS / STATS */}
          {member.achievements && (
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                <FiAward />
                {isRu ? 'Ключевые показатели и достижения:' : isEn ? 'Key Milestones & Achievements:' : "Asosiy Ko'rsatkichlar & Yutuqlar:"}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-300">
                {member.achievements.map((ach, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* BOTTOM DIRECT ACTION BAR */}
        <div className="p-4 sm:p-6 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://t.me/copyrightsuz?text=${telegramText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <FaTelegram size={18} />
            <span>{isRu ? 'Консультация в Telegram' : isEn ? 'Direct Telegram Consultation' : "Telegramda To'g'ridan-To'g'ri Maslahat Olish"}</span>
          </a>

          <a
            href="tel:+998881470081"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 hover:border-amber-400 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
          >
            <FiPhoneCall size={15} />
            <span>{isRu ? 'Позвонить' : isEn ? 'Call Expert' : "Qo'ng'iroq Qilish"}</span>
          </a>
        </div>

      </div>
    </div>
  )
}
