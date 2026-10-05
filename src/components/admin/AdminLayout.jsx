'use client'

import { useState } from 'react'
import LogoutButton from './LogoutButton'
import CreatePost from './CreatePost'
import AdminPosts from './AdminPosts'
import { PlusCircle, FileText, LayoutDashboard, ShieldCheck } from 'lucide-react'

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState('create')

  return (
    <div className="min-h-screen bg-[#08080c] text-white flex font-sans">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0e0e15] border-r border-white/5 flex flex-col justify-between hidden md:flex">
        <div>
          {/* HEADER BRAND */}
          <div className="p-6 border-b border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center border border-amber-400/20">
              <ShieldCheck className="text-amber-400" size={18} />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-amber-300 uppercase">
                Patentlex
              </h2>
              <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Admin Paneli</p>
            </div>
          </div>

          {/* MENU NAV */}
          <nav className="p-4 space-y-1.5">
            <p className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase px-4 mb-4 mt-2">Navigatsiya</p>
            
            <button
              onClick={() => setActiveTab('create')}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 text-sm font-bold
                ${activeTab === 'create'
                  ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20 shadow-lg shadow-amber-400/5'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent'
                }
              `}
            >
              <PlusCircle size={17} />
              <span>Post yaratish</span>
            </button>

            <button
              onClick={() => setActiveTab('posts')}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 text-sm font-bold
                ${activeTab === 'posts'
                  ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20 shadow-lg shadow-amber-400/5'
                  : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200 border border-transparent'
                }
              `}
            >
              <FileText size={17} />
              <span>Barcha postlar</span>
            </button>
          </nav>
        </div>

        {/* BOTTOM BRAND FOOTER WITH LOGOUT */}
        <div className="p-4 border-t border-white/5 bg-white/[0.005] flex flex-col gap-4">
          <LogoutButton />
          <p className="text-[10px] text-zinc-500 font-bold tracking-wider uppercase text-center">© 2026 PatentLex</p>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* HEADER BAR */}
        <header className="h-16 border-b border-white/5 bg-[#0e0e15] flex items-center justify-between px-6 md:px-10 z-10">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="text-zinc-500 md:hidden" size={20} />
            <h1 className="text-lg font-bold text-white tracking-wide">
              {activeTab === 'create' ? 'Yangi post yaratish' : 'Postlar arxivi'}
            </h1>
          </div>
          
          {/* ADMIN PROFILE CARD & MOBILE LOGOUT */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-[#0c0c12] font-black flex items-center justify-center text-sm shadow-md shadow-amber-500/10">
                A
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-xs font-bold text-zinc-300">Administrator</p>
                <p className="text-[10px] text-amber-400/80 font-bold tracking-wide">muhammadali9119</p>
              </div>
            </div>

            {/* Mobile Header Logout Button */}
            <div className="md:hidden">
              <LogoutButton isMobileHeader={true} />
            </div>
          </div>
        </header>

        {/* CONTENT BLOCK */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-gradient-to-b from-[#0e0e15]/50 to-[#08080c]">
          <div className="bg-[#0e0e15] border border-white/5 rounded-2xl shadow-xl p-6 md:p-8">
            {activeTab === 'create' && <CreatePost />}
            {activeTab === 'posts' && <AdminPosts />}
          </div>
        </main>
      </div>
    </div>
  )
}
