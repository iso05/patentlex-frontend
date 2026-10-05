'use client'

import { FiX, FiCheckCircle, FiShield, FiAlertTriangle, FiFileText, FiPhoneCall, FiArrowRight, FiInfo } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export default function NicheModal({ niche, isOpen, onClose, onSelectNiche }) {
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

  if (!isOpen || !niche) return null

  const telegramText = encodeURIComponent(
    isRu
      ? `Здравствуйте! Ознакомился с регистрацией товарного знака в сфере "${niche.title}" (МКТУ ${niche.classes}) на сайте PatentLex. Прошу провести предварительный аудит моего бренда.`
      : isEn
      ? `Hello! I reviewed trademark registration for "${niche.title}" (Classes ${niche.classes}) on PatentLex. Please perform a preliminary trademark audit for my brand.`
      : `Assalomu alaykum! PatentLex saytida "${niche.title}" sohasi bo'yicha tovar belgisini ro'yxatdan o'tkazish haqida ma'lumot oldim.\nMKTU sinflari: ${niche.classes}\nIltimos, ushbu soha bo'yicha brendimni bepul tekshirib, qonuniy rasmiylashtirishda yordam bering.`
  )

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto custom-scrollbar bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* BACKGROUND DISMISSER */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* MODAL WINDOW */}
      <div className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#0a0d20] border-2 border-amber-400/40 text-zinc-100 shadow-2xl overflow-hidden z-10 animate-scaleUp">
        
        {/* TOP HERO BANNER */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <img
            src={niche.img}
            alt={niche.title}
            className="w-full h-full object-cover filter contrast-115 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d20] via-[#0a0d20]/60 to-black/60" />

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Yopish"
            className="absolute top-4 right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-black/70 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 transition-all flex items-center justify-center shadow-xl backdrop-blur-md z-30"
          >
            <FiX size={20} />
          </button>

          {/* FLOATING HEADER CONTENT */}
          <div className="absolute bottom-4 left-5 sm:left-8 right-5 sm:right-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-black shadow-lg mb-2">
              <FiShield />
              <span>{isRu ? 'МКТУ' : isEn ? 'Nice Cl.' : 'MKTU'}: {niche.classes}</span>
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-lg">
              {niche.title}
            </h3>
          </div>
        </div>

        {/* MODAL BODY CONTENT */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[60vh] sm:max-h-[65vh] overflow-y-auto custom-scrollbar">

          {/* WHY IMPORTANT & REAL RISK */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30 backdrop-blur-md">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-2">
              <FiShield className="text-base shrink-0" />
              {isRu
                ? 'Почему регистрация товарного знака жизненно важна в этой сфере?'
                : isEn
                ? 'Why Trademark Registration is Crucial in This Industry?'
                : 'Nima Uchun Bu Sohada Patentlash Hayotiy Zarur?'}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
              {niche.importance ||
                "Ushbu sohada brendingizni o'z vaqtida patentlamaslik raqobatchilar tomonidan nomingiz o'g'irlanishi, soxta mahsulotlar paydo bo'lishi va 100 million so'mgacha jarimalarga olib kelishi mumkin."}
            </p>
          </div>

          {/* DETAILED CLASS BREAKDOWN WITH ICONS */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
                <FiInfo className="text-amber-400" />
                {isRu
                  ? 'Классы МКТУ и перечень товаров/услуг:'
                  : isEn
                  ? 'Nice Classification Classes & Included Goods/Services:'
                  : 'MKTU Sinflari va Ularga Kiruvchi Tovar/Xizmatlar:'}
              </h4>
              <span className="text-[11px] text-zinc-400 font-semibold hidden sm:inline">
                {isRu ? 'Международная классификация (МКТУ)' : isEn ? 'International Nice Classification' : 'Xalqaro Nitsa Tasnifoti'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {niche.classDetails?.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group/item"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-black">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                      {isRu ? 'Официальный МКТУ' : isEn ? 'Official Nice' : 'Rasmiy MKTU'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* KEY PROTECTIONS / BENEFITS */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <FiCheckCircle className="text-base shrink-0" />
              {isRu
                ? 'Юридические гарантии PatentLex:'
                : isEn
                ? 'PatentLex Legal Guarantees:'
                : 'PatentLex Qonuniy Kafolatlari:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">✓</span>
                <span>{isRu ? '10 лет исключительной монополии' : isEn ? '10-year exclusive legal monopoly' : '10 yillik mutlaq davlat monopoliyasi'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">✓</span>
                <span>{isRu ? 'Подача официальной заявки за 24 часа' : isEn ? 'Official priority filing in 24 hours' : '24 soatda rasmiy talabnoma topshirish'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">✓</span>
                <span>{isRu ? 'Таможенный реестр объектов ИС' : isEn ? 'Customs IP Border Protection Registry' : 'Bojxona intellektual mulk reestri'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-xs">✓</span>
                <span>{isRu ? '100% защита от подделок и контрафакта' : isEn ? '100% protection against counterfeits' : 'Kontrafaktga qarshi 100% himoya'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="p-4 sm:p-6 bg-black/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              if (onSelectNiche) onSelectNiche(niche.id)
              onClose()
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-400/25 hover:scale-[1.02]"
          >
            <span>{isRu ? 'Выбрать сферу и проверить бренд' : isEn ? 'Select Industry & Check Brand' : 'Shu Sohani Tanlash & Brendni Tekshirish'}</span>
            <FiArrowRight size={16} />
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`https://t.me/copyrightsuz?text=${telegramText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-4 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <FaTelegram size={16} />
              <span>Telegram</span>
            </a>
            <a
              href="tel:+998881470081"
              className="flex-1 sm:flex-initial px-5 py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/20 hover:border-amber-400 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
            >
              <FiPhoneCall size={14} />
              <span>{isRu ? 'Позвонить' : isEn ? 'Call' : "Qo'ng'iroq"}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
