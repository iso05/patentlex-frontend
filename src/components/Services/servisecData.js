import { FaBullseye, FaGlobeAmericas, FaHandshake } from 'react-icons/fa'
import { FiAirplay, FiFeather, FiUser, FiShield, FiCpu } from 'react-icons/fi'
import { IoDocumentOutline } from 'react-icons/io5'
import { TbAdjustmentsAlt, TbScale } from 'react-icons/tb'

export const items = [
  {
    id: 'trademark',
    icon: FiUser,
    badge: '10 Yillik Monopoliya',
    period: '6-7 oy (Tezkor: 1 oy)',
    color: 'from-amber-400 to-amber-600',
  },
  {
    id: 'patent',
    icon: FiFeather,
    badge: 'Texnologiyalar Himoyasi',
    period: 'Ixtiro & Foydali Model',
    color: 'from-blue-400 to-indigo-600',
  },
  {
    id: 'copyright',
    icon: IoDocumentOutline,
    badge: 'Muallif + 70 Yil',
    period: 'IT Kodlar & San\'at',
    color: 'from-purple-400 to-pink-600',
  },
  {
    id: 'domains',
    icon: FaBullseye,
    badge: '100% Tovon Puli Undirish',
    period: 'Bozordan Tozalash',
    color: 'from-rose-400 to-red-600',
  },
  {
    id: 'rights',
    icon: TbScale,
    badge: 'Advokatlik Vakilligi',
    period: 'Iqtisodiy & Apellyatsiya',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    id: 'consulting',
    icon: FiShield,
    badge: 'Chegara Blokirovkasi',
    period: 'Bojxona Reestri',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'international',
    icon: FaGlobeAmericas,
    badge: '130+ Davlatda Himoya',
    period: 'Madrid Tizimi & PCT',
    color: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'franchise',
    icon: FaHandshake,
    badge: 'Daromadli Monetizatsiya',
    period: 'Litsenziya Shartnomasi',
    color: 'from-violet-400 to-purple-600',
  },
]
