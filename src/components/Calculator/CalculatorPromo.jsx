'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FiCheckCircle,
  FiZap,
  FiShield,
  FiGlobe,
  FiBriefcase,
  FiFileText,
  FiArrowRight,
  FiPlus,
  FiMinus,
  FiHelpCircle,
  FiStar,
  FiSend,
  FiCheck,
  FiInfo,
} from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import ContactModal from '../Contact/ContactModal'
import LiveFeeCalculator from '../Home/LiveFeeCalculator'
import FAQSection from '../Home/FAQSection'
import '../../i18n'

export default function CalculatorPromo() {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const handleOrder = (planName) => {
    setSelectedPlan(planName)
    setOpenModal(true)
  }

  return (
    <section className="relative py-20 min-h-screen overflow-hidden bg-[#07070d] text-zinc-100 transition-colors duration-500">
      {/* Background artwork texture */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/patent_gears_bg.png"
          alt="PatentLex Web Engine"
          className="w-full h-full object-cover opacity-20 filter contrast-125 brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d]/80 via-[#07070d]/90 to-[#07070d]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[160px] bg-amber-500/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-5 shadow-lg shadow-amber-400/5">
            <FiGlobe size={14} className="text-amber-400 animate-pulse" />
            {t('calcPage.eyebrow')}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            {t('calcPage.titlePart1')} <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
              {t('calcPage.titlePart2')}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {t('calcPage.description')}
          </p>
        </div>

        {/* ── LIVE INTERACTIVE STATE FEE CALCULATOR ── */}
        <div className="mb-20">
          <LiveFeeCalculator isStandalone={true} />
        </div>

        {/* ── MKTU EDUCATIONAL / ACCORDION SECTION ── */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <div className="text-[11px] font-extrabold tracking-widest uppercase text-amber-400 mb-2">
              {t('calcPage.mktuSubtitle')}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {t('calcPage.mktuTitle')}
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: t('calcPage.mktuQ1'), a: t('calcPage.mktuA1') },
              { q: t('calcPage.mktuQ2'), a: t('calcPage.mktuA2') },
              { q: t('calcPage.mktuQ3'), a: t('calcPage.mktuA3') },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0d0e17]/80 border border-white/10 backdrop-blur-md"
              >
                <div className="font-bold text-sm sm:text-base text-amber-400 mb-2">
                  {faq.q}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ SECTION ── */}
        <FAQSection />

      </div>

      <ContactModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        initialService={`Boj Hisoblagich: ${selectedPlan}`}
      />
    </section>
  )
}
