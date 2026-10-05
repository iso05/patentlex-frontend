'use client'

import { useState, useEffect } from 'react'
import {
  FiX,
  FiCpu,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiArrowRight,
  FiPhoneCall,
  FiCopy,
  FiCheck,
  FiRefreshCw,
} from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import { analyzeBrandWithAI } from '../../services/aiBrandEngine'

export default function AiBrandAssistantModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  const [brandInput, setBrandInput] = useState('')
  const [niche, setNiche] = useState('food')
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [result, setResult] = useState(null)
  const [copiedIndex, setCopiedIndex] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleRunAiCheck = async (e) => {
    if (e) e.preventDefault()
    if (!brandInput.trim()) return

    setIsScanning(true)
    setScanProgress(15)
    setResult(null)

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 85) return 90
        return prev + 15
      })
    }, 150)

    try {
      const aiData = await analyzeBrandWithAI(brandInput, niche, lang)
      clearInterval(interval)
      setScanProgress(100)
      setResult(aiData)
    } catch (err) {
      clearInterval(interval)
    } finally {
      setIsScanning(false)
    }
  }

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const telegramText = encodeURIComponent(
    `🤖 AI Patent Tahlilchisi Xulosasi (PatentLex):\n` +
    `🏷️ Brend: ${result?.name || brandInput}\n` +
    `📊 AI Bahosi: ${result?.score || 95}% (Yuqori ehtimollik)\n` +
    `📑 MKTU Sinflari: ${result?.classes || '29, 30, 32, 43'}\n` +
    `Iltimos, ushbu nomni Adliya vazirligida rasmiy ro'yxatdan o'tkazish bo'yicha yordam bering.`
  )

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-3 sm:p-6 overflow-y-auto custom-scrollbar bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* DISMISSER */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* AI MODAL CONTAINER */}
      <div className="relative w-full max-w-2xl my-auto rounded-3xl bg-[#090c20] border-2 border-amber-400/50 text-zinc-100 p-6 sm:p-8 shadow-2xl z-10 animate-scaleUp overflow-hidden">
        
        {/* HOLOGRAPHIC BACKGROUND ACCENTS */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[140px] bg-amber-500/20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[140px] bg-indigo-600/25 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-indigo-500" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label={isRu ? 'Закрыть' : isEn ? 'Close' : 'Yopish'}
          className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-black/60 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 transition-all flex items-center justify-center shadow-lg z-20"
        >
          <FiX size={18} />
        </button>

        {/* MODAL HEADER */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-indigo-400/20 text-amber-300 border border-amber-400/40 shadow-lg mb-3">
            <HiSparkles className="text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>PATENTLEX AI BRAND RADAR & SUGGESTION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {isRu
              ? 'AI Проверка Бренда и Генерация Названий'
              : isEn
              ? 'AI Brand Radar & Smart Trademark Suggestions'
              : 'AI Brend Tekshiruvchi & Smart Nomlar Generatori'}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 max-w-lg mx-auto">
            {isRu
              ? 'Введите название бренда, и нейросеть мгновенно оценит шансы на регистрацию и предложит 4 мощных альтернативных варианта.'
              : isEn
              ? 'Enter your brand name to analyze registrability and instantly generate 4 powerful trademarkable alternatives.'
              : 'Brend nomingizni kiriting — AI patentga yaroqlilikni tahlil qilib, 4 ta kuchli muqobil brend variantini yaratib beradi.'}
          </p>
        </div>

        {/* INPUT FORM */}
        <form onSubmit={handleRunAiCheck} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* BRAND NAME INPUT */}
            <div className="sm:col-span-7">
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                {isRu ? 'Название Бренда / Идея:' : isEn ? 'Brand Name / Idea:' : 'Brend Nomi yoki G‘oya:'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={brandInput}
                  onChange={(e) => setBrandInput(e.target.value)}
                  placeholder={isRu ? 'Например: Apex, SilkPay, Burger' : isEn ? 'E.g., Apex, SilkPay, Burger' : 'Masalan: Apex, SilkPay, Burger...'}
                  required
                  className="w-full px-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-white text-sm outline-none focus:border-amber-400 font-bold tracking-wide"
                />
              </div>
            </div>

            {/* INDUSTRY SELECTOR */}
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                {isRu ? 'Сфера бизнеса:' : isEn ? 'Industry:' : 'Faoliyat Sohasi:'}
              </label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full px-3.5 py-3.5 rounded-2xl bg-[#11142e] border border-white/15 text-white text-xs sm:text-sm outline-none focus:border-amber-400 font-semibold"
              >
                <option value="food">{isRu ? 'Официант & Еда (29, 30, 32, 43)' : isEn ? 'Food & Drink (29, 30, 32, 43)' : 'Oziq-ovqat & Taom (29, 30, 32, 43)'}</option>
                <option value="it">{isRu ? 'IT & Приложения (9, 42)' : isEn ? 'IT & Software (9, 42)' : 'IT & Dasturlar (9, 42)'}</option>
                <option value="fashion">{isRu ? 'Одежда & Мода (25, 35)' : isEn ? 'Fashion & Apparel (25, 35)' : 'Kiyim & Moda (25, 35)'}</option>
                <option value="med">{isRu ? 'Медицина & Фарма (3, 5, 44)' : isEn ? 'Pharma & Health (3, 5, 44)' : 'Tibbiyot & Dorixona (3, 5, 44)'}</option>
                <option value="production">{isRu ? 'Производство & Заводы (6, 7, 19)' : isEn ? 'Manufacturing (6, 7, 19)' : 'Ishlab Chiqarish (6, 7, 19)'}</option>
                <option value="retail">{isRu ? 'Торговля & Магазины (35, 39, 41)' : isEn ? 'Retail & Services (35, 39, 41)' : 'Savdo & Do‘konlar (35, 39, 41)'}</option>
              </select>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isScanning}
            className="w-full py-4 px-6 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-400/25 hover:scale-[1.01]"
          >
            {isScanning ? (
              <>
                <FiRefreshCw className="animate-spin text-base" />
                <span>{isRu ? 'AI Сканирует Патентные Базы...' : isEn ? 'AI Scanning Patent Databases...' : 'AI Patent Bazalarini Skanerlamoqda...'}</span>
              </>
            ) : (
              <>
                <FiCpu size={18} />
                <span>{isRu ? 'AI Анализ и Генерация Вариантов' : isEn ? 'Run AI Trademark Analysis & Suggestions' : 'AI Tahlil Qilish & Muqobillarni Ko‘rish'}</span>
              </>
            )}
          </button>
        </form>

        {/* SCANNING ANIMATION BAR */}
        {isScanning && (
          <div className="py-4 space-y-2 text-center animate-fadeIn">
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 to-indigo-500 h-full transition-all duration-200"
                style={{ width: `${scanProgress}%` }}
              />
            </div>
            <p className="text-xs text-amber-300 font-semibold animate-pulse">
              {isRu ? 'Семантический и фонетический анализ схожести...' : isEn ? 'Semantic & phonetic similarity check...' : 'Semantik va fonetik o‘xshashlik tekshiruvi...'}
            </p>
          </div>
        )}

        {/* AI ANALYSIS RESULTS DASHBOARD */}
        {result && (
          <div className="space-y-5 animate-fadeIn max-h-[50vh] overflow-y-auto custom-scrollbar p-1">
            
            {/* SCORE & VERDICT BANNER */}
            <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all ${
              result.score <= 30
                ? 'bg-rose-950/40 border-rose-500/50 shadow-lg shadow-rose-900/20'
                : result.score < 75
                ? 'bg-amber-950/30 border-amber-500/40'
                : 'bg-gradient-to-r from-amber-400/15 via-orange-400/10 to-transparent border-amber-400/40'
            }`}>
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 border ${
                  result.score <= 30
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
                    : result.score < 75
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                }`}>
                  {result.score <= 30 ? (
                    <>
                      <span>❌</span>
                      <span>{isRu ? 'ОТКАЗ: БРЕНД УЖЕ ЗАНЯТ / КОНФЛИКТ' : isEn ? 'CRITICAL CONFLICT: BRAND ALREADY EXISTS' : '100% RAD ETILISH XAVFI: MAVJUD BREND BILAN TO‘QNASHUV'}</span>
                    </>
                  ) : (
                    <>
                      <FiCheckCircle />
                      <span>{isRu ? 'ВЫСОКИЙ ШАНС РЕГИСТРАЦИИ' : isEn ? 'HIGH REGISTRABILITY' : 'YUQORI RO‘YXATDAN O‘TISH EHTIMOLLIGI'}</span>
                    </>
                  )}
                </div>
                <h4 className={`text-xl sm:text-2xl font-black ${result.score <= 30 ? 'text-rose-200' : 'text-white'}`}>
                  «{result.name}»
                </h4>
                <p className="text-xs sm:text-sm text-zinc-200 mt-1.5 leading-relaxed font-medium">
                  {result.verdict}
                </p>
                {result.riskVerdict && (
                  <p className={`text-xs mt-2 font-semibold ${result.score <= 30 ? 'text-rose-400' : 'text-zinc-400'}`}>
                    {result.riskVerdict}
                  </p>
                )}
              </div>

              <div className={`flex flex-col items-center justify-center p-3.5 sm:p-5 rounded-2xl border shrink-0 text-center min-w-[110px] ${
                result.score <= 30
                  ? 'bg-rose-950/80 border-rose-500/60 shadow-lg'
                  : 'bg-black/60 border-amber-400/40'
              }`}>
                <span className={`text-3xl sm:text-4xl font-black leading-none ${
                  result.score <= 30 ? 'text-rose-400' : 'text-amber-400'
                }`}>
                  {result.score}%
                </span>
                <span className={`text-[10px] font-black uppercase tracking-widest mt-1 ${
                  result.score <= 30 ? 'text-rose-300' : 'text-zinc-400'
                }`}>
                  {result.score <= 30 ? 'Xavf Yuqori' : 'AI Score'}
                </span>
              </div>
            </div>

            {/* 4 AI ALTERNATIVE BRAND SUGGESTIONS */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h5 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <HiSparkles />
                  <span>{isRu ? 'AI Рекомендуемые Варианты Бренда:' : isEn ? 'AI Smart Brand Alternatives:' : 'AI Tavsiya Qilgan Kuchli Brend Variantlari:'}</span>
                </h5>
                <span className="text-[10px] text-zinc-400">
                  {isRu ? 'Нажмите, чтобы скопировать' : isEn ? 'Click to copy' : 'Nusxa olish uchun bosing'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {result.alternatives.map((alt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCopy(alt, idx)}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-black text-white group-hover:text-amber-300 transition-colors">
                        {alt}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-semibold mt-0.5">
                        ✓ 100% {isRu ? 'Свободен для заявки' : isEn ? 'Clear for filing' : 'Talabnoma uchun qulay'}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-lg bg-black/40 text-zinc-400 group-hover:text-amber-400 flex items-center justify-center shrink-0 transition-colors">
                      {copiedIndex === idx ? <FiCheck className="text-emerald-400" /> : <FiCopy size={14} />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="p-4 bg-black/70 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://t.me/copyrightsuz?text=${telegramText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FaTelegram size={16} />
                <span>{isRu ? 'Отправить в Telegram на Официальный Поиск' : isEn ? 'Send to Telegram for Official Search' : 'Telegramda Rasmiy Qidiruvga Yuborish'}</span>
              </a>

              <a
                href="tel:+998881470081"
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-amber-400 text-zinc-200 hover:text-amber-300 transition-all flex items-center justify-center gap-2"
              >
                <FiPhoneCall size={14} />
                <span>+998 88 147-00-81</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
