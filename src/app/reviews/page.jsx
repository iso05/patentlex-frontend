import Reviews from '../../components/Reviews/Reviews'

export const metadata = {
  title: 'Mijozlar Fikrlari | PatentLex - Sharhlar va Tavsiyalar',
  description: 'PatentLex mijozlarining fikrlari va muvaffaqiyatli hamkorlik bo‘yicha sharhlar.',
  keywords: [
    'patentlex sharhlar', 'patent agentligi fikrlar', 'patent mijozlar fikri',
    'отзывы патентование ташкент', 'patent reviews uzbekistan'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/reviews',
  },
  openGraph: {
    title: 'PatentLex Mijozlari Sharhlari',
    description: 'Bizning yuridik xizmatlarimiz va patent advokatlarimiz haqida mijozlar munosabati.',
    url: 'https://patentlex.uz/reviews',
  },
}

export default function ReviewsPage() {
  return (
    <div className="pt-8">
      <Reviews />
    </div>
  )
}
