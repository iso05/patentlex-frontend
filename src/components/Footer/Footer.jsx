import { useTranslation } from 'react-i18next'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#141313] text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-semibold text-[#FCFFD4]">
            {t('footer.brand')}
          </h3>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
            {t('footer.description')}
          </p>

          <p className="mt-6 text-xs text-gray-500">
            © 2025 {t('footer.rights')}
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-white transition">
                {t('menu.home')}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                {t('menu.services')}
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-white transition">
                {t('menu.team')}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                {t('menu.portfolio')}
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition">
                {t('menu.reviews')}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                {t('menu.contact')}
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-medium text-white mb-5">
            {t('footer.contact')}
          </h4>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FCFFD4]" />
              +998-88-147-00-81
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#FCFFD4]" />
              patentlextashkent@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#FCFFD4]" />
              {t('footer.location')}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        {t('footer.bottom')}
      </div>
    </footer>
  )
}
