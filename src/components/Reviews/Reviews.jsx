'use client'

import { useState, useEffect } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiShield,
  FiCheckCircle,
  FiAward,
  FiMessageSquare,
  FiPlusCircle,
  FiArrowRight,
  FiPhoneCall,
  FiGlobe,
} from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import { reviewsData } from './reviewsData'
import SubmitReviewModal from './SubmitReviewModal'
import LawFirmCTA from '../Common/LawFirmCTA'
import { useTheme } from '../../ThemeContext'
import '../../i18n'

export default function Reviews({ isStandalone = false }) {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  const [activeCategory, setActiveCategory] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openSubmitModal, setOpenSubmitModal] = useState(false)

  const categories = [
    { id: 'all', label: 'Barcha Fikrlar' },
    { id: 'trademark', label: 'Tovar Belgilari' },
    { id: 'international', label: 'Xalqaro (Madrid)' },
    { id: 'copyright', label: 'Mualliflik & IT' },
    { id: 'litigation', label: 'Sudlarda Himoya' },
  ]

  const filteredReviews = activeCategory === 'all'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide(p => (p + 1) % reviewsData.length)
  }

  const prevSlide = () => {
    setCurrentSlide(p => (p - 1 + reviewsData.length) % reviewsData.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [])

  const currentReview = reviewsData[currentSlide]

  return (
    <section
      id="reviews"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-[#070814] text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      {/* Background ambient lighting & patent image */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_card_bg.png"
          alt="PatentLex Client Reviews"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-20 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#070814]/85 via-[#070814]/90 to-[#070814]'
            : 'bg-gradient-to-b from-zinc-50/85 via-zinc-50/90 to-zinc-50'
        }`} />
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px] bg-amber-500/10" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] bg-indigo-900/15" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        
        {/* SECTION HEADER WITH TRUST SCORE BADGE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30 shadow-lg shadow-amber-400/5">
              <FiAward className="text-amber-400 text-sm animate-pulse" />
              <span>100% VERIFIED CLIENT TESTIMONIALS</span>
            </div>

            <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${
              dark ? 'text-white' : 'text-zinc-900'
            }`}>
              Mijozlarimiz va Hamkorlarimiz Bahosi
            </h2>

            <p className={`text-base sm:text-lg leading-relaxed mt-2 max-w-2xl ${
              dark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              PatentLex bilan hamkorlikda o‘z brendi va intellektual mulkini muvaffaqiyatli himoya qilgan tadbirkorlar taassurotlari.
            </p>
          </div>

          {/* GOOGLE / YANDEX RATING & LEAVE REVIEW BUTTON */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className={`p-4 px-5 rounded-2xl border backdrop-blur-xl flex items-center gap-3.5 shadow-xl ${
              dark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200'
            }`}>
              <div className="text-3xl font-black text-amber-400 leading-none">
                4.9
              </div>
              <div>
                <div className="flex gap-1 text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div className={`text-[11px] font-bold mt-0.5 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  184+ Rasmiy Baholar
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpenSubmitModal(true)}
              className="py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-400/25 hover:scale-[1.02]"
            >
              <FiPlusCircle size={16} />
              <span>Fikr Qoldirish</span>
            </button>
          </div>
        </div>

        {/* ── FEATURED SPOTLIGHT CASE CAROUSEL ── */}
        <div className={`rounded-3xl border p-7 sm:p-10 lg:p-12 mb-16 shadow-2xl backdrop-blur-2xl transition-all duration-500 relative overflow-hidden ${
          dark
            ? 'bg-[#0d1026]/90 border-white/12 shadow-black/90'
            : 'bg-white border-zinc-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* LEFT PORTRAIT & CERTIFICATE BADGE (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-black/80">
                <img
                  key={currentReview.image}
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-full h-full object-cover filter contrast-105 brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Certificate Verified Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-black shadow-md">
                    {currentReview.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 flex items-center justify-center border border-white/20">
                    <FiCheckCircle size={16} />
                  </div>
                </div>

                {/* Client info overlay */}
                <div className="absolute bottom-4 left-5 right-5">
                  <h4 className="text-lg sm:text-xl font-black text-white leading-tight">
                    {currentReview.name}
                  </h4>
                  <p className="text-xs font-bold text-amber-400 mt-1">
                    {currentReview.role}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    {currentReview.location}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT CASE STUDY DETAILS & QUOTE (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-xl text-xs font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {currentReview.certNo}
                  </span>

                  <div className="flex items-center gap-1 text-amber-400 text-lg">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-black leading-snug mb-4 ${
                  dark ? 'text-white' : 'text-zinc-900'
                }`}>
                  «{currentReview.caseTitle}»
                </h3>

                <blockquote className={`text-base sm:text-xl font-normal leading-relaxed italic ${
                  dark ? 'text-zinc-200' : 'text-zinc-700'
                }`}>
                  "{currentReview.text}"
                </blockquote>
              </div>

              {/* Case Highlights & Timeline */}
              <div className={`p-4 sm:p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
                dark ? 'bg-white/4 border-white/8' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Jarayon Natijasi:
                  </div>
                  <div className={`text-xs sm:text-sm font-black mt-0.5 ${
                    dark ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {currentReview.highlight}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Rasmiylashtirish Tezligi:
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5">
                    {currentReview.duration}
                  </div>
                </div>
              </div>

              {/* CAROUSEL CONTROLS */}
              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Oldingi fikr"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Keyingi fikr"
                >
                  <FiChevronRight size={20} />
                </button>

                <div className="flex gap-2 ml-2">
                  {reviewsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentSlide
                          ? 'w-8 bg-amber-400'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Slayd ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="ml-auto text-xs font-black text-zinc-400 uppercase tracking-widest">
                  {currentSlide + 1} / {reviewsData.length} Keyslar
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* ── CATEGORY FILTER TABS ── */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black tracking-wider uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-black border-amber-400 shadow-xl shadow-amber-400/20 scale-105'
                  : dark
                    ? 'bg-white/4 border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── ALL REVIEWS / CASE STUDIES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-xl ${
                dark
                  ? 'bg-[#0d1026]/80 border-white/10 hover:border-amber-400/50 hover:bg-[#121636]/90 hover:-translate-y-1.5 hover:shadow-black/80'
                  : 'bg-white border-zinc-200 hover:border-amber-400 hover:-translate-y-1.5 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Header with avatar & rating */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-13 h-13 rounded-2xl object-cover border border-amber-400/40 shadow-md"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-white leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-[11px] font-bold text-amber-400 mt-0.5 line-clamp-1">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex text-amber-400 text-xs shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Case Badge & Title */}
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300 mb-2">
                    {item.certNo}
                  </span>
                  <h5 className={`text-sm font-extrabold line-clamp-2 ${
                    dark ? 'text-zinc-100' : 'text-zinc-900'
                  }`}>
                    {item.caseTitle}
                  </h5>
                </div>

                {/* Quote Text */}
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  dark ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  "{item.text}"
                </p>
              </div>

              {/* Footer timeline badge */}
              <div className="pt-4 mt-5 border-t border-white/8 flex items-center justify-between text-[11px] text-zinc-400 font-semibold">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <FiCheckCircle />
                  {item.duration}
                </span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── LAW FIRM EXECUTIVE CALL TO ACTION BANNER ── */}
        <LawFirmCTA
          badge="RASMIY PATENT HUQUQI MUHOFAZASI • OFFICIAL IP LEGAL COUNSEL"
          title="Siz Ham O‘z Brendingizni 100% Qonuniy Monopoliyaga Aylantirmoqchimisiz?"
          subtitle="Adliya vazirligi litsenziyasiga ega patent vakili va PhD Muhammad Ali Turdialiyevdan 15 daqiqada xolis ekspertiza va to‘liq himoya strategiyasini oling."
          buttonText="Telegramda Bepul Maslahat Olish"
          phoneText="+998 88 147-00-81"
        />

      </div>

      {/* SUBMIT REVIEW MODAL */}
      <SubmitReviewModal
        isOpen={openSubmitModal}
        onClose={() => setOpenSubmitModal(false)}
      />
    </section>
  )
}
