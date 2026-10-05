'use client'

import { useTheme } from '../../ThemeContext'

export default function SectionHeader({ title, eyebrow, className = 'mb-16' }) {
  const { dark } = useTheme() || { dark: true }

  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <div className={`h-px w-10 ${dark ? 'bg-amber-400' : 'bg-amber-500'}`} />
          <span
            className={`text-[11px] font-bold tracking-[0.35em] uppercase
              ${dark ? 'text-amber-400' : 'text-amber-600'}`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`text-4xl md:text-5xl font-black leading-tight
          ${dark ? 'text-white' : 'text-zinc-900'}`}
      >
        {title}
      </h2>
    </div>
  )
}
