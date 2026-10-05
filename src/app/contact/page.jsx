import Contact from '../../components/Contact/Contact'

export const metadata = {
  title: 'Bog‘lanish | Bepul Patent Konsultatsiyasi va Patentlash Xizmati',
  description: 'PatentLex patent agentligi bilan bog‘laning: Toshkentda patentlash, tovar belgisini ro‘yxatdan o‘tkazish va intellektual mulk bo‘yicha bepul yuridik konsultatsiya.',
  keywords: [
    'patent konsultatsiyasi', 'bepul patent konsultatsiya', 'patent agentligi Toshkent',
    'patent xizmati aloqa', 'консультация патентование Ташкент'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/contact',
  },
  openGraph: {
    title: 'PatentLex Bilan Bog‘lanish — Bepul Konsultatsiya',
    description: 'Toshkent shahridagi advokatlik firmamiz bilan aloqaga chiqing va bepul maslahat oling.',
    url: 'https://patentlex.uz/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-8">
      <Contact />
    </div>
  )
}
