'use client'

import { useTranslation } from 'react-i18next'
import { FiAlertOctagon, FiShield, FiXCircle, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../ThemeContext'
import Link from 'next/link'

export default function RiskRadar() {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  const risks = [
    {
      title: t('riskRadar.risk1Title'),
      desc: t('riskRadar.risk1Desc'),
      penalty: '100 000 000+ UZS',
    },
    {
      title: t('riskRadar.risk2Title'),
      desc: t('riskRadar.risk2Desc'),
      penalty: 'Biznesni yo‘qotish',
    },
    {
      title: t('riskRadar.risk3Title'),
      desc: t('riskRadar.risk3Desc'),
      penalty: 'Obro‘ning sinishi',
    },
    {
      title: t('riskRadar.risk4Title'),
      desc: t('riskRadar.risk4Desc'),
      penalty: 'Tovarlar musodarasi',
    },
  ]

  const solutions = [
    t('riskRadar.sol1'),
    t('riskRadar.sol2'),
    t('riskRadar.sol3'),
    t('riskRadar.sol4'),
  ]

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      dark ? 'bg-[#060812]' : 'bg-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_card_bg.png"
          alt="PatentLex Brand Protection"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-20 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#060812]/80 via-[#060812]/90 to-[#060812]'
            : 'bg-gradient-to-b from-white/80 via-white/90 to-white'
        }`} />
        <div className={`absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[160px] ${
          dark ? 'bg-rose-900/10' : 'bg-rose-100'
        }`} />
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] ${
          dark ? 'bg-emerald-900/10' : 'bg-emerald-50'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <FiAlertOctagon className="text-rose-400 animate-bounce" />
            {t('riskRadar.badge')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('riskRadar.title')}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {t('riskRadar.subtitle')}
          </p>
        </div>

        {/* COMPARISON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: UNPROTECTED RISKS */}
          <div className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            dark
              ? 'bg-rose-950/20 border-rose-500/25 shadow-2xl shadow-rose-950/30'
              : 'bg-rose-50/70 border-rose-200 shadow-xl'
          }`}>
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-rose-500/20 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400 text-2xl border border-rose-500/30">
                  <FiXCircle />
                </div>
                <div>
                  <h3 className="text-xl font-black text-rose-500 uppercase tracking-wide">
                    Patentlanmagan Brend
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    Doimiy huquqiy xavf va moliyaviy yo'qotishlar
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {risks.map((risk, index) => (
                  <div
                    key={index}
                    className={`p-4.5 rounded-2xl border transition-all ${
                      dark
                        ? 'bg-black/40 border-rose-500/15 hover:border-rose-500/30'
                        : 'bg-white border-rose-100 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className={`font-bold text-sm sm:text-base ${dark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                        {risk.title}
                      </div>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 shrink-0">
                        {risk.penalty}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {risk.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-500/20 text-center">
              <span className="text-xs font-bold text-rose-400">
                ⚠️ Birinchi bo'lib ro'yxatdan o'tkazgan shaxs qonuniy egasi hisoblanadi!
              </span>
            </div>
          </div>

          {/* RIGHT: PATENTLEX PROTECTION */}
          <div className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
            dark
              ? 'bg-emerald-950/20 border-emerald-500/30 shadow-2xl shadow-emerald-950/40'
              : 'bg-emerald-50/70 border-emerald-300 shadow-xl'
          }`}>
            {/* Top glowing accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-emerald-500/20 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl border border-emerald-500/30">
                  <FiShield />
                </div>
                <div>
                  <h3 className="text-xl font-black text-emerald-400 uppercase tracking-wide">
                    PatentLex Himoyasi Ostida
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    100% rasmiy qonuniy monopoliya va xavfsizlik
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {solutions.map((sol, index) => (
                  <div
                    key={index}
                    className={`p-5 rounded-2xl border flex items-start gap-4 transition-all ${
                      dark
                        ? 'bg-black/50 border-emerald-500/20 hover:border-emerald-500/40'
                        : 'bg-white border-emerald-100 shadow-sm'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <FiCheckCircle className="text-lg" />
                    </div>
                    <div>
                      <p className={`text-sm sm:text-base font-semibold leading-relaxed ${
                        dark ? 'text-zinc-200' : 'text-zinc-800'
                      }`}>
                        {sol}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-500/20">
              <Link
                href="/contact"
                className="w-full py-4 px-6 rounded-2xl font-black text-sm uppercase tracking-wider bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:from-emerald-400 hover:to-teal-400 transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                Brendni Bugunoq Qonuniy Himoya Qilish
                <FiArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
