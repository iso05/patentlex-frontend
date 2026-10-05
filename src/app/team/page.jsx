import Team from '../../components/Team/Team'

export const metadata = {
  title: 'Patent Vakillari va Advokatlar | PatentLex Intellektual Mulk Jamoasi',
  description: 'PatentLex jamoasi: O‘zbekistonda tajribali patent vakillari, patentlash va intellektual mulk bo‘yicha ixtisoslashgan advokatlar.',
  keywords: [
    'patent advokati', 'patent vakili Toshkent', 'intellektual mulk advokati',
    'патентный поверенный Ташкент', 'patent attorney Uzbekistan', 'IP lawyer Tashkent'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/team',
  },
  openGraph: {
    title: 'PatentLex Mutaxassislari va Patent Vakillari Jamoasi',
    description: 'Ko‘p yillik tajribaga ega intellektual mulk va patentlash bo‘yicha yetakchi mutaxassislarimiz.',
    url: 'https://patentlex.uz/team',
  },
}

export default function TeamPage() {
  return (
    <div className="pt-8">
      <Team />
    </div>
  )
}
