import LegalPageLayout from '../../components/Legal/LegalPageLayout'

export const metadata = {
  title: 'Cookie Fayllari Siyosati | PatentLex IP Law Firm',
  description: 'PatentLex cookie siyosati: cookie turlari, Google AdSense reklama cookie fayllari, analitika va brauzer sozlamalari orqali cookie’larni boshqarish yo‘riqnomasi.',
  keywords: [
    'cookie siyosati', 'cookie policy', 'Google AdSense cookies', 
    'fayllar cookie', 'файлы куки', 'политика в отношении файлов cookie'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/cookie-policy',
  },
  openGraph: {
    title: 'Cookie Fayllari Siyosati — PatentLex Intellektual Mulk Firmasi',
    description: 'Veb-saytda foydalaniladigan cookie turlari, Google AdSense va ularni boshqarish tartibi.',
    url: 'https://patentlex.uz/cookie-policy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicyPage() {
  return <LegalPageLayout docType="cookies" />
}
