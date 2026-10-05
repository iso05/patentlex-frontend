'use client'

import { useState } from 'react'
import { items } from './servisecData'
import ServiceCard from './ServiceCard'
import { useTranslation } from 'react-i18next'
import ServiceModal from './ServiceModal'
import SectionHeader from '../Common/SectionHeader'
import { useTheme } from '../../ThemeContext'
import '../../i18n'

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  return (
    <section
      id="services"
      className={`relative py-28 min-h-screen overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-[#080914] text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      {/* Background texture & ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/bg_services.png"
          alt="Patent Protection Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#080914]/85 via-[#080914]/90 to-[#080914]'
            : 'bg-gradient-to-b from-zinc-50/90 via-zinc-50/95 to-zinc-50'
        }`} />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
        <div className={`absolute -bottom-20 right-0 w-[600px] h-[600px] rounded-full blur-[160px] ${
          dark ? 'bg-amber-500/10' : 'bg-amber-100'
        }`} />
        <div className={`absolute top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] ${
          dark ? 'bg-indigo-900/15' : 'bg-blue-100'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeader
            title={t('services.title')}
            eyebrow={t('services.subtitle') || 'Intellektual Mulk Xizmatlari'}
          />
        </div>

        {/* 8-SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.id}
              style={{ animationDelay: `${i * 50}ms` }}
              className="animate-fadeIn h-full"
            >
              <ServiceCard
                icon={item.icon}
                title={t(`services.${item.id}.title`)}
                body={t(`services.${item.id}.short`)}
                onOpen={() => setActiveService(item.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        open={!!activeService}
        onClose={() => setActiveService(null)}
        serviceId={activeService}
        title={activeService ? t(`services.${activeService}.title`) : ''}
        body={activeService ? t(`services.${activeService}.full`) : ''}
      />
    </section>
  )
}
