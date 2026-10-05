'use client'

import { useTranslation } from 'react-i18next'
import { FiClock, FiFileText, FiCpu, FiAward, FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../ThemeContext'
import Link from 'next/link'

export default function ProcessTimeline() {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  const steps = [
    {
      num: t('processTimeline.step1Num'),
      title: t('processTimeline.step1Title'),
      time: t('processTimeline.step1Time'),
      desc: t('processTimeline.step1Desc'),
      icon: FiClock,
      accent: 'from-amber-400 to-amber-600',
      borderGlow: 'border-amber-400/30',
      tagBg: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
    },
    {
      num: t('processTimeline.step2Num'),
      title: t('processTimeline.step2Title'),
      time: t('processTimeline.step2Time'),
      desc: t('processTimeline.step2Desc'),
      icon: FiFileText,
      accent: 'from-blue-400 to-indigo-600',
      borderGlow: 'border-blue-400/30',
      tagBg: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
    },
    {
      num: t('processTimeline.step3Num'),
      title: t('processTimeline.step3Title'),
      time: t('processTimeline.step3Time'),
      desc: t('processTimeline.step3Desc'),
      icon: FiCpu,
      accent: 'from-purple-400 to-pink-600',
      borderGlow: 'border-purple-400/30',
      tagBg: 'bg-purple-400/10 text-purple-400 border-purple-400/30',
    },
    {
      num: t('processTimeline.step4Num'),
      title: t('processTimeline.step4Title'),
      time: t('processTimeline.step4Time'),
      desc: t('processTimeline.step4Desc'),
      icon: FiAward,
      accent: 'from-emerald-400 to-teal-600',
      borderGlow: 'border-emerald-400/30',
      tagBg: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
    },
  ]

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      dark ? 'bg-[#090b17]' : 'bg-zinc-50'
    }`}>
      {/* Texture & Ambient Light */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/bg_services.png"
          alt="PatentLex Process Roadmap"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-20 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#090b17]/85 via-[#090b17]/90 to-[#090b17]'
            : 'bg-gradient-to-b from-zinc-50/85 via-zinc-50/90 to-zinc-50'
        }`} />
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] ${
          dark ? 'bg-amber-600/10' : 'bg-amber-200/50'
        }`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[180px] ${
          dark ? 'bg-indigo-900/15' : 'bg-blue-100'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30">
            <FiAward className="text-amber-400" />
            {t('processTimeline.badge')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('processTimeline.title')}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {t('processTimeline.subtitle')}
          </p>
        </div>

        {/* TIMELINE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-7 border transition-all duration-500 group flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${
                  dark
                    ? 'bg-[#0d1024]/90 border-white/10 hover:border-amber-400/50 shadow-black/80'
                    : 'bg-white border-zinc-200 hover:border-amber-500 shadow-md'
                }`}
              >
                <div>
                  {/* STEP NUMBER & ICON */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black bg-gradient-to-br ${step.accent} text-black shadow-lg`}>
                      {step.num}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wider ${step.tagBg}`}>
                      {step.time}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors ${
                    dark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {step.title}
                  </h3>

                  {/* DESC */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    dark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {step.desc}
                  </p>
                </div>

                {/* BOTTOM ICON ACCENT */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-xs font-semibold ${dark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Bosqich {idx + 1}/4
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    dark ? 'bg-white/5 text-amber-400' : 'bg-zinc-100 text-amber-600'
                  }`}>
                    <Icon size={16} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className={`mt-14 p-6 sm:p-8 rounded-3xl border text-center flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl ${
          dark
            ? 'bg-gradient-to-r from-amber-400/10 via-amber-400/5 to-transparent border-amber-400/20'
            : 'bg-amber-50 border-amber-200 shadow-md'
        }`}>
          <div className="text-left">
            <h4 className={`text-lg sm:text-xl font-black ${dark ? 'text-white' : 'text-zinc-900'}`}>
              G'oyangizni birinchi bo'lib patentlashga ulguring!
            </h4>
            <p className={`text-xs sm:text-sm mt-1 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Ustuvorlik sanasini 24 soat ichida rasmiylashtirib beramiz.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all shrink-0 flex items-center gap-2 shadow-lg shadow-amber-400/20"
          >
            Hujjatlarni Topshirish
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
