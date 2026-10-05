import CalculatorPromo from '../../components/Calculator/CalculatorPromo'

export const metadata = {
  title: 'Davlat Bojlarini To‘g‘ri Hisoblovchi Dastur | PatentLex Engine',
  description: 'O‘zbekiston Respublikasi intellektual mulk va yuridik sohadagi barcha turdagi davlat bojlarini aniq hisoblovchi universal dasturiy ta\'minot va obuna tariflari.',
  keywords: [
    'davlat boji hisoblash', 'boj hisoblagich', 'patentlex engine', 'intellektual mulk bojlari',
    'baza hisoblash miqdori', 'rasmiy bojlar', 'компьютерная программа пошлины'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/calculator',
  },
  openGraph: {
    title: 'Davlat Bojlarini To‘g‘ri Hisoblovchi Dastur — PatentLex Engine',
    description: 'Barcha turdagi davlat to‘lovlari va bojlarini 1 soniyada aniq hisoblovchi dasturiy ta\'minot.',
    url: 'https://patentlex.uz/calculator',
  },
}

export default function CalculatorPage() {
  return (
    <div className="pt-8">
      <CalculatorPromo />
    </div>
  )
}
