'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from 'react-icons/hi'
import SectionHeader from '../Common/SectionHeader'
import '../../i18n'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const sendEmail = async e => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.send('service_fhubtfj', 'template_xsqncwa', form, '82yaYlHvi7sjqcXzI')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: <HiOutlinePhone size={18} />,
      labelKey: 'contact.phoneLabel',
      value: '+998-88-147-00-81',
      href: 'tel:+998881470081',
    },
    {
      icon: <HiOutlineMail size={18} />,
      labelKey: 'contact.emailLabel',
      value: 'patentlextashkent@gmail.com',
      href: 'mailto:patentlextashkent@gmail.com',
    },
    {
      icon: <HiOutlineLocationMarker size={18} />,
      labelKey: 'contact.addressLabel',
      value: t('location'),
      href: null,
    },
    {
      icon: <HiOutlineClock size={18} />,
      labelKey: 'contact.hoursLabel',
      value: t('contact.workdays'),
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      className="w-full py-28 relative overflow-hidden bg-[#0a0a10] text-zinc-100 transition-colors duration-500"
    >
      {/* background artwork texture */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/bg_contact.png"
          alt="Contact & Legal Consultation Background"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a10]/80 via-[#0a0a10]/90 to-[#0a0a10]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] bg-amber-900/6" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* HEADER */}
        <SectionHeader title={t('contact.title')} eyebrow={t('contact.title') || 'Get In Touch'} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {/* MAP */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 shadow-xl group">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=41.3208358,69.2670793&hl=uz&z=17&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                suppressHydrationWarning
              />
              <a
                href="https://yandex.com/navi?whatshere%5Bpoint%5D=69.26707933221986%2C41.32083580186851&whatshere%5Bzoom%5D=19.30702&ll=69.26707933221986%2C41.32080584254411&z=19.30702"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/80 hover:bg-amber-400 hover:text-black text-amber-400 border border-amber-400/30 text-[11px] font-bold tracking-wider uppercase backdrop-blur-md transition-all shadow-lg flex items-center gap-1.5"
              >
                Yandex Navi ↗
              </a>
            </div>

            {/* CONTACT INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
              {contactInfo.map(({ icon, labelKey, value, href }) => {
                const inner = (
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border border-white/8 hover:border-amber-400/30 bg-white/4 backdrop-blur-md transition-all duration-200 h-full ${href ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-400/10 text-amber-400 mt-0.5">
                      {icon}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5 text-zinc-500">{t(labelKey)}</p>
                      <p className="text-sm font-semibold text-zinc-200">{value}</p>
                    </div>
                  </div>
                )
                return href ? (
                  <a key={labelKey} href={href} className="h-full block">
                    {inner}
                  </a>
                ) : (
                  <div key={labelKey} className="h-full">
                    {inner}
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-2xl p-8 border border-white/8 bg-white/4 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-black mb-8 text-white">
              {t('contact.formTitle')}
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-6">
              {[
                { name: 'name', type: 'text', placeholder: t('contact.name') },
                { name: 'email', type: 'email', placeholder: t('contact.email') },
              ].map(({ name, type, placeholder }) => (
                <div key={name} className="relative">
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl text-sm font-medium border border-white/10 bg-white/5 text-white placeholder-zinc-500 focus:border-amber-400/50 focus:bg-white/8 outline-none transition-all duration-200"
                  />
                </div>
              ))}

              <textarea
                name="message"
                placeholder={t('contact.message')}
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 rounded-xl text-sm font-medium border border-white/10 bg-white/5 text-white placeholder-zinc-500 focus:border-amber-400/50 focus:bg-white/8 outline-none transition-all duration-200 resize-none"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 bg-amber-400 text-zinc-900 hover:bg-amber-300 shadow-xl shadow-amber-400/15"
              >
                {status === 'loading' ? t('contact.sending') : t('contact.send')}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                  <span>✓</span> {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-400 text-sm font-semibold">{t('contact.error')}</div>
              )}
            </form>

            <p className="text-xs mt-5 leading-relaxed text-zinc-500">
              {t('contact.policy')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
