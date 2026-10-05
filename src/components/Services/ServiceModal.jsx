'use client'

import { useEffect } from 'react'
import { FiX, FiCheckCircle, FiPhoneCall } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { useTheme } from '../../ThemeContext'
import { useTranslation } from 'react-i18next'
import '../../i18n'

// Map each of the 8 services to custom HD graphics and key features
const serviceDetailsMap = {
  trademark: {
    img: '/patent_card_bg.png',
    features: [
      "Brend va logotiplarni tekshirish hamda to'liq monopol muhofaza qilish",
      "O'zbekiston va Xalqaro (Madrid tizimi) bo'yicha rasmiy ro'yxatdan o'tkazish",
      "Tovar belgisiga bo'lgan 10 yillik rasmiy davlat guvohnomasini olish"
    ]
  },
  patent: {
    img: '/patent_gears_bg.png',
    features: [
      "Ixtiro, foydali model va sanoat namunalarini patentlash",
      "Formula tuzish, texnik ekspertiza va talabnomalarni professional topshirish",
      "Xorijiy davlatlarda PCT tizimi orqali texnologiyalarni himoyalash"
    ]
  },
  copyright: {
    img: '/hero_bg.png',
    features: [
      "IT kodlar, dasturlar, ilovalar, elektron kurslar va dizaynlarni rasmiy ro'yxatdan o'tkazish",
      "Mualliflik shartnomalari va litsenziya kelishuvlarini tuzish",
      "Muallif vafotidan keyin 70 yilgacha amal qiluvchi rasmiy guvohnoma"
    ]
  },
  domains: {
    img: '/bg_services.png',
    features: [
      "Noqonuniy nusxalangan kontrafakt mahsulotlarni bozorlardan yo'qotish",
      "Huquqni muhofaza qiluvchi organlar bilan birgalikda reydlar o'tkazish",
      "Nohalol raqobatchilardan 100 000 000+ so'mgacha moddiy tovon puli undirish"
    ]
  },
  rights: {
    img: '/bg_contact.png',
    features: [
      "Iqtisodiy, fuqarolik va Apellyatsiya sudlarida to'liq advokatlik vakilligi",
      "Intellektual mulk nizolarini sudgacha hal etish (Mediatsiya)",
      "Boshqa shaxslar noqonuniy olgan patent va guvohnomalarni sudda bekor qilish"
    ]
  },
  consulting: {
    img: '/bg_team.png',
    features: [
      "Davlat Bojxona qo'mitasining reestriga intellektual mulkni kiritish",
      "Chegara orqali soxta tovarlar kirib kelishini va chiqishini avtomatik bloklash",
      "Kontrafakt partiyalarni chegarada musodara qilish"
    ]
  },
  international: {
    img: '/patent_card_bg.png',
    features: [
      "Madrid tizimi orqali 130+ davlatda yagona ariza bilan brendni himoya qilish",
      "AQSH, Yevroittifoq, Xitoy, Rossiya, BAA va MDH davlatlarida patentlash",
      "Eksportyorlar uchun global huquqiy xavfsizlik kafolati"
    ]
  },
  franchise: {
    img: '/bg_blog.png',
    features: [
      "Franchayzing (Kompleks tadbirkorlik litsenziyasi) shartnomalarini tuzish",
      "Tovar belgisidan foydalanish litsenziyalari va to'liq sotish (boshqaga o'tkazish)",
      "Adliya vazirligida shartnomalarni 100% davlat ro'yxatidan o'tkazish"
    ]
  }
}

export default function ServiceModal({ open, onClose, serviceId, title, body }) {
  const { dark } = useTheme() || { dark: true }
  const { t } = useTranslation()

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const details = serviceDetailsMap[serviceId] || {
    img: '/patent_card_bg.png',
    features: [
      "To'liq yuridik ekspertiza va maslahat",
      "Hujjatlarni davlat standartlariga mos tayyorlash",
      "Kafolatlangan huquqiy muhofaza"
    ]
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto custom-scrollbar animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={`relative max-w-2xl w-full rounded-3xl overflow-hidden border transition-all duration-500 shadow-2xl my-auto ${
          dark
            ? 'bg-[#0b0c14] border-white/15 shadow-black/90'
            : 'bg-white border-zinc-200 shadow-2xl'
        }`}
      >
        {/* HEADER IMAGE BANNER */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img
            src={details.img}
            alt={title}
            className="w-full h-full object-cover filter contrast-110 brightness-95 transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c14] via-[#0b0c14]/50 to-black/60" />

          {/* Top Badge */}
          <div className="absolute top-4 left-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-widest uppercase backdrop-blur-md bg-black/60 text-amber-400 border border-amber-400/40 shadow-lg">
              <HiSparkles size={13} className="text-amber-400" />
              {t('services.details') || 'XIZMAT TAFSILOTLARI'}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center bg-black/60 hover:bg-amber-400 hover:text-black text-white border border-white/20 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* MODAL CONTENT BODY */}
        <div className="p-6 sm:p-8 -mt-6 relative z-10">
          {/* Title */}
          <h3 className={`text-2xl sm:text-3xl font-extrabold leading-tight mb-3 tracking-wide ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {title}
          </h3>

          {/* Body Description */}
          <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
            dark ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            {body}
          </p>

          {/* KEY BENEFITS / FEATURES LIST */}
          <div className={`p-4 sm:p-5 rounded-2xl border mb-7 ${
            dark
              ? 'bg-white/4 border-white/8'
              : 'bg-zinc-50 border-zinc-200'
          }`}>
            <h4 className={`text-xs font-bold tracking-wider uppercase mb-3 text-amber-400`}>
              Xizmat afzalliklari va imkoniyatlari:
            </h4>
            <ul className="flex flex-col gap-2.5">
              {details.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <FiCheckCircle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className={dark ? 'text-zinc-200' : 'text-zinc-700'}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FOOTER ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="tel:+998881470081"
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40"
            >
              <FiPhoneCall size={15} />
              {t('freeConsultation') || 'Bepul Maslahat Olish'}
            </a>
            
            <button
              onClick={onClose}
              className={`w-full sm:w-auto py-3.5 px-6 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                dark
                  ? 'border-white/15 text-zinc-400 hover:text-white hover:bg-white/10'
                  : 'border-zinc-300 text-zinc-600 hover:bg-zinc-100'
              }`}
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
