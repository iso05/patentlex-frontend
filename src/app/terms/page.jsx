import LegalPageLayout from '../../components/Legal/LegalPageLayout'

export const metadata = {
  title: 'Foydalanish Shartlari | PatentLex IP Law Firm',
  description: 'PatentLex rasmiy foydalanish shartlari: intellektual mulk huquqlari, xizmat ko‘rsatish tartibi, javobgarlikni cheklash va qo‘llaniladigan huquq normalari.',
  keywords: [
    'foydalanish shartlari', 'terms of service', 'PatentLex shartlari', 
    'yuridik xizmat shartlari', 'условия использования', 'пользовательское соглашение'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/terms',
  },
  openGraph: {
    title: 'Foydalanish Shartlari — PatentLex Intellektual Mulk Firmasi',
    description: 'Veb-saytdan foydalanish, intellektual mulk himoyasi va ommaviy oferta qoidalari.',
    url: 'https://patentlex.uz/terms',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return <LegalPageLayout docType="terms" />
}
