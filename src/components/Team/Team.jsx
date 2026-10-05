'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FiShield,
  FiAward,
  FiCheckCircle,
  FiArrowRight,
  FiPhoneCall,
  FiBriefcase,
  FiGlobe,
  FiZap,
  FiLock,
  FiTrendingUp,
} from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import MemberModal from './MemberModal'
import LawFirmCTA from '../Common/LawFirmCTA'
import { useTheme } from '../../ThemeContext'
import '../../i18n'

import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img9 from '../../assets/images/img9.png'

export default function Team({ isStandalone = false }) {
  const { t } = useTranslation()
  const { dark } = useTheme() || { dark: true }
  const [selectedMember, setSelectedMember] = useState(null)

  const teamData = [
    {
      id: 'yomi',
      name: 'Turdialiyev Muhammad Ali',
      role: 'Boshqaruvchi Sherik, Rasmiy Patent Vakili, Advokat, PhD',
      badge: 'PhD Darajasi & Rasmiy Patent Vakili',
      img: typeof img1 === 'object' ? img1.src : img1,
      shortInfo: 'Xalqaro xususiy huquq bo\'yicha PhD ilmiy darajasi sohibi. Adliya vazirligi litsenziyali patent vakili. 1000+ xalqaro va mahalliy brendlar himoyachisi.',
      fullBio: 'Xalqaro xususiy huquq bo‘yicha PhD ilmiy darajasiga ega, Adliya vazirligida ro‘yxatdan o‘tgan rasmiy patent vakili. 1000 dan ortiq yirik brendlarning (Yevropa Ittifoqi, AQSH, Xitoy, Turkiya, BAA va MDH davlatlari) O‘zbekistondagi rasmiy vakili. Sudlarda va Apellyatsiya kengashida intellektual mulk nizolari bo‘yicha ko‘p yillik amaliyotchi yetakchi advokat.',
      skills: [
        'Xalqaro Patentlash (WIPO)',
        'Sudlarda Advokatlik Himoyasi',
        'Bojxona Reestriga Kiritish',
        'Tovar Belgilari Ekspertizasi',
        'Franchayzing & Litsenziyalar',
      ],
      achievements: [
        '1000+ muvaffaqiyatli himoyalangan brendlar',
        'PhD ilmiy darajasi va 10+ yillik yuridik staj',
        'Sudlarda 100M+ so‘m tovon pullari undirilishi',
        'Adliya vazirligi rasmiy reestridagi vakil',
      ],
    },
    {
      id: 'timothee',
      name: 'Jo‘rayev Muhammadiso Yahyo o‘g‘li',
      role: 'Dasturiy Ta’minot & LegalTech Arxitektori, Assistant',
      badge: 'LegalTech & IT Architecture Lead',
      img: typeof img2 === 'object' ? img2.src : img2,
      shortInfo: 'Zamonaviy LegalTech, intellektual mulk reyestrlari va davlat bojlari algoritmlari bo\'yicha yetakchi mutaxassis.',
      fullBio: 'Zamonaviy LegalTech ekotizimlari, intellektual mulk milliy va xalqaro reyestrlari integratsiyasi hamda bojlar hisob-kitobining avtomatlashtirilgan algoritmlari arxitektori. IT kompaniyalar kodlari, dasturlar va ma\'lumotlar bazalarini huquqiy himoyalash bo\'yicha ekspert.',
      skills: [
        'LegalTech Dasturiy Tizimlar',
        'IT Kodlar & Dasturlar Patenti',
        'AI & Algoritmik Tahlil',
        'Davlat Reyestrlari Integratsiyasi',
      ],
      achievements: [
        'PatentLex avtomatlashtirilgan tahlil platformasi muallifi',
        'IT dasturlar bo‘yicha 150+ mualliflik guvohnomalari',
        'Xalqaro Digital Bridge 2025 taqdimotchisi',
      ],
    },
    {
      id: 'azizxoja',
      name: 'Mamirxodjayev Azizxoʻja',
      role: 'Yuridik Jarayonlar & Hujjatlashtirish Bo\'yicha Bosh Yurist',
      badge: 'Head of IP Proceedings',
      img: typeof img9 === 'object' ? img9.src : img9,
      shortInfo: 'Tovar belgilari va patent arizalarini ekspertizaga tayyorlash, apellyatsiya kengashiga e\'tirozlar shakllantirish bo\'yicha yetakchi ekspert.',
      fullBio: 'Tovar belgilari, ixtirolar va sanoat namunalari talabnomalarini davlat ekspertizasiga 24 soat ichida professional shakllantirish, rad etish xavflarini oldindan tahlil qilish hamda Apellyatsiya kengashiga asoslangan e\'tirozlar kiritish bo\'yicha bosh mutaxassis.',
      skills: [
        'Talabnomalarni 24 Soatda Tayyorlash',
        'Apellyatsiya Kengashi Hujjatlari',
        'MKTU Sinflari Audit Ekspertizasi',
        'Nizoli Hujjatlar Tahlili',
      ],
      achievements: [
        '99.4% arizalarning birinchi urinishda qabul qilinishi',
        '500+ talabnomalarning tezkor rasmiylashtirilishi',
        'Apellyatsiya kengashida 90%+ g‘alaba ko‘rsatkichi',
      ],
    },
  ]

  const stats = [
    { val: '1,200+', label: 'Ro‘yxatdan O‘tgan Loyihalar', icon: <FiShield /> },
    { val: '130+', label: 'Madrid Tizimi Davlatlari', icon: <FiGlobe /> },
    { val: '99.4%', label: 'Ekspertizadan O‘tish', icon: <FiTrendingUp /> },
    { val: '10+ Yil', label: 'Xalqaro Amaliyot', icon: <FiAward /> },
  ]

  const featureCards = [
    {
      title: '24 Soatda Ustuvorlik Sanasi',
      text: 'Brendingizni boshqalar ilib ketmasligi uchun rasmiy arizani 1 kunda topshiramiz.',
      icon: <FiZap className="text-xl" />,
      color: 'from-amber-500 to-amber-600',
    },
    {
      title: 'PhD & Rasmiy Yuridik Javobgarlik',
      text: 'Adliya vazirligi litsenziyasiga ega PhD patent vakilining to‘liq rasmiy kafolati.',
      icon: <FiShield className="text-xl" />,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: '100% Ma’lumotlar Maxfiyligi (NDA)',
      text: 'Tijorat sirlari, formulalar va barcha g‘oyalaringiz qat’iy yuridik shartnoma bilan himoyalangan.',
      icon: <FiLock className="text-xl" />,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Sudlarda Tovon Undirish & Himoya',
      text: 'Kontrafakt mahsulotlarni yo‘qotish va qonunbuzarlardan 100M+ so‘m tovon puli undirish.',
      icon: <FiAward className="text-xl" />,
      color: 'from-purple-500 to-pink-600',
    },
  ]

  return (
    <section
      id="team"
      className={`py-28 relative overflow-hidden transition-colors duration-500 ${
        dark ? 'bg-[#070815] text-zinc-100' : 'bg-zinc-50 text-zinc-900'
      }`}
    >
      {/* Background artwork & ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src="/bg_team.png"
          alt="PatentLex Team Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity filter contrast-125 scale-105"
        />
        <div className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-b from-[#070815]/85 via-[#070815]/90 to-[#070815]'
            : 'bg-gradient-to-b from-zinc-50/90 via-zinc-50/95 to-zinc-50'
        }`} />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] bg-amber-500/10" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] bg-indigo-900/15" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-5 backdrop-blur-md bg-amber-400/10 text-amber-400 border border-amber-400/30 shadow-lg shadow-amber-400/5">
            <FiAward className="text-amber-400 text-sm animate-pulse" />
            <span>INTERNATIONAL IP LEGAL TECH TEAM</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-tight ${
            dark ? 'text-white' : 'text-zinc-900'
          }`}>
            Intellektual Mulk Bo'yicha Litsenziyali Mutaxassislar Jamoasi
          </h2>

          <p className={`text-base sm:text-xl leading-relaxed max-w-3xl mx-auto ${
            dark ? 'text-zinc-300' : 'text-zinc-600'
          }`}>
            Ilmiy darajaga (PhD), rasmiy davlat litsenziyasiga va 1000+ brendlarni xalqaro miqyosda himoya qilish tajribasiga ega mutaxassislarimiz.
          </p>
        </div>

        {/* TEAM STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((st, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center shadow-xl ${
                dark
                  ? 'bg-white/4 border-white/10 hover:border-amber-400/40 hover:bg-white/8'
                  : 'bg-white border-zinc-200 hover:border-amber-400 shadow-md'
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-400/15 text-amber-400 border border-amber-400/30 flex items-center justify-center text-2xl mb-3 shadow-lg">
                {st.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                {st.val}
              </div>
              <div className={`text-xs font-bold uppercase tracking-wider mt-1 ${
                dark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3D TEAM MEMBERS SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamData.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between shadow-2xl cursor-pointer ${
                dark
                  ? 'bg-[#0d1026]/90 border-white/12 hover:border-amber-400/60 hover:-translate-y-2 hover:shadow-black/90'
                  : 'bg-white border-zinc-200 hover:border-amber-400 hover:-translate-y-2 hover:shadow-2xl'
              }`}
            >
              {/* MEMBER PORTRAIT */}
              <div className="relative h-80 sm:h-92 w-full overflow-hidden bg-gradient-to-t from-black via-transparent to-transparent">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1026] via-[#0d1026]/40 to-transparent" />

                {/* Verified Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider backdrop-blur-md bg-black/70 text-amber-400 border border-amber-400/40 shadow-lg">
                    <FiShield size={12} />
                    <span>{member.badge}</span>
                  </div>
                </div>

                {/* Name / Role on top of gradient */}
                <div className="absolute bottom-4 left-6 right-6 z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-amber-400 mt-1 line-clamp-1">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* CARD DETAILS & ACTIONS */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-5">
                <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                  dark ? 'text-zinc-300' : 'text-zinc-600'
                }`}>
                  {member.shortInfo}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Button */}
                <div className="pt-2 border-t border-white/8 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5">
                    <span>To‘liq Profil & Sertifikatlar</span>
                    <FiArrowRight />
                  </span>

                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 group-hover:bg-amber-400 group-hover:text-black text-amber-400 flex items-center justify-center transition-all shadow-md">
                    <FiArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 PILLARS OF EXCELLENCE */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className={`text-2xl sm:text-3xl font-black ${dark ? 'text-white' : 'text-zinc-900'}`}>
              Nima Uchun Yetakchi Brendlar PatentLex Jamoasini Tanlaydi?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((feat, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-xl ${
                  dark
                    ? 'bg-white/4 border-white/8 hover:border-amber-400/40 hover:bg-white/8 hover:-translate-y-1'
                    : 'bg-white border-zinc-200 hover:border-amber-400 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feat.color} text-white flex items-center justify-center shadow-lg mb-5`}>
                    {feat.icon}
                  </div>
                  <h4 className="text-base font-black text-white mb-2 leading-snug">
                    {feat.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    dark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {feat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIRECT CONSULTATION WITH LEAD PATENT ATTORNEY */}
        <LawFirmCTA
          badge="BOSHQARUVCHI PATENT VAKILI HUQUQIY MASLAHATI"
          title="Boshqaruvchi Patent Vakilidan Shaxsiy Maslahat Oling"
          subtitle="PhD darajasiga ega rasmiy patent vakili Muhammad Ali Turdialiyev sizning ishingiz bo‘yicha eng xolis va samarali monopol himoya strategiyasini ishlab chiqadi."
          buttonText="Telegramda Shaxsiy Maslahat"
          phoneText="+998 88 147-00-81"
        />

      </div>

      {/* MEMBER DETAIL MODAL */}
      <MemberModal
        member={selectedMember}
        isOpen={Boolean(selectedMember)}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  )
}
