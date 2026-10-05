'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiLayers, FiInfo, FiArrowRight, FiShield, FiCpu } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { useTheme } from '../../ThemeContext'
import NicheModal from './NicheModal'
import AiBrandAssistantModal from '../Common/AiBrandAssistantModal'

export default function BrandChecker() {
  const { t, i18n } = useTranslation()
  const { dark } = useTheme() || { dark: true }
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  const [selectedNiche, setSelectedNiche] = useState('food')
  const [activeModalNiche, setActiveModalNiche] = useState(null)
  const [openAiModal, setOpenAiModal] = useState(false)

  const niches = [
    {
      id: 'food',
      title: 'Oziq-ovqat, Ichimliklar & Restoranlar',
      sub: 'Kafexona, restoran, taomlar, suv va yetkazib berish',
      classes: '29, 30, 32, 43',
      img: '/niches/food.jpg',
      tagColor: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
      importance: "Oziq-ovqat va umumiy ovqatlanish sohasida nom va qadoq o'g'irlanishi eng ko'p uchraydi. Reseptlar, brend logotipi va menyuni o'z vaqtida patentlash biznesingizni soxta nusxalardan va tovar belgisining olib qo'yilishidan asraydi.",
      classDetails: [
        { name: '29-sinf', desc: "Go'sht, baliq, parranda, sut mahsulotlari, sariyog', pishloq, konservalangan meva va sabzavotlar." },
        { name: '30-sinf', desc: 'Qahva, choy, kakao, non, qandolat mahsulotlari, shirinliklar, ziravorlar va souslar.' },
        { name: '32-sinf', desc: 'Mineral va gazlangan suvlar, sharbatlar, alkogolsiz ichimliklar va energetiklar.' },
        { name: '43-sinf', desc: 'Restoranlar, kafexona, umumiy ovqatlanish maskanlari va taom yetkazib berish xizmatlari.' },
      ]
    },
    {
      id: 'it',
      title: "IT, Dasturiy Ta'minot & Mobil Ilovalar",
      sub: 'Veb-saytlar, mobil ilovalar, SaaS platformalar va AI',
      classes: '9, 42',
      img: '/niches/it.jpg',
      tagColor: 'bg-blue-400/15 text-blue-300 border-blue-400/30',
      importance: "Startap yoki IT kompaniya nomini patentlamaslik App Store, Google Play akkauntlarining bloklanishiga yoki domen/nomingiz boshqa kompaniya nomiga ro'yxatdan o'tib ketishiga sabab bo'ladi.",
      classDetails: [
        { name: '9-sinf', desc: "Dasturiy ta'minot, mobil ilovalar (iOS/Android), elektron uskunalar, ma'lumotlar bazasi kodlari." },
        { name: '42-sinf', desc: 'SaaS bulutli xizmatlar, IT konsalting, veb-dasturlash, AI algoritmlari va server xizmatlari.' },
      ]
    },
    {
      id: 'fashion',
      title: 'Kiyim-kechak, Poyabzal & Moda',
      sub: "Brend kiyimlar, poyabzal, aksessuarlar va to'qimachilik",
      classes: '25, 35',
      img: '/niches/fashion.jpg',
      tagColor: 'bg-purple-400/15 text-purple-300 border-purple-400/30',
      importance: "Moda va tekstil bozorida soxta leybllar (kontrafakt) eng katta xavfdir. Patentlash orqali siz bozordagi barcha nusxalarni musodara qildirishingiz va 100 mln+ so'mgacha tovon puli undirishingiz mumkin.",
      classDetails: [
        { name: '25-sinf', desc: 'Barcha turdagi ustki va ichki kiyimlar, oyoq kiyimlar, bosh kiyimlar, sport liboslari.' },
        { name: '35-sinf', desc: "Kiyim do'konlari, butiklar tarmog'i, shou-rumlar, reklama va onlayn savdo xizmatlari." },
      ]
    },
    {
      id: 'med',
      title: 'Farmatsevtika, Tibbiyot & Kosmetika',
      sub: "Klinikalar, dorilar, kremlar, biologik qo'shimchalar",
      classes: '3, 5, 44',
      img: '/niches/med.jpg',
      tagColor: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
      importance: "Tibbiy vositalar va kosmetikada brend xavfsizligi mijozlar ishonchining asosi hisoblanadi. Davlat ro'yxatidan o'tgan tovar belgisi sertifikatlash va dorixonalar tarmog'iga kirishda majburiy talabdir.",
      classDetails: [
        { name: '3-sinf', desc: 'Kosmetika, parfyumeriya, sovunlar, efir moylari, shampunlar va kremlar.' },
        { name: '5-sinf', desc: "Dori-darmonlar, biologik faol qo'shimchalar (BAA), vitaminlar, tibbiy preparatlar." },
        { name: '44-sinf', desc: "Tibbiy klinikalar, stomatologiya, diagnostika markazlari, go'zallik salonlari va SPA." },
      ]
    },
    {
      id: 'production',
      title: 'Sanoat Ishlab Chiqarish & Qurilish',
      sub: 'Zavodlar, uskunalar, qurilish mollari va xomashyo',
      classes: '6, 7, 19',
      img: '/niches/production.jpg',
      tagColor: 'bg-indigo-400/15 text-indigo-300 border-indigo-400/30',
      importance: "Katta ishlab chiqarish korxonalari uchun brend — davlat tenderlari, xalqaro eksport va yirik shartnomalarda asosiy aktiv hisoblanadi. Monopol huquq mahsulotingizni chegaradan olib o'tishda bojxona himoyasini beradi.",
      classDetails: [
        { name: '6-sinf', desc: 'Metall konstruksiyalar, armatura, metall quvurlar va temir mahsulotlar.' },
        { name: '7-sinf', desc: 'Stanoklar, dvigatellar, ishlab chiqarish uskunalari, sanoat mexanizmlari.' },
        { name: '19-sinf', desc: "Qurilish materiallari, sement, gips, plitka, g'isht, polimer mahsulotlar." },
      ]
    },
    {
      id: 'retail',
      title: "Savdo, Do'konlar & Xizmat Ko'rsatish",
      sub: 'Supermarketlar, savdo markalari, yetkazish va konsalting',
      classes: '35, 39, 41',
      img: '/niches/retail.jpg',
      tagColor: 'bg-rose-400/15 text-rose-300 border-rose-400/30',
      importance: "Do'konlar tarmog'i, franchise sotish yoki filiallar ochish rejalashtirilayotgan bo'lsa, brendni zudlik bilan himoyalash lozim. Aks holda bir necha yillik marketing mehnatingiz raqobatchilarga o'tib ketadi.",
      classDetails: [
        { name: '35-sinf', desc: "Chakana va ulgurji savdo tarmoqlari, supermarketlar, distribyutsiya va marketing." },
        { name: '39-sinf', desc: 'Logistika, yuk tashish xizmatlari, kuryerlik va omborxona saqlash.' },
        { name: '41-sinf', desc: "O'quv markazlari, kurslar, treninglar, fitness va madaniy xizmatlar." },
      ]
    },
  ]

  return (
    <section id="checker" className={`relative py-28 overflow-hidden transition-colors duration-500 ${
      dark ? 'bg-[#060814]' : 'bg-zinc-50'
    }`}>
      {/* Background glow & patent image accents */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_gears_bg.png"
          alt="PatentLex Trademark Database Classification"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-15 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#060814]/85 via-[#060814]/90 to-[#060814]'
            : 'bg-gradient-to-b from-zinc-50/85 via-zinc-50/90 to-zinc-50'
        }`} />
        <div className={`absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px] ${
          dark ? 'bg-amber-500/12' : 'bg-amber-400/20'
        }`} />
        <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] ${
          dark ? 'bg-indigo-900/15' : 'bg-blue-100'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-5 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30 shadow-lg shadow-amber-400/5">
            <FiLayers className="text-amber-400 text-sm animate-pulse" />
            <span>{isRu ? 'МЕЖДУНАРОДНЫЕ КЛАССЫ МКТУ' : isEn ? 'NICE CLASSIFICATION & INDUSTRIES' : 'XALQARO MKTU VA FAOLIYAT SOHALARI'}</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {isRu
              ? 'Защита Брендов по Сферам Деятельности'
              : isEn
              ? 'Protect Your Trademark by Industry'
              : "Faoliyat Sohangiz Bo'yicha Tovar Belgisini Himoyalang"}
          </h2>
          <p className={`text-base sm:text-xl leading-relaxed max-w-3xl mx-auto ${
            dark ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            {isRu
              ? 'Международные классы МКТУ (Nice Classification) и практические рекомендации патентных поверенных для каждого сектора бизнеса.'
              : isEn
              ? 'International Nice Classification classes and practical patent attorney guidance tailored to your business sector.'
              : "Har bir soha uchun xalqaro MKTU sinflari va patent vakilining amaliy tavsiyalari bilan tanishing."}
          </p>
        </div>

        {/* EXPANSIVE INTERACTIVE CARD */}
        <div className={`rounded-3xl border p-7 sm:p-12 lg:p-14 shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
          dark
            ? 'bg-[#0a0d1f]/95 border-white/12 shadow-black/90'
            : 'bg-white border-zinc-200 shadow-2xl'
        }`}>
          {/* NICHE CARDS GRID */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <label className={`block text-xs sm:text-sm font-black uppercase tracking-wider ${
                dark ? 'text-zinc-300' : 'text-zinc-700'
              }`}>
                {isRu ? 'ВЫБЕРИТЕ СФЕРУ ДЕЯТЕЛЬНОСТИ:' : isEn ? 'CHOOSE YOUR INDUSTRY SECTOR:' : 'FAOLIYAT SOHANGIZNI TANLANG:'}
              </label>
              <span className="text-xs text-amber-400 font-bold inline-flex items-center gap-1.5">
                <FiInfo size={14} className="shrink-0" />
                {isRu
                  ? 'Нажмите «Подробнее» для ознакомления со всеми классами'
                  : isEn
                  ? 'Click "Learn More" to view all detailed classes'
                  : 'To\'liq tushuncha olish uchun "Batafsil" tugmasini bosing'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {niches.map((niche) => {
                const isSelected = selectedNiche === niche.id
                return (
                  <div
                    key={niche.id}
                    onClick={() => {
                      setSelectedNiche(niche.id)
                      setActiveModalNiche(niche)
                    }}
                    className={`group relative text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex items-center gap-5 overflow-hidden cursor-pointer ${
                      isSelected
                        ? dark
                          ? 'bg-[#121733] border-amber-400 ring-2 ring-amber-400/50 shadow-2xl shadow-amber-400/20 -translate-y-1'
                          : 'bg-amber-50/95 border-amber-500 ring-2 ring-amber-500/40 shadow-xl -translate-y-1'
                        : dark
                          ? 'bg-white/4 border-white/10 hover:bg-white/8 hover:border-white/25 hover:-translate-y-1'
                          : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    {/* Background subtle image accent */}
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
                      <img src={niche.img} alt={niche.title} className="w-full h-full object-cover" />
                    </div>

                    {/* Left Icon / Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 group-hover:border-amber-400/60 shadow-lg transition-all duration-300 group-hover:scale-105">
                      <img
                        src={niche.img}
                        alt={niche.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base sm:text-lg font-black leading-snug truncate group-hover:text-amber-400 transition-colors ${
                        dark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {niche.title}
                      </h4>
                      <p className={`text-xs mt-1 line-clamp-2 ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {niche.sub}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/8">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-xl text-[11px] font-black tracking-wider uppercase border shadow-sm ${
                          isSelected
                            ? 'bg-amber-400 text-black border-amber-400 font-black'
                            : niche.tagColor
                        }`}>
                          МКТУ: {niche.classes}
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedNiche(niche.id)
                            setActiveModalNiche(niche)
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all bg-white/10 hover:bg-amber-400 text-zinc-200 hover:text-black border border-white/15 hover:border-amber-400 shadow-sm shrink-0"
                        >
                          <span>{t('common.readMore') || 'Batafsil'}</span>
                          <span className="text-amber-400 font-bold group-hover:text-black">➔</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* AI LAUNCHER BANNER AT BOTTOM */}
            <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-400/15 via-orange-400/10 to-indigo-600/15 border border-amber-400/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40 mb-2">
                  <HiSparkles />
                  <span>PATENTLEX AI BRAND RADAR</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {isRu
                    ? 'Хотите проверить свой бренд через нейросеть?'
                    : isEn
                    ? 'Want to test your brand name with Artificial Intelligence?'
                    : 'Brendingizni patentga yaroqliligini AI orqali tekshirasizmi?'}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                  {isRu
                    ? 'Запустите умный AI-сканер: проверка рисков смешения, генерация 4 свободных вариантов и точный подбор классов МКТУ.'
                    : isEn
                    ? 'Launch our smart AI scanner: similarity risk analysis, 4 creative trademark alternatives, and precise Nice class detection.'
                    : 'AI Patent Assistant orqali nomingizni 5 soniyada bepul tekshiring va 4 ta yangi muqobil brend takliflarini oling.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpenAiModal(true)}
                className="w-full md:w-auto px-7 py-4 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-400/30 hover:scale-105 shrink-0"
              >
                <FiCpu size={18} />
                <span>{isRu ? 'Открыть AI Помощник' : isEn ? 'Launch AI Assistant' : 'AI Tekshiruvchini Ochish'}</span>
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED INDUSTRY NICHE POPUP MODAL */}
      <NicheModal
        isOpen={Boolean(activeModalNiche)}
        onClose={() => setActiveModalNiche(null)}
        niche={activeModalNiche}
      />

      {/* AI BRAND ASSISTANT MODAL */}
      <AiBrandAssistantModal
        isOpen={openAiModal}
        onClose={() => setOpenAiModal(false)}
      />
    </section>
  )
}
