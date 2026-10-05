import Link from 'next/link'
import { HiArrowLeft, HiHome, HiCalculator, HiBriefcase, HiChatBubbleLeftRight, HiPhone } from 'react-icons/hi2'

export default function NotFound() {
  const helpfulLinks = [
    { title: 'Bosh sahifa', href: '/', icon: HiHome, desc: 'Asosiy sahifaga qaytish' },
    { title: 'Xizmatlarimiz', href: '/services', icon: HiBriefcase, desc: 'Patent va tovar belgisi himoyasi' },
    { title: 'Boj hisoblagich', href: '/calculator', icon: HiCalculator, desc: 'Davlat to‘lovlarini hisoblash' },
    { title: 'Bog‘lanish', href: '/contact', icon: HiPhone, desc: 'Bepul patent konsultatsiyasi' },
  ]

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-20 overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full blur-[140px] bg-amber-500/10 pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full blur-[140px] bg-indigo-600/15 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Big 404 badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/30 mb-6 backdrop-blur-md">
          <span>XATOLIK 404 · SAHIFA MAVJUD EMAS</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 mb-4 select-none drop-shadow-[0_0_35px_rgba(251,191,36,0.25)]">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Kechirasiz, bunday sahifa topilmadi
        </h2>

        <p className="text-sm sm:text-base text-zinc-400 max-w-lg mb-8 leading-relaxed">
          Siz qidirayotgan manzil noto‘g‘ri kiritilgan, o‘chirilgan yoki boshqa manzilga ko‘chirilgan bo‘lishi mumkin.
        </p>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-400/25 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <HiArrowLeft size={18} /> Bosh sahifaga qaytish
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/40 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all"
          >
            <HiChatBubbleLeftRight size={18} className="text-amber-400" /> Tezkor Yordam
          </Link>
        </div>

        {/* Helpful links grid */}
        <div className="w-full pt-8 border-t border-white/10">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">
            Foydali bo‘limlarga o‘tish:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {helpfulLinks.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="group p-4 rounded-2xl bg-[#0e101f]/80 hover:bg-[#151833]/90 border border-white/8 hover:border-amber-400/40 transition-all flex items-start gap-3.5 backdrop-blur-md shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20 group-hover:bg-amber-400 group-hover:text-black transition-all flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

