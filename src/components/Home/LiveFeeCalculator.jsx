'use client'

import { useTranslation } from 'react-i18next'
import { FiCheck, FiInfo, FiArrowRight, FiPhoneCall, FiShield } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa6'
import { useTheme } from '../../ThemeContext'
import Link from 'next/link'

export default function LiveFeeCalculator({ isStandalone = false }) {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }

  // Current BHM = 412,000 UZS (confidential calculation behind the scenes)
  const BHM = 412000

  // 1-bosqich (Topshirishda): 4 * BHM = 1,648,000 so'm
  const appFee = 4 * BHM

  // 2-bosqich (Guvohnoma olishda): (2.8 + 4) * BHM = 6.8 * BHM = 2,801,600 so'm
  const certFee = Math.round(6.8 * BHM)

  // Jami davlat to'lovi: 4,449,600 so'm
  const totalFee = appFee + certFee

  const formatUZS = (val) => new Intl.NumberFormat('uz-UZ').format(val) + ' so‘m'

  const telegramText = encodeURIComponent(
    `Assalomu alaykum! PatentLex saytida tovar belgisini 1-sinf bo'yicha patentlash narxini ko'rdim:\n` +
    `📑 Xizmat: Tovar belgisini davlat ro'yxatidan o'tkazish (1 ta sinf)\n` +
    `💰 Jami rasmiy davlat boji: ${formatUZS(totalFee)}\n` +
    `Iltimos, arizani topshirish va brendimni tekshirish bo'yicha maslahat bering.`
  )

  return (
    <section id="calculator" className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      isStandalone ? '' : dark ? 'bg-[#080916]' : 'bg-white'
    }`}>
      {/* Ambient background image & light */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/patent_gears_bg.png"
          alt="PatentLex Official State Calculation"
          className={`w-full h-full object-cover scale-105 transition-opacity duration-700 ${
            dark ? 'opacity-20 mix-blend-luminosity filter contrast-125' : 'opacity-10 mix-blend-multiply'
          }`}
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#080916]/80 via-[#080916]/90 to-[#080916]'
            : 'bg-gradient-to-b from-white/80 via-white/90 to-white'
        }`} />
        <div className={`absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] ${
          dark ? 'bg-amber-500/10' : 'bg-amber-100'
        }`} />
        <div className={`absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] ${
          dark ? 'bg-indigo-600/10' : 'bg-blue-50'
        }`} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-5xl">
        {/* HEADER */}
        {!isStandalone && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30">
              <FaCalculator className="text-amber-400" />
              Davlat Boji Hisoboti
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
              dark ? 'text-white' : 'text-zinc-900'
            }`}>
              Tovar Belgisini Patentlashning Rasmiy Davlat Boji
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed ${
              dark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              O‘zbekiston Respublikasi Adliya vazirligi qonunchiligi bo‘yicha 1 ta sinf uchun rasmiy davlat to‘lovlari:
            </p>
          </div>
        )}

        {/* 1-CLASS OFFICIAL BREAKDOWN CARD */}
        <div className={`rounded-3xl border p-6 sm:p-10 shadow-2xl backdrop-blur-xl ${
          dark ? 'bg-[#0d1024]/90 border-white/10' : 'bg-zinc-50 border-zinc-200'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* LEFT DETAILS — 7 cols */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-bold">
                <FiShield />
                <span>Adliya Vazirligi Rasmiy To‘lovlar Standarti</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-black ${dark ? 'text-white' : 'text-zinc-900'}`}>
                1 Ta Sinf Uchun Baza To‘lovlari
              </h3>

              <div className="space-y-3 pt-2">
                <div className={`p-4 rounded-2xl border flex justify-between items-center ${
                  dark ? 'bg-white/4 border-white/8' : 'bg-white border-zinc-200'
                }`}>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">1-bosqich:</div>
                    <div className={`text-sm font-bold ${dark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Talabnoma topshirish va davlat ekspertizasi boji
                    </div>
                  </div>
                  <div className={`text-base font-black ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
                    {formatUZS(appFee)}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border flex justify-between items-center ${
                  dark ? 'bg-white/4 border-white/8' : 'bg-white border-zinc-200'
                }`}>
                  <div>
                    <div className="text-xs text-zinc-400 font-medium">2-bosqich (Ekspertizadan so'ng):</div>
                    <div className={`text-sm font-bold ${dark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                      Davlat ro‘yxatiga kiritish va guvohnoma berish boji
                    </div>
                  </div>
                  <div className={`text-base font-black ${dark ? 'text-amber-400' : 'text-amber-600'}`}>
                    {formatUZS(certFee)}
                  </div>
                </div>
              </div>

              <div className={`flex items-start gap-2.5 p-3.5 rounded-xl text-xs ${
                dark ? 'bg-white/4 text-zinc-400 border border-white/5' : 'bg-amber-50 text-amber-900 border border-amber-100'
              }`}>
                <FiInfo className="text-amber-400 shrink-0 mt-0.5" size={15} />
                <span>Barcha rasmiy davlat to‘lovlari to‘g‘ridan-to‘g‘ri Adliya vazirligi g‘azna hisob raqamiga to‘lanadi.</span>
              </div>
            </div>

            {/* RIGHT SUMMARY CARD — 5 cols */}
            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between shadow-2xl relative overflow-hidden ${
              dark
                ? 'bg-black/60 border-amber-400/30 shadow-black/90'
                : 'bg-white border-zinc-300 shadow-xl'
            }`}>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  1-Sinf Uchun Jami Davlat Boji:
                </div>
                <div className={`text-3xl sm:text-4xl font-black tracking-tight text-amber-400`}>
                  {formatUZS(totalFee)}
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  * 10 yillik rasmiy davlat guvohnomasi bilan to‘liq muhofaza
                </p>

                <div className="my-6 pt-5 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                    <FiCheck className="text-emerald-400" />
                    <span>Bepul dastlabki qidiruv & audit</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                    <FiCheck className="text-emerald-400" />
                    <span>Talabnomani 24 soatda rasmiylashtirish</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                    <FiCheck className="text-emerald-400" />
                    <span>Davlat ekspertizasi to‘liq nazorati</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="space-y-3">
                <a
                  href={`https://t.me/copyrightsuz?text=${telegramText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center gap-2.5 shadow-lg"
                >
                  <FaTelegram size={18} />
                  Telegramda Ariza Berish
                </a>

                <a
                  href="tel:+998881470081"
                  className="w-full py-3 px-6 rounded-2xl font-bold text-xs uppercase tracking-wider border border-white/15 hover:border-amber-400 text-zinc-300 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
                >
                  <FiPhoneCall size={14} />
                  Bepul Maslahat Olish
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
