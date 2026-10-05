'use client'

import { useTheme } from '../../ThemeContext'
import { useTranslation } from 'react-i18next'
import { HiArrowUpRight } from 'react-icons/hi2'
import '../../i18n'

export default function ServiceCard({ icon: Icon, title, body, onOpen }) {
  const { dark } = useTheme() || { dark: true }
  const { t } = useTranslation()

  return (
    <div
      onClick={onOpen}
      className={`group relative rounded-3xl p-7 flex flex-col justify-between gap-6 h-full cursor-pointer
        overflow-hidden border transition-all duration-500 backdrop-blur-xl shadow-xl
        ${dark
          ? 'bg-[#11121d]/85 border-white/10 hover:border-amber-400/50 hover:bg-[#161726]/95 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70'
          : 'bg-white border-zinc-200 hover:border-amber-400/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10'
        }`}
    >
      {/* Background ambient gradient glow on hover */}
      <div className={`absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none
        ${dark ? 'bg-amber-400/15' : 'bg-amber-300/30'}`} />

      {/* Top accent border line */}
      <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-transparent via-amber-400 to-transparent`} />

      {/* Header with Icon Badge */}
      <div className="flex items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 flex-shrink-0 border shadow-lg
          ${dark
            ? 'bg-amber-400/10 text-amber-400 border-amber-400/30 group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]'
            : 'bg-amber-100 text-amber-700 border-amber-300 group-hover:bg-amber-500 group-hover:text-white'
          }`}>
          {Icon && <Icon size={24} />}
        </div>
        
        {/* Subtle decorative index dot */}
        <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-amber-400 transition-colors duration-300" />
      </div>

      {/* Main Text Content */}
      <div className="flex flex-col gap-2.5 flex-1 mt-2">
        <h3 className={`font-extrabold text-lg leading-snug tracking-wide transition-colors duration-300
          ${dark
            ? 'text-zinc-100 group-hover:text-amber-300'
            : 'text-zinc-900 group-hover:text-amber-700'
          }`}>
          {title}
        </h3>
        <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-3
          ${dark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-zinc-600'}`}>
          {body}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300
        ${dark ? 'border-white/8 group-hover:border-amber-400/30' : 'border-zinc-100 group-hover:border-amber-300'}`}>
        <span className={`text-[11px] font-extrabold tracking-widest uppercase transition-colors duration-300
          ${dark
            ? 'text-zinc-400 group-hover:text-amber-400'
            : 'text-zinc-500 group-hover:text-amber-600'
          }`}>
          {t('common.readMore') || 'Batafsil'}
        </span>
        <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300
          ${dark
            ? 'bg-white/5 text-zinc-400 group-hover:bg-amber-400 group-hover:text-black group-hover:scale-110 shadow-md'
            : 'bg-zinc-100 text-zinc-600 group-hover:bg-amber-500 group-hover:text-white'
          }`}>
          <HiArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </div>
  )
}
