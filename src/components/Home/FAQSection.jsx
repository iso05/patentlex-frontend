'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiChevronDown, FiHelpCircle, FiMessageSquare } from 'react-icons/fi'
import { useTheme } from '../../ThemeContext'
import Link from 'next/link'

export default function FAQSection() {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  // Schema.org FAQPage structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <section id="faq" className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      dark ? 'bg-[#070914]' : 'bg-zinc-50'
    }`}>
      {/* Inject FAQPage JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_gears_bg.png"
          alt="PatentLex Law FAQ"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-15 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#070914]/85 via-[#070914]/90 to-[#070914]'
            : 'bg-gradient-to-b from-zinc-50/85 via-zinc-50/90 to-zinc-50'
        }`} />
        <div className={`absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[180px] ${
          dark ? 'bg-amber-500/8' : 'bg-amber-100'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-4xl">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30">
            <FiHelpCircle className="text-amber-400" />
            {t('faq.badge')}
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('faq.title')}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            {t('faq.subtitle')}
          </p>
        </div>

        {/* ACCORDION ITEMS */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
                  isOpen
                    ? dark
                      ? 'bg-[#0f1329] border-amber-400/40 shadow-amber-400/5'
                      : 'bg-white border-amber-400 shadow-md'
                    : dark
                      ? 'bg-[#0b0e20]/80 border-white/8 hover:border-white/20'
                      : 'bg-white border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold transition-colors"
                >
                  <span className={`text-base sm:text-lg ${
                    isOpen
                      ? 'text-amber-400'
                      : dark
                        ? 'text-zinc-200'
                        : 'text-zinc-800'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-amber-400 text-black' : dark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    <FiChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1">
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      dark ? 'text-zinc-300' : 'text-zinc-600'
                    }`}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* BOTTOM QUESTION PROMPT */}
        <div className="mt-12 text-center">
          <p className={`text-sm font-medium mb-4 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Boshqa savollaringiz bormi? Patent advokatimiz bilan bepul suhbatlashing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
          >
            <FiMessageSquare />
            Savol Berish & Maslahat Olish
          </Link>
        </div>
      </div>
    </section>
  )
}
