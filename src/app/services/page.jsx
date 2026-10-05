import Services from '../../components/Services/Services'

export const metadata = {
  title: 'Patentlash va Tovar Belgisi Xizmatlari | PatentLex Patent Agentligi',
  description: 'Patent xizmati, patent guvohnomasi olish, tovar belgisini ro‘yxatdan o‘tkazish, EHM dasturlari patentlashi va mualliflik huquqlari himoyasi.',
  keywords: [
    'patent xizmati', 'patentlash', 'intellektual mulk', 'patent guvohnomasi',
    'tovar belgisini ro‘yxatdan o‘tkazish', 'brend himoyasi', 'патентование Узбекистан',
    'регистрация товарного знака', 'trademark registration Tashkent'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/services',
  },
  openGraph: {
    title: 'PatentLex Yuridik Xizmatlari — Patent va Tovar Belgilari',
    description: 'Biznes va jismoniy shaxslar uchun intellektual mulk sohasidagi barcha turdagi professional patent xizmatlari.',
    url: 'https://patentlex.uz/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="pt-8">
      <Services />
    </div>
  )
}
