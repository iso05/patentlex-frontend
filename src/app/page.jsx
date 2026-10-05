import Home from '../components/Home/Home'
import BrandChecker from '../components/Home/BrandChecker'
import Services from '../components/Services/Services'
import LiveFeeCalculator from '../components/Home/LiveFeeCalculator'
import RiskRadar from '../components/Home/RiskRadar'
import ProcessTimeline from '../components/Home/ProcessTimeline'
import ComparisonMatrix from '../components/Home/ComparisonMatrix'
import Team from '../components/Team/Team'
import Blog from '../components/Blog/Blog'
import Reviews from '../components/Reviews/Reviews'
import FAQSection from '../components/Home/FAQSection'
import Contact from '../components/Contact/Contact'

export const metadata = {
  title: 'Patent Xizmati va Patentlash | PatentLex — Tovar Belgisi va Intellektual Mulk Guvohnomasi',
  description: 'O‘zbekistonda tovar belgisini patentlash, brendni ro‘yxatdan o‘tkazish, patent guvohnomasi olish, intellektual mulk himoyasi va davlat boji hisoblash bo‘yicha 1-raqamli yuridik patent agentligi.',
  keywords: [
    'patent xizmati', 'patent', 'patentlash', 'tovar belgisi patentlash', 'brendni ro‘yxatdan o‘tkazish',
    'intellektual mulk agentligi', 'patent guvohnomasi', 'davlat boji hisoblash', 'mktu sinflari',
    'патентование Ташкент', 'регистрация товарного знака Узбекистан', 'патентный поверенный Ташкент',
    'patent registration Uzbekistan', 'trademark registration Tashkent', 'IP law firm Uzbekistan'
  ],
  alternates: {
    canonical: 'https://patentlex.uz',
  },
  openGraph: {
    title: 'PatentLex — Patent Xizmati, Tovar Belgisi va Intellektual Mulk Himoyasi',
    description: 'Adliya vazirligi ro‘yxatidan o‘tgan rasmiy patent vakili (PhD). Tovar belgilari, patentlar, sudlarda himoya va bojxona reestri.',
    url: 'https://patentlex.uz',
    siteName: 'PatentLex',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <Home />

      {/* 2. 60-SECOND INTERACTIVE BRAND CHECKER */}
      <BrandChecker />

      {/* 3. 8-SERVICE COMPREHENSIVE IP ECOSYSTEM */}
      <Services />

      {/* 4. LIVE UNIVERSAL STATE FEE & MKTU CALCULATOR */}
      <LiveFeeCalculator />

      {/* 5. BRAND RISK RADAR (UNPATENTED DANGERS VS PROTECTION) */}
      <RiskRadar />

      {/* 6. 4-STEP TRANSPARENT PROCESS ROADMAP */}
      <ProcessTimeline />

      {/* 7. SUPERIORITY COMPARISON MATRIX */}
      <ComparisonMatrix />

      {/* 8. TEAM & OFFICIAL PHD PATENT ATTORNEY AUTHORITY */}
      <Team />

      {/* 9. PORTFOLIO & NEWS */}
      <Blog limit={3} />

      {/* 10. CLIENT REVIEWS & TRUST */}
      <Reviews />

      {/* 11. INTERACTIVE FAQ & RICH SNIPPETS */}
      <FAQSection />

      {/* 12. CONTACT & LEAD GENERATION */}
      <Contact />
    </>
  )
}
