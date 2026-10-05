import './globals.css'
import { ThemeProvider } from '../ThemeContext'
import AppLayoutWrapper from '../components/Common/AppLayoutWrapper'

const keywordsList = [
  // Uzbek keywords
  'patent', 'patent xizmati', 'patent hizmati', 'patentlash', 'intellektual mulk',
  'patent guvohnoma', 'patent guvohnomasi', 'tovar belgisi', 'tovar belgisini ro‘yxatdan o‘tkazish',
  'brend himoyasi', 'mualliflik huquqi', 'patent advokati', 'patent agentligi Toshkent',
  'dasturni ro‘yxatdan o‘tkazish', 'intellektual mulk agentligi', 'yuridik xizmatlar Toshkent',
  'savdo belgisi', 'sanoat namunasi', 'foydali model patentlash', 'patent idorasi',
  'boj hisoblagich', 'davlat boji hisoblash', 'mktu sinflari', 'kontrafaktga qarshi kurash',
  'bojxona intellektual mulk reestri', 'madrid tizimi xalqaro patent',

  // Russian keywords
  'патент', 'патентные услуги Узбекистан', 'патентование Ташкент', 'интеллектуальная собственность',
  'регистрация товарного знака', 'патентный поверенный', 'авторское право', 'защита бренда',
  'патентное бюро Ташкент', 'регистрация бренда Узбекистан', 'патент на изобретение',
  'патент на полезную модель', 'товарный знак Ташкент', 'юридические услуги Ташкент',
  'таможенный реестр объектов ис', 'расчет госпошлины узбекистан', 'мадридская система',

  // English keywords
  'patent', 'patent service Uzbekistan', 'patent registration Tashkent', 'intellectual property law firm',
  'trademark registration Uzbekistan', 'brand protection', 'patent attorney Tashkent',
  'copyright protection', 'IP law firm Uzbekistan', 'utility model patent', 'industrial design registration',
  'customs IP registry Uzbekistan', 'Madrid system trademark Tashkent', 'legal services Tashkent'
]

export const metadata = {
  metadataBase: new URL('https://patentlex.uz'),
  title: {
    default: 'PatentLex — Patent Xizmati, Tovar Belgisi va Intellektual Mulk Himoyasi',
    template: '%s | PatentLex IP Law'
  },
  description: 'PatentLex — O‘zbekistonda tovar belgisini patentlash, patent xizmati, patent guvohnomasi, brendni ro‘yxatdan o‘tkazish va intellektual mulkni himoya qilish bo‘yicha 1-raqamli yuridik patent agentligi.',
  keywords: keywordsList,
  authors: [{ name: 'PatentLex IP Law Firm — Turdialiyev Muhammad Ali, PhD' }],
  creator: 'PatentLex',
  publisher: 'PatentLex Intellectual Property Firm',

  openGraph: {
    title: 'PatentLex — Patent Xizmati va Intellektual Mulk Himoyasi Toshkent',
    description: 'Patentlash, tovar belgisini ro‘yxatdan o‘tkazish, patent guvohnomasi va intellektual mulk bo‘yicha professional patent vakili xizmatlari.',
    url: 'https://patentlex.uz',
    siteName: 'PatentLex',
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PatentLex — Patent Xizmati va Intellektual Mulk Himoyasi',
    description: 'Patentlash va tovar belgisini ro‘yxatdan o‘tkazish bo‘yicha professional yuridik xizmatlar.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google970f39cf1b30cdf9',
  },
  other: {
    'google-adsense-account': 'ca-pub-5047998189921732',
  },
}

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'PatentLex - Patent Xizmati va Intellektual Mulk Agentligi',
  alternateName: ['PatentLex IP Law Firm', 'PatentLex Patent Xizmati', 'Patent Markazi PatentLex'],
  url: 'https://patentlex.uz',
  logo: 'https://patentlex.uz/hero_bg.png',
  image: 'https://patentlex.uz/patent_card_bg.png',
  telephone: '+998881470081',
  email: 'patentlextashkent@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Alisher Navoiy ko‘chasi, 2-uy (Orda maydoni)',
    addressLocality: 'Tashkent',
    addressRegion: 'Toshkent shahri',
    addressCountry: 'UZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.311081,
    longitude: 69.240562,
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '184',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Uzbekistan',
    },
    {
      '@type': 'Country',
      name: 'Kazakhstan',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
    {
      '@type': 'Country',
      name: 'China',
    },
  ],
  knowsLanguage: ['uz', 'ru', 'en'],
  serviceType: [
    'Patent registration',
    'Patent xizmati',
    'Patentlash',
    'Trademark registration',
    'Tovar belgisi ro‘yxatdan o‘tkazish',
    'Intellectual Property Protection',
    'Intellektual mulk himoyasi',
    'Bojxona intellektual mulk reestri',
    'Madrid System International Trademark',
    'Copyright Registration',
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5047998189921732"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#060814] text-zinc-100 font-['Outfit',sans-serif] antialiased selection:bg-amber-400 selection:text-black min-h-screen flex flex-col justify-between" suppressHydrationWarning>
        <ThemeProvider>
          <AppLayoutWrapper>{children}</AppLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
