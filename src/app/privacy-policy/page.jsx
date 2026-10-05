import LegalPageLayout from '../../components/Legal/LegalPageLayout'

export const metadata = {
  title: 'Maxfiylik Siyosati | PatentLex IP Law Firm',
  description: 'PatentLex rasmiy maxfiylik siyosati: shaxsiy ma’lumotlarni yig‘ish, qayta ishlash, himoya qilish, Google AdSense va cookie fayllaridan foydalanish tartibi.',
  keywords: [
    'maxfiylik siyosati', 'privacy policy', 'shaxsiy ma’lumotlar himoyasi', 
    'PatentLex maxfiylik', 'Google AdSense maxfiylik', 'политика конфиденциальности Узбекистан'
  ],
  alternates: {
    canonical: 'https://patentlex.uz/privacy-policy',
  },
  openGraph: {
    title: 'Maxfiylik Siyosati — PatentLex Intellektual Mulk Firmasi',
    description: 'Shaxsiy ma’lumotlarni qayta ishlash, foydalanuvchi huquqlari va xavfsizlik standartlari.',
    url: 'https://patentlex.uz/privacy-policy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return <LegalPageLayout docType="privacy" />
}
