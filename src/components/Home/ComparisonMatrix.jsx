'use client'

import { useTranslation } from 'react-i18next'
import { FiCheck, FiX, FiCheckCircle, FiZap } from 'react-icons/fi'
import { useTheme } from '../../ThemeContext'

export default function ComparisonMatrix() {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  const rows = [
    {
      feat: t('comparisonMatrix.feat1'),
      us: t('comparisonMatrix.us1'),
      others: t('comparisonMatrix.others1'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat2'),
      us: t('comparisonMatrix.us2'),
      others: t('comparisonMatrix.others2'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat3'),
      us: t('comparisonMatrix.us3'),
      others: t('comparisonMatrix.others3'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat4'),
      us: t('comparisonMatrix.us4'),
      others: t('comparisonMatrix.others4'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat5'),
      us: t('comparisonMatrix.us5'),
      others: t('comparisonMatrix.others5'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat6'),
      us: t('comparisonMatrix.us6'),
      others: t('comparisonMatrix.others6'),
      isUsGood: true,
      isOthersBad: true,
    },
    {
      feat: t('comparisonMatrix.feat7'),
      us: t('comparisonMatrix.us7'),
      others: t('comparisonMatrix.others7'),
      isUsGood: true,
      isOthersBad: true,
    },
  ]

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      dark ? 'bg-[#060710]' : 'bg-white'
    }`}>
      {/* Background glow & patent image */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_card_bg.png"
          alt="PatentLex Legal Comparison"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-15 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#060710]/85 via-[#060710]/90 to-[#060710]'
            : 'bg-gradient-to-b from-white/85 via-white/90 to-white'
        }`} />
        <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[200px] ${
          dark ? 'bg-amber-500/8' : 'bg-amber-100'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-6xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30">
            <FiZap className="text-amber-400" />
            {t('comparisonMatrix.badge')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('comparisonMatrix.title')}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {t('comparisonMatrix.subtitle')}
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className={`rounded-3xl border overflow-hidden shadow-2xl backdrop-blur-xl ${
          dark ? 'bg-[#0a0d1d]/90 border-white/10' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className={`border-b ${dark ? 'border-white/10 bg-white/4' : 'border-zinc-200 bg-zinc-100'}`}>
                  <th className={`p-5 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider ${
                    dark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {t('comparisonMatrix.featureCol')}
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 border-x border-amber-400/20">
                    <div className="flex items-center gap-2">
                      <FiCheckCircle className="text-amber-400 text-lg" />
                      {t('comparisonMatrix.usCol')}
                    </div>
                  </th>
                  <th className={`p-5 sm:p-6 text-xs sm:text-sm font-bold uppercase tracking-wider ${
                    dark ? 'text-zinc-500' : 'text-zinc-500'
                  }`}>
                    {t('comparisonMatrix.othersCol')}
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${dark ? 'divide-white/5' : 'divide-zinc-200'}`}>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`transition-colors ${
                      dark ? 'hover:bg-white/2' : 'hover:bg-white'
                    }`}
                  >
                    <td className={`p-5 sm:p-6 font-semibold text-xs sm:text-sm ${
                      dark ? 'text-zinc-200' : 'text-zinc-800'
                    }`}>
                      {row.feat}
                    </td>
                    <td className="p-5 sm:p-6 font-bold text-xs sm:text-sm bg-amber-400/5 border-x border-amber-400/20 text-amber-300">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <FiCheck size={12} />
                        </div>
                        {row.us}
                      </div>
                    </td>
                    <td className={`p-5 sm:p-6 text-xs sm:text-sm font-medium ${
                      dark ? 'text-zinc-400' : 'text-zinc-500'
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                          <FiX size={12} />
                        </div>
                        {row.others}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
