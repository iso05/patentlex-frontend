import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const teamMembers = [
  {
    id: 'yomi',
    img: img1,
  },
  {
    id: 'timothee',
    img: img2,
  },
]

export default function Team() {
  const { t } = useTranslation()
  return (
    <section
      id="team"
      className="py-20 min-h-screen"
      style={{ backgroundColor: '#181616', color: '#fff' }}
    >
      <div className="container mx-auto px-4 md:px-10">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center pb-16"
          style={{
            background: 'linear-gradient(90deg, #FCFFD4, #e6f1b7, #d1e49b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('team.title')}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex justify-center gap-8">
          {teamMembers.map((member, id) => (
            <TeamCard
              key={id}
              member={{
                name: t(`team.members.${member.id}.name`),
                role: t(`team.members.${member.id}.role`),
                info: t(`team.members.${member.id}.info`),
                img: member.img,
              }}
            />
          ))}
        </div>

        {/* TEAM DESCRIPTIONS ROW -- hidden on mobile */}
        <div className="hidden md:flex justify-center gap-6 mt-12 px-4">
          {/* CARD 1 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl px-6 py-6 w-64 text-center
      transition-all duration-300
      hover:bg-white/10 hover:border-white/20 
      hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-linear-to-br from-blue-600/40 to-cyan-400/40">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">
              {t('team.features.fast.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('team.features.fast.text')}
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl px-6 py-6 w-64 text-center
      transition-all duration-300
      hover:bg-white/10 hover:border-white/20 
      hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-linear-to-br from-purple-600/40 to-pink-400/40">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">
              {t('team.features.trusted.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('team.features.trusted.text')}
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl px-6 py-6 w-64 text-center
      transition-all duration-300
      hover:bg-white/10 hover:border-white/20 
      hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-linear-to-br from-green-600/40 to-emerald-400/40">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 1.343-3 3v3h6v-3c0-1.657-1.343-3-3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 19h14a2 2 0 002-2v-2H3v2a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">
              {t('team.features.secure.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('team.features.secure.text')}
            </p>
          </div>

          {/* CARD 4 */}
          <div
            className="group bg-white/5 backdrop-blur-xl border border-white/10 
      rounded-2xl px-6 py-6 w-64 text-center
      transition-all duration-300
      hover:bg-white/10 hover:border-white/20 
      hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <div className="flex justify-center mb-3">
              <div className="p-3 rounded-xl bg-linear-to-br from-yellow-500/40 to-orange-400/40">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.284 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.716 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.716 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.284 18 16.5 18s-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">
              {t('team.features.performance.title')}
            </h3>
            <p className="text-gray-300 text-sm">
              {t('team.features.performance.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setShowInfo(false)}
    >
      {/* IMAGE */}
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
      />

      {/* DESKTOP OVERLAY (TOP PART ONLY) */}
      <div
        className="
          absolute top-0 left-0 right-0
          bg-black/70
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          hidden md:flex flex-col
          justify-center items-center text-center px-4
        "
        style={{ bottom: '4.5rem' }} // 👈 pastdagi ism uchun joy
      >
        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-indigo-400 mb-4">{member.role}</p>
        <p className="text-gray-200">{member.info}</p>
      </div>

      {/* MOBILE INFO BUTTON */}
      <div className="absolute top-4 right-4 md:hidden z-20">
        <button
          className="backdrop-blur-xl bg-white/10 border border-white/20 text-gray-500 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg"
          onClick={(e) => {
            e.stopPropagation()
            setShowInfo(!showInfo)
          }}
        >
          Info
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {showInfo && (
        <div
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 rounded-2xl md:hidden z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
          <p className="text-indigo-400 mb-4">{member.role}</p>
          <p className="text-gray-200">{member.info}</p>
        </div>
      )}

      {/* NAME + ROLE (ALWAYS VISIBLE) */}
      <div
        className=" absolute bottom-4 left-4
    text-white
    z-20
    group-hover:z-0
    transition-all duration-300"
      >
        <p className="text-lg text-[#6e64f5] font-semibold">{member.name}</p>
        <p className="text-gray-400 text-sm">{member.role}</p>
      </div>
    </div>
  )
}
