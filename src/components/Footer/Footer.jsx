'use client'

import { useTranslation } from 'react-i18next'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { FaInstagram, FaFacebook } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa'
import { FiShield, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'
import '../../i18n'

const socialLinks = {
  instagram: 'https://www.instagram.com/patent_lex?igsh=MTg1ZjhudXNrcmEzMw%3D%3D',
  facebook: 'https://www.facebook.com/profile.php?id=61552680388002',
  telegram: 'https://t.me/copyrightsuz',
}

export default function Footer() {
  const { t } = useTranslation()

  const menuLinks = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'calculator', href: '/calculator' },
    { key: 'team', href: '/team' },
    { key: 'portfolio', href: '/blog' },
    { key: 'reviews', href: '/reviews' },
    { key: 'contact', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'Tovar Belgilari & Logotiplar', href: '/services' },
    { name: 'Ixtirolar & Foydali Modellar', href: '/services' },
    { name: 'Mualliflik Huquqi & IT Kodlar', href: '/services' },
    { name: 'Bojxona Intellektual Mulk Reestri', href: '/services' },
    { name: 'Kontrafaktga Qarshi Kurash', href: '/services' },
    { name: 'Sudlarda Himoya & Arbitraj', href: '/services' },
    { name: 'Xalqaro Madrid Tizimi (130+ Davlat)', href: '/services' },
  ]

  return (
    <footer className="bg-[#05060b] text-zinc-400 border-t border-white/10 relative overflow-hidden">
      {/* TOP ACCENT GLOW */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">

          {/* BRAND COL — 4 cols */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl sm:text-3xl font-black tracking-widest text-amber-400">PATENT</span>
                <span className="text-2xl sm:text-3xl font-black tracking-widest text-white">LEX</span>
              </Link>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 max-w-sm">
                {t('footer.description')}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold mb-6">
                <FiShield />
                <span>Adliya Vazirligi Rasmiy Patent Vakili (PhD)</span>
              </div>
            </div>

            <div className="flex gap-2.5">
              {[
                { href: socialLinks.instagram, icon: <FaInstagram size={16} />, label: 'Instagram' },
                { href: socialLinks.facebook, icon: <FaFacebook size={16} />, label: 'Facebook' },
                { href: socialLinks.telegram, icon: <FaTelegram size={16} />, label: 'Telegram' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 shadow-md"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES COL — 3 cols */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-5">
              {t('footer.servicesTitle') || 'IP Xizmatlar'}
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span className="text-amber-400/40 text-xs">›</span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAV COL — 2 cols */}
          <div className="md:col-span-2">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-5">
              {t('footer.navigation') || 'Navigatsiya'}
            </p>
            <ul className="space-y-2.5">
              {menuLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-amber-400 transition-colors font-medium"
                  >
                    {t(`menu.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COL — 3 cols */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-5">
              {t('footer.contact')}
            </p>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a href="tel:+998881470081" className="flex items-start gap-3 text-zinc-300 hover:text-amber-400 transition-colors font-bold">
                <FaPhoneAlt className="text-amber-400 mt-1 shrink-0" size={14} />
                +998 88 147-00-81
              </a>
              <a href="mailto:patentlextashkent@gmail.com" className="flex items-start gap-3 text-zinc-400 hover:text-amber-400 transition-colors font-medium break-all">
                <FaEnvelope className="text-amber-400 mt-1 shrink-0" size={14} />
                patentlextashkent@gmail.com
              </a>
              <div className="flex items-start gap-3 text-zinc-400">
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" size={14} />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL LINKS ROW */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 pt-8 pb-4 border-b border-white/5 text-xs">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 font-medium">
            <span className="text-zinc-500 font-bold uppercase tracking-wider text-[11px]">
              {t('footer.legalTitle') || 'Huquqiy'}:
            </span>
            <Link
              href="/privacy-policy"
              className="text-zinc-400 hover:text-amber-300 transition-colors"
            >
              {t('footer.privacyPolicy') || 'Maxfiylik Siyosati'}
            </Link>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <Link
              href="/terms"
              className="text-zinc-400 hover:text-amber-300 transition-colors"
            >
              {t('footer.termsOfService') || 'Foydalanish Shartlari'}
            </Link>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <Link
              href="/cookie-policy"
              className="text-zinc-400 hover:text-amber-300 transition-colors"
            >
              {t('footer.cookiePolicy') || 'Cookie Siyosati'}
            </Link>
          </div>

          <div className="text-[11px] text-zinc-500 font-medium">
            <span>Google AdSense Verified Publisher</span>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-xs text-zinc-500 font-medium">
          <p>{t('footer.rights')}</p>
          <p className="text-amber-400/80">{t('footer.bottom')}</p>
        </div>
      </div>
    </footer>
  )
}
