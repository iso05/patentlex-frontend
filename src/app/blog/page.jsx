import Blog from '../../components/Blog/Blog'

export const metadata = {
  title: 'Patentlash va Intellektual Mulk Maqolalari | PatentLex Blog',
  description: 'Patent xizmatlari, tovar belgilari guvohnomasi va intellektual mulk himoyasi bo‘yicha so‘nggi yangiliklar va huquqiy qo‘llanmalar.',
  keywords: [
    'patent maqolalari', 'intellektual mulk yangiliklari', 'patentlash qo‘llanma',
    'патентование статьи', 'patent news Uzbekistan'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/blog',
  },
  openGraph: {
    title: 'PatentLex Blog va Amaliy Keyslar',
    description: 'Intellektual mulk sohasi yangiliklari va huquqiy tavsiyalar.',
    url: 'https://patentlex.uz/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="pt-8">
      <Blog />
    </div>
  )
}
