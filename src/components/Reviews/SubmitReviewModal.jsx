'use client'

import { useState, useEffect } from 'react'
import { FiX, FiCheckCircle, FiStar, FiSend } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function SubmitReviewModal({ isOpen, onClose }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'uz'
  const isRu = lang === 'ru'
  const isEn = lang === 'en'

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('Tovar belgisini patentlash')
  const [rating, setRating] = useState(5)
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !feedback.trim()) return
    setSubmitted(true)
  }

  const telegramText = encodeURIComponent(
    `🌟 ${isRu ? 'Новый отзыв клиента' : isEn ? 'New Client Review' : 'Yangi Mijoz Fikri'} (PatentLex):\n` +
    `👤 ${isRu ? 'Имя / Компания' : isEn ? 'Name / Company' : 'Ism / Kompaniya'}: ${name} (${company || (isRu ? 'Предприниматель' : isEn ? 'Business Owner' : 'Tadbirkor')})\n` +
    `📑 ${isRu ? 'Услуга' : isEn ? 'Service' : 'Xizmat'}: ${service}\n` +
    `⭐ ${isRu ? 'Оценка' : isEn ? 'Rating' : 'Baho'}: ${rating} / 5\n` +
    `💬 ${isRu ? 'Текст отзыва' : isEn ? 'Feedback' : 'Fikr'}: "${feedback}"`
  )

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto custom-scrollbar bg-black/85 backdrop-blur-2xl animate-fadeIn">
      {/* DISMISSER */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* MODAL */}
      <div className="relative w-full max-w-xl my-auto rounded-3xl bg-[#0b0e22] border-2 border-amber-400/40 text-zinc-100 p-6 sm:p-8 shadow-2xl z-10 animate-scaleUp">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-black/60 hover:bg-amber-400 text-white hover:text-black border border-white/20 hover:border-amber-400 transition-all flex items-center justify-center shadow-lg"
        >
          <FiX size={18} />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-3">
                <FiStar className="text-amber-400" />
                <span>{isRu ? 'Отзыв и Оценка Клиента' : isEn ? 'Client Review & Rating' : 'Mijoz Fikri & Baholash'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isRu ? 'Оставьте Отзыв о Работе PatentLex' : isEn ? 'Leave a Review for PatentLex' : 'PatentLex Xizmati Haqida Fikringizni Qoldiring'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5">
                {isRu
                  ? 'Ваша объективная оценка помогает нам непрерывно совершенствовать качество услуг.'
                  : isEn
                  ? 'Your honest feedback helps us maintain the highest standard of legal excellence.'
                  : 'Sizning xolis bahoingiz xizmatlarimiz sifatini yanada oshirishga yordam beradi.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* STAR RATING PICKER */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  {isRu ? 'Оцените качество услуг:' : isEn ? 'Rate service quality:' : 'Xizmat sifatini baholang:'}
                </span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="text-2xl sm:text-3xl transition-transform hover:scale-125 focus:outline-none"
                    >
                      <span className={star <= rating ? 'text-amber-400 drop-shadow-[0_0_8px_#fbbf24]' : 'text-zinc-600'}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                <span className="text-xs font-black text-amber-400">
                  {rating === 5
                    ? isRu ? 'Отлично (5/5)' : isEn ? 'Excellent (5/5)' : 'A’lo darajada (5/5)'
                    : rating === 4
                    ? isRu ? 'Хорошо (4/5)' : isEn ? 'Good (4/5)' : 'Yaxshi (4/5)'
                    : `${rating}/5`}
                </span>
              </div>

              {/* NAME & COMPANY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">
                    {isRu ? 'Ваше имя:' : isEn ? 'Your Name:' : 'Ismingiz:'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isRu ? 'Например: Сардор Алиев' : isEn ? 'E.g., Sardor Aliyev' : 'Masalan: Sardor Aliyev'}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm outline-none focus:border-amber-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-1">
                    {isRu ? 'Компания / Бренд:' : isEn ? 'Company / Brand:' : 'Kompaniya / Brend nomi:'}
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={isRu ? 'Например: Apex Group, CEO' : isEn ? 'E.g., Apex Group, CEO' : 'Masalan: Apex Group, Bosh direktor'}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm outline-none focus:border-amber-400 font-medium"
                  />
                </div>
              </div>

              {/* SERVICE TYPE */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">
                  {isRu ? 'Какую услугу вы заказывали?' : isEn ? 'Which service did you use?' : 'Qaysi xizmatdan foydalandingiz?'}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111322] border border-white/15 text-white text-sm outline-none focus:border-amber-400 font-medium"
                >
                  <option value="Tovar belgisini patentlash">{isRu ? 'Регистрация товарного знака' : isEn ? 'Trademark Registration' : 'Tovar belgisini patentlash'}</option>
                  <option value="Ixtiro va foydali model patenti">{isRu ? 'Патент на изобретение / полезную модель' : isEn ? 'Patent for Invention / Model' : 'Ixtiro va foydali model patenti'}</option>
                  <option value="Mualliflik huquqi va IT dastur">{isRu ? 'Авторское право и IT программы' : isEn ? 'Copyright & Software Registration' : 'Mualliflik huquqi va IT dastur'}</option>
                  <option value="Sudlarda himoya va tovon undirish">{isRu ? 'Судебная защита и взыскание компенсации' : isEn ? 'Litigation & Damages Recovery' : 'Sudlarda himoya va tovon undirish'}</option>
                  <option value="Madrid xalqaro patentlash">{isRu ? 'Международная регистрация (Мадрид)' : isEn ? 'International Madrid Protocol' : 'Madrid xalqaro patentlash'}</option>
                  <option value="Bojxona intellektual mulk reestri">{isRu ? 'Таможенный реестр объектов ИС' : isEn ? 'Customs IP Border Registry' : 'Bojxona intellektual mulk reestri'}</option>
                </select>
              </div>

              {/* FEEDBACK TEXT */}
              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-1">
                  {isRu ? 'Ваш отзыв и впечатления:' : isEn ? 'Your Feedback & Experience:' : 'Fikringiz va taassurotlaringiz:'}
                </label>
                <textarea
                  rows={3}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder={isRu ? 'Опишите скорость работы, профессионализм и результаты...' : isEn ? 'Describe the speed, professionalism, and results...' : 'Xizmat tezligi, yuristlar muomalasi va natijalar haqida yozing...'}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm outline-none focus:border-amber-400 font-medium resize-none"
                />
              </div>

              {/* SUBMIT BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider bg-amber-400 text-black hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20"
                >
                  <FiSend />
                  <span>{isRu ? 'Опубликовать Отзыв' : isEn ? 'Submit Review' : 'Fikrni Saytda Chop Etish'}</span>
                </button>

                <a
                  href={`https://t.me/copyrightsuz?text=${telegramText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider bg-[#0088cc] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center gap-2"
                >
                  <FaTelegram size={16} />
                  <span>Telegram</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl mx-auto shadow-xl">
              <FiCheckCircle />
            </div>
            <h3 className="text-2xl font-black text-white">
              {isRu ? 'Большое Спасибо! Отзыв Принят' : isEn ? 'Thank You! Review Received' : 'Katta Rahmat! Fikringiz Qabul Qilindi'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
              {isRu
                ? 'Ваш отзыв будет проверен модератором и официально опубликован на сайте.'
                : isEn
                ? 'Your testimonial will be verified and published on the website.'
                : 'Sizning iliq fikringiz moderatorlarimiz tomonidan tasdiqlanib, saytda rasman e\'lon qilinadi.'}
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 rounded-xl bg-amber-400 text-black font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition-all"
            >
              {isRu ? 'Закрыть' : isEn ? 'Close' : 'Yopish'}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
