'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import FloatingActions from './FloatingActions'

export default function AppLayoutWrapper({ children }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')

  if (isAdmin) {
    return <main className="min-h-screen bg-[#07070d]">{children}</main>
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16 lg:pt-18">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
